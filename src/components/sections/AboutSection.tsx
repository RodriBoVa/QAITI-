"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const pillars = [
  { emoji: "🇶🇦", title: "National Platform",  desc: "A sovereign initiative built in Qatar for national impact and global contribution." },
  { emoji: "🏫", title: "School-Based Model",  desc: "Designed for seamless integration into schools and the education system." },
  { emoji: "👩‍🏫", title: "Teacher-Enabled",    desc: "Teachers at the center, empowered through proprietary enablement." },
  { emoji: "🧠", title: "Human Intelligence",  desc: "Proprietary layers that build human capability for the AI era." },
  { emoji: "🤝", title: "Partner Ecosystem",   desc: "Curriculum, certification, technology, and advisory partners in one platform." },
  { emoji: "🌐", title: "Future Scale",        desc: "Scalable architecture to support pilot success and national expansion." },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  // Image parallax
  const imgY = useSpring(useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]), { stiffness: 40, damping: 20 });

  return (
    <section ref={ref} id="about" className="relative py-32 overflow-hidden" style={{ background: "var(--cream)" }}>
      <div className="absolute top-0 right-0 w-96 h-96 dot-pattern text-[#B8962E] opacity-[0.04] pointer-events-none" />

      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">

          {/* Left col */}
          <div className="space-y-0">
            <ScrollReveal progress={scrollYProgress} start={0.04} end={0.22} direction="up" fadeOut={false}>
              <Badge className="mb-0">Section 2</Badge>
            </ScrollReveal>

            <ScrollReveal progress={scrollYProgress} start={0.06} end={0.24} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mt-5 mb-8" />
            </ScrollReveal>

            <ScrollReveal progress={scrollYProgress} start={0.08} end={0.26} direction="up" distance={40} fadeOut={false}>
              <h2 style={{ fontSize: "clamp(2rem,3.8vw,3rem)", color: "var(--navy)" }} className="mb-3">
                A National Human{" "}
                <span className="text-gold-gradient">Capability</span> Platform
              </h2>
            </ScrollReveal>

            <ScrollReveal progress={scrollYProgress} start={0.12} end={0.28} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mb-7" />
            </ScrollReveal>

            <ScrollReveal progress={scrollYProgress} start={0.14} end={0.3} direction="up" fadeOut={false}>
              <p className="text-[0.95rem] leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                QAITI is being developed as a sovereign platform that brings AI learning,
                teacher enablement, human intelligence development, recognized credentials,
                and national readiness into one integrated school-based ecosystem.
              </p>
            </ScrollReveal>

            <ScrollReveal progress={scrollYProgress} start={0.17} end={0.32} direction="up" fadeOut={false}>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Designed to support students, teachers, schools, families, and national
                institutions as Qatar prepares the next generation for an AI-powered world.
              </p>
            </ScrollReveal>
          </div>

          {/* Right image */}
          <ScrollReveal progress={scrollYProgress} start={0.06} end={0.28} direction="right" distance={60} fadeOut={false}>
            <div className="relative">
              <motion.div style={{ y: imgY, borderRadius: "2px" }} className="relative overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=90"
                  alt="Students learning" className="w-full object-cover" style={{ height: "460px" }}
                />
                <div className="absolute inset-0 img-cinematic" />
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 65% 25%,rgba(184,150,46,0.15) 0%,transparent 55%)" }} />
              </motion.div>
              <div className="absolute -bottom-5 -right-5 w-28 h-28 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: "rgba(184,150,46,0.28)" }} />
              <div className="absolute -top-5 -left-5 w-20 h-20 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "rgba(184,150,46,0.14)" }} />
            </div>
          </ScrollReveal>
        </div>

        {/* Pillar cards — staggered */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {pillars.map((p, i) => (
            <ScrollRevealItem key={p.title} progress={scrollYProgress} index={i} baseStart={0.35} step={0.04} direction="up" distance={36} fadeOut={false}>
              <Card className="h-full flex flex-col items-center text-center p-6 cursor-default" style={{ background: "rgba(255,255,255,0.65)" }}>
                <motion.span className="text-[1.8rem] mb-4 block"
                  whileHover={{ scale: 1.15, rotate: 6 }} transition={{ type: "spring", stiffness: 300 }}>
                  {p.emoji}
                </motion.span>
                <h3 className="text-[11px] font-bold mb-2 uppercase tracking-wide" style={{ color: "var(--navy)" }}>{p.title}</h3>
                <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{p.desc}</p>
              </Card>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Tagline */}
        <ScrollReveal progress={scrollYProgress} start={0.62} end={0.75} direction="up" fadeOut={false}>
          <div className="flex items-center justify-center gap-5 mt-14">
            <Separator gold className="max-w-[6rem]" />
            <span className="section-tag whitespace-nowrap">Built in Qatar. Designed for global impact.</span>
            <Separator gold className="max-w-[6rem]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
