# AI Portfolio Chatbot Service

Interactive AI chatbot service for **Rishabh Kankariya's Cloud & DevOps Portfolio**. Provides intelligent conversational exploration of cloud architectures, Kubernetes deployments, DevOps pipelines, selected projects, and career credentials.

## Architecture & Integration

- **Embedded Widget**: Dropped directly into the Next.js portfolio via `portfolio/components/AiChatbotWidget.tsx` with draggable window controls, rich cards, light/dark mode support, and clean SVG icons.
- **Client-Safe Engine**: `portfolio/lib/portfolioChatService.ts` bundles portfolio knowledge and intent resolution for static exports (Cloudflare Pages).
- **Standalone Backend**: `server/index.js` running Express on port 4500 with multi-provider LLM orchestration (Gemini / Ollama), privacy scanning, and verified portfolio tools.

## Running Standalone

```bash
cd ai-chatbot
npm install
npm test       # 22 unit tests, zero failures
npm start      # http://localhost:4500
```

## Capabilities & Intents

- `PORTFOLIO.get_overview`: Background, education (MIT-ADT University), leadership (ZEN, Techfest IIT Bombay).
- `PORTFOLIO.get_projects`: Smart Bus Pass System, AI Chatbot Platform, Student-Institute Portal, Portfolio Website.
- `PORTFOLIO.get_skills`: AWS, Azure, Docker, Kubernetes, Linux, Nginx, CI/CD GitHub Actions, Java, Python, TypeScript.
- `PORTFOLIO.get_experience`: CodeAlpha, ZEN Technical Secretary, Techfest Campus Ambassador, Thinking Machines.
- `PORTFOLIO.get_credentials`: Degree, certifications, and academic background.
- `PORTFOLIO.get_contact`: Email, LinkedIn, GitHub, X.
- `PORTFOLIO.get_resume`: Resume PDF download (`/Profile (1).pdf`).
- Direct Page Navigation: Smoothly scrolls the main portfolio page to `#hero`, `#about`, `#capabilities`, `#experience`, `#projects`, `#credentials`, `#contact`.
