"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp } from "@/lib/animations";

const layers = [
  {
    num: "1",
    title: "AI & Technology Learning Layer",
    desc: "Partner-enabled AI and technology learning designed for school integration.",
    color: "#1A2744",
  },
  {
    num: "2",
    title: "Certification & Recognition Layer",
    desc: "Recognized student and teacher credential pathways through selected partners.",
    color: "#B8962E",
  },
  {
    num: "3",
    title: "Teacher Intelligence Lab™",
    desc: "QAITI's proprietary teacher enablement environment for AI-era classroom readiness and growth.",
    color: "#2D3F6B",
  },
  {
    num: "4",
    title: "HI+™ Human Intelligence Layer",
    desc: "QAITI's proprietary human capability layer focused on human skills for the AI era.",
    color: "#8B6E1F",
  },
  {
    num: "5",
    title: "Digital Platform Infrastructure",
    desc: "A scalable technology platform for deployment, support, data visibility, and program management.",
    color: "#1A2744",
  },
  {
    num: "6",
    title: "Future Insights Layer",
    desc: "A future AI-supported layer for responsible student pathway insights and national talent visibility.",
    color: "#B8962E",
  },
];

export default function PlatformSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="platform"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Subtle dot grid bg */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF5A 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="mb-14">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="section-tag mb-3"
          >
            Section 3
          </motion.div>
          <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="text-[2.8rem] leading-[1.1] font-bold mb-3"
            style={{ color: "white", fontFamily: "Georgia, serif" }}
          >
            The QAITI Platform
            <br />
            Architecture
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            className="text-sm font-semibold mb-4"
            style={{ color: "var(--gold)", fontFamily: "sans-serif" }}
          >
            Integrated Layers. One National System.
          </motion.p>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.25}
            className="max-w-xl text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.6)", fontFamily: "sans-serif" }}
          >
            QAITI is structured around integrated platform layers that work together
            to prepare students, empower teachers, and support national AI readiness.
          </motion.p>
        </div>

        {/* Layer cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {layers.map((layer) => (
            <motion.div
              key={layer.num}
              variants={cardVariant}
              className="relative p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#B8962E]/50 transition-all duration-400 group cursor-default"
            >
              {/* Number badge */}
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold text-white mb-4"
                style={{ background: layer.color }}
              >
                {layer.num}
              </div>

              <h3
                className="text-sm font-bold mb-3 leading-snug"
                style={{ color: "white", fontFamily: "sans-serif" }}
              >
                {layer.title}
              </h3>
              <p
                className="text-xs leading-relaxed"
                style={{ color: "rgba(255,255,255,0.55)", fontFamily: "sans-serif" }}
              >
                {layer.desc}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#B8962E] group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.6}
          className="mt-10 p-4 border border-[#B8962E]/30 bg-[#B8962E]/5 flex items-start gap-3"
        >
          <span style={{ color: "var(--gold)", fontFamily: "sans-serif", fontSize: 11, fontWeight: 700 }}>
            Important Note:
          </span>
          <span
            className="text-xs leading-relaxed"
            style={{ color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif" }}
          >
            The Future Insights Layer will be developed responsibly after pilot validation and
            under strong governance to ensure ethical and purposeful AI use.
          </span>
        </motion.div>
      </div>
    </section>
  );
}
