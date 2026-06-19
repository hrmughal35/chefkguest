"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const hiTeaItems = [
  {
    name: "Premium Hi-Tea",
    description: "An exquisite spread of mini sandwiches, pastries, macarons, scones, and fine teas curated for a luxurious afternoon.",
    image: "https://images.unsplash.com/photo-1544148103-0773bf10d330?w=500&q=85",
    tag: "Afternoon Experience",
  },
  {
    name: "Family Platter",
    description: "Generous sharing platters loaded with Pakistani favorites — karahi, BBQ bites, naans, and traditional sides for the whole family.",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=500&q=85",
    tag: "Family Sharing",
  },
  {
    name: "Dessert Selection",
    description: "Indulge in our handcrafted desserts — from kulfi and gulab jamun to molten lava cakes and premium ice cream sundaes.",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=500&q=85",
    tag: "Sweet Endings",
  },
];

export default function HiTeaSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section-padding bg-luxury-black relative overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-gold-DEFAULT/[0.04] blur-[100px] pointer-events-none" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-label block mb-4">Beyond Dining</span>
          <h2 className="heading-lg text-white mb-6">
            Hi-Tea, Platters &<br />
            <span className="gold-gradient-text">Sweet Delights</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            The Chef K Guest experience extends beyond meals — from premium hi-tea gatherings
            to generous family platters and indulgent desserts.
          </p>
        </motion.div>

        {/* Items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hiTeaItems.map((item, i) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              className="group relative overflow-hidden luxury-border bg-luxury-card"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-card via-luxury-card/20 to-transparent" />
                <span className="absolute top-4 left-4 bg-gold-DEFAULT/10 backdrop-blur-md border border-gold/30 text-gold-DEFAULT text-[0.6rem] font-semibold tracking-[0.2em] uppercase px-3 py-1.5">
                  {item.tag}
                </span>
              </div>

              <div className="p-6">
                <h3 className="font-playfair text-xl font-semibold text-white mb-3 group-hover:text-gold-DEFAULT transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.description}</p>
              </div>

              {/* Bottom accent */}
              <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-gradient group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
