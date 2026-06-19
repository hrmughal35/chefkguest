"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const galleryItems = [
  {
    category: "Indoor Dining",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=85",
    span: "col-span-1 md:col-span-2 row-span-2",
  },
  {
    category: "Family Hall",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&q=85",
    span: "col-span-1 row-span-1",
  },
  {
    category: "Private Dining",
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&q=85",
    span: "col-span-1 row-span-1",
  },
  {
    category: "Outdoor Dining",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=85",
    span: "col-span-1 row-span-1",
  },
  {
    category: "Event Area",
    image: "https://images.unsplash.com/photo-1561532897-2cf8c5a7e7b2?w=600&q=85",
    span: "col-span-1 row-span-1",
  },
  {
    category: "Fine Dining",
    image: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600&q=85",
    span: "col-span-1 md:col-span-2 row-span-1",
  },
];

export default function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const openLightbox = (index: number) => setLightboxIndex(index);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((i) => (i !== null ? (i - 1 + galleryItems.length) % galleryItems.length : null));
  const next = () =>
    setLightboxIndex((i) => (i !== null ? (i + 1) % galleryItems.length : null));

  return (
    <section id="gallery" className="section-padding bg-luxury-black relative overflow-hidden">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-label block mb-4">Visual Journey</span>
          <h2 className="heading-lg text-white mb-6">
            Our Stunning<br />
            <span className="gold-gradient-text">Ambiance</span>
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-white/50 max-w-xl mx-auto text-base leading-relaxed">
            Step inside and experience spaces crafted for elegance, comfort, and lasting memories.
          </p>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 auto-rows-[200px]">
          {galleryItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`relative overflow-hidden group cursor-pointer ${item.span}`}
              onClick={() => openLightbox(i)}
            >
              <Image
                src={item.image}
                alt={item.category}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-luxury-dark/0 group-hover:bg-luxury-dark/50 transition-all duration-500" />

              {/* Overlay content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <ZoomIn size={28} className="text-gold-DEFAULT mb-3" />
                <span className="luxury-label text-[0.65rem] tracking-[0.2em]">
                  {item.category}
                </span>
              </div>

              {/* Category label */}
              <div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                <span className="bg-gold-DEFAULT/10 backdrop-blur-md border border-gold/30 text-white text-[0.6rem] font-semibold tracking-[0.15em] uppercase px-3 py-1.5">
                  {item.category}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-luxury-black/97 backdrop-blur-xl flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close */}
            <button
              className="absolute top-6 right-6 p-3 border border-gold/20 text-white/60 hover:text-gold-DEFAULT hover:border-gold/50 transition-all duration-300 z-10"
              onClick={closeLightbox}
            >
              <X size={20} />
            </button>

            {/* Prev */}
            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 p-3 border border-gold/20 text-white/60 hover:text-gold-DEFAULT hover:border-gold/50 transition-all duration-300 z-10"
              onClick={(e) => { e.stopPropagation(); prev(); }}
            >
              <ChevronLeft size={20} />
            </button>

            {/* Next */}
            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 p-3 border border-gold/20 text-white/60 hover:text-gold-DEFAULT hover:border-gold/50 transition-all duration-300 z-10"
              onClick={(e) => { e.stopPropagation(); next(); }}
            >
              <ChevronRight size={20} />
            </button>

            {/* Image */}
            <motion.div
              key={lightboxIndex}
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-4xl h-[70vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galleryItems[lightboxIndex].image}
                alt={galleryItems[lightboxIndex].category}
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>

            {/* Category label */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <span className="luxury-label tracking-[0.25em]">
                {galleryItems[lightboxIndex].category}
              </span>
              <div className="text-center text-white/30 text-xs mt-1">
                {lightboxIndex + 1} / {galleryItems.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
