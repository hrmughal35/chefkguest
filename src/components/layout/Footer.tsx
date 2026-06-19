"use client";

import { MapPin, Phone, Clock, Instagram, Facebook, Youtube, ChevronRight } from "lucide-react";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Experience", href: "#experience" },
  { label: "Menu", href: "#cuisines" },
  { label: "Gallery", href: "#gallery" },
  { label: "Private Events", href: "#events" },
  { label: "Reserve a Table", href: "#reserve" },
];

const cuisines = [
  "Pakistani Cuisine",
  "Turkish Cuisine",
  "Chinese Cuisine",
  "BBQ Specials",
  "Continental",
  "Hi-Tea & Desserts",
];

export default function Footer() {
  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#080808] border-t border-gold/10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-gold-DEFAULT/40 to-transparent" />

      <div className="container-luxury py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="font-playfair text-2xl font-bold text-white mb-2">Chef K Guest</h3>
            <p className="luxury-label text-[0.6rem] tracking-[0.3em] mb-6">Premium Restaurant · Gujranwala</p>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              A complete dining destination where families, friends, and professionals come to enjoy premium food, luxurious ambiance, and exceptional hospitality.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Youtube, href: "#", label: "YouTube" },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 border border-gold/20 flex items-center justify-center text-white/50 hover:text-gold-DEFAULT hover:border-gold/50 transition-all duration-300"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="luxury-label mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="flex items-center gap-2 text-white/50 hover:text-gold-DEFAULT transition-colors duration-300 text-sm group"
                  >
                    <ChevronRight size={12} className="text-gold-DEFAULT/50 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Cuisines */}
          <div>
            <h4 className="luxury-label mb-6">Our Cuisine</h4>
            <ul className="space-y-3">
              {cuisines.map((cuisine) => (
                <li key={cuisine} className="flex items-center gap-2 text-white/50 text-sm">
                  <ChevronRight size={12} className="text-gold-DEFAULT/50" />
                  {cuisine}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="luxury-label mb-6">Visit Us</h4>
            <ul className="space-y-5">
              <li className="flex items-start gap-3">
                <MapPin size={15} className="text-gold-DEFAULT mt-0.5 shrink-0" />
                <span className="text-white/50 text-sm leading-relaxed">
                  Sialkot Bypass, Opposite Gift University,<br />
                  Faiz Alam Town, Gujranwala, Pakistan
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={15} className="text-gold-DEFAULT shrink-0" />
                <a href="tel:+923247103344" className="text-white/50 hover:text-gold-DEFAULT transition-colors text-sm">
                  +92 324 7103344
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={15} className="text-gold-DEFAULT mt-0.5 shrink-0" />
                <div className="text-white/50 text-sm">
                  <div>Mon – Sun</div>
                  <div className="text-gold-DEFAULT font-medium">12:00 PM – 12:00 AM</div>
                </div>
              </li>
            </ul>

            {/* Newsletter */}
            <div className="mt-8">
              <p className="text-white/40 text-xs mb-3 uppercase tracking-widest">Newsletter</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-luxury-border/30 border border-gold/10 text-white/70 text-xs px-4 py-3 outline-none placeholder:text-white/30 focus:border-gold/30 transition-colors"
                />
                <button className="btn-gold text-[0.65rem] px-4 py-3 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gold/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">
            © {new Date().getFullYear()} Chef K Guest. All Rights Reserved. Premium Dining in Gujranwala.
          </p>
          <div className="flex items-center gap-1">
            <div className="gold-divider w-12" />
            <span className="luxury-label text-[0.6rem] px-3">
              Designed &amp; Developed by{" "}
              <a
                href="https://hassanrazadev.tech"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold-DEFAULT hover:text-gold-light transition-colors duration-300"
              >
                Hassan Raza
              </a>
            </span>
            <div className="gold-divider w-12" />
          </div>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms"].map((item) => (
              <a key={item} href="#" className="text-white/30 hover:text-gold-DEFAULT/70 text-xs transition-colors">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
