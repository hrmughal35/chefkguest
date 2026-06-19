"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Corporate Executive",
    location: "Gujranwala",
    rating: 5,
    text: "Chef K Guest has redefined fine dining in Gujranwala. The ambiance is absolutely stunning and the Turkish kebabs are the best I've ever had. A perfect venue for our corporate dinners.",
    initials: "AR",
  },
  {
    name: "Fatima Malik",
    role: "Food Blogger",
    location: "Lahore",
    rating: 5,
    text: "Visited for a family dinner and was blown away by both the food and the service. The Pakistani cuisine section is authentic and incredibly flavorful. The Grand BBQ Platter is a must-try!",
    initials: "FM",
  },
  {
    name: "Usman Khan",
    role: "Business Owner",
    location: "Sialkot",
    rating: 5,
    text: "We hosted our company's annual dinner at Chef K Guest and it was an unforgettable experience. The private events team was professional, attentive, and the food was world-class.",
    initials: "UK",
  },
  {
    name: "Sana Tariq",
    role: "Food Enthusiast",
    location: "Gujranwala",
    rating: 5,
    text: "The luxury ambiance, exceptional service, and outstanding food quality make Chef K Guest truly unique. The Continental section has now become my go-to recommendation for guests from abroad.",
    initials: "ST",
  },
  {
    name: "Hassan Iqbal",
    role: "Architect",
    location: "Gujranwala",
    rating: 5,
    text: "As someone who appreciates fine design and quality, I have to say Chef K Guest exceeds expectations on every level. The space is beautiful, the food is exceptional, and the staff is first-class.",
    initials: "HI",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, next]);

  const testimony = testimonials[current];

  return (
    <section className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)`,
          backgroundSize: "60px 60px",
        }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-gold-DEFAULT/[0.04] blur-[100px] pointer-events-none" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-label block mb-4">Guest Voices</span>
          <h2 className="heading-lg text-white mb-6">
            What Our Guests<br />
            <span className="gold-gradient-text">Say About Us</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        {/* Testimonial Slider */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="glass-card p-10 md:p-14 text-center relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 bg-gold-DEFAULT flex items-center justify-center">
                <Quote size={20} className="text-luxury-dark fill-luxury-dark" />
              </div>

              {/* Stars */}
              <div className="flex justify-center gap-1 mb-6 mt-3">
                {[...Array(testimony.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-gold-DEFAULT text-gold-DEFAULT" />
                ))}
              </div>

              {/* Text */}
              <p className="font-playfair text-white/80 text-lg md:text-xl leading-relaxed italic mb-10">
                &ldquo;{testimony.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-gold-DEFAULT/20 border border-gold/30 flex items-center justify-center">
                  <span className="font-playfair text-gold-DEFAULT font-bold">{testimony.initials}</span>
                </div>
                <h4 className="font-inter font-semibold text-white">{testimony.name}</h4>
                <p className="text-white/40 text-sm">
                  {testimony.role} · {testimony.location}
                </p>
              </div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-gold/20" />
              <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-gold/20" />
              <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-gold/20" />
              <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-gold/20" />
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 border border-gold/20 flex items-center justify-center text-white/50 hover:text-gold-DEFAULT hover:border-gold/50 transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setCurrent(i); setIsAutoPlaying(false); }}
                  className={`transition-all duration-300 ${
                    i === current
                      ? "w-8 h-1.5 bg-gold-DEFAULT"
                      : "w-1.5 h-1.5 bg-gold/20 hover:bg-gold/40 rounded-full"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => { next(); setIsAutoPlaying(false); }}
              className="w-10 h-10 border border-gold/20 flex items-center justify-center text-white/50 hover:text-gold-DEFAULT hover:border-gold/50 transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* Google Rating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="flex justify-center mt-12"
        >
          <div className="flex items-center gap-4 border border-gold/15 px-6 py-4 bg-luxury-card">
            <div className="text-center">
              <div className="font-playfair text-3xl font-bold text-gold-DEFAULT">4.9</div>
              <div className="flex gap-0.5 mt-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={10} className="fill-gold-DEFAULT text-gold-DEFAULT" />
                ))}
              </div>
            </div>
            <div className="w-px h-10 bg-gold/15" />
            <div>
              <p className="text-white/70 text-sm font-medium">Highly Rated</p>
              <p className="text-white/40 text-xs">Premium Dining Experience</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
