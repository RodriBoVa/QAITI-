"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const pillars = [
  { title: "National Platform",   desc: "A sovereign initiative built in Qatar for national impact and global contribution.", icon: "01" },
  { title: "School-Based Model",  desc: "Designed for seamless integration into schools and the education system.",           icon: "02" },
  { title: "Teacher-Enabled",     desc: "Teachers at the center, empowered through proprietary enablement and support.",     icon: "03" },
  { title: "Human Intelligence",  desc: "Proprietary layers that build human capability for the AI era.",                   icon: "04" },
  { title: "Partner Ecosystem",   desc: "Curriculum, certification, technology, and advisory partners in one platform.",    icon: "05" },
  { title: "Future Scale",        desc: "Scalable architecture to support pilot success and national expansion.",            icon: "06" },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useSpring(useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]), { stiffness: 40, damping: 20 });

  return (
    <section ref={ref} id="about" className="relative py-32" style={{ background: "var(--cream)", overflow: "hidden" }}>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] dot-pattern text-[#B8962E] opacity-[0.035] pointer-events-none" />

      <div className="section-inner">
        {/* ── Two-col layout ── */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">

          {/* Left */}
          <div>
            <ScrollReveal progress={scrollYProgress} start={0.04} end={0.22} direction="up" fadeOut={false}>
              <Badge className="mb-0">Section 2</Badge>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.07} end={0.24} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mt-5 mb-8" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.09} end={0.27} direction="up" distance={40} fadeOut={false}>
              <h2 style={{ fontSize: "clamp(2rem,3.8vw,3rem)", color: "var(--navy)" }} className="mb-3">
                A National Human{" "}
                <span className="text-gold-gradient">Capability</span> Platform
              </h2>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.13} end={0.29} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mb-7" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.15} end={0.31} direction="up" fadeOut={false}>
              <p className="text-[0.95rem] leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                QAITI is being developed as a sovereign platform that brings AI learning, teacher enablement,
                human intelligence development, recognized credentials, and national readiness into one
                integrated school-based ecosystem.
              </p>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.18} end={0.33} direction="up" fadeOut={false}>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Designed to support students, teachers, schools, families, and national institutions as
                Qatar prepares the next generation for an AI-powered world.
              </p>
            </ScrollReveal>
          </div>

          {/* Right image */}
          <ScrollReveal progress={scrollYProgress} start={0.06} end={0.28} direction="right" distance={56} fadeOut={false}>
            <div className="relative">
              <motion.div style={{ y: imgY, borderRadius: "2px" }} className="relative overflow-hidden shadow-2xl">
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=90"
                  alt="Students learning" className="w-full object-cover" style={{ height: "460px" }} />
                <div className="absolute inset-0 img-cinematic" />
                <div className="absolute inset-0" style={{ background: "radial-gradient(ellipse at 65% 25%,rgba(184,150,46,0.14) 0%,transparent 55%)" }} />
              </motion.div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 pointer-events-none" style={{ borderColor: "rgba(184,150,46,0.28)" }} />
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "rgba(184,150,46,0.14)" }} />
            </div>
          </ScrollReveal>
        </div>

        {/* ── Pillar cards — premium style ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {pillars.map((p, i) => (
            <ScrollRevealItem key={p.title} progress={scrollYProgress} index={i}
              baseStart={0.42} step={0.05} direction="up" distance={36} fadeOut={false}>
              <motion.div
                className="group relative p-7 cursor-default h-full"
                style={{ background: "white", border: "1px solid rgba(184,150,46,0.12)" }}
                whileHover={{ borderColor: "rgba(184,150,46,0.4)", y: -4, boxShadow: "0 16px 48px rgba(184,150,46,0.1)" }}
                transition={{ duration: 0.25 }}
              >
                {/* Top gold accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }} />

                {/* Number */}
                <div className="text-[2.2rem] font-bold mb-4 leading-none"
                  style={{ color: "rgba(184,150,46,0.15)", fontFamily: "Georgia,serif", letterSpacing: "-0.04em" }}>
                  {p.icon}
                </div>

                <h3 className="text-[0.8rem] font-bold mb-3 uppercase tracking-[0.1em]" style={{ color: "var(--navy)" }}>
                  {p.title}
                </h3>
                <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {p.desc}
                </p>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Tagline */}
        <ScrollReveal progress={scrollYProgress} start={0.72} end={0.82} direction="up" fadeOut={false}>
          <div className="flex items-center justify-center gap-5 mt-16">
            <Separator gold className="max-w-[5rem]" />
            <span className="section-tag whitespace-nowrap">Built in Qatar. Designed for global impact.</span>
            <Separator gold className="max-w-[5rem]" />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
