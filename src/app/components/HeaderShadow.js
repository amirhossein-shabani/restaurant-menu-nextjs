"use client";

import { useEffect, useState } from "react";

function HeaderShadow({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sm:fixed sm:inset-x-0  flex item-center text-3xl justify-center flex-row-reverse max-w-6xl mx-auto py-6 sm:px-6 md:px-4 sm:justify-between md:text-4xl z-40 rounded-xl sm:mt-6 transition duration-800 h-28 ${
        scrolled
          ? "sm:bg-white/10 sm:backdrop-blur-md sm:shadow-md"
          : "sm:bg-transparent sm:backdrop-blur-0 sm:shadow-none"
      }`}
    >
      {children}
    </header>
  );
}

export default HeaderShadow;
