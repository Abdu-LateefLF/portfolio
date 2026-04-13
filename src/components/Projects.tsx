import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import {
  fadeUpVariants,
  fadeUpViewport,
  fadeUpTransition,
} from "../lib/motion";
import projects, { type Project } from "../data/projects";

function ProjectCard({ project }: { project: Project; index: number }) {
  return (
    <div className="w-full flex flex-col gap-6 sm:gap-8 items-stretch">
      {/* Image: fixed aspect + absolute fill avoids broken % heights on small screens */}
      <div className="relative w-full min-w-0 shrink-0 overflow-hidden rounded-xl border border-slate-200 bg-slate-100 aspect-video sm:rounded-2xl sm:aspect-[16/10] group">
        <img
          src={project.image}
          alt={project.title}
          decoding="async"
          className="absolute inset-0 block !h-full !w-full max-w-none object-cover object-center transition-transform duration-500 motion-reduce:transition-none sm:group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://placehold.co/800x450/e2e8f0/94a3b8?text=Project+Preview";
          }}
        />
      </div>

      {/* Content */}
      <div className="w-full min-w-0">
        <p className="text-accent font-mono text-[11px] sm:text-xs font-medium mb-1.5 sm:mb-2 tracking-wide uppercase">
          Featured Project
        </p>
        <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-slate-800 mb-2 sm:mb-3 leading-snug">
          {project.title}
        </h3>

        <div className="bg-white rounded-lg sm:rounded-xl border border-slate-200 shadow-sm p-3 sm:p-4 mb-3 sm:mb-4">
          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed">
            {project.description}
          </p>
        </div>

        <ul className="space-y-1.5 mb-3 sm:mb-4">
          {project.bullets.map((bullet, i) => (
            <li
              key={i}
              className="flex gap-2 text-xs sm:text-sm text-slate-500 leading-relaxed"
            >
              <span className="text-accent mt-0.5 shrink-0">▹</span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-3 sm:mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] sm:text-xs font-mono bg-slate-100 text-slate-600 rounded-md px-2 py-0.5 sm:px-2.5 sm:py-1"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 sm:gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md py-2.5 pl-1 pr-2 text-sm text-slate-500 -my-1 hover:text-accent transition-colors sm:-my-0 sm:py-0 sm:pl-0 sm:pr-0"
              aria-label={`${project.title} GitHub`}
            >
              <FiGithub size={16} />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 rounded-md py-2.5 pl-1 pr-2 text-sm text-slate-500 -my-1 hover:text-accent transition-colors sm:-my-0 sm:py-0 sm:pl-0 sm:pr-0"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink size={16} />
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="section py-16 sm:py-20 md:py-24">
      <motion.div
        {...fadeUpViewport}
        variants={fadeUpVariants}
        transition={fadeUpTransition()}
      >
        <SectionHeader index="05. Projects" title="Some things I've built" />
      </motion.div>

      <div className="space-y-12 sm:space-y-16 md:space-y-20">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            {...fadeUpViewport}
            variants={fadeUpVariants}
            transition={fadeUpTransition(0.1)}
          >
            <ProjectCard project={project} index={idx} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
