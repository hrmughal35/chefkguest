"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

export default function BrandStorySection() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <section className="section-padding bg-[#0E0E0E] relative overflow-hidden">
      {/* Side glow */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-gold-DEFAULT/20 to-transparent" />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-px h-3/4 bg-gradient-to-b from-transparent via-gold-DEFAULT/20 to-transparent" />

      <div className="container-luxury">
        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative h-[520px] overflow-hidden luxury-border">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&q=90"
                alt="Chef K Guest Interior"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="absolute -bottom-6 -right-6 w-36 h-36 bg-gold-DEFAULT flex flex-col items-center justify-center text-center p-4"
            >
              <span className="font-playfair text-luxury-dark text-3xl font-bold leading-none">10+</span>
              <span className="text-luxury-dark/80 text-[0.6rem] uppercase tracking-wider mt-1 font-semibold leading-tight">
                Cuisine<br />Types
              </span>
            </motion.div>

            {/* Small accent image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -top-6 -left-6 w-32 h-32 overflow-hidden border-2 border-gold/20"
            >
              <Image
                src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=300&q=85"
                alt="Restaurant ambiance"
                fill
                className="object-cover"
                sizes="128px"
              />
            </motion.div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            <span className="luxury-label block mb-4">Our Story</span>
            <h2 className="heading-lg text-white mb-6">
              A Complete Dining<br />
              <span className="gold-gradient-text">Destination</span>
            </h2>
            <div className="w-16 h-px bg-gold-DEFAULT mb-8" />

            <p className="text-white/60 text-base leading-relaxed mb-6">
              Chef K Guest is not just a restaurant. It is a complete dining destination
              where families, friends, professionals, and guests come to enjoy premium food,
              luxurious ambiance, and memorable experiences.
            </p>
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Located at the heart of Gujranwala on Sialkot Bypass, opposite Gift University,
              we have crafted an environment that blends authentic Pakistani hospitality with
              the elegance of international fine dining.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {[
                "Premium Pakistani Cuisine",
                "Authentic Turkish Flavors",
                "Live BBQ Grill Station",
                "Family Private Halls",
                "Hi-Tea & Dessert Bar",
                "Events & Celebrations",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <div className="w-1 h-1 bg-gold-DEFAULT rounded-full shrink-0" />
                  <span className="text-white/60 text-sm">{item}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-gold text-xs"
              >
                Reserve Your Table
              </button>
              <button
                onClick={() => document.getElementById("gallery")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline-gold text-xs"
              >
                View Gallery
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
