import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import { fadeUpVariants, fadeUpViewport, fadeUpTransition } from "../lib/motion";
import experience, { type ExperienceItem } from "../data/experience";

function ExperienceCard({
  item,
  isLast,
}: {
  item: ExperienceItem;
  isLast: boolean;
}) {
  return (
    <div className="relative flex gap-6">
      {/* Timeline spine */}
      <div className="flex flex-col items-center">
        <div className="w-3 h-3 rounded-full bg-accent ring-4 ring-accent/20 mt-1.5 shrink-0" />
        {!isLast && <div className="w-px flex-1 bg-slate-200 mt-2" />}
      </div>

      {/* Card */}
      <div className={`bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8 w-full ${!isLast ? "mb-8" : ""}`}>
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
          <div className="flex items-center gap-3">
            <img
              src={item.logo}
              alt={item.company}
              className="w-8 h-8 rounded-md object-contain border border-slate-100"
              onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
            />
            <div>
              <h3 className="text-base font-bold text-slate-800">{item.role}</h3>
              <p className="text-accent font-medium text-sm">{item.company}</p>
            </div>
          </div>
          <span className="text-sm text-slate-400 font-mono shrink-0">{item.period}</span>
        </div>

        <ul className="mt-4 space-y-2">
          {item.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-500 leading-relaxed">
              <span className="text-accent mt-0.5 shrink-0">▹</span>
              {bullet}
            </li>
          ))}
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs bg-accent/10 text-accent font-medium rounded-md px-2.5 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section py-24">
      <motion.div
        {...fadeUpViewport}
        variants={fadeUpVariants}
        transition={fadeUpTransition()}
      >
        <SectionHeader index="04. Experience" title="Where I've worked" />
      </motion.div>

      <div>
        {experience.map((item, idx) => (
          <motion.div
            key={item.company}
            {...fadeUpViewport}
            variants={fadeUpVariants}
            transition={fadeUpTransition(0.1 * idx)}
          >
            <ExperienceCard item={item} isLast={idx === experience.length - 1} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
