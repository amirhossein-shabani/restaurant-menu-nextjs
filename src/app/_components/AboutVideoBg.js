"use client";

import { useRef, useEffect, useState } from "react";

export default function AboutVideoBg({ url }) {
  const videoRef = useRef(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <>
      {/* بک‌گراند تاریک پیش‌فرض */}
      <div className="fixed inset-0 -z-20 md:hidden bg-[#1a0800]" />

      {/* اسپینر تا ویدیو آماده بشه */}
      {!ready && (
        <div className="fixed inset-0 flex items-center justify-center -z-10 md:hidden">
          <div className="w-8 h-8 border-2 rounded-full border-white/20 border-t-white/80 animate-spin" />
        </div>
      )}

      {/* ویدیو */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        onCanPlay={() => setReady(true)}
        className={`fixed inset-0 w-full h-full object-cover -z-10 md:hidden transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={url} type="video/mp4" />
      </video>

      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/50 -z-10 md:hidden transition-opacity duration-700 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
      />
    </>
  );
}
