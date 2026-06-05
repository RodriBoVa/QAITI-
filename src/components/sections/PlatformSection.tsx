"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp } from "@/lib/animations";
import { CardDark } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const layers = [
  { num: "1", title: "AI & Technology Learning Layer",       desc: "Partner-enabled AI and technology learning designed for school integration.", color: "#1A2744" },
  { num: "2", title: "Certification & Recognition Layer",    desc: "Recognized student and teacher credential pathways through selected partners.", color: "#B8962E" },
  { num: "3", title: "Teacher Intelligence Lab™",            desc: "QAITI's proprietary teacher enablement environment for AI-era classroom readiness.", color: "#2D4A8A" },
  { num: "4", title: "HI+™ Human Intelligence Layer",        desc: "QAITI's proprietary human capability layer focused on human skills for the AI era.", color: "#8B6E1F" },
  { num: "5", title: "Digital Platform Infrastructure",      desc: "A scalable platform for deployment, support, data visibility, and program management.", color: "#1A3A5C" },
  { num: "6", title: "Future Insights Layer",                desc: "A future AI-supported layer for responsible student pathway insights and national talent visibility.", color: "#B8962E" },
];

export default function PlatformSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section ref={ref} id="platform" className="relative py-32 overflow-hidden" style={{ background: "var(--navy-dark,#0F1A2E)" }}>

      <div className="absolute inset-0 dot-pattern text-[#D4AF5A] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(184,150,46,0.07) 0%, transparent 70%)" }} />

      <div className="section-inner relative z-10">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
            <Badge variant="ghost">Section 3</Badge>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.55 }}
            className="origin-left gold-rule mt-5 mb-8"
          />
          <motion.h2
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", color: "white" }}
          >
            The QAITI Platform<br />Architecture
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-sm font-bold tracking-wide mt-3 mb-4"
            style={{ color: "var(--gold)" }}
          >
            Integrated Layers. One National System.
          </motion.p>
          <motion.p
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="text-[0.9rem] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            QAITI is structured around integrated platform layers that work together to prepare students,
            empower teachers, and support national AI readiness.
          </motion.p>
        </div>

        {/* Layer cards */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {layers.map((layer) => (
            <motion.div key={layer.num} variants={cardVariant}>
              <motion.div
                className="relative p-7 h-full border border-white/7 bg-white/4 cursor-default overflow-hidden group"
                whileHover={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(184,150,46,0.35)", y: -4 }}
                transition={{ duration: 0.25 }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-5 shrink-0"
                  style={{ background: layer.color }}
                >
                  {layer.num}
                </div>
                <h3 className="text-[0.85rem] font-bold mb-3 leading-snug" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {layer.title}
                </h3>
                <p className="text-[0.8rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                  {layer.desc}
                </p>
                {/* Animated bottom line */}
                <motion.div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
                  initial={{ width: "0%" }}
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Note */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-10 p-5 flex items-start gap-4 border"
          style={{ background: "rgba(184,150,46,0.05)", borderColor: "rgba(184,150,46,0.18)" }}
        >
          <div className="w-1 h-5 mt-0.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
          <p className="text-[0.8rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
            <span className="font-bold" style={{ color: "var(--gold)" }}>Important: </span>
            The Future Insights Layer will be developed responsibly after pilot validation and under strong governance.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
