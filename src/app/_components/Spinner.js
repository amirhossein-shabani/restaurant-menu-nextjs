"use client";
import { motion } from "framer-motion";

function Spinner() {
  return (
    <motion.div
      className="flex items-center justify-center h-screen "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="w-16 h-16 border-4 rounded-full border-[#270400]/60 md:w-24 md:h-24 border-t-transparent animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
    </motion.div>
  );
}

export default Spinner;
