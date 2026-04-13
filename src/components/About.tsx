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
            I am a software engineering student at the{" "}
            <span className="text-slate-700 font-medium">
              University of Guelph
            </span>{" "}
            pursuing a BComp Honours degree with a Business minor. I currently
            hold a 4.0 GPA and expect to graduate in May 2028.
          </p>
          <p>
            I am drawn to problems at the intersection of systems and
            intelligence, whether that involves designing a financial query DSL
            like <span className="text-slate-700 font-medium">FinQL</span>,
            deploying machine learning models, or building production-grade APIs
            with real-time infrastructure.
          </p>
          <p>
            I care about building software that is not only technically strong
            but genuinely useful. I enjoy working on products that people rely
            on daily and that create measurable impact.
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
