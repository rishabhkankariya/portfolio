/**
 * Portfolio navigation destinations and phrase triggers.
 * Resolves natural language user phrases directly to section hashes or download links.
 */
const NAVIGATION = {
  HERO: '#hero',
  ABOUT: '#about',
  CAPABILITIES: '#capabilities',
  EXPERIENCE: '#experience',
  PROJECTS: '#projects',
  CREDENTIALS: '#credentials',
  TELEMETRY: '#telemetry',
  CONTACT: '#contact',
  RESUME: '/Profile (1).pdf',
};

function isValidNavigationId(id) {
  return Object.prototype.hasOwnProperty.call(NAVIGATION, id);
}

const NAV_TRIGGERS = [
  {
    re: /\b(open|go to|take me to|scroll to|show( me)?|jump to|view|explore)\s+(the\s+)?(hero|home|top|introduction)\b|^home$/i,
    id: 'HERO',
  },
  {
    re: /\b(open|go to|take me to|scroll to|show( me)?|jump to|view|explore)\s+(the\s+)?(about|bio|background|story)\b|^about(\s+me)?$/i,
    id: 'ABOUT',
  },
  {
    re: /\b(open|go to|take me to|scroll to|show( me)?|jump to|view|explore)\s+(the\s+)?(skills?|capabilities|tech stack|practice)\b|^skills$/i,
    id: 'CAPABILITIES',
  },
  {
    re: /\b(open|go to|take me to|scroll to|show( me)?|jump to|view|explore)\s+(the\s+)?(work\s+)?(experience|work|career|roadmap|tenure|internships?)\b|^experience$/i,
    id: 'EXPERIENCE',
  },
  {
    re: /\b(open|go to|take me to|scroll to|show( me( the)?)?|jump to|view|explore)\s+(the\s+)?(projects?|works?|showcase|portfolio)(\s+(section|showcase))?\b|^(projects?|showcase)(\s+(section|showcase))?$/i,
    id: 'PROJECTS',
  },
  {
    re: /\b(open|go to|take me to|scroll to|show( me)?|jump to|view|explore)\s+(the\s+)?(credentials?|certifications?|degrees?|education)\b|^credentials$/i,
    id: 'CREDENTIALS',
  },
  {
    re: /\b(open|go to|take me to|scroll to|show( me)?|jump to|view|explore)\s+(the\s+)?(telemetry|metrics|live stats|system status)\b|^telemetry$/i,
    id: 'TELEMETRY',
  },
  {
    re: /\b(open|go to|take me to|scroll to|show( me)?|jump to|view|explore)\s+(the\s+)?(contact|hire|email|get in touch|collaborate)\b|^contact$/i,
    id: 'CONTACT',
  },
  {
    re: /\b(open|download|view|fetch|get)\s+(the\s+)?(resume|cv|profile pdf)\b|^(resume|cv)$/i,
    id: 'RESUME',
  },
];

function matchNavigationTrigger(text) {
  const trimmed = (text || '').trim();
  for (const { re, id } of NAV_TRIGGERS) {
    if (re.test(trimmed)) return id;
  }
  return null;
}

module.exports = { NAVIGATION, isValidNavigationId, matchNavigationTrigger };
