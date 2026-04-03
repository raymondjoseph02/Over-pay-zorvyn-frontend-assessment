import { useEffect, type RefObject } from "react";

const useClickOutside = <T extends HTMLElement>(
  ref: RefObject<T | null>,
  onClose: () => void,
  enabled = true,
) => {
  useEffect(() => {
    if (!enabled) return;
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [ref, onClose, enabled]);
};

export default useClickOutside;
