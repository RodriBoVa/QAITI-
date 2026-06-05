"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp } from "@/lib/animations";

const layers = [
  { num: "1", title: "AI & Technology Learning Layer", desc: "Partner-enabled AI and technology learning designed for school integration.", accent: "#1A2744" },
  { num: "2", title: "Certification & Recognition Layer", desc: "Recognized student and teacher credential pathways through selected partners.", accent: "#B8962E" },
  { num: "3", title: "Teacher Intelligence Lab™", desc: "QAITI's proprietary teacher enablement environment for AI-era classroom readiness.", accent: "#2D4A8A" },
  { num: "4", title: "HI+™ Human Intelligence Layer", desc: "QAITI's proprietary human capability layer focused on human skills for the AI era.", accent: "#8B6E1F" },
  { num: "5", title: "Digital Platform Infrastructure", desc: "A scalable technology platform for deployment, support, data visibility, and program management.", accent: "#1A3A5C" },
  { num: "6", title: "Future Insights Layer", desc: "A future AI-supported layer for responsible student pathway insights and national talent visibility.", accent: "#B8962E" },
];

export default function PlatformSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section ref={ref} id="platform" className="relative py-32 overflow-hidden" style={{ background: "var(--navy-dark, #0F1A2E)" }}>

      {/* Dot grid BG */}
      <div className="absolute inset-0 dot-pattern text-[#D4AF5A] opacity-[0.04] pointer-events-none" />

      {/* Gold glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, rgba(184,150,46,0.08) 0%, transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-8 relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.p variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-tag mb-2">
            Section 3
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="origin-left h-[2px] w-10 mb-8"
            style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
          />
          <motion.h2
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.2rem,4vw,3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "white",
            }}
          >
            The QAITI Platform
            <br />
            Architecture
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-sm font-semibold tracking-wide mt-3 mb-4"
            style={{ color: "var(--gold)" }}
          >
            Integrated Layers. One National System.
          </motion.p>
          <motion.p
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-[0.9rem] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            QAITI is structured around integrated platform layers that work together
            to prepare students, empower teachers, and support national AI readiness.
          </motion.p>
        </div>

        {/* Layer cards */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {layers.map((layer) => (
            <motion.div
              key={layer.num}
              variants={cardVariant}
              className="relative p-7 transition-all duration-400 group cursor-default"
              style={{
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
              whileHover={{
                background: "rgba(255,255,255,0.08)",
                borderColor: "rgba(184,150,46,0.35)",
                y: -4,
              }}
            >
              {/* Number badge */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-5"
                style={{ background: `linear-gradient(135deg, ${layer.accent}, ${layer.accent}cc)` }}
              >
                {layer.num}
              </div>
              <h3 className="text-sm font-bold mb-3 leading-snug" style={{ color: "rgba(255,255,255,0.9)" }}>
                {layer.title}
              </h3>
              <p className="text-[0.8rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                {layer.desc}
              </p>
              {/* Bottom accent line */}
              <motion.div
                className="absolute bottom-0 left-0 h-[2px]"
                style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.4 }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-10 p-5 flex items-start gap-4"
          style={{ background: "rgba(184,150,46,0.06)", border: "1px solid rgba(184,150,46,0.2)" }}
        >
          <div className="shrink-0 mt-0.5 w-1 h-4 rounded-full" style={{ background: "var(--gold)" }} />
          <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
            <span className="font-bold" style={{ color: "var(--gold)" }}>Important Note: </span>
            The Future Insights Layer will be developed responsibly after pilot validation and under strong governance
            to ensure ethical and purposeful AI use.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
