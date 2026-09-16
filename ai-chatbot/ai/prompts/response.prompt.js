const { SYSTEM_PROMPT } = require('./system.prompt');

function formatHistory(history) {
  if (!Array.isArray(history) || history.length === 0) return [];
  return history.map((h) => ({
    role: h.role === 'assistant' ? 'assistant' : 'user',
    content: h.content,
  }));
}

/**
 * For a resolved portfolio action: LLM phrases verified facts into a natural, enthusiastic response.
 */
function buildVerifiedExplanationPrompt(userText, actionLabel, verifiedData, history = []) {
  const historyTurns = formatHistory(history.slice(-4));
  return [
    { role: 'system', content: SYSTEM_PROMPT },
    ...historyTurns,
    {
      role: 'user',
      content:
        `User question: "${userText}"\n` +
        `Action: "${actionLabel}".\n` +
        `Verified portfolio data (use these facts): ${JSON.stringify(verifiedData)}\n` +
        'Write a clear, engaging, and professional response highlighting Rishabh\'s achievements and technical depth. Keep it crisp and developer-friendly.',
    },
  ];
}

/**
 * For general queries / questions about Rishabh:
 */
function buildGeneralAnswerPrompt(userText, knowledgeSnippet, history = []) {
  const historyTurns = formatHistory(history.slice(-4));
  return [
    { role: 'system', content: SYSTEM_PROMPT },
    ...historyTurns,
    {
      role: 'user',
      content: knowledgeSnippet
        ? `Reference knowledge: ${JSON.stringify(knowledgeSnippet)}\nUser question: "${userText}"\nAnswer helpfully and concisely using the reference knowledge regarding Rishabh Kankariya.`
        : `User question: "${userText}"\nAnswer helpfully as Rishabh Kankariya's portfolio AI assistant in a friendly, knowledgeable manner.`,
    },
  ];
}

module.exports = { buildVerifiedExplanationPrompt, buildGeneralAnswerPrompt };
