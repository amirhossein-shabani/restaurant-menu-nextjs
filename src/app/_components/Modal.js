"use client";

import { useEffect } from "react";

// this modal for the Ui

export default function Modal({ isOpen, onClose, children }) {
  useEffect(() => {
    function handleKey(e) {
      if (e.key === "Escape") onClose();
    }

    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="relative w-[90%] max-w-lg bg-neutral-900 p-6 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute text-white top-3 left-3">
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
