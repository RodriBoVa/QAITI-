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
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled
            ? "rgba(250,248,244,0.92)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(184,150,46,0.12)" : "none",
          boxShadow: scrolled ? "0 1px 40px rgba(0,0,0,0.06)" : "none",
        }}
      >
        <div className="max-w-7xl mx-auto px-8 flex items-center justify-between h-[68px]">

          {/* ── Logo ── */}
          <div className="flex items-center gap-3">
            <span
              className="text-[1.85rem] font-bold tracking-tight"
              style={{
                color: scrolled ? "var(--navy)" : "white",
                fontFamily: "Georgia, serif",
                letterSpacing: "-0.02em",
                transition: "color 0.4s",
              }}
            >
              QAITI
            </span>
            <div
              className="hidden sm:block leading-tight border-l pl-3 ml-0"
              style={{
                borderColor: scrolled ? "rgba(184,150,46,0.3)" : "rgba(255,255,255,0.2)",
                transition: "border-color 0.4s",
              }}
            >
              <div
                className="text-[9px] font-semibold tracking-wide uppercase"
                style={{
                  color: scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.55)",
                  fontFamily: "sans-serif",
                  transition: "color 0.4s",
                }}
              >
                Qatar Artificial Intelligence
              </div>
              <div
                className="text-[9px] font-semibold tracking-wide uppercase"
                style={{
                  color: scrolled ? "var(--gold)" : "rgba(184,150,46,0.8)",
                  fontFamily: "sans-serif",
                  transition: "color 0.4s",
                }}
              >
                &amp; Technology Initiative
              </div>
            </div>
          </div>

          {/* ── Desktop links ── */}
          <ul className="hidden lg:flex items-center gap-7">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => setActive(link)}
                  className="relative text-[11px] font-semibold tracking-wide uppercase transition-colors duration-300 group"
                  style={{
                    color: active === link
                      ? (scrolled ? "var(--navy)" : "white")
                      : (scrolled ? "var(--text-muted)" : "rgba(255,255,255,0.55)"),
                    letterSpacing: "0.06em",
                  }}
                >
                  {link}
                  <span
                    className="absolute -bottom-[2px] left-0 h-[1.5px] transition-all duration-300"
                    style={{
                      background: "var(--gold)",
                      width: active === link ? "100%" : "0%",
                    }}
                  />
                  <span
                    className="absolute -bottom-[2px] left-0 h-[1.5px] w-0 group-hover:w-full transition-all duration-300"
                    style={{ background: "rgba(184,150,46,0.5)" }}
                  />
                </button>
              </li>
            ))}
          </ul>

          {/* ── Mobile burger ── */}
          <button
            className="lg:hidden p-2 transition-colors duration-300"
            onClick={() => setMenuOpen(!menuOpen)}
            style={{ color: scrolled ? "var(--navy)" : "white" }}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* ── Mobile menu ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="fixed top-[68px] left-0 right-0 z-40 shadow-2xl"
            style={{
              background: "rgba(250,248,244,0.97)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(184,150,46,0.12)",
            }}
          >
            <ul className="flex flex-col px-8 py-5 gap-1">
              {links.map((link) => (
                <li key={link}>
                  <button
                    onClick={() => { setActive(link); setMenuOpen(false); }}
                    className="text-[11px] font-semibold tracking-widest uppercase py-3 w-full text-left border-b transition-colors duration-200"
                    style={{
                      color: active === link ? "var(--gold)" : "var(--navy)",
                      borderColor: "rgba(184,150,46,0.08)",
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
