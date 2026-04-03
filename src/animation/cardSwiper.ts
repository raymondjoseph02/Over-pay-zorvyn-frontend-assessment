import type { Variants } from "framer-motion";

// Swipe animation for cards
export const cardVariants: Variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.35, ease: "easeInOut" },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
    transition: { duration: 0.35, ease: "easeInOut" },
  }),
};
export const indicatorVarVariants: Variants = {
  animate: { width: 24, transition: { duration: 0.3, ease: "easeInOut" } },
  initial: { width: 10, transition: { duration: 0.3, ease: "easeInOut" } },
};

// Optional: drag constraints
export const swipeConfidenceThreshold = 10000;
export const swipePower = (offset: number, velocity: number) =>
  Math.abs(offset) * velocity;
