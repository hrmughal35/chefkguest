"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, ChevronUp, Calendar } from "lucide-react";

export default function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showTooltip, setShowTooltip] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Scroll to Top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={scrollToTop}
            className="w-10 h-10 bg-luxury-border border border-gold/20 flex items-center justify-center text-white/60 hover:text-gold-DEFAULT hover:border-gold/50 transition-all duration-300"
            aria-label="Scroll to top"
            onMouseEnter={() => setShowTooltip("top")}
            onMouseLeave={() => setShowTooltip(null)}
          >
            <ChevronUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Reserve Button */}
      <div className="relative">
        <AnimatePresence>
          {showTooltip === "reserve" && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-luxury-dark border border-gold/20 text-white text-xs px-3 py-1.5 whitespace-nowrap"
            >
              Reserve a Table
            </motion.span>
          )}
        </AnimatePresence>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}
          className="w-12 h-12 bg-gold-DEFAULT flex items-center justify-center text-luxury-dark shadow-gold hover:shadow-gold-lg transition-all duration-300 hover:scale-110"
          aria-label="Reserve a table"
          onMouseEnter={() => setShowTooltip("reserve")}
          onMouseLeave={() => setShowTooltip(null)}
        >
          <Calendar size={20} />
        </motion.button>
      </div>

      {/* WhatsApp Button */}
      <div className="relative">
        <AnimatePresence>
          {showTooltip === "whatsapp" && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-luxury-dark border border-gold/20 text-white text-xs px-3 py-1.5 whitespace-nowrap"
            >
              Chat on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          href="https://wa.me/923247103344?text=Hello!%20I%20would%20like%20to%20make%20a%20reservation%20at%20Chef%20K%20Guest."
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 bg-[#25D366] flex items-center justify-center text-white shadow-[0_0_20px_rgba(37,211,102,0.3)] hover:shadow-[0_0_30px_rgba(37,211,102,0.5)] hover:scale-110 transition-all duration-300"
          aria-label="Chat on WhatsApp"
          onMouseEnter={() => setShowTooltip("whatsapp")}
          onMouseLeave={() => setShowTooltip(null)}
        >
          <MessageCircle size={22} />
        </motion.a>
      </div>

      {/* Call Button */}
      <div className="relative">
        <AnimatePresence>
          {showTooltip === "call" && (
            <motion.span
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-luxury-dark border border-gold/20 text-white text-xs px-3 py-1.5 whitespace-nowrap"
            >
              Call Us Now
            </motion.span>
          )}
        </AnimatePresence>
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          href="tel:+923247103344"
          className="w-12 h-12 bg-luxury-border border border-gold/20 flex items-center justify-center text-gold-DEFAULT hover:bg-gold-DEFAULT hover:text-luxury-dark hover:border-transparent hover:scale-110 transition-all duration-300 shadow-card"
          aria-label="Call now"
          onMouseEnter={() => setShowTooltip("call")}
          onMouseLeave={() => setShowTooltip(null)}
        >
          <Phone size={20} />
        </motion.a>
      </div>
    </div>
  );
}
