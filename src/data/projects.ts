export interface Project {
  title: string;
  description: string;
  bullets: string[];
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "GateScale (FinQL)",
    description:
      "A full-stack financial API gateway for running structured queries with FinQL, a custom DSL with its own lexer, parser, and sandboxed evaluator. It includes secure API key management, JWT authentication, and real-time usage analytics.",
    bullets: [
      "Engineered a custom DSL interpreter with line-level error reporting, making financial scripting accessible over a simple REST API.",
      "Secured the platform with HMAC-hashed API keys, JWT refresh-token auth, and tier-aware Redis rate limiting.",
      "Deployed a production-grade multi-replica stack with Docker Compose, Nginx load balancing, PostgreSQL, and Redis.",
      "Built per-key telemetry dashboards with time-series breakdowns using PostgreSQL analytics and Recharts.",
    ],
    tags: ["Node.js", "TypeScript", "PostgreSQL", "Redis", "React", "Docker", "Nginx"],
    image: "/Gate Scale.png",
    liveUrl: "https://gatescale.onrender.com/",
    githubUrl: "https://github.com/Abdu-LateefLF/gatescale",
  },
  {
    title: "Political Figure Classifier",
    description:
      "A machine learning web app that classifies political figures in images with 92.31% accuracy through model tuning and optimized feature extraction.",
    bullets: [
      "Trained and tuned SVM, Random Forest, and Logistic Regression models, reaching 92.31% classification accuracy.",
      "Improved accuracy by 10% through optimized feature extraction with wavelet transforms.",
      "Deployed a Flask REST API on Microsoft Azure with a Vue.js frontend for image uploads and results.",
    ],
    tags: ["Python", "TypeScript", "Flask", "Vue.js", "scikit-learn", "Azure", "Tailwind CSS"],
    image: "/Politician Classifier.png",
    liveUrl: "https://political-figure-classifier-a.vercel.app/",
  },
  {
    title: "AI Recipe Finder",
    description:
      "A full-stack AI recipe recommender that suggests recipes based on ingredients users already have at home, powered by the OpenAI API.",
    bullets: [
      "Integrated the OpenAI API to generate contextual, ingredient-aware recipe suggestions in real time.",
      "Built a React + TypeScript frontend backed by a Node.js/Express API, deployed on Vercel.",
      "Designed a clean, responsive UI with Tailwind CSS focused on simplicity and ease of use.",
    ],
    tags: ["React", "TypeScript", "Node.js", "Express.js", "OpenAI API", "Tailwind CSS"],
    image: "/aiRecipeFinder.png",
    liveUrl: "https://airecipefinder.vercel.app",
  },
  {
    title: "Escape The Maze",
    description:
      "An Android mobile game featuring a first-person character battling an AI-controlled snake, built in Unity and published to the Google Play Store.",
    bullets: [
      "Refactored the codebase into modular systems using OOP principles, cutting feature development time by 34%.",
      "Shipped to Google Play, earning 1,000+ downloads, a 5-star rating, and 50+ monthly active users.",
    ],
    tags: ["C#", "Unity 3D", "Android", "OOP"],
    image: "/escapeTheMaze.png",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.PurpleSock.EscapeTheMaze&pli=1",
  },
];

export default projects;
