"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Flame, Star } from "lucide-react";
import Image from "next/image";

const recommendations = [
  {
    name: "Royal Mutton Karahi",
    category: "Pakistani Signature",
    description: "Slow-cooked tender mutton in rich tomato-based masala with aromatic spices and fresh cream.",
    price: "PKR 2,800",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=500&q=85",
    badge: "Chef's Pick",
    rating: 5,
    hot: true,
  },
  {
    name: "Turkish Mixed Grill",
    category: "Turkish Signature",
    description: "Premium lamb and chicken kebabs, seekh kabab, and adana kebab served on a bed of saffron rice.",
    price: "PKR 3,500",
    image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=500&q=85",
    badge: "Most Loved",
    rating: 5,
    hot: false,
  },
  {
    name: "Grand BBQ Platter",
    category: "BBQ Specials",
    description: "An indulgent assortment of our finest BBQ: boti, seekh, tikka, and malai for the entire family.",
    price: "PKR 4,200",
    image: "https://images.unsplash.com/photo-1558030006-450675393462?w=500&q=85",
    badge: "Family Favorite",
    rating: 5,
    hot: true,
  },
  {
    name: "Continental Grilled Steak",
    category: "Continental",
    description: "Prime cut beef steak grilled to perfection, served with roasted vegetables and mushroom sauce.",
    price: "PKR 3,200",
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500&q=85",
    badge: "Premium Cut",
    rating: 4,
    hot: false,
  },
];

function DishCard({
  dish,
  index,
}: {
  dish: (typeof recommendations)[0];
  index: number;
}) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.12 }}
      className="group glass-card overflow-hidden card-hover"
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={dish.image}
          alt={dish.name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 1280px) 50vw, 25vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark/90 to-transparent" />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex items-center gap-2">
          <span className="bg-gold-DEFAULT text-luxury-dark text-[0.6rem] font-bold tracking-widest uppercase px-2.5 py-1">
            {dish.badge}
          </span>
          {dish.hot && (
            <span className="bg-red-600/80 backdrop-blur-sm text-white text-[0.6rem] font-bold px-2 py-1 flex items-center gap-1">
              <Flame size={10} /> Hot
            </span>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <div>
            <p className="luxury-label text-[0.6rem] mb-1">{dish.category}</p>
            <h3 className="font-playfair text-lg font-semibold text-white group-hover:text-gold-DEFAULT transition-colors duration-300">
              {dish.name}
            </h3>
          </div>
          <span className="font-playfair text-gold-DEFAULT font-bold text-base whitespace-nowrap ml-3">
            {dish.price}
          </span>
        </div>

        <p className="text-white/50 text-sm leading-relaxed mt-3 mb-5">
          {dish.description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < dish.rating
                    ? "fill-gold-DEFAULT text-gold-DEFAULT"
                    : "text-white/20"
                }
              />
            ))}
          </div>
          <span className="text-white/30 text-xs">Highly Rated</span>
        </div>
      </div>
    </motion.div>
  );
}

export default function ChefsRecommendations() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gold-DEFAULT/3 blur-[120px] pointer-events-none" />

      <div className="container-luxury relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-label block mb-4">Curated Excellence</span>
          <h2 className="heading-lg text-white mb-6">
            Chef&apos;s<br />
            <span className="gold-gradient-text">Recommendations</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Handpicked by our executive chef — the finest dishes that define the
            Chef K Guest culinary experience.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recommendations.map((dish, i) => (
            <DishCard key={dish.name} dish={dish} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
