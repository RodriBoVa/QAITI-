"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const imageY      = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const contentY    = useTransform(scrollYProgress, [0, 1], ["0%", "25%"]);
  const opacity     = useTransform(scrollYProgress, [0, 0.55], [1, 0]);
  const scaleImg    = useTransform(scrollYProgress, [0, 1], [1, 1.06]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden" style={{ background: "#0F1A2E" }}>

      {/* ── Full-bleed background image ── */}
      <motion.div
        style={{ y: imageY, scale: scaleImg }}
        className="absolute inset-0 z-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=90"
          alt=""
          className="w-full h-full object-cover object-center"
        />
        {/* Dramatic left-to-right gradient */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(100deg, rgba(10,16,35,0.97) 0%, rgba(10,16,35,0.85) 38%, rgba(10,16,35,0.35) 65%, rgba(10,16,35,0.1) 100%)",
          }}
        />
        {/* Gold shimmer top */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse at 70% 30%, rgba(184,150,46,0.12) 0%, transparent 55%)",
          }}
        />
      </motion.div>

      {/* ── Decorative flower mark ── */}
      <div className="absolute bottom-24 right-[30%] z-10 opacity-10 pointer-events-none">
        <FlowerMark size={160} />
      </div>

      {/* ── Content ── */}
      <motion.div
        style={{ y: contentY, opacity }}
        className="relative z-20 max-w-7xl mx-auto px-8 pt-40 pb-28 min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-[560px]">

          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
            className="section-tag mb-2"
          >
            Section 1
          </motion.div>

          {/* Gold rule */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
            className="origin-left h-[2px] w-10 mb-8"
            style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
          />

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22,1,0.36,1] }}
            className="font-bold mb-7"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.6rem, 5vw, 4rem)",
              lineHeight: 1.08,
              letterSpacing: "-0.025em",
              color: "white",
            }}
          >
            Preparing the{" "}
            <span
              style={{
                background: "linear-gradient(135deg,#D4AF5A,#B8962E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Human
            </span>{" "}
            Mind
            <br />
            for the AI Era
          </motion.h1>

          {/* Gold rule 2 */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="origin-left h-[2px] w-10 mb-7"
            style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
          />

          {/* Body text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="mb-2 leading-relaxed"
            style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.95rem" }}
          >
            QAITI is a national AI and technology preparedness platform designed to
            equip students, empower teachers, and build the human capability required
            for the age of artificial intelligence.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            className="mb-10 text-sm font-semibold tracking-wide"
            style={{ color: "var(--gold-light, #D4AF5A)" }}
          >
            Built in Qatar. Designed for global impact.
          </motion.p>

          {/* Quote card */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22,1,0.36,1] }}
            className="flex items-center gap-5 p-5 mb-10"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(184,150,46,0.25)",
              backdropFilter: "blur(12px)",
            }}
          >
            <div className="shrink-0">
              <FlowerMark size={44} />
            </div>
            <p className="text-sm leading-snug font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
              QAITI prepares the minds
              <br />
              that will use AI.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex gap-4 flex-wrap"
          >
            <button className="btn-gold">
              Explore the Vision <ArrowRight size={14} />
            </button>
            <button
              className="inline-flex items-center gap-2 px-8 py-[0.875rem] text-[0.8125rem] font-semibold tracking-wide uppercase border transition-all duration-300 hover:bg-white/10"
              style={{ borderColor: "rgba(255,255,255,0.25)", color: "rgba(255,255,255,0.85)" }}
            >
              Contact Us <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* ── Scroll indicator ── */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3 }}
      >
        <div
          className="w-[22px] h-9 border rounded-full flex justify-center pt-2"
          style={{ borderColor: "rgba(255,255,255,0.25)" }}
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="w-[3px] h-[3px] rounded-full"
            style={{ background: "var(--gold)" }}
          />
        </div>
        <span className="section-tag" style={{ color: "rgba(255,255,255,0.35)", letterSpacing: "0.2em" }}>
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}

function FlowerMark({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => (
        <ellipse
          key={i} cx="30" cy="30" rx="4" ry="13"
          fill="none" stroke="#B8962E" strokeWidth="1.5"
          transform={`rotate(${deg} 30 30)`}
        />
      ))}
      <circle cx="30" cy="30" r="4" fill="#B8962E" />
    </svg>
  );
}
