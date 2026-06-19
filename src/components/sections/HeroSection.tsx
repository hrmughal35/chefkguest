"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Star } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yParallax = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleReserve = () => {
    document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleMenu = () => {
    document.getElementById("cuisines")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <motion.div
        style={{ y: yParallax, scale }}
        className="absolute inset-0 z-0"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=90')`,
          }}
        />
      </motion.div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 z-10 bg-hero-overlay" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-luxury-black/60 via-transparent to-luxury-black/20" />

      {/* Animated gold particles */}
      {mounted && (
        <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gold-DEFAULT/40"
              style={{
                left: `${10 + i * 8}%`,
                top: `${20 + (i % 4) * 20}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.3,
              }}
            />
          ))}
        </div>
      )}

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-20 text-center px-6 max-w-5xl mx-auto"
      >
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-8"
        >
          <div className="gold-divider w-16" />
          <span className="luxury-label tracking-[0.35em]">Gujranwala, Pakistan</span>
          <div className="gold-divider w-16" />
        </motion.div>

        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="heading-xl text-white mb-6 text-balance"
        >
          Where Exceptional Food
          <br />
          <span className="gold-gradient-text">Meets Elegant Ambiance</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="text-white/65 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          Experience premium dining, authentic flavors, and unforgettable moments
          at Gujranwala&apos;s finest culinary destination.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <button onClick={handleReserve} className="btn-gold text-sm min-w-[180px]">
            Reserve a Table
          </button>
          <button onClick={handleMenu} className="btn-outline-gold text-sm min-w-[180px]">
            Explore Menu
          </button>
        </motion.div>

        {/* Ratings */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="flex items-center justify-center gap-6 mt-14"
        >
          <div className="flex flex-col items-center gap-1">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={12} className="fill-gold-DEFAULT text-gold-DEFAULT" />
              ))}
            </div>
            <span className="text-white/40 text-xs tracking-wider">Premium Quality</span>
          </div>
          <div className="w-px h-8 bg-gold/20" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-playfair text-2xl text-gold-DEFAULT font-bold">10+</span>
            <span className="text-white/40 text-xs tracking-wider">Cuisine Types</span>
          </div>
          <div className="w-px h-8 bg-gold/20" />
          <div className="flex flex-col items-center gap-1">
            <span className="font-playfair text-2xl text-gold-DEFAULT font-bold">500+</span>
            <span className="text-white/40 text-xs tracking-wider">Happy Families</span>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 cursor-pointer"
        onClick={() =>
          document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })
        }
      >
        <span className="luxury-label text-[0.6rem] tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown size={18} className="text-gold-DEFAULT" />
        </motion.div>
      </motion.div>
    </section>
  );
}
