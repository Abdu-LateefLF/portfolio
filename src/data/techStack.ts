export interface TechItem {
  name: string;
  icon?: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";
const SIMPLE_ICONS = "https://cdn.jsdelivr.net/npm/simple-icons@latest/icons";

export const techCategories: TechCategory[] = [
  {
    title: "Languages",
    items: [
      { name: "TypeScript", icon: `${CDN}/typescript/typescript-original.svg` },
      { name: "JavaScript", icon: `${CDN}/javascript/javascript-original.svg` },
      { name: "Python", icon: `${CDN}/python/python-original.svg` },
      { name: "Java", icon: `${CDN}/java/java-original.svg` },
      { name: "C#", icon: `${CDN}/csharp/csharp-original.svg` },
      { name: "C/C++", icon: `${CDN}/cplusplus/cplusplus-original.svg` },
      { name: "HTML5", icon: `${CDN}/html5/html5-original.svg` },
      { name: "CSS3", icon: `${CDN}/css3/css3-original.svg` },
      { name: "SQL", icon: `${CDN}/postgresql/postgresql-original.svg` },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: `${CDN}/react/react-original.svg` },
      { name: "Node.js", icon: `${CDN}/nodejs/nodejs-original.svg` },
      { name: "Next.js", icon: `${CDN}/nextjs/nextjs-original.svg` },
      { name: "LangGraph", icon: `${SIMPLE_ICONS}/langgraph.svg` },
      { name: "LangChain", icon: `${SIMPLE_ICONS}/langchain.svg` },
      { name: ".NET", icon: `${CDN}/dotnetcore/dotnetcore-original.svg` },
      { name: "Flask", icon: `${CDN}/flask/flask-original.svg` },
      { name: "FastAPI", icon: `${CDN}/fastapi/fastapi-original.svg` },
      { name: "Vue", icon: `${CDN}/vuejs/vuejs-original.svg` },
      { name: "TensorFlow", icon: `${CDN}/tensorflow/tensorflow-original.svg` },
      { name: "scikit-learn", icon: `${CDN}/scikitlearn/scikitlearn-original.svg` },
      { name: "Jest", icon: `${CDN}/jest/jest-plain.svg` },
      { name: "pytest", icon: `${CDN}/pytest/pytest-original.svg` },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
      { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg` },
      { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
      { name: "Git", icon: `${CDN}/git/git-original.svg` },
      { name: "GitHub", icon: `${CDN}/github/github-original.svg` },
      { name: "Nginx", icon: `${CDN}/nginx/nginx-original.svg` },
      { name: "Azure", icon: `${CDN}/azure/azure-original.svg` },
      { name: "AWS", icon: `${CDN}/amazonwebservices/amazonwebservices-plain-wordmark.svg` },
      { name: "GCP", icon: `${CDN}/googlecloud/googlecloud-original.svg` },
      { name: "Jupyter", icon: `${CDN}/jupyter/jupyter-original.svg` },
      { name: "Postman", icon: `${CDN}/postman/postman-original.svg` },
    ],
  },
  {
    title: "Engineering Practices",
    items: [
      { name: "Agile (Scrum)" },
      { name: "Distributed Systems" },
      { name: "Design Patterns" },
      { name: "CI/CD" },
    ],
  },
];
