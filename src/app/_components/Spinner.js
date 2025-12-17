"use client";
import { motion } from "framer-motion";

function Spinner() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen w-[100vw]  md:w-[90vw] lg:w-[80vw] 2xl:w-[60vw]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-16 h-16 border-4 border-yellow-600 rounded-full md:w-24 md:h-24 border-t-transparent animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
}

export default Spinner;
