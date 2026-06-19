"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Sparkles, Heart, Users, Crown } from "lucide-react";
import Image from "next/image";

const experiences = [
  {
    icon: Crown,
    title: "Luxury Ambiance",
    description:
      "Immerse yourself in an atmosphere of refined elegance, where every detail has been curated to create an unforgettable dining environment.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&q=85",
  },
  {
    icon: Sparkles,
    title: "Premium Hospitality",
    description:
      "Our dedicated team delivers world-class service with warmth and precision, ensuring every moment exceeds your highest expectations.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
  },
  {
    icon: Heart,
    title: "Family Gatherings",
    description:
      "Create cherished memories in our warm, welcoming spaces designed specifically to bring families and loved ones together.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=85",
  },
  {
    icon: Users,
    title: "Private Events",
    description:
      "From intimate celebrations to grand corporate gatherings, our versatile event spaces and bespoke menus ensure your occasion is extraordinary.",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=85",
  },
];

function ExperienceCard({
  item,
  index,
}: {
  item: (typeof experiences)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });
  const Icon = item.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="group relative overflow-hidden luxury-border bg-luxury-card card-hover cursor-default"
    >
      {/* Image */}
      <div className="relative h-56 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-card via-luxury-card/20 to-transparent" />
        <div className="absolute top-4 left-4">
          <div className="w-10 h-10 bg-gold-DEFAULT/10 border border-gold/30 flex items-center justify-center backdrop-blur-sm">
            <Icon size={18} className="text-gold-DEFAULT" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <h3 className="heading-md text-white mb-3 text-xl">{item.title}</h3>
        <p className="text-white/55 text-sm leading-relaxed">{item.description}</p>

        {/* Gold accent line */}
        <div className="mt-6 w-0 h-px bg-gold-DEFAULT group-hover:w-12 transition-all duration-500" />
      </div>

      {/* Corner accent */}
      <div className="absolute bottom-0 right-0 w-16 h-16 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute bottom-0 right-0 w-full h-full border-b-2 border-r-2 border-gold/30" />
      </div>
    </motion.div>
  );
}

export default function ExperienceSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="experience" className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-label block mb-4">The Chef K Guest Experience</span>
          <h2 className="heading-lg text-white mb-6">
            More Than a Meal —<br />
            <span className="gold-gradient-text">An Experience</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            Every visit to Chef K Guest is a journey through flavors, elegance, and warm
            hospitality that leaves lasting impressions.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((item, i) => (
            <ExperienceCard key={item.title} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
