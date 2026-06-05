"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "./button";

const links = [
  { label: "Home", href: "#" },
  { label: "About QAITI", href: "#about" },
  { label: "Platform", href: "#platform" },
  { label: "Teacher Intelligence Lab™", href: "#teacher-lab" },
  { label: "HI+™", href: "#hi-layer" },
  { label: "Implementation", href: "#implementation" },
  { label: "Partners", href: "#partners" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "bg-[#FAF8F4]/94 backdrop-blur-xl border-b border-[#B8962E]/12 shadow-[0_2px_40px_rgba(0,0,0,0.06)]"
            : "bg-transparent"
        )}
      >
        <div className="section-inner flex items-center justify-between h-[68px]">

          {/* Logo */}
          <a href="#" className="flex items-center gap-3 shrink-0">
            <span
              className="text-[1.9rem] font-bold"
              style={{
                fontFamily: "Georgia, serif",
                letterSpacing: "-0.03em",
                color: scrolled ? "var(--navy)" : "white",
                transition: "color 0.4s",
              }}
            >
              QAITI
            </span>
            <div
              className="hidden sm:block border-l pl-3"
              style={{ borderColor: scrolled ? "rgba(184,150,46,0.25)" : "rgba(255,255,255,0.18)", transition: "border-color 0.4s" }}
            >
              <p className="text-[8.5px] font-bold tracking-[0.18em] uppercase leading-tight"
                style={{ color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.5)", transition: "color 0.4s" }}>
                Qatar Artificial Intelligence
              </p>
              <p className="text-[8.5px] font-bold tracking-[0.18em] uppercase leading-tight"
                style={{ color: scrolled ? "var(--gold)" : "rgba(184,150,46,0.75)", transition: "color 0.4s" }}>
                &amp; Technology Initiative
              </p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6">
            {links.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setActive(label)}
                className="relative text-[10.5px] font-bold tracking-[0.1em] uppercase transition-colors duration-300 group whitespace-nowrap"
                style={{
                  color: active === label
                    ? (scrolled ? "var(--navy)" : "white")
                    : (scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.5)"),
                }}
              >
                {label}
                {/* Active underline */}
                <span
                  className="absolute -bottom-[3px] left-0 h-[1.5px] transition-all duration-300"
                  style={{
                    background: "linear-gradient(90deg,#B8962E,#D4AF5A)",
                    width: active === label ? "100%" : "0%",
                  }}
                />
                {/* Hover underline */}
                <span className="absolute -bottom-[3px] left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: "rgba(184,150,46,0.4)" }} />
              </a>
            ))}
          </nav>

          {/* Mobile burger */}
          <button
            className="xl:hidden p-2 rounded-sm transition-colors duration-200"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ color: scrolled ? "var(--navy)" : "white" }}
          >
            <AnimatePresence mode="wait">
              {menuOpen
                ? <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}><X size={22} /></motion.div>
                : <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}><Menu size={22} /></motion.div>
              }
            </AnimatePresence>
          </button>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed top-[68px] left-0 right-0 z-40 shadow-2xl"
            style={{
              background: "rgba(250,248,244,0.98)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(184,150,46,0.12)",
            }}
          >
            <nav className="section-inner py-4">
              {links.map(({ label, href }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.04 }}
                  onClick={() => { setActive(label); setMenuOpen(false); }}
                  className="flex items-center py-3.5 text-[10.5px] font-bold tracking-[0.15em] uppercase border-b transition-colors duration-200 hover:text-[#B8962E]"
                  style={{
                    color: active === label ? "var(--gold)" : "var(--navy)",
                    borderColor: "rgba(184,150,46,0.08)",
                  }}
                >
                  {label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
