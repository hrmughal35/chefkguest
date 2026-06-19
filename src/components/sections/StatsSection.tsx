"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const stats = [
  { value: 10, suffix: "+", label: "Cuisine Types", description: "From Pakistani to Continental" },
  { value: 500, suffix: "+", label: "Happy Families", description: "Served with excellence" },
  { value: 5, suffix: "★", label: "Premium Rating", description: "Consistently top-rated" },
  { value: 7, suffix: "/7", label: "Days Open", description: "12 PM – 12 AM daily" },
];

function AnimatedCounter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  const started = useRef(false);

  useEffect(() => {
    if (inView && !started.current) {
      started.current = true;
      const duration = 2000;
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.round(eased * target));
        if (progress < 1) requestAnimationFrame(animate);
      };

      requestAnimationFrame(animate);
    }
  }, [inView, target]);

  return (
    <span ref={ref} className="font-playfair text-5xl md:text-6xl font-bold gold-gradient-text">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <section className="py-24 bg-[#0E0E0E] relative overflow-hidden">
      {/* Gold horizontal lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/30 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/30 to-transparent" />

      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gold-DEFAULT/[0.02] to-transparent" />

      <div className="container-luxury relative z-10">
        <div
          ref={ref}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4"
        >
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="flex flex-col items-center text-center group"
            >
              <AnimatedCounter target={stat.value} suffix={stat.suffix} />
              <div className="gold-divider w-10 my-4 transition-all duration-500 group-hover:w-16" />
              <h4 className="font-inter font-semibold text-white text-sm tracking-wider mb-1">
                {stat.label}
              </h4>
              <p className="text-white/40 text-xs">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
