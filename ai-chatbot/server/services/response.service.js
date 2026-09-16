const { scanOutgoing } = require('./privacy.service');

const TYPES = ['TEXT', 'CARD', 'TABLE', 'COMPARISON', 'QUICK_ACTIONS', 'NAVIGATION', 'CONFIRMATION', 'ERROR'];

const TOP_QUICK_LINKS = [
  { id: 'PROJECTS', label: 'Featured Projects', icon: 'projects', path: '#projects', description: 'Explore live cloud & fullstack projects' },
  { id: 'CAPABILITIES', label: 'Cloud & Tech Stack', icon: 'skills', path: '#capabilities', description: 'AWS, Azure, Docker, Kubernetes & Languages' },
  { id: 'EXPERIENCE', label: 'Work Experience', icon: 'experience', path: '#experience', description: 'Internships, ZEN leadership & career timeline' },
  { id: 'CREDENTIALS', label: 'Certifications & Degree', icon: 'credentials', path: '#credentials', description: 'Education & technical credentials' },
  { id: 'CONTACT', label: 'Contact Rishabh', icon: 'contact', path: '#contact', description: 'Direct email & social profiles' },
  { id: 'RESUME', label: 'Download Resume', icon: 'resume', path: '/Profile (1).pdf', description: 'Download PDF profile' },
];

function getLinksForDomain(domainOrAction) {
  const str = String(domainOrAction || '').toUpperCase();
  if (str.includes('PROJECT')) {
    return [TOP_QUICK_LINKS[0], TOP_QUICK_LINKS[1], TOP_QUICK_LINKS[4]];
  }
  if (str.includes('SKILL') || str.includes('CAPABILIT')) {
    return [TOP_QUICK_LINKS[1], TOP_QUICK_LINKS[0], TOP_QUICK_LINKS[2]];
  }
  if (str.includes('EXPERIENCE')) {
    return [TOP_QUICK_LINKS[2], TOP_QUICK_LINKS[0], TOP_QUICK_LINKS[4]];
  }
  if (str.includes('CONTACT') || str.includes('RESUME')) {
    return [TOP_QUICK_LINKS[4], TOP_QUICK_LINKS[5], TOP_QUICK_LINKS[0]];
  }
  return TOP_QUICK_LINKS.slice(0, 4);
}

function build({ type, message, data, sources, verified, quickActions, navigationId, confirmationId, quickLinks }) {
  if (!TYPES.includes(type)) {
    throw new Error(`Unknown response type: ${type}`);
  }
  const payload = {
    success: type !== 'ERROR',
    type,
    message,
    data: data ?? null,
    sources: sources ?? [],
    verified: verified ?? false,
  };
  if (quickActions) payload.quickActions = quickActions;
  if (navigationId) payload.navigationId = navigationId;
  if (confirmationId) payload.confirmationId = confirmationId;
  if (quickLinks) payload.quickLinks = quickLinks;

  return scanOutgoing(payload);
}

const text = (message, opts = {}) => build({ type: 'TEXT', message, ...opts });
const error = (message, opts = {}) => build({ type: 'ERROR', message, ...opts });
const card = (message, data, sources, verified, opts = {}) => build({ type: 'CARD', message, data, sources, verified, ...opts });
const table = (message, data, sources, verified, opts = {}) => build({ type: 'TABLE', message, data, sources, verified, ...opts });
const comparison = (message, data, sources, verified, opts = {}) => build({ type: 'COMPARISON', message, data, sources, verified, ...opts });
const quickActions = (message, actions, opts = {}) => build({ type: 'QUICK_ACTIONS', message, quickActions: actions, ...opts });
const navigation = (message, navigationId, opts = {}) => build({ type: 'NAVIGATION', message, navigationId, ...opts });
const confirmation = (message, data, confirmationId, opts = {}) => build({ type: 'CONFIRMATION', message, data, confirmationId, ...opts });

module.exports = {
  build,
  text,
  error,
  card,
  table,
  comparison,
  quickActions,
  navigation,
  confirmation,
  TYPES,
  TOP_QUICK_LINKS,
  getLinksForDomain,
};
