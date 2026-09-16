const fs = require('fs');
const path = require('path');

function readJson(filename) {
  try {
    const filePath = path.join(__dirname, '..', '..', 'knowledge', filename);
    return JSON.parse(fs.readFileSync(filePath, 'utf8'));
  } catch (err) {
    console.error(`[portfolio.adapter] Failed to load ${filename}:`, err.message);
    return null;
  }
}

class PortfolioAdapter {
  async getOverview() {
    const about = readJson('about.json') || {};
    return {
      name: about.name || 'Rishabh Kankariya',
      headline: about.headline || 'Cloud & DevOps Engineer',
      bio: about.bio,
      location: about.location,
      education: about.education,
      leadership: about.leadership,
      status: about.status || 'Available for Opportunities',
    };
  }

  async getProjects() {
    const data = readJson('projects.json') || {};
    return {
      projects: data.featuredProjects || [],
      totalCount: (data.featuredProjects || []).length,
    };
  }

  async getSkills() {
    const data = readJson('skills.json') || {};
    return {
      categories: data.categories || [],
    };
  }

  async getExperience() {
    const data = readJson('experience.json') || {};
    return {
      roles: data.roles || [],
      totalRoles: (data.roles || []).length,
    };
  }

  async getCredentials() {
    const about = readJson('about.json') || {};
    return {
      education: about.education,
      leadership: about.leadership,
      certifications: [
        { name: 'Cloud Computing Specialization', provider: 'CodeAlpha / Industry' },
        { name: 'Core & Advanced Java Certified', provider: 'Thinking Machines' },
        { name: 'B.Tech CSE Undergraduate', provider: 'MIT-ADT University' },
      ],
    };
  }

  async getContact() {
    const contact = readJson('contact.json') || {};
    return {
      name: contact.name || 'Rishabh Kankariya',
      email: contact.email || 'rishabhkankariya69@gmail.com',
      location: contact.location || 'Pune, India',
      resumeUrl: contact.resumeUrl || '/Profile (1).pdf',
      socials: contact.socials || [],
    };
  }

  async getResume() {
    return {
      title: 'Rishabh Kankariya — Resume / CV',
      url: '/Profile (1).pdf',
      downloadLabel: 'Download Profile (1).pdf',
      rolesSummary: 'Cloud Architectures, Kubernetes, CI/CD Automation, AWS/Azure, Fullstack Web Systems',
    };
  }
}

const portfolioAdapter = new PortfolioAdapter();

module.exports = {
  portfolioAdapter,
};
