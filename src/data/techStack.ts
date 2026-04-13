export interface TechItem {
  name: string;
  icon: string;
}

export interface TechCategory {
  title: string;
  items: TechItem[];
}

const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons";

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
      { name: "Flask", icon: `${CDN}/flask/flask-original.svg` },
      { name: "FastAPI", icon: `${CDN}/fastapi/fastapi-original.svg` },
      { name: "Vue", icon: `${CDN}/vuejs/vuejs-original.svg` },
      { name: "Flutter", icon: `${CDN}/flutter/flutter-original.svg` },
      { name: "TensorFlow", icon: `${CDN}/tensorflow/tensorflow-original.svg` },
      { name: "scikit-learn", icon: `${CDN}/scikitlearn/scikitlearn-original.svg` },
    ],
  },
  {
    title: "Tools & Platforms",
    items: [
      { name: "Docker", icon: `${CDN}/docker/docker-original.svg` },
      { name: "PostgreSQL", icon: `${CDN}/postgresql/postgresql-original.svg` },
      { name: "MongoDB", icon: `${CDN}/mongodb/mongodb-original.svg` },
      { name: "Redis", icon: `${CDN}/redis/redis-original.svg` },
      { name: "MySQL", icon: `${CDN}/mysql/mysql-original.svg` },
      { name: "Git", icon: `${CDN}/git/git-original.svg` },
      { name: "Nginx", icon: `${CDN}/nginx/nginx-original.svg` },
      { name: "Linux", icon: `${CDN}/linux/linux-original.svg` },
    ],
  },
];
