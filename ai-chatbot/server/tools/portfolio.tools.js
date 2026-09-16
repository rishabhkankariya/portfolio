const { portfolioAdapter } = require('../adapters/portfolio.adapter');

async function getPortfolioOverview() {
  return portfolioAdapter.getOverview();
}

async function getProjects() {
  return portfolioAdapter.getProjects();
}

async function getSkills() {
  return portfolioAdapter.getSkills();
}

async function getExperience() {
  return portfolioAdapter.getExperience();
}

async function getCredentials() {
  return portfolioAdapter.getCredentials();
}

async function getContactInfo() {
  return portfolioAdapter.getContact();
}

async function getResumeInfo() {
  return portfolioAdapter.getResume();
}

module.exports = {
  getPortfolioOverview,
  getProjects,
  getSkills,
  getExperience,
  getCredentials,
  getContactInfo,
  getResumeInfo,
};
