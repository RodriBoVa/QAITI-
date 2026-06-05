"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const capabilities = [
  { emoji: "💡", title: "Think",       desc: "Deep understanding, analysis, and critical thinking." },
  { emoji: "✏️", title: "Create",      desc: "Creativity and innovation with purpose." },
  { emoji: "🤝", title: "Collaborate", desc: "Strong communication and collaboration skills." },
  { emoji: "⚖️", title: "Decide",      desc: "Ethical reasoning and responsible decision-making." },
  { emoji: "🚀", title: "Lead",        desc: "Future leaders who create positive impact." },
  { emoji: "🌍", title: "Transform",   desc: "Human intelligence driving meaningful change." },
];

export default function HumanIntelligenceSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useSpring(useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]), { stiffness: 40, damping: 20 });

  return (
    <section ref={ref} id="hi" className="relative py-32 overflow-hidden" style={{ background: "var(--cream)" }}>
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">

          {/* Left */}
          <div>
            <ScrollReveal progress={scrollYProgress} start={0.04} end={0.2} direction="up" fadeOut={false}>
              <Badge className="mb-0">Section 4</Badge>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.07} end={0.22} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mt-5 mb-8" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.09} end={0.26} direction="up" distance={40} fadeOut={false}>
              <h2 style={{ fontSize: "clamp(2rem,3.8vw,3rem)", color: "var(--navy)" }} className="mb-7">
                Preparing Human <span className="text-gold-gradient">Intelligence</span> for an<br />AI-Powered Future
              </h2>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.14} end={0.29} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mb-7" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.16} end={0.31} direction="up" fadeOut={false}>
              <p className="text-[0.95rem] leading-relaxed mb-9" style={{ color: "var(--text-muted)" }}>
                Our vision is to help make Qatar a global benchmark for AI-era human capability by preparing
                students not only to understand technology, but to think, create, decide, collaborate, and lead
                responsibly in a world shaped by artificial intelligence.
              </p>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.2} end={0.34} direction="up" distance={30} fadeOut={false}>
              <div className="relative p-7 overflow-hidden"
                style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(184,150,46,0.15)", backdropFilter: "blur(8px)" }}>
                <div className="absolute top-3 left-4 font-serif select-none"
                  style={{ fontSize: "5rem", lineHeight: 1, color: "#B8962E", opacity: 0.12, fontFamily: "Georgia" }}>"</div>
                <p className="text-[0.9rem] font-semibold leading-relaxed pl-5" style={{ color: "var(--navy)" }}>
                  QAITI prepares the human mind behind the technology.
                </p>
                <div className="mt-4 pl-5 gold-rule" />
              </div>
            </ScrollReveal>
          </div>

          {/* Right image */}
          <ScrollReveal progress={scrollYProgress} start={0.06} end={0.28} direction="right" distance={56} fadeOut={false}>
            <div className="relative">
              <motion.div style={{ y: imgY, borderRadius: "2px" }} className="relative overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=90"
                  alt="Students" className="w-full object-cover" style={{ height: "500px" }} />
                <div className="absolute inset-0 img-cinematic" />
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 70% 20%,rgba(184,150,46,0.18) 0%,transparent 55%)" }} />
              </motion.div>
              <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "rgba(184,150,46,0.25)" }} />
            </div>
          </ScrollReveal>
        </div>

        {/* Capability grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {capabilities.map((cap, i) => (
            <ScrollRevealItem key={cap.title} progress={scrollYProgress} index={i} baseStart={0.5} step={0.04} direction="up" distance={36} fadeOut={false}>
              <Card className="h-full flex flex-col items-center text-center p-6 cursor-default" style={{ background: "rgba(255,255,255,0.65)" }}>
                <motion.span className="text-[1.8rem] mb-4 block"
                  whileHover={{ scale: 1.15, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
                  {cap.emoji}
                </motion.span>
                <h3 className="text-[11px] font-bold mb-2 uppercase tracking-wide" style={{ color: "var(--navy)" }}>{cap.title}</h3>
                <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{cap.desc}</p>
              </Card>
            </ScrollRevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
