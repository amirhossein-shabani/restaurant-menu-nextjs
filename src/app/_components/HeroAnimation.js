"use client";

import Image from "next/image";
import coffeBean from "@/public/img/coffee-bean.webp";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroAnimation({ backgroundImageUrl }) {
  return (
    <>
      {/* عکس اصلی + دکمه */}
      <div className="flex items-center justify-center w-full -mt-11 md:-mt-0 scale-[80%] sm:scale-100">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          className="relative z-30 max-w-lg md:max-w-sm sm:max-w-xs lg:hover:scale-[1.15] transition-transform duration-700 ease-out"
        >
          <Image
            src={backgroundImageUrl || coffeBean}
            alt="background picture"
            width={900}
            height={1200}
            priority
            placeholder="empty"
            quality={100}
            className="object-cover object-top w-full"
          />
        </motion.div>
      </div>

      {/* دانه قهوه — بعد از اینکه bg کامل اومد میاد */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
        className="-z-10 "
      >
        <Image
          src={coffeBean}
          quality={80}
          className="object-bottom object-contain w-[80%] md:w-[70%] mx-auto -mt-[10.5rem] md:-mt-[15rem] lg:-mt-[16rem] lg:max-w-4xl xl:-mt-[16rem] 2xl:-mt-[16rem] opacity-[0.89] "
          alt="coffee-bean"
        />
      </motion.div>
    </>
  );
}
