import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import {
  fadeUpVariants,
  fadeUpViewport,
  fadeUpTransition,
} from "../lib/motion";
import { techCategories, type TechItem } from "../data/techStack";

function TechBadge({ item }: { item: TechItem }) {
  return (
    <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-1.5 text-sm text-slate-600 hover:border-accent/40 hover:text-slate-800 transition-all duration-200">
      <img
        src={item.icon}
        alt={item.name}
        className="w-4 h-4 object-contain"
        loading="lazy"
      />
      <span>{item.name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section id="skills" className="section py-24">
      <motion.div
        {...fadeUpViewport}
        variants={fadeUpVariants}
        transition={fadeUpTransition()}
      >
        <SectionHeader index="02. Skills" title="Technologies I work with" />
      </motion.div>

      <div className="grid sm:grid-cols-2 gap-6">
        {techCategories.map((category, catIdx) => (
          <motion.div
            key={category.title}
            {...fadeUpViewport}
            variants={fadeUpVariants}
            transition={fadeUpTransition(0.1 * catIdx)}
            className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6"
          >
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider mb-4 pb-3 border-b border-slate-100">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.items.map((item) => (
                <TechBadge key={item.name} item={item} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
