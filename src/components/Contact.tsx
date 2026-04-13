import { motion } from "framer-motion";
import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";
import { fadeUpVariants, fadeUpViewport, fadeUpTransition } from "../lib/motion";

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/Abdu-LateefLF",
    icon: FiGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/abdu-lateef-lf",
    icon: FiLinkedin,
  },
  {
    label: "tomiwafadeyi@gmail.com",
    href: "mailto:tomiwafadeyi@gmail.com",
    icon: FiMail,
  },
] as const;

export default function Contact() {
  return (
    <section id="contact" className="section bg-white border-t border-slate-200">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-28 text-center">
        <motion.div
          {...fadeUpViewport}
          variants={fadeUpVariants}
          transition={fadeUpTransition()}
        >
          <p className="text-accent font-mono text-sm font-medium mb-4 tracking-wide">
            06. What's Next?
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-800 mb-6">
            Get In Touch
          </h2>
          <p className="max-w-lg mx-auto text-slate-500 leading-relaxed mb-10">
            I'm currently open to new opportunities. Whether you have a question,
            a project in mind, or just want to say hi, my inbox is always open.
          </p>

          <a
            href="mailto:tomiwafadeyi@gmail.com"
            className="inline-flex items-center gap-2 text-accent border border-accent rounded-lg px-8 py-3 font-semibold hover:bg-accent hover:text-white transition-all duration-200 mb-12"
          >
            <FiMail size={16} />
            Say Hello
          </a>

          <div className="flex items-center justify-center gap-8">
            {SOCIAL_LINKS.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("mailto") ? undefined : "_blank"}
                rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-accent transition-colors"
                aria-label={label}
              >
                <Icon size={18} />
                <span className="hidden sm:inline">{label}</span>
              </a>
            ))}
          </div>
        </motion.div>

        <p className="mt-16 text-xs text-slate-400">
          Designed &amp; built by Abdu-Lateef Lekan-Fadeyi · {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
