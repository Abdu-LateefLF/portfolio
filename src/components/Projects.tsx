import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import FeaturedProject from "./FeaturedProject";
import {
  fadeUpVariants,
  fadeUpViewport,
  fadeUpTransition,
} from "../lib/motion";
import projects, { type Project } from "../data/projects";
import classwise from "../data/classwise";

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col sm:flex-row">
      <div className="relative w-full sm:w-56 md:w-64 shrink-0 aspect-video sm:aspect-auto sm:min-h-[150px] bg-slate-100 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 motion-reduce:transition-none sm:group-hover:scale-105"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              "https://placehold.co/800x450/e2e8f0/94a3b8?text=Project+Preview";
          }}
        />
      </div>

      <div className="p-4 sm:p-5 min-w-0 flex flex-col gap-2.5">
        <h4 className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
          {project.title}
        </h4>
        <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-mono bg-slate-100 text-slate-600 px-2 py-0.5"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-x-5 gap-y-1 mt-auto">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1 text-sm text-slate-500 hover:text-accent transition-colors"
              aria-label={`${project.title} GitHub`}
            >
              <FiGithub size={15} />
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 py-1 text-sm text-slate-500 hover:text-accent transition-colors"
              aria-label={`${project.title} live demo`}
            >
              <FiExternalLink size={15} />
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

      <motion.div
        {...fadeUpViewport}
        variants={fadeUpVariants}
        transition={fadeUpTransition(0.1)}
      >
        <FeaturedProject project={classwise} id="classwise" />
      </motion.div>

      <motion.h3
        {...fadeUpViewport}
        variants={fadeUpVariants}
        transition={fadeUpTransition()}
        className="mt-14 sm:mt-16 mb-5 text-accent font-mono text-xs sm:text-sm font-medium tracking-wide uppercase"
      >
        Other projects
      </motion.h3>

      <div className="space-y-5">
        {projects.map((project) => (
          <motion.div
            key={project.title}
            {...fadeUpViewport}
            variants={fadeUpVariants}
            transition={fadeUpTransition(0.1)}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
