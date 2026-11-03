export interface Project {
  title: string;
  description: string;
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
    tags: [
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "React",
      "Docker",
      "Nginx",
    ],
    image: "/Gate Scale.png",
    liveUrl: "https://gatescale.onrender.com/",
    githubUrl: "https://github.com/Abdu-LateefLF/gatescale",
  },
  {
    title: "Political Figure Classifier",
    description:
      "A machine learning web app that classifies political figures in images with 92.31% accuracy through model tuning and optimized feature extraction.",
    tags: [
      "Python",
      "TypeScript",
      "Flask",
      "Vue.js",
      "scikit-learn",
      "Azure",
      "Tailwind CSS",
    ],
    image: "/Politician Classifier.png",
    liveUrl: "https://political-figure-classifier-a.vercel.app/",
    githubUrl: "https://github.com/Abdu-LateefLF/political-figure-classifier",
  },
  {
    title: "Escape The Maze",
    description:
      "An Android mobile game featuring a first-person character battling an AI-controlled snake, built in Unity and published to the Google Play Store with 1,000+ downloads and a 5-star rating.",
    tags: ["C#", "Unity 3D", "Android", "OOP"],
    image: "/escapeTheMaze.png",
    liveUrl:
      "https://play.google.com/store/apps/details?id=com.PurpleSock.EscapeTheMaze&pli=1",
  },
];

export default projects;
