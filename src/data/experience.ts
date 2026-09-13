export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logo?: string;
  bullets: string[];
  tags: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "Classwise AI",
    role: "Co-Founder & Chief AI Officer (CAIO)",
    period: "May 2025 – Present",
    logo: "/Classwise Logo.svg",
    bullets: [
      "Scaled the platform to 8,200+ assignments graded year to date, generating $56K CAD in revenue and $47K CAD in prize wins.",
      "Architected LangGraph AI grading pipelines with multimodal agents, model routing, async workers, and PostgreSQL state.",
      "Built multimodal document pipelines for PDF and image grading with segmentation, extraction, validation, and retries.",
      "Built evaluation infrastructure measuring grading accuracy, failure modes, latency, token usage, and inference costs.",
      "Engineered distributed systems with queues, heartbeats, retries, and database locking for reliable AI workloads.",
    ],
    tags: ["LangGraph", "Agentic AI Development", "Google Cloud Platform (GCP)", "Node.js", "Next.js"],
  },
  {
    company: "AskCipher",
    role: "AI Software Developer Intern",
    period: "May 2026 – Aug 2026",
    logo: "/AskCipher-logo.png",
    bullets: [
      "Architected distributed microservices, solving cross-replica WebSocket routing for an AI agent to control a browser.",
      "Built a stateful LangGraph agent with PostgreSQL checkpointing so browser tasks survive disconnects and resume reliably.",
      "Designed a permission layer where tool identity classifies actions as safe reads or risky writes.",
      "Implemented a BM25 and cross-encoder reranking pipeline for chat memory, avoiding embedding infrastructure costs entirely.",
    ],
    tags: ["LangGraph", "Docker", "FastAPI", "PostgreSQL", "Agentic AI Development", "Microservices", "Google Cloud Platform (GCP)"],
  },
  {
    company: "Magnet Forensics",
    role: "Software Developer Intern",
    period: "Sep 2025 – Dec 2025",
    logo: "/MagnetForensics-logo.png",
    bullets: [
      "Built helper libraries using DI, Builder, and Factory patterns to enable a modular, testable .NET architecture.",
      "Implemented unit and mock tests with xUnit and Moq, backed by regression testing and CI/CD pipelines for reliable artifact ingestion.",
      "Queried SQLite databases with LINQ and EF Core, parsed JSON and PLists, and processed data for use across 6 products.",
      "Used reverse engineering and Linux shell tools to map undocumented file paths and recover unsupported artifacts.",
    ],
    tags: [".NET", "C#", "AWS", "SQL"],
  },
  {
    company: "D2AI.ca",
    role: "ML/AI Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    logo: "/D2AI-logo.jpg",
    bullets: [
      "Built user authentication and profile management flows with FastAPI, Next.js, and AWS S3 for file storage.",
      "Developed a CNN pipeline with PyTorch, MediaPipe, and OpenCV to analyze basketball shots and provide feedback.",
    ],
    tags: ["Python", "FastAPI", "Next.js", "AWS S3", "PyTorch", "OpenCV"],
  },
];

export default experience;
