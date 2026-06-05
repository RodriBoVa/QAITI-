"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const layers = [
  { num: "01", title: "AI & Technology Learning Layer",     desc: "Partner-enabled AI and technology learning designed for school integration.", accent: "#B8962E" },
  { num: "02", title: "Certification & Recognition Layer",  desc: "Recognized student and teacher credential pathways through selected partners.", accent: "#D4AF5A" },
  { num: "03", title: "Teacher Intelligence Lab™",          desc: "QAITI's proprietary teacher enablement environment for AI-era classroom readiness.", accent: "#B8962E" },
  { num: "04", title: "HI+™ Human Intelligence Layer",      desc: "QAITI's proprietary human capability layer focused on human skills for the AI era.", accent: "#D4AF5A" },
  { num: "05", title: "Digital Platform Infrastructure",    desc: "A scalable platform for deployment, support, data visibility, and program management.", accent: "#B8962E" },
  { num: "06", title: "Future Insights Layer",              desc: "A future AI-supported layer for responsible student pathway insights and talent visibility.", accent: "#D4AF5A" },
];

export default function PlatformSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} id="platform" className="relative py-32" style={{ background: "var(--navy-dark,#0F1A2E)", overflow: "hidden" }}>
      <div className="absolute inset-0 dot-pattern text-[#D4AF5A] opacity-[0.04] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-80 pointer-events-none"
        style={{ background: "radial-gradient(ellipse,rgba(184,150,46,0.07) 0%,transparent 70%)" }} />

      <div className="section-inner relative z-10">
        {/* Header */}
        <ScrollReveal progress={scrollYProgress} start={0.04} end={0.2} direction="up" fadeOut={false}>
          <Badge variant="ghost">Section 3</Badge>
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
          <p className="text-[0.9rem] leading-relaxed mb-14 max-w-2xl" style={{ color: "rgba(255,255,255,0.38)" }}>
            QAITI is structured around integrated platform layers that work together to prepare students,
            empower teachers, and support national AI readiness.
          </p>
        </ScrollReveal>

        {/* Layer cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {layers.map((layer, i) => (
            <ScrollRevealItem key={layer.num} progress={scrollYProgress} index={i}
              baseStart={0.28} step={0.05} direction="up" distance={40} fadeOut={false}>
              <motion.div
                className="group relative p-7 h-full cursor-default"
                style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
                whileHover={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(184,150,46,0.3)", y: -4 }}
                transition={{ duration: 0.25 }}
              >
                {/* Top accent */}
                <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: `linear-gradient(to right,${layer.accent},transparent)` }} />

                {/* Big number */}
                <div className="text-[2.8rem] font-bold mb-5 leading-none"
                  style={{ color: "rgba(255,255,255,0.06)", fontFamily: "Georgia,serif", letterSpacing: "-0.04em" }}>
                  {layer.num}
                </div>

                <h3 className="text-[0.85rem] font-bold mb-3 leading-snug" style={{ color: "rgba(255,255,255,0.9)" }}>
                  {layer.title}
                </h3>
                <p className="text-[0.8rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.38)" }}>
                  {layer.desc}
                </p>

                {/* Left accent bar */}
                <div className="absolute left-0 top-8 bottom-8 w-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                  style={{ background: `linear-gradient(to bottom,${layer.accent},transparent)` }} />
              </motion.div>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Note */}
        <ScrollReveal progress={scrollYProgress} start={0.7} end={0.82} direction="up" fadeOut={false}>
          <div className="mt-10 p-5 flex items-start gap-4"
            style={{ background: "rgba(184,150,46,0.05)", border: "1px solid rgba(184,150,46,0.18)" }}>
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
