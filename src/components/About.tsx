import { motion } from "framer-motion";
import SectionHeader from "./ui/SectionHeader";
import {
  fadeUpVariants,
  fadeUpViewport,
  fadeUpTransition,
} from "../lib/motion";

export default function About() {
  return (
    <section id="about" className="section py-24">
      <motion.div
        {...fadeUpViewport}
        variants={fadeUpVariants}
        transition={fadeUpTransition()}
      >
        <SectionHeader index="01. About Me" title="A little about me" />
      </motion.div>

      <div className="grid gap-10 items-start">
        <motion.div
          {...fadeUpViewport}
          variants={fadeUpVariants}
          transition={fadeUpTransition(0.2)}
        >
          <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
            <h3 className="text-sm font-semibold text-slate-700 uppercase tracking-wider">
              Quick Facts
            </h3>
            <ul className="space-y-3 text-sm text-slate-500">
              {[
                ["University", "University of Guelph"],
                ["Degree", "Bachelor of Computing Honours, Software Engineering"],
                ["GPA", "4.0 / 4.0 (95% avg)"],
                ["Graduation", "May 2028"],
                ["Currently", "Co-Founder & CAIO @ Classwise AI"],
                ["Looking for", "Internships & full-time roles"],
              ].map(([label, value]) => (
                <li key={label} className="flex justify-between gap-4">
                  <span className="text-slate-400 shrink-0">{label}</span>
                  <span className="text-slate-700 font-medium text-right">
                    {value}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
