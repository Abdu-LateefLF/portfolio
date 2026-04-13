import { motion } from "framer-motion";
import type { Transition } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1], delay } as Transition,
});

export default function Introduction() {
  return (
    <section
      id="hero"
      className="section min-h-screen flex flex-col justify-center py-20"
    >
      <motion.p
        {...fadeUp(0.1)}
        className="text-accent font-mono text-sm font-medium mb-4 tracking-wide"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        {...fadeUp(0.2)}
        className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-slate-800 leading-tight"
      >
        Abdu-Lateef
        <br />
        Lekan-Fadeyi.
      </motion.h1>

      <motion.div
        {...fadeUp(0.35)}
        className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-400 leading-tight"
      >
        I{" "}
        <TypeAnimation
          sequence={[
            "build full-stack apps.",
            2000,
            "develop ML solutions.",
            2000,
            "love clean architecture.",
            2000,
            "ship production code.",
            2000,
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
          className="text-accent"
        />
      </motion.div>

      <motion.p
        {...fadeUp(0.5)}
        className="mt-6 max-w-xl text-base sm:text-lg text-slate-500 leading-relaxed"
      >
        AI-focused software developer and software engineering student at the
        University of Guelph with a 4.0 GPA. I build full-stack apps, ML
        systems, and developer tools. I'm currently co-founding{" "}
        <span className="text-slate-700 font-medium">Classwise AI</span>, an
        AI grading platform saving teachers 10+ hours a week.
      </motion.p>

      <motion.div
        {...fadeUp(0.65)}
        className="mt-8 flex items-center gap-5"
      >
        <a
          href="https://github.com/Abdu-LateefLF"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-accent transition-colors"
          aria-label="GitHub"
        >
          <FiGithub size={22} />
        </a>
        <a
          href="https://www.linkedin.com/in/abdu-lateef-lf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-400 hover:text-accent transition-colors"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={22} />
        </a>
        <a
          href="mailto:tomiwafadeyi@gmail.com"
          className="text-slate-400 hover:text-accent transition-colors"
          aria-label="Email"
        >
          <FiMail size={22} />
        </a>
      </motion.div>

      <motion.div
        {...fadeUp(0.8)}
        className="mt-16"
      >
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
        >
          <FiArrowDown size={16} className="animate-bounce" />
          Scroll down
        </a>
      </motion.div>
    </section>
  );
}
