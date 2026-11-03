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
      "Architected an AI agent (TypeScript, LangGraph) for grading handwritten assignments grounded in teacher rubrics and materials, saving customers 1,800+ hours.",
      "Built a full-stack application (Node.js, Next.js, PostgreSQL) for teachers to manage courses, assignments, and rosters, and generate, review, and distribute feedback, generating $55K in revenue.",
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
      "Built a stateful Browser LLM Agent (Python, LangGraph) as a microservice to automate actions in the user's browser, projected to influence over $120K in revenue.",
      "Built a Chrome extension (TypeScript, React.js, Chrome API) maintaining a WebSocket connection with heartbeat and reconnection logic to execute remote actions on the user's device.",
      "Solved a cross-replica WebSocket routing problem for agent communication using a Postgres LISTEN/NOTIFY pub/sub, without introducing new infrastructure.",
      "Designed a chat memory retrieval system using query expansion, BM25, and cross-encoder reranking, achieving high accuracy on low-cost infrastructure.",
    ],
    tags: ["LangGraph", "Python", "TypeScript", "Chrome API", "PostgreSQL", "Docker", "FastAPI"],
  },
  {
    company: "Magnet Forensics",
    role: "Software Developer Intern",
    period: "Sep 2025 – Dec 2025",
    logo: "/MagnetForensics-logo.png",
    bullets: [
      "Expanded a core processing library (C#, .NET, SQLite) to support 7 new applications, extending the capabilities of 10+ products consuming the API.",
      "Reverse-engineered an app's encryption to identify its key derivation and data mappings, building a tool to access the data and fulfill a highly requested customer feature.",
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
      "Implemented a full-stack admin approval flow for e-transfer payments using FastAPI, Next.js, and MySQL.",
      "Developed a CNN pipeline with PyTorch, MediaPipe, and OpenCV to analyze basketball shots and provide feedback.",
    ],
    tags: ["Python", "FastAPI", "Next.js", "MySQL", "PyTorch", "OpenCV"],
  },
];

export default experience;
