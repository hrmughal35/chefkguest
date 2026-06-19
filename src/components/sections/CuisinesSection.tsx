"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const cuisines = [
  {
    name: "Pakistani Cuisine",
    description:
      "Authentic recipes passed through generations — rich gravies, tender karahi, aromatic biryani, and classic desi flavors.",
    tag: "Heritage Flavors",
    image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=600&q=85",
  },
  {
    name: "Turkish Cuisine",
    description:
      "Signature Turkish delicacies featuring succulent kebabs, shawarma, and the finest Ottoman-inspired dishes.",
    tag: "Ottoman Heritage",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600&q=85",
  },
  {
    name: "BBQ Specials",
    description:
      "Slow-cooked perfection over live charcoal — tender tikkas, seekh kebabs, and mixed grills that captivate the senses.",
    tag: "Live Grill",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=600&q=85",
  },
  {
    name: "Chinese Cuisine",
    description:
      "Authentic wok-fired Chinese dishes — from sizzling noodles to rich manchurian and aromatic fried rice.",
    tag: "Wok Mastery",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=600&q=85",
  },
  {
    name: "Continental",
    description:
      "European-inspired elegance on your plate — creamy pastas, grilled steaks, and refined continental specialties.",
    tag: "European Elegance",
    image: "https://images.unsplash.com/photo-1551183053-bf91798d765f?w=600&q=85",
  },
  {
    name: "Fast Food",
    description:
      "Premium burgers, crispy fries, and gourmet sandwiches crafted with the finest ingredients for indulgent moments.",
    tag: "Gourmet Fast Food",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=85",
  },
];

function CuisineCard({
  cuisine,
  index,
}: {
  cuisine: (typeof cuisines)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden bg-luxury-card luxury-border cursor-default"
    >
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={cuisine.image}
          alt={cuisine.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-luxury-dark/30 to-transparent" />

        {/* Tag */}
        <div className="absolute top-4 right-4">
          <span className="bg-gold-DEFAULT/10 backdrop-blur-md border border-gold/30 text-gold-DEFAULT text-[0.6rem] font-semibold tracking-[0.2em] uppercase px-3 py-1.5">
            {cuisine.tag}
          </span>
        </div>

        {/* Arrow on hover */}
        <div className="absolute top-4 left-4 w-8 h-8 bg-luxury-dark/80 border border-gold/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
          <ArrowUpRight size={14} className="text-gold-DEFAULT" />
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-playfair text-lg font-semibold text-white mb-2 group-hover:text-gold-DEFAULT transition-colors duration-300">
          {cuisine.name}
        </h3>
        <p className="text-white/50 text-sm leading-relaxed">{cuisine.description}</p>
      </div>

      {/* Bottom gold line */}
      <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-gold-gradient group-hover:w-full transition-all duration-500" />
    </motion.div>
  );
}

export default function CuisinesSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="cuisines" className="section-padding bg-luxury-black relative overflow-hidden">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-label block mb-4">Signature Cuisines</span>
          <h2 className="heading-lg text-white mb-6">
            A World of Flavors,<br />
            <span className="gold-gradient-text">Under One Roof</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            From the rich spices of South Asia to the refined tastes of continental Europe,
            Chef K Guest brings a world-class culinary journey to Gujranwala.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cuisines.map((cuisine, i) => (
            <CuisineCard key={cuisine.name} cuisine={cuisine} index={i} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-14"
        >
          <p className="text-white/40 text-sm mb-6 tracking-wider">
            Also offering: Hi-Tea · Family Platters · Desserts · Beverages
          </p>
          <button
            onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-gold"
          >
            Reserve Your Table
          </button>
        </motion.div>
      </div>
    </section>
  );
}
