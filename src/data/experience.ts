export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  logo: string;
  bullets: string[];
  tags: string[];
}

const experience: ExperienceItem[] = [
  {
    company: "Classwise AI",
    role: "Technical Co-Founder & Chief AI Officer",
    period: "May 2025 – Present",
    logo: "/Classwise Logo.svg",
    bullets: [
      "Selected for NEXT AI Canada & Google for Startups; recognized as a top-tier venture by the McGill Dobson Cup.",
      "Led the architecture of an AI grading platform used by 35+ teachers, saving 10+ hours of manual grading per week.",
      "Integrated Google Classroom and Canvas to sync courses and submissions, cutting teacher setup time by 90%.",
      "Architected AI grading pipelines on GCP (Cloud Run, Pub/Sub) and Vercel, powering 3,100+ automated gradings.",
    ],
    tags: ["Node.js", "PostgreSQL", "GCP", "Vercel", "CI/CD"],
  },
  {
    company: "Magnet Forensics",
    role: "Software Developer Intern",
    period: "Sep 2025 – Dec 2025",
    logo: "/MagnetForensics-logo.png",
    bullets: [
      "Built modular .NET helper libraries using DI, Builder, and Factory patterns to create a testable, maintainable architecture.",
      "Implemented unit tests and mocks with xUnit and Moq in CI/CD pipelines, ensuring reliable artifact ingestion across 6 products.",
      "Queried SQLite with LINQ and EF Core, and parsed JSON and plist files to process forensic data used across 6 products.",
      "Used reverse engineering and Linux shell tools to map undocumented file paths and recover unsupported artifacts.",
    ],
    tags: [".NET", "C#", "xUnit", "Moq", "SQLite", "EF Core", "CI/CD", "Linux"],
  },
  {
    company: "D2AI.ca",
    role: "ML/AI Software Engineer Intern",
    period: "May 2025 – Aug 2025",
    logo: "/D2AI-logo.jpg",
    bullets: [
      "Designed a scheduled backend service to automate club fee charges and reminders, improving efficiency by 35%.",
      "Built a Super Admin dashboard with FastAPI and Next.js, streamlining club creation and reducing manual effort by 20%.",
      "Built user authentication and profile management flows with FastAPI, Next.js, and AWS S3 for file storage.",
      "Developed a CNN pipeline with PyTorch, MediaPipe, and OpenCV to analyze basketball shots and provide real-time feedback.",
    ],
    tags: ["Python", "FastAPI", "Next.js", "AWS S3", "PyTorch", "OpenCV", "MediaPipe"],
  },
];

export default experience;
