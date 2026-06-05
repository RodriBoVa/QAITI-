"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const layers = [
  { num: "1", title: "AI & Technology Learning Layer",     desc: "Partner-enabled AI and technology learning designed for school integration.", color: "#1A2744" },
  { num: "2", title: "Certification & Recognition Layer",  desc: "Recognized student and teacher credential pathways through selected partners.", color: "#B8962E" },
  { num: "3", title: "Teacher Intelligence Lab™",          desc: "QAITI's proprietary teacher enablement environment for AI-era classroom readiness.", color: "#2D4A8A" },
  { num: "4", title: "HI+™ Human Intelligence Layer",      desc: "QAITI's proprietary human capability layer focused on human skills for the AI era.", color: "#8B6E1F" },
  { num: "5", title: "Digital Platform Infrastructure",    desc: "A scalable platform for deployment, support, data visibility, and program management.", color: "#1A3A5C" },
  { num: "6", title: "Future Insights Layer",              desc: "A future AI-supported layer for responsible student pathway insights and talent visibility.", color: "#B8962E" },
];

export default function PlatformSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} id="platform" className="relative py-32 overflow-hidden" style={{ background: "var(--navy-dark,#0F1A2E)" }}>
      <div className="absolute inset-0 dot-pattern text-[#D4AF5A] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(184,150,46,0.07) 0%,transparent 70%)" }} />

      <div className="section-inner relative z-10">

        {/* Header */}
        <ScrollReveal progress={scrollYProgress} start={0.04} end={0.2} direction="up" fadeOut={false}>
          <Badge variant="ghost" className="mb-0">Section 3</Badge>
        </ScrollReveal>
        <ScrollReveal progress={scrollYProgress} start={0.07} end={0.22} direction="up" fadeOut={false}>
          <div className="origin-left gold-rule mt-5 mb-8" />
        </ScrollReveal>
        <ScrollReveal progress={scrollYProgress} start={0.09} end={0.25} direction="up" distance={40} fadeOut={false}>
          <h2 style={{ fontSize: "clamp(2rem,3.8vw,3rem)", color: "white" }} className="mb-3">
            The QAITI Platform<br />Architecture
          </h2>
        </ScrollReveal>
        <ScrollReveal progress={scrollYProgress} start={0.13} end={0.27} direction="up" fadeOut={false}>
          <p className="text-sm font-bold tracking-wide mb-3" style={{ color: "var(--gold)" }}>
            Integrated Layers. One National System.
          </p>
        </ScrollReveal>
        <ScrollReveal progress={scrollYProgress} start={0.15} end={0.29} direction="up" fadeOut={false}>
          <p className="text-[0.9rem] leading-relaxed mb-14" style={{ color: "rgba(255,255,255,0.38)" }}>
            QAITI is structured around integrated platform layers that work together to prepare students,
            empower teachers, and support national AI readiness.
          </p>
        </ScrollReveal>

        {/* Layer cards — staggered */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {layers.map((layer, i) => (
            <ScrollRevealItem key={layer.num} progress={scrollYProgress} index={i} baseStart={0.28} step={0.05} direction="up" distance={40} fadeOut={false}>
              <motion.div
                className="relative p-7 h-full border border-white/7 bg-white/4 cursor-default overflow-hidden"
                whileHover={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(184,150,46,0.35)", y: -4 }}
                transition={{ duration: 0.22 }}
              >
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white mb-5" style={{ background: layer.color }}>
                  {layer.num}
                </div>
                <h3 className="text-[0.85rem] font-bold mb-3 leading-snug" style={{ color: "rgba(255,255,255,0.88)" }}>{layer.title}</h3>
                <p className="text-[0.8rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>{layer.desc}</p>
                <motion.div className="absolute bottom-0 left-0 h-[2px]"
                  style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
                  initial={{ width: "0%" }} whileHover={{ width: "100%" }} transition={{ duration: 0.4 }} />
              </motion.div>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal progress={scrollYProgress} start={0.7} end={0.82} direction="up" fadeOut={false}>
          <div className="mt-10 p-5 flex items-start gap-4 border"
            style={{ background: "rgba(184,150,46,0.05)", borderColor: "rgba(184,150,46,0.18)" }}>
            <div className="w-1 h-5 mt-0.5 rounded-full shrink-0" style={{ background: "var(--gold)" }} />
            <p className="text-[0.8rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
              <span className="font-bold" style={{ color: "var(--gold)" }}>Important: </span>
              The Future Insights Layer will be developed responsibly after pilot validation and under strong governance.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
