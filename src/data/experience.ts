export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logo?: string;
  bullets: string[];
  tags: string[];
  learnMore?: { label: string; targetId: string };
}

const experience: ExperienceItem[] = [
  {
    company: "Classwise AI",
    role: "Co-Founder & Chief AI Officer (CAIO)",
    period: "May 2025 – Present",
    logo: "/Classwise Logo.svg",
    bullets: [
      "Architected an AI agent (TypeScript, LangGraph) that grades handwritten assignments against teacher rubrics and course materials, saving teachers 1,800+ hours.",
      "Built a full-stack application (Node.js, Next.js, PostgreSQL) where teachers manage courses and rosters, then review and send generated feedback to students, driving $55K in revenue.",
      "Implemented a pluggable integration system (Google Pub/Sub, Cloud Functions) for Google Classroom, Canvas, and Moodle, reducing manual setup effort by 90%.",
      "Designed an evaluation system measuring grading accuracy, failure modes, latency, and cost, catching regressions before production and reducing incidents by 82%.",
      "Deployed distributed PDF/image processing and grading workers with queue-based retries, ownership, and concurrency handling, powering a pipeline that has graded 14,000+ assignments.",
    ],
    tags: ["LangGraph", "Agentic AI Development", "Google Cloud Platform (GCP)", "Node.js", "Next.js"],
    learnMore: { label: "Learn more about Classwise", targetId: "classwise" },
  },
  {
    company: "AskCipher",
    role: "AI Software Developer Intern",
    period: "May 2026 – Aug 2026",
    logo: "/AskCipher-logo.png",
    bullets: [
      "Developed a stateful browser LLM agent (Python, LangGraph) as a microservice to automate actions in the user's browser, expanding the platform beyond supported APIs and tied to $120K+ in projected revenue.",
      "Created a Chrome extension (TypeScript, React) with 20 browser automation tools built on content scripts, the Chrome DevTools Protocol, and Chrome APIs, executed remotely over an auto-reconnecting WebSocket.",
      "Designed a low-cost NLP retrieval system for chat memory using query expansion, BM25, and cross-encoder reranking.",
    ],
    tags: ["LangGraph", "Python", "TypeScript", "Chrome API", "PostgreSQL", "Docker", "FastAPI"],
  },
  {
    company: "Magnet Forensics",
    role: "Software Developer Intern",
    period: "Sep 2025 – Dec 2025",
    logo: "/MagnetForensics-logo.png",
    bullets: [
      "Extended a core processing library (C#, .NET, SQLite) to support 7 new applications across 10 consuming products.",
      "Reverse-engineered an app's encryption to identify its key derivation strategy and data mappings, and built a tool to extract the data, fulfilling a highly requested customer feature.",
      "Designed and implemented unit and regression tests (xUnit, Moq) in CI pipelines, preventing bugs in critical features.",
    ],
    tags: [".NET", "C#", "SQLite", "Linux Scripting", "CI/CD"],
  },
  {
    company: "D2AI.ca",
    role: "ML/AI Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    logo: "/D2AI-logo.jpg",
    bullets: [
      "Built a scheduled microservice (TypeScript, Node.js) automating club charges and reminders, raising efficiency by 35%.",
      "Built full-stack signup/login and profile management flows (Python, FastAPI, Next.js, MySQL), storing files in AWS S3.",
      "Developed a CNN pipeline (PyTorch, OpenCV, OpenAI) to analyze athletes' basketball jumpshots and provide coaching.",
    ],
    tags: ["Python", "TypeScript", "Node.js", "FastAPI", "Next.js", "MySQL", "AWS S3", "PyTorch", "OpenCV"],
  },
];

export default experience;
