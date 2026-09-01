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
      className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-[2px] bg-black/40 "
      onClick={onClose}
    >
      <div
        className="relative h-auto w-[80%] max-w-md  rounded-2xl "
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute px-2 pt-1 text-xl font-bold text-[#E5C89E]/90 bg-black/40 rounded-full -top-12 left-0.5  hover:scale-105 transition hover:text-[#E5C89E] border border-[#E5C89E]/20 "
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
