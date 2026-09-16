const { listActionsForPrompt } = require('../intents/intent-map');

/**
 * Builds the intent classification prompt for portfolio queries.
 */
function buildIntentClassificationPrompt(userText, contextSummary) {
  const actionIds = listActionsForPrompt();
  return [
    {
      role: 'system',
      content:
        'You are an intent classifier for Rishabh Kankariya\'s developer portfolio AI assistant. Given a user message, ' +
        'respond with ONLY a JSON object (no prose, no markdown fences) of the shape ' +
        '{"actionId": string|null, "confidence": number (0-1), "entities": object}. ' +
        `"actionId" MUST be exactly one of this list, or null if none fit: ${actionIds.join(', ')}. ` +
        'Extract entities like projectName, skillCategory, companyName only if clearly present. ' +
        'If the message is a general greeting, portfolio question, or unrelated, return actionId null with low confidence.',
    },
    {
      role: 'user',
      content: `Recent context: ${contextSummary || 'none'}\nUser message: "${userText}"`,
    },
  ];
}

module.exports = { buildIntentClassificationPrompt };
