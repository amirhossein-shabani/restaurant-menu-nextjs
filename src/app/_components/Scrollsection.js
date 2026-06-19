"use client";

import { useRef } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import itemBackupImg from "@/public/img/itemBackupImg.png";

// ─── تعداد باکس‌ها رو اینجا تنظیم کن ──────────────────────────────────────
// توجه: تعداد واقعی از دیتابیس میآید (حداکثر 6)
const FEATURE_BOXES = 6; // section 2 — گرید

// ─── Scroll indicator ──────────────────────────────────────────────────────
function ScrollIndicator() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false });

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center gap-2 pointer-events-none select-none sm:-mt-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: inView ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    >
      {[0, 1, 2].map((i) => (
        <motion.svg
          key={i}
          width="22"
          height="13"
          viewBox="0 0 22 13"
          fill="none"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: [0, 0.85, 0], y: [-4, 2, 6] }}
          transition={{
            duration: 1.4,
            delay: i * 0.18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <path
            d="M1 1.5L11 10.5L21 1.5"
            stroke="#C8A96E"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </motion.svg>
      ))}
      <p className="text-[#C8A96E]/60 text-xs tracking-[0.2em] mt-1">
        اسکرول کنید
      </p>
    </motion.div>
  );
}

// ─── Section title ─────────────────────────────────────────────────────────
function SectionTitle({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-15% 0px -15% 0px" });
  const { scrollY } = useScroll();

  // تغییر رنگ بر اساس موقعیت اسکرول
  const textColor = useTransform(
    scrollY,
    [0, 800, 1000, 1200],
    [
      "rgb(255, 255, 255)", // سفید - بالای صفحه (تیره)
      "rgb(255, 255, 255)", // سفید
      "#270400", // سیاه - وسط
      "#270400", // سیاه - پایین صفحه (سفید)
    ],
  );

  // لاین‌ها هم همون رنگ
  const lineColor = useTransform(
    scrollY,
    [0, 800, 1000, 1200],
    [
      "rgba(200, 169, 110, 0.3)", // #C8A96E - بالا
      "rgba(200, 169, 110, 0.3)",
      "#270400", // سیاه - وسط
      "#270400", // پایین
    ],
  );

  return (
    <motion.div
      ref={ref}
      className="flex items-center gap-4 mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <motion.span
        style={{ backgroundColor: lineColor }}
        className="flex-1 h-px bg-gradient-to-l from-[#C8A96E]/30 to-transparent"
      />
      <motion.h2
        style={{ color: textColor }}
        className="text-lg font-semibold tracking-[0.2em] whitespace-nowrap"
      >
        {children}
      </motion.h2>
      <motion.span
        style={{ backgroundColor: lineColor }}
        className="flex-1 h-px bg-gradient-to-r from-[#C8A96E]/30 to-transparent"
      />
    </motion.div>
  );
}

// ─── Category box (چپ / راست) ──────────────────────────────────────────────
function CategoryBox({ index, category }) {
  const router = useRouter();
  const ref = useRef(null);
  const isLeft = index % 2 === 0;

  const inView = useInView(ref, {
    once: false,
    margin: "-8% 0px -8% 0px",
  });

  const variants = {
    hidden: {
      x: isLeft ? "-100%" : "100%",
      opacity: 0,
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.65,
        delay: 0.05 * (index % 3),
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      x: isLeft ? "-100%" : "100%",
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: [0.55, 0, 1, 0.45],
      },
    },
  };

  const handleCategoryClick = () => {
    router.push(`/menu#${category?.href}`);
  };

  return (
    <motion.div
      ref={ref}
      className="overflow-hidden"
      style={{
        display: "flex",
        justifyContent: isLeft ? "flex-start" : "flex-end",
      }}
      initial="hidden"
      animate={inView ? "visible" : "exit"}
      variants={variants}
    >
      <button
        onClick={handleCategoryClick}
        className="w-full max-w-sm  min-h-[72px] rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm px-4 flex items-center gap-3 cursor-pointer hover:bg-white/10 transition-colors"
      >
        <div className="relative flex-shrink-0 w-32 h-32 overflow-hidden rounded-lg">
          <Image
            src={
              category.landingImageUrl
                ? category?.landingImageUrl
                : category?.imgUrl
            }
            alt={category.categoryTitle}
            fill
            className="object-cover"
          />
        </div>
        <p className="flex-1 text-xl font-semibold text-center text-white">
          {category?.categoryTitle || "عنوان دسته‌بندی"}
        </p>
      </button>
    </motion.div>
  );
}

// ─── Feature box (گرید) ────────────────────────────────────────────────────
function FeatureBox({ index, item }) {
  const ref = useRef(null);
  const col = index % 3;

  // هر ستون از یه مسیر متفاوت میاد
  const entryX = col === 0 ? -60 : col === 2 ? 60 : 0;
  const entryY = col === 1 ? 60 : 30;

  const inView = useInView(ref, {
    once: false,
    margin: "-10% 0px -10% 0px",
  });

  const variants = {
    hidden: {
      x: entryX,
      y: entryY,
      opacity: 0,
      scale: 0.9,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.7,
        delay: 0.08 * index,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      x: entryX * 0.7,
      y: entryY * 0.7,
      opacity: 0,
      scale: 0.92,
      transition: {
        duration: 0.45,
        ease: [0.55, 0, 1, 0.45],
      },
    },
  };

  if (!item) return null;

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "exit"}
      variants={variants}
    >
      <div className="flex flex-col overflow-hidden transition-colors duration-300 border rounded-2xl border-white/20 bg-white/10 backdrop-blur-sm hover:bg-white/20 h-80">
        <div className="relative flex-shrink-0 w-full h-48 overflow-hidden">
          <Image
            src={item.imgUrl || itemBackupImg}
            alt={item.name}
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-between flex-1 gap-2 p-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">{item.name}</h3>
            {item.description && (
              <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                {item.description}
              </p>
            )}
          </div>
          <div className="flex items-center justify-end w-full">
            <span className="text-xl font-bold text-gray-700">
              {item.price}
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Divider ───────────────────────────────────────────────────────────────
function Divider() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: false, margin: "-20% 0px -20% 0px" });

  return (
    <motion.div
      ref={ref}
      className="relative flex items-center justify-center w-full my-12"
      initial={{ opacity: 0, scaleX: 0.4 }}
      animate={inView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0.4 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#270400]/25 to-transparent" />
      <span className="relative z-10 px-4">
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
          <circle cx="13" cy="13" r="4.5" stroke="#270400" strokeWidth="1.3" />
          <circle cx="13" cy="13" r="1.8" fill="#270400" opacity="0.65" />
          {[
            [13, 0, 13, 6],
            [13, 20, 13, 26],
            [0, 13, 6, 13],
            [20, 13, 26, 13],
          ].map(([x1, y1, x2, y2], i) => (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#270400"
              strokeWidth="1"
              opacity="0.35"
            />
          ))}
        </svg>
      </span>
    </motion.div>
  );
}

// ─── Main export ───────────────────────────────────────────────────────────
export default function ScrollSections({
  categories = [],
  suggestedItems = [],
}) {
  return (
    <>
      <ScrollIndicator />

      {/* Section 1 — category boxes */}
      <section className="relative w-full max-w-3xl px-4 mx-auto mt-24 mb-16 overflow-hidden">
        <SectionTitle>دسته‌بندی</SectionTitle>
        <div className="flex flex-col gap-4">
          {categories.map((category, i) => (
            <CategoryBox key={category.id} index={i} category={category} />
          ))}
        </div>
      </section>

      <Divider />

      {/* Section 2 — Item  boxes */}
      <section className="relative w-full max-w-4xl px-4 mx-auto mt-8 mb-40">
        <SectionTitle> پیشنهاد های ما </SectionTitle>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {suggestedItems.map((item, i) => (
            <FeatureBox key={item.id} index={i} item={item} />
          ))}
        </div>
      </section>
    </>
  );
}
