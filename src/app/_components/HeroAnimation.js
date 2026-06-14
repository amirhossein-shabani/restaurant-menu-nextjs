"use client";

import Image from "next/image";
import bg from "@/public/img/bg.png";
import coffeBean from "@/public/img/coffee-bean.webp";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroAnimation() {
  return (
    <>
      {/* عکس اصلی + دکمه */}
      <div className="flex items-center justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0 }}
          className="relative z-30 max-w-lg md:max-w-sm sm:max-w-xs lg:hover:scale-[1.15] transition-transform duration-700 ease-out"
        >
          <Image
            src={bg}
            alt="background picture"
            placeholder="empty"
            quality={100}
            className="object-cover object-top w-full"
          />

          {/* دکمه بعد از bg ظاهر میشه */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: 0.75,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0 flex items-center justify-center text-2xl top-52 lg:top-64 left-6 lg:left-8 sm:text-base md:text-xl"
          >
            <Link
              href="/menu"
              className="px-10 py-1 font-medium text-white transition-all duration-300 ease-out border-4 border-white rounded-full bg-white/30 lg:bg-transparent sm:px-10 md:px-8 lg:hover:text-gray-700 lg:hover:bg-white lg:hover:scale-105"
            >
              منوی کافه
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* دانه قهوه — بعد از اینکه bg کامل اومد میاد */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 1.0, ease: [0.22, 1, 0.36, 1], delay: 0.65 }}
        className="-z-10"
      >
        <Image
          src={coffeBean}
          quality={80}
          className="object-bottom object-contain md:w-[70%] mx-auto sm:w-[80%] -mt-28 sm:-mt-40 md:-mt-[15rem] lg:-mt-[16rem] lg:max-w-4xl xl:-mt-[16rem] 2xl:-mt-[16rem]"
          alt="coffee-bean"
        />
      </motion.div>
    </>
  );
}
