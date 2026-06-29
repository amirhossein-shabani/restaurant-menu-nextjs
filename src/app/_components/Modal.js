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
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 "
      onClick={onClose}
    >
      <div
        className="relative h-auto  w-[90%] max-w-lg  lg:scale-125  rounded-2xl bg-[#AB7F52]/50 border-2 border-white/30"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute px-2.5 pt-2 text-xl font-bold text-white/90 bg-black/40 rounded-full -top-12 left-0.5  hover:scale-105 transition hover:text-white border border-white/20 "
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
