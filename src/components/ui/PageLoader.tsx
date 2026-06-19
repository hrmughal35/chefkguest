"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.8, ease: "easeInOut" } }}
          className="fixed inset-0 z-[200] bg-luxury-black flex flex-col items-center justify-center"
        >
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center mb-8"
          >
            <h1 className="font-playfair text-3xl font-bold text-white tracking-wide mb-1">
              Chef K Guest
            </h1>
            <p className="luxury-label text-[0.65rem] tracking-[0.35em]">
              Premium Restaurant · Gujranwala
            </p>
          </motion.div>

          {/* Gold loading bar */}
          <motion.div
            className="w-32 h-px bg-luxury-border overflow-hidden"
          >
            <motion.div
              className="h-full bg-gold-gradient"
              initial={{ x: "-100%" }}
              animate={{ x: "100%" }}
              transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
            />
          </motion.div>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-white/25 text-xs tracking-[0.2em] mt-6 uppercase"
          >
            Where Excellence Meets Elegance
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
