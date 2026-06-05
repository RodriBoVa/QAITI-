"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const bgY      = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const bgScale  = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY    = useTransform(scrollYProgress, [0, 1], ["0%", "28%"]);
  const opacity  = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden" style={{ background: "#07101F" }}>

      {/* ── Parallax background ── */}
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 z-0 origin-center">
        <img
          src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1800&q=90"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Layered overlays for depth */}
        <div className="absolute inset-0" style={{ background: "linear-gradient(105deg, rgba(7,16,31,0.96) 0%, rgba(7,16,31,0.82) 40%, rgba(7,16,31,0.3) 70%, rgba(7,16,31,0.15) 100%)" }} />
        <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 75% 35%, rgba(184,150,46,0.1) 0%, transparent 55%)" }} />
        <div className="absolute bottom-0 left-0 right-0 h-40" style={{ background: "linear-gradient(to top, rgba(7,16,31,0.7), transparent)" }} />
      </motion.div>

      {/* ── Decorative elements ── */}
      <div className="absolute top-32 right-[28%] z-10 opacity-[0.06] pointer-events-none float">
        <QaitiFlower size={200} />
      </div>
      <div className="absolute bottom-20 right-[8%] z-10 opacity-[0.04] pointer-events-none">
        <QaitiFlower size={120} />
      </div>

      {/* ── Content ── */}
      <motion.div style={{ y: textY, opacity }} className="relative z-20 min-h-screen flex items-center">
        <div className="section-inner w-full pt-28 pb-24">
          <div className="max-w-[620px]">

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="flex items-center gap-3 mb-7"
            >
              <span className="section-tag" style={{ color: "var(--gold-light, #D4AF5A)" }}>Section 1</span>
              <div className="h-px w-8" style={{ background: "rgba(184,150,46,0.5)" }} />
              <span className="section-tag" style={{ color: "rgba(255,255,255,0.3)" }}>Qatar AI Initiative</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="mb-7"
              style={{
                fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)",
                color: "white",
              }}
            >
              Preparing the{" "}
              <span className="shimmer">Human</span>
              {" "}Mind
              <br />
              for the AI Era
            </motion.h1>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="origin-left gold-rule mb-7"
            />

            {/* Body */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              className="text-[1rem] leading-relaxed mb-2"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              QAITI is a national AI and technology preparedness platform designed to
              equip students, empower teachers, and build the human capability required
              for the age of artificial intelligence.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.45 }}
              className="text-sm font-bold tracking-wide mb-10"
              style={{ color: "var(--gold-light, #D4AF5A)" }}
            >
              Built in Qatar. Designed for global impact.
            </motion.p>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-5 p-5 mb-10"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(184,150,46,0.22)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              <div className="shrink-0 opacity-70"><QaitiFlower size={40} /></div>
              <div>
                <p className="text-sm font-semibold mb-0.5" style={{ color: "rgba(255,255,255,0.85)" }}>
                  QAITI prepares the minds that will use AI.
                </p>
                <div className="h-px w-10" style={{ background: "rgba(184,150,46,0.4)" }} />
              </div>
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button size="lg" className="text-[11px]">
                Explore the Vision <ArrowRight size={14} />
              </Button>
              <Button size="lg" variant="outlineLight" className="text-[11px]">
                Contact Us <ArrowRight size={14} />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.4 }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }}
        >
          <ChevronDown size={20} style={{ color: "rgba(184,150,46,0.6)" }} />
        </motion.div>
        <span className="section-tag" style={{ color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em" }}>
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}

function QaitiFlower({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <ellipse key={i} cx="30" cy="30" rx="3.8" ry="12.5"
          fill="none" stroke="#B8962E" strokeWidth="1.4"
          transform={`rotate(${deg} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="3.5" fill="#B8962E" />
    </svg>
  );
}
