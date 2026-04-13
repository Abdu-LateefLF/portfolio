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
          transition={fadeUpTransition(0.1)}
          className="space-y-4 text-slate-500 leading-relaxed"
        >
          <p>
            Hello! I'm Abdu-Lateef, a software engineering student at the{" "}
            <span className="text-slate-700 font-medium">
              University of Guelph
            </span>{" "}
            (BComp Honours, Business minor). I currently have a 4.0 GPA and am
            expected to graduate in May 2028.
          </p>
          <p>
            I enjoy building across the full stack, from backend APIs and
            system design to frontend interfaces. I'm particularly interested in
            the intersection of software engineering and data, whether that's
            designing a DSL for financial queries, training ML models, or
            building scalable systems.
          </p>
          <p>
            Outside of development, I'm interested in algorithms, system
            design, and solving complex problems with simple, elegant
            solutions. I'm looking for internship and full-time opportunities
            where I can contribute and continue growing as an engineer.
          </p>
        </motion.div>

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
                ["Degree", "BComp Honours, Software Eng."],
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
