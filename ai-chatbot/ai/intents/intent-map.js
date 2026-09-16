/**
 * Single source of truth for portfolio capabilities.
 * Maps domains and actions to tools and triggers for Rishabh Kankariya's portfolio.
 */

const ACTIONS = {
  'PORTFOLIO.get_overview': {
    domain: 'PORTFOLIO',
    action: 'get_overview',
    toolName: 'getPortfolioOverview',
    mutating: false,
    requiresEntities: [],
    knowledgeFile: 'about.json',
    icon: 'user',
    triggers: [
      /\bwho is rishabh\b/i,
      /\btell me about (rishabh|yourself|you)\b/i,
      /\bwho are you\b/i,
      /\babout rishabh\b/i,
      /\b(overview|bio|background|intro|introduction)\b/i,
      /\bwhat do you do\b/i,
    ],
    label: 'About Rishabh',
  },

  'PORTFOLIO.get_projects': {
    domain: 'PORTFOLIO',
    action: 'get_projects',
    toolName: 'getProjects',
    mutating: false,
    requiresEntities: [],
    knowledgeFile: 'projects.json',
    icon: 'projects',
    triggers: [
      /\b(projects?|works?|portfolio items?)\b/i,
      /\bwhat (have you|has rishabh) built\b/i,
      /\bshow (me )?(your |rishabh'?s )?projects\b/i,
      /\b(smart bus pass|bus pass system)\b/i,
      /\b(ai chatbot|chatbot platform)\b/i,
      /\b(student portal|ekitabhghar)\b/i,
      /\bfeatured projects\b/i,
    ],
    label: 'Featured Projects',
  },

  'PORTFOLIO.get_skills': {
    domain: 'PORTFOLIO',
    action: 'get_skills',
    toolName: 'getSkills',
    mutating: false,
    requiresEntities: [],
    knowledgeFile: 'skills.json',
    icon: 'skills',
    triggers: [
      /\b(skills?|tech stack|technologies|tools?|expertise)\b/i,
      /\bwhat (skills|tools|languages|technologies) do you know\b/i,
      /\bcloud (skills|stack|tools)\b/i,
      /\bdevops (skills|stack|tools)\b/i,
      /\b(aws|azure|docker|kubernetes|linux|nginx|terraform|ci\/cd)\b/i,
    ],
    label: 'Technical Skills',
  },

  'PORTFOLIO.get_experience': {
    domain: 'PORTFOLIO',
    action: 'get_experience',
    toolName: 'getExperience',
    mutating: false,
    requiresEntities: [],
    knowledgeFile: 'experience.json',
    icon: 'experience',
    triggers: [
      /\b(experience|work history|career|internships?|jobs?)\b/i,
      /\bwhere (did|has) (you|rishabh) worked\b/i,
      /\b(codealpha|zen|techfest|thinking machines|allsoft|manal)\b/i,
      /\bwork experience\b/i,
      /\bcareer roadmap\b/i,
    ],
    label: 'Work Experience',
  },

  'PORTFOLIO.get_credentials': {
    domain: 'PORTFOLIO',
    action: 'get_credentials',
    toolName: 'getCredentials',
    mutating: false,
    requiresEntities: [],
    knowledgeFile: 'about.json',
    icon: 'credentials',
    triggers: [
      /\b(education|college|university|degree|b\.?tech|mit-?adt)\b/i,
      /\b(certifications?|certificates?|credentials?|academics?)\b/i,
      /\bwhere (do|did) you study\b/i,
    ],
    label: 'Education & Credentials',
  },

  'PORTFOLIO.get_contact': {
    domain: 'PORTFOLIO',
    action: 'get_contact',
    toolName: 'getContactInfo',
    mutating: false,
    requiresEntities: [],
    knowledgeFile: 'contact.json',
    icon: 'contact',
    triggers: [
      /\b(contact|hire|email|reach out|get in touch|collaborate)\b/i,
      /\bhow to (contact|reach|hire) (you|rishabh)\b/i,
      /\b(linkedin|github|twitter|socials?)\b/i,
      /\bemail address\b/i,
    ],
    label: 'Contact & Hire',
  },

  'PORTFOLIO.get_resume': {
    domain: 'PORTFOLIO',
    action: 'get_resume',
    toolName: 'getResumeInfo',
    mutating: false,
    requiresEntities: [],
    knowledgeFile: 'contact.json',
    icon: 'resume',
    triggers: [
      /\b(resume|cv|curriculum vitae|download resume)\b/i,
      /\bshow (me )?(your |rishabh'?s )?(resume|cv)\b/i,
      /\bpdf (resume|profile)\b/i,
    ],
    label: 'Download Resume',
  },
};

const QUICK_ACTION_MENUS = {
  ROOT: [
    { id: 'btn_projects', actionId: 'PORTFOLIO.get_projects', label: 'Explore Projects', icon: 'projects', shortcut: 'A' },
    { id: 'btn_skills', actionId: 'PORTFOLIO.get_skills', label: 'Cloud & DevOps Skills', icon: 'skills', shortcut: 'B' },
    { id: 'btn_experience', actionId: 'PORTFOLIO.get_experience', label: 'Work Experience', icon: 'experience', shortcut: 'C' },
    { id: 'btn_contact', actionId: 'PORTFOLIO.get_contact', label: 'Contact / Hire Rishabh', icon: 'contact', shortcut: 'D' },
    { id: 'btn_resume', actionId: 'PORTFOLIO.get_resume', label: 'Download Resume', icon: 'resume', shortcut: 'E' },
    { id: 'btn_overview', actionId: 'PORTFOLIO.get_overview', label: 'About Rishabh', icon: 'user', shortcut: 'F' },
  ],
  PROJECTS: [
    { id: 'btn_skills', actionId: 'PORTFOLIO.get_skills', label: 'View Cloud Stack', icon: 'skills', shortcut: 'A' },
    { id: 'btn_experience', actionId: 'PORTFOLIO.get_experience', label: 'Work Experience', icon: 'experience', shortcut: 'B' },
    { id: 'btn_contact', actionId: 'PORTFOLIO.get_contact', label: 'Hire Rishabh', icon: 'contact', shortcut: 'C' },
    { id: 'btn_resume', actionId: 'PORTFOLIO.get_resume', label: 'Download Resume', icon: 'resume', shortcut: 'D' },
  ],
  SKILLS: [
    { id: 'btn_projects', actionId: 'PORTFOLIO.get_projects', label: 'See Live Projects', icon: 'projects', shortcut: 'A' },
    { id: 'btn_experience', actionId: 'PORTFOLIO.get_experience', label: 'Work Experience', icon: 'experience', shortcut: 'B' },
    { id: 'btn_contact', actionId: 'PORTFOLIO.get_contact', label: 'Contact Rishabh', icon: 'contact', shortcut: 'C' },
  ],
  EXPERIENCE: [
    { id: 'btn_projects', actionId: 'PORTFOLIO.get_projects', label: 'View Projects', icon: 'projects', shortcut: 'A' },
    { id: 'btn_skills', actionId: 'PORTFOLIO.get_skills', label: 'Tech Stack', icon: 'skills', shortcut: 'B' },
    { id: 'btn_contact', actionId: 'PORTFOLIO.get_contact', label: 'Let\'s Connect', icon: 'contact', shortcut: 'C' },
  ],
  CONTACT: [
    { id: 'btn_resume', actionId: 'PORTFOLIO.get_resume', label: 'Download Resume PDF', icon: 'resume', shortcut: 'A' },
    { id: 'btn_projects', actionId: 'PORTFOLIO.get_projects', label: 'Explore Projects', icon: 'projects', shortcut: 'B' },
    { id: 'btn_overview', actionId: 'PORTFOLIO.get_overview', label: 'About Rishabh', icon: 'user', shortcut: 'C' },
  ],
};

const NEXT_MENU_BY_ACTION = {
  'PORTFOLIO.get_projects': 'PROJECTS',
  'PORTFOLIO.get_skills': 'SKILLS',
  'PORTFOLIO.get_experience': 'EXPERIENCE',
  'PORTFOLIO.get_credentials': 'ROOT',
  'PORTFOLIO.get_contact': 'CONTACT',
  'PORTFOLIO.get_resume': 'CONTACT',
  'PORTFOLIO.get_overview': 'ROOT',
};

function getAction(actionId) {
  return ACTIONS[actionId] || null;
}

function isValidAction(actionId) {
  return Object.prototype.hasOwnProperty.call(ACTIONS, actionId);
}

function listActionsForPrompt() {
  return Object.keys(ACTIONS);
}

function matchTrigger(text) {
  const trimmed = (text || '').trim();
  for (const [actionId, def] of Object.entries(ACTIONS)) {
    for (const re of def.triggers) {
      if (re.test(trimmed)) {
        return { actionId, confidence: 1.0, action: def };
      }
    }
  }
  return null;
}

module.exports = {
  ACTIONS,
  QUICK_ACTION_MENUS,
  NEXT_MENU_BY_ACTION,
  getAction,
  isValidAction,
  listActionsForPrompt,
  matchTrigger,
};
