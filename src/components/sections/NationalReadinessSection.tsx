"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { motion } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const pillars = [
  { num: "01", title: "Students Prepared",             desc: "Equipping students with the knowledge, skills, and human capabilities to thrive in the AI era and beyond." },
  { num: "02", title: "Teachers Empowered",            desc: "Enabling teachers with the training, tools, and confidence to deliver AI-era learning with impact." },
  { num: "03", title: "Schools Supported",             desc: "Providing schools with an integrated platform, resources, and continuous support for implementation." },
  { num: "04", title: "Human Capability Strengthened", desc: "Building essential human intelligence: judgment, creativity, communication, ethics, and decision-making." },
  { num: "05", title: "Qatar Future-Ready",            desc: "Contributing to a resilient, innovative nation prepared for the future of work and society." },
];

export default function NationalReadinessSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} id="implementation" className="relative py-32" style={{ background: "#F2EDE4", overflow: "hidden" }}>
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left */}
          <div>
            <ScrollReveal progress={scrollYProgress} start={0.04} end={0.2} direction="up" fadeOut={false}>
              <Badge>Section 5</Badge>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.07} end={0.22} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mt-5 mb-8" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.09} end={0.26} direction="up" distance={40} fadeOut={false}>
              <h2 style={{ fontSize: "clamp(2rem,3.8vw,3rem)", color: "var(--navy)" }} className="mb-3">
                Building the{" "}
                <span className="text-gold-gradient">National Readiness</span>
                <br />System for the AI Era
              </h2>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.13} end={0.28} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mb-7" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.15} end={0.3} direction="up" fadeOut={false}>
              <p className="text-[0.95rem] leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                QAITI's mission is to build a national platform that integrates AI learning, teacher empowerment,
                human intelligence development, recognized credentials, and future readiness into the school ecosystem.
              </p>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.18} end={0.32} direction="up" fadeOut={false}>
              <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                QAITI aims to support students, teachers, schools, and national institutions in preparing for
                the next generation of education, work, and innovation.
              </p>
            </ScrollReveal>
          </div>

          {/* Right image */}
          <ScrollReveal progress={scrollYProgress} start={0.06} end={0.28} direction="left" distance={56} fadeOut={false}>
            <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: "2px" }}>
              <img src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000&q=90"
                alt="Teacher empowering students" className="w-full object-cover" style={{ height: "440px" }} />
              <div className="absolute inset-0 img-cinematic" />
            </div>
          </ScrollReveal>
        </div>

        {/* Mission pillars label */}
        <ScrollReveal progress={scrollYProgress} start={0.4} end={0.52} direction="up" fadeOut={false}>
          <div className="flex items-center gap-5 mb-12">
            <Separator gold className="max-w-[4rem]" />
            <span className="section-tag whitespace-nowrap">Our Mission Pillars</span>
            <Separator gold className="max-w-[4rem]" />
          </div>
        </ScrollReveal>

        {/* Pillar cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {pillars.map((p, i) => (
            <ScrollRevealItem key={p.title} progress={scrollYProgress} index={i}
              baseStart={0.46} step={0.045} direction="up" distance={36} fadeOut={false}>
              <motion.div
                className="group relative p-6 h-full cursor-default"
                style={{ background: "white", border: "1px solid rgba(184,150,46,0.12)" }}
                whileHover={{ borderColor: "rgba(184,150,46,0.4)", y: -4, boxShadow: "0 16px 48px rgba(184,150,46,0.1)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }} />
                <div className="text-[2rem] font-bold mb-4 leading-none"
                  style={{ color: "rgba(184,150,46,0.14)", fontFamily: "Georgia,serif", letterSpacing: "-0.04em" }}>
                  {p.num}
                </div>
                <h3 className="text-[0.78rem] font-bold mb-2 uppercase tracking-[0.1em] leading-snug" style={{ color: "var(--navy)" }}>
                  {p.title}
                </h3>
                <p className="text-[0.78rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {p.desc}
                </p>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Banner */}
        <ScrollReveal progress={scrollYProgress} start={0.74} end={0.84} direction="up" fadeOut={false}>
          <div className="mt-12 p-8 text-center border" style={{ background: "rgba(255,255,255,0.55)", borderColor: "rgba(184,150,46,0.15)" }}>
            <p className="text-lg font-semibold mb-1" style={{ color: "var(--navy)", fontFamily: "Georgia,serif" }}>
              Our mission is simple. Our impact is national.
            </p>
            <p className="text-sm" style={{ color: "var(--gold)" }}>
              Preparing people. Strengthening capability. Building Qatar's future.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
