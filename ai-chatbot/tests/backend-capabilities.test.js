const test = require('node:test');
const assert = require('node:assert/strict');

const context = require('../server/services/context.service');
const response = require('../server/services/response.service');
const chatService = require('../server/services/chat.service');
const { matchNavigationTrigger } = require('../ai/navigation-registry');

const CTX = { visitorId: 'guest_visitor' };

test('context service supports multi-turn conversational history', () => {
  const convId = 'test_conv_' + Date.now();
  context.addTurn(convId, 'user', 'What projects has Rishabh built?');
  context.addTurn(convId, 'assistant', 'Rishabh built the Smart Bus Pass System and AI Chatbot Platform.');

  const history = context.getHistory(convId);
  assert.equal(history.length, 2);
  assert.equal(history[0].role, 'user');
  assert.equal(history[0].content, 'What projects has Rishabh built?');
  assert.equal(history[1].role, 'assistant');
  assert.equal(history[1].content, 'Rishabh built the Smart Bus Pass System and AI Chatbot Platform.');
});

test('response service attaches quick links to domain responses', () => {
  const links = response.getLinksForDomain('PROJECT');
  assert.ok(Array.isArray(links));
  assert.ok(links.some((l) => l.id === 'PROJECTS'));

  const payload = response.build({
    type: 'CARD',
    message: 'Projects retrieved',
    data: { projects: [] },
    quickLinks: links,
  });

  assert.equal(payload.success, true);
  assert.ok(Array.isArray(payload.quickLinks));
  assert.equal(payload.quickLinks[0].id, 'PROJECTS');
  assert.equal(payload.quickLinks[0].path, '#projects');
});

test('navigation triggers recognize common portfolio section redirection phrases', () => {
  assert.equal(matchNavigationTrigger('projects showcase'), 'PROJECTS');
  assert.equal(matchNavigationTrigger('show skills'), 'CAPABILITIES');
  assert.equal(matchNavigationTrigger('view work experience'), 'EXPERIENCE');
  assert.equal(matchNavigationTrigger('jump to contact'), 'CONTACT');
  assert.equal(matchNavigationTrigger('download resume'), 'RESUME');
  assert.equal(matchNavigationTrigger('about me'), 'ABOUT');
});

test('Featured projects query returns verified projects card and quick links', async () => {
  const result = await chatService.handleMessage({ text: 'featured projects', ctx: CTX });
  assert.equal(result.success, true);
  assert.ok(result.data);
  assert.ok(result.quickLinks && result.quickLinks.length > 0);
  assert.ok(result.quickLinks.some((l) => l.id === 'PROJECTS'));
});
