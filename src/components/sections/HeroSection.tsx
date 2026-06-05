"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { fadeUp, fadeIn, slideInLeft } from "@/lib/animations";

export default function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden bg-[#FAF8F4]">
      {/* Background image with parallax */}
      <motion.div
        style={{ y: imageY }}
        className="absolute inset-0 right-0 left-[35%] z-0"
      >
        <div className="relative w-full h-full">
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1400&q=90"
            alt="Students with AI technology"
            className="w-full h-full object-cover object-center"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#FAF8F4]/20 to-[#FAF8F4]" />
          {/* Glowing orb overlay */}
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background: "radial-gradient(ellipse at 70% 40%, rgba(184,150,46,0.3) 0%, transparent 60%)",
            }}
          />
        </div>
      </motion.div>

      {/* Decorative geometric pattern */}
      <div className="absolute bottom-20 right-[35%] z-10 opacity-20">
        <QaitiFlower size={120} />
      </div>

      {/* Content */}
      <motion.div
        style={{ y: textY, opacity }}
        className="relative z-20 max-w-7xl mx-auto px-6 pt-36 pb-20 min-h-screen flex flex-col justify-center"
      >
        <div className="max-w-[480px]">
          {/* Section tag */}
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate="visible"
            custom={0}
            className="section-tag mb-4"
          >
            Section 1
          </motion.div>
          <div className="w-8 h-[2px] bg-[#B8962E] mb-8" />

          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.1}
            className="text-[3.4rem] leading-[1.05] font-bold mb-6"
            style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}
          >
            Preparing the{" "}
            <span style={{ color: "var(--gold)" }}>Human</span>{" "}
            Mind
            <br />
            for the AI Era
          </motion.h1>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="w-8 h-[2px] bg-[#B8962E] mb-6 origin-left"
          />

          {/* Body */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.25}
            className="text-[0.9rem] leading-relaxed mb-3"
            style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
          >
            QAITI is a national AI and technology preparedness platform designed
            to equip students, empower teachers, and build the human capability
            required for the age of artificial intelligence.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.35}
            className="text-sm font-semibold mb-8"
            style={{ color: "var(--gold)", fontFamily: "sans-serif" }}
          >
            Built in Qatar. Designed for global impact.
          </motion.p>

          {/* Quote card */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate="visible"
            custom={0.4}
            className="flex items-center gap-4 p-4 mb-8 border border-[#B8962E]/20 bg-white/60 backdrop-blur-sm rounded-sm"
          >
            <div className="shrink-0 w-10 h-10 flex items-center justify-center">
              <QaitiIcon />
            </div>
            <p
              className="text-[0.82rem] leading-snug"
              style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
            >
              QAITI prepares the minds
              <br />
              that will use AI.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.5}
            className="flex gap-3 flex-wrap"
          >
            <button
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90 hover:translate-x-1"
              style={{ background: "var(--gold)", fontFamily: "sans-serif" }}
            >
              Explore the Vision <ArrowRight size={14} />
            </button>
            <button
              className="flex items-center gap-2 px-6 py-3 text-sm font-semibold border transition-all duration-300 hover:bg-[#1A2744] hover:text-white hover:border-[#1A2744]"
              style={{ borderColor: "var(--navy)", color: "var(--navy)", fontFamily: "sans-serif" }}
            >
              Contact Us <ArrowRight size={14} />
            </button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <div
          className="w-5 h-8 border-2 rounded-full flex justify-center pt-1.5"
          style={{ borderColor: "var(--text-muted)" }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            className="w-1 h-1 rounded-full bg-[#B8962E]"
          />
        </div>
        <span
          className="text-[10px] tracking-widest uppercase"
          style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
        >
          Scroll to explore
        </span>
      </motion.div>
    </section>
  );
}

function QaitiFlower({ size = 60 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      <g opacity="0.8">
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
          <ellipse
            key={i}
            cx="30" cy="30" rx="4" ry="12"
            fill="none"
            stroke="#B8962E"
            strokeWidth="1.5"
            transform={`rotate(${deg} 30 30)`}
          />
        ))}
        <circle cx="30" cy="30" r="4" fill="#B8962E" />
      </g>
    </svg>
  );
}

function QaitiIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 60 60" fill="none">
      {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg, i) => (
        <ellipse
          key={i}
          cx="30" cy="30" rx="3.5" ry="10"
          fill="none"
          stroke="#B8962E"
          strokeWidth="1.5"
          transform={`rotate(${deg} 30 30)`}
        />
      ))}
      <circle cx="30" cy="30" r="3" fill="#B8962E" />
    </svg>
  );
}
