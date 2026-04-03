import type { Variants } from "framer-motion";

export const transactionDetailVariants: Variants = {
  hidden: { x: 40, opacity: 0 },
  visible: { x: 0, opacity: 1 },
  exit: { x: 40, opacity: 0 },
};

export const transactionDetailTransition = {
  duration: 0.25,
  ease: "easeOut",
} as const;

export const transactionDetailWidthTransition =
  "width 0.3s ease-in-out" as const;
