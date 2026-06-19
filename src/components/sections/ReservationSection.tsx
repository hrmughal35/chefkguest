"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Calendar, Clock, Users, MessageSquare, CheckCircle } from "lucide-react";

const timeSlots = [
  "12:00 PM", "12:30 PM", "1:00 PM", "1:30 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "6:00 PM",
  "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM",
  "8:30 PM", "9:00 PM", "9:30 PM", "10:00 PM",
];

const guestOptions = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10+"];

export default function ReservationSection() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    guests: "",
    occasion: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="reserve" className="section-padding bg-luxury-dark relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-8"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1920&q=80')`,
          }}
        />
        <div className="absolute inset-0 bg-luxury-dark/95" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9 }}
          >
            <span className="luxury-label block mb-4">Book Your Table</span>
            <h2 className="heading-lg text-white mb-6">
              Reserve Your<br />
              <span className="gold-gradient-text">Dining Experience</span>
            </h2>
            <div className="w-16 h-px bg-gold-DEFAULT mb-8" />
            <p className="text-white/50 text-base leading-relaxed mb-10">
              Secure your table at Chef K Guest and prepare for an extraordinary
              culinary journey. Our team will confirm your reservation promptly.
            </p>

            {/* Features */}
            <div className="space-y-5">
              {[
                { icon: Calendar, title: "Flexible Booking", desc: "Available 7 days a week, 12 PM – 12 AM" },
                { icon: Users, title: "All Party Sizes", desc: "From intimate couples to large family gatherings" },
                { icon: MessageSquare, title: "Special Requests", desc: "Dietary needs, celebrations, custom arrangements" },
              ].map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-gold-DEFAULT/10 border border-gold/20 flex items-center justify-center shrink-0">
                    <Icon size={16} className="text-gold-DEFAULT" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium text-sm mb-1">{title}</h4>
                    <p className="text-white/40 text-xs leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Phone CTA */}
            <div className="mt-10 pt-8 border-t border-gold/10">
              <p className="text-white/40 text-xs uppercase tracking-widest mb-3">Or call directly</p>
              <a
                href="tel:+923247103344"
                className="font-playfair text-2xl text-gold-DEFAULT hover:text-gold-light transition-colors duration-300"
              >
                +92 324 7103344
              </a>
            </div>
          </motion.div>

          {/* Right Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2 }}
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card p-12 text-center"
              >
                <div className="w-16 h-16 bg-gold-DEFAULT/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle size={28} className="text-gold-DEFAULT" />
                </div>
                <h3 className="font-playfair text-2xl text-white mb-4">
                  Reservation Confirmed!
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-8">
                  Thank you, <span className="text-gold-DEFAULT">{form.name}</span>. Your table request has been received.
                  Our team will contact you at <span className="text-gold-DEFAULT">{form.phone}</span> to confirm.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline-gold text-xs"
                >
                  Make Another Reservation
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
                <h3 className="font-playfair text-xl text-white mb-2">Reservation Details</h3>
                <div className="w-10 h-px bg-gold-DEFAULT mb-6" />

                {/* Name & Phone */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      Full Name *
                    </label>
                    <input
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="w-full bg-luxury-border/20 border border-gold/10 text-white text-sm px-4 py-3 outline-none placeholder:text-white/20 focus:border-gold/30 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      Phone *
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+92 300 0000000"
                      className="w-full bg-luxury-border/20 border border-gold/10 text-white text-sm px-4 py-3 outline-none placeholder:text-white/20 focus:border-gold/30 transition-colors"
                    />
                  </div>
                </div>

                {/* Date & Time */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      <Calendar size={11} className="inline mr-1" /> Date *
                    </label>
                    <input
                      name="date"
                      type="date"
                      required
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-luxury-border/20 border border-gold/10 text-white text-sm px-4 py-3 outline-none focus:border-gold/30 transition-colors [color-scheme:dark]"
                    />
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      <Clock size={11} className="inline mr-1" /> Time *
                    </label>
                    <select
                      name="time"
                      required
                      value={form.time}
                      onChange={handleChange}
                      className="w-full bg-luxury-border/20 border border-gold/10 text-white text-sm px-4 py-3 outline-none focus:border-gold/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-luxury-dark">Select time</option>
                      {timeSlots.map((t) => (
                        <option key={t} value={t} className="bg-luxury-dark">{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Guests & Occasion */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      <Users size={11} className="inline mr-1" /> Guests *
                    </label>
                    <select
                      name="guests"
                      required
                      value={form.guests}
                      onChange={handleChange}
                      className="w-full bg-luxury-border/20 border border-gold/10 text-white text-sm px-4 py-3 outline-none focus:border-gold/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-luxury-dark">No. of guests</option>
                      {guestOptions.map((g) => (
                        <option key={g} value={g} className="bg-luxury-dark">{g} guest{g !== "1" ? "s" : ""}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                      Occasion
                    </label>
                    <select
                      name="occasion"
                      value={form.occasion}
                      onChange={handleChange}
                      className="w-full bg-luxury-border/20 border border-gold/10 text-white text-sm px-4 py-3 outline-none focus:border-gold/30 transition-colors appearance-none"
                    >
                      <option value="" className="bg-luxury-dark">Select occasion</option>
                      {["Birthday", "Anniversary", "Business Dinner", "Family Gathering", "Engagement", "Other"].map((o) => (
                        <option key={o} value={o} className="bg-luxury-dark">{o}</option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Special Requests */}
                <div>
                  <label className="text-white/40 text-xs uppercase tracking-wider mb-2 block">
                    Special Requests
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Dietary requirements, special arrangements, etc."
                    rows={3}
                    className="w-full bg-luxury-border/20 border border-gold/10 text-white text-sm px-4 py-3 outline-none placeholder:text-white/20 focus:border-gold/30 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="btn-gold w-full text-sm py-4 disabled:opacity-70"
                >
                  {loading ? (
                    <span className="flex items-center justify-center gap-2">
                      <span className="w-4 h-4 border-2 border-luxury-dark/30 border-t-luxury-dark rounded-full animate-spin" />
                      Processing...
                    </span>
                  ) : (
                    "Confirm Reservation"
                  )}
                </button>

                <p className="text-white/25 text-xs text-center">
                  We will confirm your table within 30 minutes via phone.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
