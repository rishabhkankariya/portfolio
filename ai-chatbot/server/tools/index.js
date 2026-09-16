/**
 * Registry of executable tools for Rishabh Kankariya's portfolio.
 */
const portfolio = require('./portfolio.tools');

const REGISTRY = {
  getPortfolioOverview: portfolio.getPortfolioOverview,
  getProjects: portfolio.getProjects,
  getSkills: portfolio.getSkills,
  getExperience: portfolio.getExperience,
  getCredentials: portfolio.getCredentials,
  getContactInfo: portfolio.getContactInfo,
  getResumeInfo: portfolio.getResumeInfo,
};

const VALIDATORS = {};

function getTool(toolName) {
  return REGISTRY[toolName] || null;
}

function getValidator(toolName) {
  return VALIDATORS[toolName] || null;
}

module.exports = { getTool, getValidator };
