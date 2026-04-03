import { useState, useCallback, type ReactNode } from "react";
import { createPortal } from "react-dom";
import type { ModalSize } from "../types/type";

const sizeClass: Record<ModalSize, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  full: "max-w-full",
};

export const useModal = (
  size: ModalSize,
  renderContent: (close: () => void) => ReactNode,
) => {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback(() => setIsOpen(true), []);
  const close = useCallback(() => setIsOpen(false), []);

  const Modal = isOpen
    ? createPortal(
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* overlay */}
          <div className="absolute inset-0 bg-black/40" onClick={close} />
          {/* modal content */}
          <div
            className={`relative z-10 w-full ${sizeClass[size]} bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-6 max-h-[90dvh] overflow-y-auto`}
          >
            {renderContent(close)}
          </div>
        </div>,
        document.body,
      )
    : null;

  return { open, close, isOpen, Modal };
};
