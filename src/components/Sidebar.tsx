import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import useCurrentSection from "../hooks/useCurrentSection";

const NAV_LINKS = [
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Education", id: "education" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Contact", id: "contact" },
];

function scrollTo(id: string) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth" });
}

export default function Sidebar() {
  const { currentSection } = useCurrentSection();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navContent = (
    <nav className="flex flex-col gap-1">
      {NAV_LINKS.map(({ label, id }) => {
        const active = currentSection === id;
        return (
          <button
            key={id}
            onClick={() => {
              scrollTo(id);
              setMobileOpen(false);
            }}
            className={`group flex items-center gap-3 text-sm font-medium py-2 px-3 rounded-lg transition-all duration-200 text-left ${
              active
                ? "text-accent bg-accent/10"
                : "text-slate-500 hover:text-slate-800 hover:bg-slate-100"
            }`}
          >
            <span
              className={`h-px transition-all duration-200 ${
                active ? "w-8 bg-accent" : "w-4 bg-slate-300 group-hover:w-6 group-hover:bg-slate-400"
              }`}
            />
            {label}
          </button>
        );
      })}
    </nav>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <motion.aside
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="hidden lg:flex flex-col justify-between fixed top-0 left-0 h-screen w-72 bg-white border-r border-slate-200 px-8 py-12 z-40"
      >
        <div className="flex flex-col gap-10">
          {/* Identity */}
          <div>
            <button
              onClick={() => scrollTo("hero")}
              className="block text-left group"
            >
              <h1 className="text-xl font-bold text-slate-800 leading-tight group-hover:text-accent transition-colors">
                Abdu-Lateef
                <br />
                Lekan-Fadeyi
              </h1>
            </button>
            <p className="mt-2 text-sm text-slate-500 leading-snug">
              AI Software Developer
            </p>
            <p className="text-sm text-slate-400">Software Engineering Student</p>
          </div>

          {navContent}
        </div>

        {/* Bottom: socials + resume */}
        <div className="flex flex-col gap-4">
          <a
            href="/Abdu-Lateef Lekan-Fadeyi's Resume.pdf"
            download
            className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-accent border border-accent rounded-lg px-4 py-2 hover:bg-accent hover:text-white transition-all duration-200"
          >
            Resume
          </a>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Abdu-LateefLF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdu-lateef-lf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:tomiwafadeyi@gmail.com"
              className="text-slate-400 hover:text-accent transition-colors"
              aria-label="Email"
            >
              <FiMail size={20} />
            </a>
          </div>
        </div>
      </motion.aside>

      {/* Mobile top bar */}
      <header className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200 px-5 py-4 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="text-left">
          <span className="font-bold text-slate-800 text-sm">Abdu-Lateef LF</span>
        </button>
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="text-slate-600 hover:text-accent transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </header>

      {/* Mobile drawer */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden fixed top-[61px] left-0 right-0 z-40 bg-white border-b border-slate-200 px-5 py-6 flex flex-col gap-6 shadow-lg"
        >
          {navContent}
          <div className="flex items-center gap-5 pt-2 border-t border-slate-100">
            <a
              href="https://github.com/Abdu-LateefLF"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors"
            >
              <FiGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/abdu-lateef-lf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-accent transition-colors"
            >
              <FiLinkedin size={20} />
            </a>
            <a
              href="mailto:tomiwafadeyi@gmail.com"
              className="text-slate-400 hover:text-accent transition-colors"
            >
              <FiMail size={20} />
            </a>
            <a
              href="/Abdu-Lateef Lekan-Fadeyi's Resume.pdf"
              download
              className="ml-auto text-sm font-semibold text-accent border border-accent rounded-lg px-4 py-1.5 hover:bg-accent hover:text-white transition-all"
            >
              Resume
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
