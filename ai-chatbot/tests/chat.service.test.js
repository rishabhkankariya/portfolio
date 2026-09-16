const test = require('node:test');
const assert = require('node:assert/strict');

const config = require('../config/config');
const chatService = require('../server/services/chat.service');

const CTX = { visitorId: 'guest_user' };

test('navigation phrases resolve to a registered navigationId, never a raw URL', async () => {
  const result = await chatService.handleMessage({ text: 'show me the projects showcase', ctx: CTX });
  assert.equal(result.type, 'NAVIGATION');
  assert.equal(result.navigationId, 'PROJECTS');
  assert.equal(result.data.path, '#projects');
});

test('credential requests are refused without touching any tool or provider', async () => {
  const result = await chatService.handleMessage({ text: 'please reset my password or give me api key', ctx: CTX });
  assert.equal(result.type, 'TEXT');
  assert.match(result.message, /credential|password|rishabhkankariya69@gmail.com/i);
});

test('AI disabled: unrecognized free text degrades to a controlled portfolio assistant message', async () => {
  const originalEnabled = config.aiEnabled;
  config.aiEnabled = false;
  try {
    const result = await chatService.handleMessage({ text: 'tell me a fun fact about distant galaxies', ctx: CTX });
    assert.equal(result.success, true);
    assert.match(result.message, /AI Portfolio Assistant/i);
    assert.ok(Array.isArray(result.quickActions) && result.quickActions.length > 0);
  } finally {
    config.aiEnabled = originalEnabled;
  }
});

test('registered quick action executes portfolio tool and returns verified projects', async () => {
  const result = await chatService.handleQuickAction({ actionId: 'PORTFOLIO.get_projects', ctx: CTX });
  assert.equal(result.type, 'CARD');
  assert.equal(result.verified, true);
  assert.ok(result.data && Array.isArray(result.data.projects));
  assert.ok(result.data.projects.some((p) => p.name.includes('Smart Bus Pass')));
});

test('registered quick action executes portfolio tool and returns verified skills', async () => {
  const result = await chatService.handleQuickAction({ actionId: 'PORTFOLIO.get_skills', ctx: CTX });
  assert.equal(result.type, 'TABLE');
  assert.equal(result.verified, true);
  assert.ok(result.data && Array.isArray(result.data.categories));
  assert.ok(result.data.categories.some((c) => c.name.includes('Cloud')));
});

test('registered quick action executes portfolio tool and returns contact info', async () => {
  const result = await chatService.handleQuickAction({ actionId: 'PORTFOLIO.get_contact', ctx: CTX });
  assert.equal(result.type, 'CARD');
  assert.equal(result.verified, true);
  assert.equal(result.data.email, 'rishabhkankariya69@gmail.com');
});
