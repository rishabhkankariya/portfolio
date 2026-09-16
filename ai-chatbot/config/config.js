require('dotenv').config();

function bool(val, fallback) {
  if (val === undefined) return fallback;
  return String(val).toLowerCase() === 'true';
}

function num(val, fallback) {
  const n = Number(val);
  return Number.isFinite(n) ? n : fallback;
}

const config = {
  port: num(process.env.PORT, 4500),
  allowedOrigin: process.env.ALLOWED_ORIGIN || 'http://localhost:3000',

  aiEnabled: bool(process.env.AI_ENABLED, true),
  aiProvider: (process.env.AI_PROVIDER || 'gemini').toLowerCase(),

  gemini: {
    apiKey: process.env.GEMINI_API_KEY || '',
    model: process.env.GEMINI_MODEL || 'gemini-3.7-flash',
    timeoutMs: num(process.env.GEMINI_TIMEOUT_MS, 8000),
  },

  ollama: {
    baseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
    model: process.env.OLLAMA_MODEL || 'llama3',
    timeoutMs: num(process.env.OLLAMA_TIMEOUT_MS, 15000),
  },

  contextTtlMs: num(process.env.CONTEXT_TTL_MS, 30 * 60 * 1000),
  confirmationTtlMs: num(process.env.CONFIRMATION_TTL_MS, 5 * 60 * 1000),
};

module.exports = config;
