"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Gift, Briefcase, Heart, Users, Sparkles, Star } from "lucide-react";
import Image from "next/image";

const eventTypes = [
  {
    icon: Gift,
    title: "Birthday Parties",
    description: "Celebrate your special day with a curated menu, themed décor, and attentive service.",
  },
  {
    icon: Briefcase,
    title: "Corporate Dinners",
    description: "Impress your clients and team with premium cuisine in our professional dining spaces.",
  },
  {
    icon: Heart,
    title: "Engagement Dinners",
    description: "Begin your forever story with an unforgettable romantic dining experience.",
  },
  {
    icon: Users,
    title: "Family Gatherings",
    description: "Reunite with your loved ones in warm, spacious halls designed for togetherness.",
  },
  {
    icon: Sparkles,
    title: "Special Occasions",
    description: "Anniversary, farewell, graduation — every milestone deserves the finest celebration.",
  },
  {
    icon: Star,
    title: "VIP Experiences",
    description: "Exclusive private dining with personalized menus and dedicated service.",
  },
];

export default function PrivateEventsSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="events" className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1561532897-2cf8c5a7e7b2?w=1920&q=80"
          alt="Private Events"
          fill
          className="object-cover opacity-10"
          sizes="100vw"
        />
      </div>
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-luxury-dark via-luxury-dark/95 to-luxury-dark" />

      {/* Gold corner decorations */}
      <div className="absolute top-12 left-12 w-16 h-16 border-t-2 border-l-2 border-gold/20 hidden lg:block" />
      <div className="absolute top-12 right-12 w-16 h-16 border-t-2 border-r-2 border-gold/20 hidden lg:block" />
      <div className="absolute bottom-12 left-12 w-16 h-16 border-b-2 border-l-2 border-gold/20 hidden lg:block" />
      <div className="absolute bottom-12 right-12 w-16 h-16 border-b-2 border-r-2 border-gold/20 hidden lg:block" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-label block mb-4">Exclusive Experiences</span>
          <h2 className="heading-lg text-white mb-6">
            Private Events &<br />
            <span className="gold-gradient-text">Celebrations</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-white/50 max-w-2xl mx-auto text-base leading-relaxed">
            From intimate dinners to grand celebrations, Chef K Guest provides exclusive
            spaces and tailored menus that make every occasion truly extraordinary.
          </p>
        </motion.div>

        {/* Event Types Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {eventTypes.map((event, i) => {
            const Icon = event.icon;
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="glass-card p-7 group card-hover"
              >
                <div className="w-12 h-12 bg-gold-DEFAULT/10 border border-gold/20 flex items-center justify-center mb-5 group-hover:bg-gold-DEFAULT/20 transition-colors duration-300">
                  <Icon size={20} className="text-gold-DEFAULT" />
                </div>
                <h3 className="font-playfair text-lg font-semibold text-white mb-3 group-hover:text-gold-DEFAULT transition-colors duration-300">
                  {event.title}
                </h3>
                <p className="text-white/50 text-sm leading-relaxed">{event.description}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Booking CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <div className="inline-flex flex-col items-center gap-6 glass-card px-12 py-10 max-w-lg w-full">
            <h3 className="font-playfair text-2xl text-white">
              Plan Your Event
            </h3>
            <p className="text-white/50 text-sm text-center">
              Contact us to discuss your requirements and let us craft the perfect event experience for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <a
                href="tel:+923247103344"
                className="btn-gold text-xs flex-1 text-center"
              >
                Call Us Now
              </a>
              <button
                onClick={() => document.getElementById("reserve")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-outline-gold text-xs flex-1"
              >
                Book Online
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
