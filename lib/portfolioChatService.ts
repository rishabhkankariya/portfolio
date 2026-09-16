/**
 * Client-safe Portfolio Chatbot Engine for Rishabh Kankariya's Portfolio.
 * Designed to work seamlessly with Next.js static exports (Cloudflare Pages),
 * dev mode, and standalone services with zero emojis and full icon compatibility.
 */

export interface ChatMessage {
  id: string;
  role: "user" | "bot";
  type?: "TEXT" | "CARD" | "TABLE" | "NAVIGATION" | "ERROR";
  message: string;
  data?: any;
  sources?: string[];
  verified?: boolean;
  navigationId?: string;
  timestamp: string;
}

export interface QuickActionItem {
  id: string;
  actionId: string;
  label: string;
  icon: "projects" | "skills" | "experience" | "contact" | "resume" | "user" | "credentials";
}

export const PORTFOLIO_DATA = {
  about: {
    name: "Rishabh Kankariya",
    headline: "Cloud & DevOps Engineer",
    bio: "B.Tech Computer Science and Engineering student at MIT-ADT University and Technical Secretary at the Zone of Engineering Innovators (ZEN). Specializing in cloud-native paradigms, container orchestration, CI/CD automation, and building self-healing, scalable infrastructure.",
    location: "Pune, India",
    education: {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "MIT-ADT University, Pune",
      focus: "Cloud Computing, Distributed Systems, Software Engineering, DevOps",
    },
    leadership: [
      {
        role: "Technical Secretary",
        organization: "Zone Of Engineering Innovators (ZEN)",
        period: "Feb 2026 – Present",
        summary: "Spearheaded technical workflows, campus-wide engineering initiatives, and student infrastructure development.",
      },
      {
        role: "Campus Ambassador",
        organization: "Techfest, IIT Bombay",
        period: "Jun 2026 – Present",
        summary: "Representing Asia's largest science and technology festival, driving technical engagements and student outreach.",
      },
    ],
  },
  projects: [
    {
      id: "smart-bus-pass",
      name: "Smart Bus Pass System",
      category: "Cloud & DevOps",
      description: "Complete cloud-native digital pass platform deployed on Microsoft Azure, Linux, Nginx, and SSL with secure session authentication, Razorpay gateway integration, automated PDF receipt generation, and admin metric dashboards.",
      technologies: ["React", "JavaScript", "MySQL", "AWS", "Azure", "Docker", "Linux", "Nginx", "Razorpay"],
      liveUrl: "https://smart-bus-pass-system.pages.dev/",
      githubUrl: "https://github.com/rishabhkankariya/bus-pass-system",
    },
    {
      id: "ai-chatbot-platform",
      name: "AI Chatbot Platform",
      category: "AI & Automation",
      description: "Login-enabled AI chatbot platform with secure cloud hosting, knowledge base embeddings, user session persistence, and database integration.",
      technologies: ["React", "JavaScript", "Python", "AWS", "Docker", "Node.js", "Gemini AI"],
      liveUrl: "https://ai-chatbot-system-by-rishabhkankariya.pages.dev/",
      githubUrl: "https://github.com/rishabhkankariya",
    },
    {
      id: "student-institute-portal",
      name: "Student-Institute Portal (eKitabhGhar)",
      category: "Full-Stack",
      description: "Full-stack student-institute portal featuring student registration management, document verification, admin approval workflows, and interactive administrative dashboards.",
      technologies: ["PHP", "MySQL", "JavaScript", "React", "Bootstrap"],
      liveUrl: "https://ekitabhghar-project.onrender.com/",
      githubUrl: "https://github.com/rishabhkankariya",
    },
    {
      id: "personal-portfolio",
      name: "Personal Portfolio Website",
      category: "Front-End & UI/UX",
      description: "Designed and deployed a responsive personal portfolio with Tailwind CSS, Framer Motion micro-interactions, dark mode toggle, and zero-latency custom cursor tracking.",
      technologies: ["Next.js", "TypeScript", "React", "Tailwind CSS", "Framer Motion"],
      liveUrl: "https://rishabhkankariya.pages.dev/",
      githubUrl: "https://github.com/rishabhkankariya",
    },
  ],
  skills: [
    {
      name: "Cloud & Infrastructure",
      skills: ["AWS (EC2, S3, IAM, VPC)", "Microsoft Azure", "Docker", "Kubernetes", "Linux (Ubuntu/CentOS)", "Nginx Reverse Proxy", "Cloudflare", "SSL/TLS", "Terraform Basics"],
    },
    {
      name: "DevOps & CI/CD",
      skills: ["GitHub Actions", "Docker Compose", "Automated Testing", "Zero Downtime Deployments", "Containerization", "Monitoring & Logging"],
    },
    {
      name: "Programming Languages",
      skills: ["Java (Core & Advanced)", "Python", "TypeScript", "JavaScript (ES6+)", "C", "C++", "PHP", "SQL", "Bash/Shell"],
    },
    {
      name: "Frameworks & Databases",
      skills: ["Next.js", "React.js", "Node.js", "Express.js", "Tailwind CSS", "MySQL", "PostgreSQL", "MongoDB", "Redis"],
    },
  ],
  experience: [
    {
      company: "CodeAlpha",
      role: "Cloud Computing Intern",
      period: "May 2026 – Jun 2026",
      tag: "Cloud Intern",
      description: "Worked hands-on with cloud deployment workflows on Linux and Microsoft Azure configuring Nginx, Cloudflare, and SSL. Took Smart Bus Pass System and AI Chatbot Platform from build to live production hosting.",
    },
    {
      company: "Zone Of Engineering Innovators (ZEN)",
      role: "Technical Secretary",
      period: "Feb 2026 – Present",
      tag: "Leadership",
      description: "Spearheaded technical workflows, campus-wide engineering initiatives, and student infrastructure development.",
    },
    {
      company: "Techfest, IIT Bombay",
      role: "Campus Ambassador",
      period: "Jun 2026 – Present",
      tag: "Ambassador",
      description: "Representing Asia's largest science and technology festival, driving technical engagements and student outreach.",
    },
    {
      company: "Thinking Machines E-Learning Center",
      role: "Java Trainee",
      period: "Aug 2024 – Oct 2025",
      tag: "Trainee",
      description: "Trained in Core and Advanced Java (OOP, JDBC, servlets, file I/O) and built backend mini-projects with database connectivity.",
    },
    {
      company: "Allsoft Infotech & Multimedia Pvt. Ltd.",
      role: "Front-End Development Intern",
      period: "Nov 2024 – Jan 2025",
      tag: "Internship",
      description: "Built and debugged responsive, cross-browser web layouts with HTML/CSS, aligning front-end code with backend systems.",
    },
  ],
  contact: {
    email: "rishabhkankariya69@gmail.com",
    resumeUrl: "/Profile (1).pdf",
    socials: [
      { name: "GitHub", handle: "@rishabhkankariya", url: "https://github.com/rishabhkankariya" },
      { name: "LinkedIn", handle: "/in/rishabh-kankariya", url: "https://www.linkedin.com/in/rishabh-kankariya-939a34257" },
      { name: "Twitter / X", handle: "@rishabhkankariya", url: "https://x.com/rishabhkankariya" },
      { name: "Direct Email", handle: "rishabhkankariya69@gmail.com", url: "mailto:rishabhkankariya69@gmail.com" },
    ],
  },
};

export const ROOT_QUICK_ACTIONS: QuickActionItem[] = [
  { id: "btn_projects", actionId: "PORTFOLIO.get_projects", label: "Explore Projects", icon: "projects" },
  { id: "btn_skills", actionId: "PORTFOLIO.get_skills", label: "Cloud & DevOps Skills", icon: "skills" },
  { id: "btn_experience", actionId: "PORTFOLIO.get_experience", label: "Work Experience", icon: "experience" },
  { id: "btn_contact", actionId: "PORTFOLIO.get_contact", label: "Contact / Hire Rishabh", icon: "contact" },
  { id: "btn_resume", actionId: "PORTFOLIO.get_resume", label: "Download Resume", icon: "resume" },
  { id: "btn_overview", actionId: "PORTFOLIO.get_overview", label: "About Rishabh", icon: "user" },
];

export async function processPortfolioQuery(
  query: string,
  actionId?: string,
  history: { role: string; content: string }[] = []
): Promise<{
  type: "TEXT" | "CARD" | "TABLE" | "NAVIGATION";
  message: string;
  data?: any;
  sources?: string[];
  verified?: boolean;
  navigationId?: string;
  quickActions?: QuickActionItem[];
}> {
  // 1. Handle explicit Quick Actions
  if (actionId) {
    switch (actionId) {
      case "PORTFOLIO.get_projects":
        return {
          type: "CARD",
          message: "Here are Rishabh's featured projects spanning Cloud Architecture, Containerization, and Full-Stack platforms:",
          data: { projects: PORTFOLIO_DATA.projects },
          sources: ["Verified Projects"],
          verified: true,
          quickActions: [
            { id: "btn_skills", actionId: "PORTFOLIO.get_skills", label: "View Cloud Stack", icon: "skills" },
            { id: "btn_experience", actionId: "PORTFOLIO.get_experience", label: "Work Experience", icon: "experience" },
            { id: "btn_contact", actionId: "PORTFOLIO.get_contact", label: "Hire Rishabh", icon: "contact" },
          ],
        };

      case "PORTFOLIO.get_skills":
        return {
          type: "TABLE",
          message: "Here is an overview of Rishabh's core technical proficiencies across Cloud, DevOps, Languages, and Databases:",
          data: { categories: PORTFOLIO_DATA.skills },
          sources: ["Technical Matrix"],
          verified: true,
          quickActions: [
            { id: "btn_projects", actionId: "PORTFOLIO.get_projects", label: "See Live Projects", icon: "projects" },
            { id: "btn_experience", actionId: "PORTFOLIO.get_experience", label: "Work Experience", icon: "experience" },
            { id: "btn_contact", actionId: "PORTFOLIO.get_contact", label: "Contact Rishabh", icon: "contact" },
          ],
        };

      case "PORTFOLIO.get_experience":
        return {
          type: "CARD",
          message: "Here is Rishabh's professional career roadmap, internships, and technical leadership roles:",
          data: { roles: PORTFOLIO_DATA.experience },
          sources: ["Career Timeline"],
          verified: true,
          quickActions: [
            { id: "btn_projects", actionId: "PORTFOLIO.get_projects", label: "Explore Projects", icon: "projects" },
            { id: "btn_skills", actionId: "PORTFOLIO.get_skills", label: "Tech Stack", icon: "skills" },
            { id: "btn_contact", actionId: "PORTFOLIO.get_contact", label: "Connect with Rishabh", icon: "contact" },
          ],
        };

      case "PORTFOLIO.get_contact":
        return {
          type: "CARD",
          message: "You can reach Rishabh directly via email at rishabhkankariya69@gmail.com or connect across his developer networks:",
          data: PORTFOLIO_DATA.contact,
          sources: ["Contact Registry"],
          verified: true,
          quickActions: [
            { id: "btn_resume", actionId: "PORTFOLIO.get_resume", label: "Download Resume", icon: "resume" },
            { id: "btn_projects", actionId: "PORTFOLIO.get_projects", label: "Explore Projects", icon: "projects" },
          ],
        };

      case "PORTFOLIO.get_resume":
        return {
          type: "CARD",
          message: "You can view or download Rishabh's updated engineering resume below:",
          data: {
            title: "Rishabh Kankariya — Resume",
            url: "/Profile (1).pdf",
            downloadLabel: "Download Profile (1).pdf",
          },
          sources: ["Resume Document"],
          verified: true,
          quickActions: [
            { id: "btn_projects", actionId: "PORTFOLIO.get_projects", label: "Explore Projects", icon: "projects" },
            { id: "btn_contact", actionId: "PORTFOLIO.get_contact", label: "Contact Rishabh", icon: "contact" },
          ],
        };

      case "PORTFOLIO.get_overview":
      default:
        return {
          type: "CARD",
          message: "Rishabh Kankariya is a Cloud & DevOps Engineer and B.Tech CSE student at MIT-ADT University, Pune. He serves as Technical Secretary at ZEN and Campus Ambassador for Techfest, IIT Bombay.",
          data: PORTFOLIO_DATA.about,
          sources: ["Overview"],
          verified: true,
          quickActions: ROOT_QUICK_ACTIONS.slice(0, 4),
        };
    }
  }

  const text = (query || "").trim().toLowerCase();

  // 2. Navigation Triggers
  if (/\b(projects?|works?|showcase)\b/.test(text) && /\b(jump|scroll|open|go to|view)\b/.test(text)) {
    return {
      type: "NAVIGATION",
      message: "Navigating directly to the Selected Works section on the page.",
      data: { path: "#projects" },
      navigationId: "PROJECTS",
    };
  }
  if (/\b(skills?|capabilities|stack)\b/.test(text) && /\b(jump|scroll|open|go to|view)\b/.test(text)) {
    return {
      type: "NAVIGATION",
      message: "Navigating directly to the Core Disciplines & Practice section.",
      data: { path: "#capabilities" },
      navigationId: "CAPABILITIES",
    };
  }
  if (/\b(experience|career|roadmap|tenure)\b/.test(text) && /\b(jump|scroll|open|go to|view)\b/.test(text)) {
    return {
      type: "NAVIGATION",
      message: "Navigating directly to the Career Roadmap & Tenure section.",
      data: { path: "#experience" },
      navigationId: "EXPERIENCE",
    };
  }
  if (/\b(contact|hire|email)\b/.test(text) && /\b(jump|scroll|open|go to)\b/.test(text)) {
    return {
      type: "NAVIGATION",
      message: "Navigating directly to the Direct Contact section.",
      data: { path: "#contact" },
      navigationId: "CONTACT",
    };
  }

  // 3. Trigger pattern matching for queries
  if (/project|bus pass|built|showcase|portfolio item/i.test(text)) {
    return processPortfolioQuery(query, "PORTFOLIO.get_projects", history);
  }
  if (/skill|tech|cloud|devops|aws|azure|docker|kubernetes|linux|language|database/i.test(text)) {
    return processPortfolioQuery(query, "PORTFOLIO.get_skills", history);
  }
  if (/experience|work|intern|career|job|codealpha|zen|techfest|thinking machines/i.test(text)) {
    return processPortfolioQuery(query, "PORTFOLIO.get_experience", history);
  }
  if (/contact|hire|email|reach out|social|linkedin|github|twitter/i.test(text)) {
    return processPortfolioQuery(query, "PORTFOLIO.get_contact", history);
  }
  if (/resume|cv|download resume|pdf|curriculum/i.test(text)) {
    return processPortfolioQuery(query, "PORTFOLIO.get_resume", history);
  }
  if (/who is|about rishabh|background|bio|degree|education|college|study|mit/i.test(text)) {
    return processPortfolioQuery(query, "PORTFOLIO.get_overview", history);
  }

  // 4. Fallback response synthesized from verified profile
  return {
    type: "TEXT",
    message:
      "Rishabh Kankariya is a Cloud & DevOps Engineer specializing in Kubernetes, AWS/Azure, CI/CD, and Full-Stack development. You can ask about his projects, technical capabilities, or work experience using the quick actions below.",
    verified: true,
    sources: ["Portfolio Knowledge"],
    quickActions: ROOT_QUICK_ACTIONS.slice(0, 4),
  };
}
