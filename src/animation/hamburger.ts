import { type Variants } from "framer-motion";

export const topLine: Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: 45, y: 8 },
};

export const middleLine: Variants = {
  closed: { opacity: 1 },
  open: { opacity: 0 },
};

export const bottomLine: Variants = {
  closed: { rotate: 0, y: 0 },
  open: { rotate: -45, y: -8 },
};
