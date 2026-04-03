import type { Variants } from "framer-motion";

export const dropdownVariants: Variants = {
  closed: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
  open: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.25, ease: "easeInOut" },
  },
};

export const chevronVariants: Variants = {
  closed: { rotate: 0, transition: { duration: 0.25 } },
  open: { rotate: 180, transition: { duration: 0.25 } },
};
