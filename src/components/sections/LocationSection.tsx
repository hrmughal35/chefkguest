"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Phone, Clock, Navigation } from "lucide-react";

export default function LocationSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="contact" className="section-padding bg-luxury-black relative overflow-hidden">
      <div className="container-luxury">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="luxury-label block mb-4">Find Us</span>
          <h2 className="heading-lg text-white mb-6">
            Visit Chef K Guest<br />
            <span className="gold-gradient-text">in Gujranwala</span>
          </h2>
          <div className="gold-divider" />
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Address */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-DEFAULT/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <MapPin size={16} className="text-gold-DEFAULT" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2">Location</h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Sialkot Bypass, Opposite Gift University,<br />
                    Faiz Alam Town,<br />
                    Gujranwala, Pakistan
                  </p>
                  <a
                    href="https://maps.google.com/?q=Gift+University+Gujranwala"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-gold-DEFAULT text-xs mt-3 hover:text-gold-light transition-colors"
                  >
                    <Navigation size={11} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Phone */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-DEFAULT/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Phone size={16} className="text-gold-DEFAULT" />
                </div>
                <div>
                  <h4 className="text-white font-semibold text-sm mb-2">Contact</h4>
                  <a
                    href="tel:+923247103344"
                    className="text-white/70 hover:text-gold-DEFAULT transition-colors text-sm"
                  >
                    +92 324 7103344
                  </a>
                  <p className="text-white/30 text-xs mt-1">
                    Call for reservations & inquiries
                  </p>
                </div>
              </div>
            </div>

            {/* Hours */}
            <div className="glass-card p-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-gold-DEFAULT/10 border border-gold/20 flex items-center justify-center shrink-0">
                  <Clock size={16} className="text-gold-DEFAULT" />
                </div>
                <div className="flex-1">
                  <h4 className="text-white font-semibold text-sm mb-3">Opening Hours</h4>
                  <div className="space-y-2">
                    {[
                      { day: "Monday – Friday", hours: "12:00 PM – 12:00 AM" },
                      { day: "Saturday – Sunday", hours: "11:00 AM – 1:00 AM" },
                    ].map(({ day, hours }) => (
                      <div key={day} className="flex justify-between items-center">
                        <span className="text-white/40 text-xs">{day}</span>
                        <span className="text-gold-DEFAULT text-xs font-medium">{hours}</span>
                      </div>
                    ))}
                  </div>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                    <span className="text-green-400/80 text-xs">Open Now</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick actions */}
            <div className="flex gap-3">
              <a
                href="tel:+923247103344"
                className="btn-gold text-xs flex-1 text-center py-3"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/923247103344"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold text-xs flex-1 text-center py-3"
              >
                WhatsApp
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="relative h-[450px] luxury-border overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3393.7!2d74.18!3d32.18!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391f2f1234567890%3A0x123456789abcdef!2sGift%20University%2C%20Gujranwala!5e0!3m2!1sen!2spk!4v1700000000000!5m2!1sen!2spk"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Chef K Guest Location - Gujranwala"
              />
              {/* Map overlay label */}
              <div className="absolute top-4 left-4 glass-card px-4 py-2 flex items-center gap-2 pointer-events-none">
                <MapPin size={14} className="text-gold-DEFAULT" />
                <span className="text-white text-xs font-medium">Chef K Guest</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
