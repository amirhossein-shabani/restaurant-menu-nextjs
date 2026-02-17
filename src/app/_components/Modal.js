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
        className="relative h-1/3 w-[90%] max-w-lg px-4 py-3 lg:scale-125 bg-black/80 rounded-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute px-2.5 pt-2 text-xl font-bold text-white rounded-full -top-12 left-0.5 bg-black/60 hover:scale-105 transition hover:text-orange-600 "
        >
          ✕
        </button>

        {children}
      </div>
    </div>
  );
}
