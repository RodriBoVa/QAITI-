"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  "Home",
  "About QAITI",
  "Platform",
  "Teacher Intelligence Lab™",
  "HI+™",
  "Implementation",
  "Partners",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#FAF8F4]/95 backdrop-blur-md shadow-sm border-b border-[#B8962E]/10"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <span
              className="text-3xl font-bold tracking-tight"
              style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}
            >
              QAITI
            </span>
            <div
              className="hidden sm:block text-[10px] leading-tight"
              style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
            >
              <div>Qatar Artificial Intelligence</div>
              <div>&amp; Technology Initiative</div>
            </div>
          </div>

          {/* Desktop links */}
          <ul className="hidden lg:flex items-center gap-6">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => setActive(link)}
                  className="relative text-[11px] font-medium transition-colors duration-200 group"
                  style={{
                    color: active === link ? "var(--navy)" : "var(--text-muted)",
                    fontFamily: "sans-serif",
                  }}
                >
                  {link}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#B8962E] transition-all duration-300 ${
                      active === link ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile burger */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: "var(--navy)" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-16 left-0 right-0 z-40 bg-[#FAF8F4] border-b border-[#B8962E]/20 shadow-lg"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => { setActive(link); setMenuOpen(false); }}
                    className="text-sm font-medium w-full text-left py-1"
                    style={{
                      color: active === link ? "var(--gold)" : "var(--navy)",
                      fontFamily: "sans-serif",
                    }}
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
