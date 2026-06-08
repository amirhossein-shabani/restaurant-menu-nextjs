"use client";

import { useEffect } from "react";

export default function ScrollToHash() {
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash.slice(1); // حذف #
      console.log("Scrolling to hash:", hash);

      if (hash) {
        let attempts = 0;
        const maxAttempts = 15;

        const tryScroll = () => {
          const element = document.getElementById(hash);
          console.log("Attempt", attempts, "- Element found:", !!element);

          if (element) {
            // روش 1: scrollIntoView
            element.scrollIntoView({ behavior: "smooth", block: "start" });

            // روش 2: پدر را scroll کن (برای scroll containers)
            const parent = element.closest("[style*='overflow']");
            if (parent) {
              const offsetTop = element.offsetTop - parent.offsetTop;
              parent.scrollTop = offsetTop;
            }
          } else if (attempts < maxAttempts) {
            attempts++;
            setTimeout(tryScroll, 150);
          }
        };

        // شروع بعد کمی delay
        setTimeout(tryScroll, 200);
      }
    };

    // وقتی صفحه لود شود
    scrollToHash();

    // وقتی hash تغییر کند
    window.addEventListener("hashchange", scrollToHash);

    return () => {
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}
