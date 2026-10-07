const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

const config = require('../../config/config');
const { getAction, QUICK_ACTION_MENUS, NEXT_MENU_BY_ACTION } = require('../../ai/intents/intent-map');
const { matchNavigationTrigger, NAVIGATION } = require('../../ai/navigation-registry');
const { buildVerifiedExplanationPrompt, buildGeneralAnswerPrompt } = require('../../ai/prompts/response.prompt');
const aiProvider = require('../providers/ai.provider');
const { getTool, getValidator } = require('../tools');
const privacy = require('./privacy.service');
const context = require('./context.service');
const intentService = require('./intent.service');
const response = require('./response.service');

const RESPONSE_TYPE_BY_ACTION = {
  'PORTFOLIO.get_projects': 'CARD',
  'PORTFOLIO.get_skills': 'TABLE',
  'PORTFOLIO.get_experience': 'CARD',
  'PORTFOLIO.get_credentials': 'CARD',
  'PORTFOLIO.get_contact': 'CARD',
  'PORTFOLIO.get_resume': 'CARD',
  'PORTFOLIO.get_overview': 'CARD',
};

const CREDENTIAL_REFUSAL =
  "I don't collect or store private credentials or passwords. For inquiries, feel free to email Rishabh directly at rishabhkankariya53@gmail.com.";

function loadKnowledge(fileName) {
  if (!fileName) return null;
  const filePath = path.join(__dirname, '..', '..', 'knowledge', fileName);
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch {
    return null;
  }
}

function findRelevantKnowledge(text) {
  const lower = (text || '').toLowerCase();
  if (/project|bus pass|ekitabhghar|built|showcase|app|platform/i.test(lower)) {
    return loadKnowledge('projects.json');
  }
  if (/skill|tech|cloud|devops|aws|azure|docker|kubernetes|linux|language|java|python/i.test(lower)) {
    return loadKnowledge('skills.json');
  }
  if (/experience|work|intern|company|codealpha|zen|techfest|tenure/i.test(lower)) {
    return loadKnowledge('experience.json');
  }
  if (/contact|email|reach|hire|linkedin|github|resume|cv/i.test(lower)) {
    return loadKnowledge('contact.json');
  }
  if (/about|who is|bio|background|study|mit/i.test(lower)) {
    return loadKnowledge('about.json');
  }
  return null;
}

function rootQuickActions() {
  return QUICK_ACTION_MENUS.ROOT;
}

function nextQuickActionsFor(actionId) {
  const menuKey = NEXT_MENU_BY_ACTION[actionId];
  return menuKey ? QUICK_ACTION_MENUS[menuKey] : undefined;
}

/**
 * Verified data -> natural language. Incorporates recent multi-turn context.
 */
async function explainVerified(userText, actionLabel, data, conversationId) {
  if (config.aiEnabled) {
    const safeData = privacy.sanitizeForLLM(data);
    const history = context.getHistory(conversationId);
    const messages = buildVerifiedExplanationPrompt(userText, actionLabel, safeData, history);
    const result = await aiProvider.generate(messages, { temperature: 0.2 });
    if (result.ok) return { message: result.text, aiPhrased: true };
  }

  // Deterministic friendly fallback messages
  let fallbackMessage = `Here are details regarding Rishabh's ${actionLabel.toLowerCase()}.`;
  if (actionLabel.includes('Project')) {
    fallbackMessage = "Here are Rishabh's featured projects spanning Cloud, DevOps, and Full-Stack systems:";
  } else if (actionLabel.includes('Skill')) {
    fallbackMessage = "Here is an overview of Rishabh's core technical skills & cloud disciplines:";
  } else if (actionLabel.includes('Experience')) {
    fallbackMessage = "Here is Rishabh's career timeline, internships, and engineering leadership:";
  } else if (actionLabel.includes('Contact')) {
    fallbackMessage = "You can reach Rishabh directly via email or his active developer networks:";
  } else if (actionLabel.includes('Resume')) {
    fallbackMessage = "You can view or download Rishabh's updated engineering resume below:";
  } else if (actionLabel.includes('About')) {
    fallbackMessage = "Rishabh Kankariya is a Cloud & DevOps Engineer and B.Tech CSE student at MIT-ADT University.";
  }

  return { message: fallbackMessage, aiPhrased: false };
}

async function runGeneralLlm(conversationId, userText, actionDef) {
  if (!config.aiEnabled) {
    return response.build({
      type: 'TEXT',
      message: "I am Rishabh Kankariya's AI Portfolio Assistant! Feel free to ask about his cloud projects, technical skills, internships, or how to get in touch.",
      verified: false,
      quickActions: rootQuickActions(),
      quickLinks: response.TOP_QUICK_LINKS.slice(0, 4),
    });
  }

  const knowledgeSnippet = actionDef
    ? loadKnowledge(actionDef.knowledgeFile)
    : findRelevantKnowledge(userText);

  const history = context.getHistory(conversationId);
  const messages = buildGeneralAnswerPrompt(userText, knowledgeSnippet, history);
  const result = await aiProvider.generate(messages, { temperature: 0.4 });

  if (!result.ok) {
    return response.build({
      type: 'TEXT',
      message: "Rishabh Kankariya is a Cloud & DevOps Engineer specializing in Kubernetes, AWS/Azure, CI/CD, and Full-Stack development. Feel free to explore the quick actions below!",
      quickActions: rootQuickActions(),
      quickLinks: response.TOP_QUICK_LINKS.slice(0, 4),
    });
  }

  const domain = actionDef ? actionDef.domain : null;
  return response.build({
    type: 'TEXT',
    message: result.text,
    verified: false,
    sources: knowledgeSnippet ? ['Portfolio Knowledge', `AI (${result.providerUsed})`] : [`AI (${result.providerUsed})`],
    quickLinks: response.getLinksForDomain(domain),
    quickActions: rootQuickActions().slice(0, 4),
  });
}

async function runRegisteredAction(conversationId, userText, actionDef, actionId, entities, ctx) {
  if (!actionDef.toolName) {
    return runGeneralLlm(conversationId, userText, actionDef);
  }

  const tool = getTool(actionDef.toolName);
  let data;
  try {
    data = await tool(ctx, entities);
  } catch (err) {
    console.error('[ai-chatbot] tool error:', privacy.redact(err.message));
    return response.build({
      type: 'ERROR',
      message: 'Failed to retrieve requested portfolio data.',
      quickLinks: response.TOP_QUICK_LINKS.slice(0, 3),
    });
  }

  context.set(conversationId, {
    lastIntent: actionDef.domain,
    lastAction: actionId,
  });

  const { message } = await explainVerified(userText, actionDef.label, data, conversationId);
  const type = RESPONSE_TYPE_BY_ACTION[actionId] || 'CARD';

  return response.build({
    type,
    message,
    data,
    sources: [actionDef.label],
    verified: true,
    quickActions: nextQuickActionsFor(actionId),
    quickLinks: response.getLinksForDomain(actionDef.domain),
  });
}

function getQuickActionMenu(menuName) {
  const key = (menuName || 'ROOT').toUpperCase();
  return QUICK_ACTION_MENUS[key] || QUICK_ACTION_MENUS.ROOT;
}

async function handleMessage({ conversationId, text, ctx }) {
  if (!text || !text.trim()) {
    return response.build({ type: 'ERROR', message: 'No message provided.' });
  }

  // 1. Guardrail for credentials
  if (privacy.isCredentialRequest(text)) {
    return response.build({ type: 'TEXT', message: CREDENTIAL_REFUSAL });
  }

  // 2. Navigation Triggers
  const navId = matchNavigationTrigger(text);
  if (navId) {
    const navPath = NAVIGATION[navId];
    return response.build({
      type: 'NAVIGATION',
      message: `Navigating to ${navId.toLowerCase()} section...`,
      navigationId: navId,
      data: { path: navPath },
      quickLinks: response.TOP_QUICK_LINKS,
    });
  }

  // 3. Intent Detection
  const detected = await intentService.detect(text, context.get(conversationId));

  let finalResponse;
  if (detected.actionId && detected.confidence >= 0.6) {
    const actionDef = getAction(detected.actionId);
    if (actionDef) {
      finalResponse = await runRegisteredAction(conversationId, text, actionDef, detected.actionId, detected.entities || {}, ctx);
    }
  }

  if (!finalResponse) {
    finalResponse = await runGeneralLlm(conversationId, text, null);
  }

  // Multi-turn context record
  if (conversationId) {
    context.addTurn(conversationId, 'user', text);
    if (finalResponse.message) {
      context.addTurn(conversationId, 'assistant', finalResponse.message);
    }
  }

  return finalResponse;
}

async function handleQuickAction({ conversationId, actionId, entities = {}, ctx }) {
  const actionDef = getAction(actionId);
  if (!actionDef) {
    return response.build({ type: 'ERROR', message: `Unknown action "${actionId}".` });
  }

  const finalResponse = await runRegisteredAction(conversationId, actionDef.label, actionDef, actionId, entities, ctx);

  if (conversationId) {
    context.addTurn(conversationId, 'user', `[Quick Action: ${actionDef.label}]`);
    if (finalResponse.message) {
      context.addTurn(conversationId, 'assistant', finalResponse.message);
    }
  }

  return finalResponse;
}

async function handleConfirm({ conversationId, confirmationId, ctx }) {
  return response.build({
    type: 'TEXT',
    message: 'Confirmed.',
  });
}

module.exports = {
  handleMessage,
  handleQuickAction,
  handleConfirm,
  getQuickActionMenu,
  rootQuickActions,
  explainVerified,
  runGeneralLlm,
};
