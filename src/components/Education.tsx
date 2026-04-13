import { motion } from "framer-motion";
import { FiCalendar, FiAward, FiBookOpen, FiStar } from "react-icons/fi";
import SectionHeader from "./ui/SectionHeader";
import { fadeUpVariants, fadeUpViewport, fadeUpTransition } from "../lib/motion";
import education, { type EducationItem } from "../data/education";

function EducationCard({ item }: { item: EducationItem }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-800">{item.institution}</h3>
          <p className="text-slate-500 mt-0.5">{item.degree}</p>
        </div>
        <span className="flex items-center gap-1.5 text-sm text-accent font-medium shrink-0">
          <FiCalendar size={14} />
          {item.period}
        </span>
      </div>

      <div className="flex flex-wrap gap-4 text-sm mb-5">
        <span className="flex items-center gap-1.5 text-slate-600">
          <FiAward size={14} className="text-accent" />
          GPA: <span className="font-semibold text-slate-800 ml-1">{item.gpa}</span>
        </span>
      </div>

      <div className="mb-5">
        <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 mb-3">
          <FiStar size={14} className="text-accent" />
          Highlights
        </p>
        <ul className="space-y-2">
          {item.highlights.map((highlight, i) => (
            <li key={i} className="flex gap-2 text-sm text-slate-500 leading-relaxed">
              <span className="text-accent mt-0.5 shrink-0">▹</span>
              {highlight}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <p className="flex items-center gap-1.5 text-sm font-semibold text-slate-700 mb-2">
          <FiBookOpen size={14} className="text-accent" />
          Relevant Coursework
        </p>
        <div className="flex flex-wrap gap-2">
          {item.coursework.map((course) => (
            <span
              key={course}
              className="text-xs bg-slate-50 border border-slate-200 text-slate-600 rounded-md px-2.5 py-1"
            >
              {course}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Education() {
  return (
    <section id="education" className="section py-24">
      <motion.div
        {...fadeUpViewport}
        variants={fadeUpVariants}
        transition={fadeUpTransition()}
      >
        <SectionHeader index="03. Education" title="Academic background" />
      </motion.div>

      <div className="space-y-6">
        {education.map((item, idx) => (
          <motion.div
            key={item.institution}
            {...fadeUpViewport}
            variants={fadeUpVariants}
            transition={fadeUpTransition(0.1 * idx)}
          >
            <EducationCard item={item} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
