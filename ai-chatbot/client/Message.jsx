import React from 'react';

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

function getContextualLink(msg) {
  const text = (msg.message || '').toLowerCase();
  const source = (msg.sources || []).join(' ').toLowerCase();

  if (text.includes('project') || source.includes('project') || msg.data?.projects) {
    return { label: 'Explore Projects Showcase', path: '#projects' };
  }
  if (text.includes('skill') || text.includes('cloud') || text.includes('devops') || source.includes('skill') || msg.data?.categories) {
    return { label: 'View Cloud & Tech Stack', path: '#capabilities' };
  }
  if (text.includes('experience') || text.includes('intern') || text.includes('career') || source.includes('experience') || msg.data?.roles) {
    return { label: 'View Career Roadmap', path: '#experience' };
  }
  if (text.includes('contact') || text.includes('hire') || text.includes('email') || source.includes('contact') || msg.data?.email) {
    return { label: 'Contact / Hire Rishabh', path: '#contact' };
  }
  if (text.includes('resume') || text.includes('cv') || msg.data?.downloadLabel) {
    return { label: 'Download Resume PDF', path: '/Profile (1).pdf' };
  }
  return null;
}

export default function Message({ msg, onConfirm, onNavigate }) {
  const { role, type, message, data, sources, verified } = msg;
  const isUser = role === 'user';
  const contextLink = !isUser ? getContextualLink(msg) : null;

  return (
    <div className={`md-chat-msg ${isUser ? 'md-chat-msg--user' : 'md-chat-msg--bot'}`}>
      <div className="md-chat-bubble">
        <p className="md-chat-text">{message}</p>

        {data?.projects && renderProjects(data.projects, onNavigate)}
        {data?.categories && renderSkills(data.categories)}
        {data?.roles && renderRoles(data.roles)}
        {type === 'CARD' && !data?.projects && !data?.roles && !data?.categories && data && renderCard(data)}

        {/* Navigation Action Button */}
        {type === 'NAVIGATION' && msg.navigationId && NAVIGATION[msg.navigationId] && (
          <div className="md-msg-actions">
            <button
              className="md-btn md-btn-tonal"
              onClick={() => onNavigate(NAVIGATION[msg.navigationId])}
            >
              <span>Jump to {msg.navigationId.toLowerCase()} on page</span>
              <span className="md-btn-arrow">&rarr;</span>
            </button>
          </div>
        )}

        {/* Contextual Link Button */}
        {contextLink && type !== 'NAVIGATION' && onNavigate && (
          <div className="md-msg-actions">
            <button
              className="md-btn md-btn-tonal"
              onClick={() => onNavigate(contextLink.path)}
              title={`Jump to ${contextLink.label}`}
            >
              <span>{contextLink.label}</span>
              <span className="md-btn-arrow">&rarr;</span>
            </button>
          </div>
        )}

        {!isUser && (sources?.length > 0 || verified !== undefined) && (
          <div className="md-msg-meta">
            <span className={`md-meta-badge ${verified ? 'verified' : 'guidance'}`}>
              <span className="md-badge-dot"></span>
              {verified ? 'Verified Portfolio Record' : 'Gemini AI Assistant'}
            </span>
            {sources?.length > 0 && (
              <span className="md-meta-sources">Source: {sources.join(', ')}</span>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function renderProjects(projects, onNavigate) {
  return (
    <div className="md-projects-grid">
      {projects.map((proj) => (
        <div key={proj.id} className="md-project-card">
          <div className="md-project-header">
            <strong>{proj.name}</strong>
            <span className="md-project-tag">{proj.category}</span>
          </div>
          <p className="md-project-desc">{proj.description}</p>
          <div className="md-project-techs">
            {proj.technologies?.slice(0, 5).map((t) => (
              <span key={t} className="md-tech-chip">{t}</span>
            ))}
          </div>
          <div className="md-project-links">
            {proj.liveUrl && (
              <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="md-link-btn">
                Live Demo &rarr;
              </a>
            )}
            {proj.githubUrl && (
              <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="md-link-btn md-link-github">
                GitHub
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderSkills(categories) {
  return (
    <div className="md-skills-container">
      {categories.map((cat) => (
        <div key={cat.name} className="md-skill-cat">
          <span className="md-cat-title">{cat.name}</span>
          <div className="md-skill-chips">
            {cat.skills?.map((s) => (
              <span key={s} className="md-skill-pill">{s}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

function renderRoles(roles) {
  return (
    <div className="md-roles-list">
      {roles.map((r) => (
        <div key={r.company} className="md-role-card">
          <div className="md-role-top">
            <strong>{r.role}</strong>
            <span className="md-role-period">{r.period}</span>
          </div>
          <span className="md-role-company">{r.company}</span>
          <p className="md-role-desc">{r.description}</p>
        </div>
      ))}
    </div>
  );
}

function renderCard(data) {
  return (
    <div className="md-card-embed">
      <dl className="md-card-dl">
        {Object.entries(data).map(([key, value]) => (
          <div key={key} className="md-card-row">
            <dt>{key.replace(/([A-Z])/g, ' $1').replace(/^./, (str) => str.toUpperCase())}</dt>
            <dd>{formatValue(value)}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function formatValue(value) {
  if (value === null || value === undefined) return '—';
  if (typeof value === 'object') return JSON.stringify(value);
  return String(value);
}
