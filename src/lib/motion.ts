import type { Variants, Transition } from "framer-motion";

export const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

export const fadeUpViewport = {
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-80px" },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export const fadeUpTransition = (delay = 0): Transition => ({
  duration: 0.6,
  ease: [0.25, 0.1, 0.25, 1],
  delay,
});
