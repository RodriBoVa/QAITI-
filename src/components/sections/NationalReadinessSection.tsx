"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInLeft } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const pillars = [
  { title: "Students Prepared",            desc: "Equipping students with the knowledge, skills, and human capabilities to thrive in the AI era." },
  { title: "Teachers Empowered",           desc: "Enabling teachers with the training, tools, and confidence to deliver AI-era learning with impact." },
  { title: "Schools Supported",            desc: "Providing schools with an integrated platform, resources, and continuous support." },
  { title: "Human Capability Strengthened",desc: "Building essential human intelligence: judgment, creativity, communication, ethics, and decision-making." },
  { title: "Qatar Future-Ready",           desc: "Contributing to a resilient, innovative nation prepared for the future of work and society." },
];

export default function NationalReadinessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section ref={ref} id="implementation" className="relative py-32 overflow-hidden" style={{ background: "#F2EDE4" }}>

      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <Badge>Section 5</Badge>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.55 }}
              className="origin-left gold-rule mt-5 mb-8"
            />
            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", color: "var(--navy)" }}
              className="mb-3"
            >
              Building the{" "}
              <span className="text-gold-gradient">National Readiness</span>
              <br />System for the AI Era
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="origin-left gold-rule mb-7"
            />
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[0.95rem] leading-relaxed mb-5"
              style={{ color: "var(--text-muted)" }}
            >
              QAITI's mission is to build a national platform that integrates AI learning, teacher empowerment,
              human intelligence development, recognized credentials, and future readiness into the school ecosystem.
            </motion.p>
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[0.95rem] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              QAITI aims to support students, teachers, schools, and national institutions in preparing for
              the next generation of education, work, and innovation.
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div
            variants={slideInLeft} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="relative overflow-hidden shadow-2xl"
            style={{ borderRadius: "2px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1000&q=90"
              alt="Teacher empowering students"
              className="w-full object-cover"
              style={{ height: "440px" }}
            />
            <div className="absolute inset-0 img-cinematic" />
          </motion.div>
        </div>

        {/* Mission pillars label */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center gap-5 mb-10"
        >
          <Separator gold className="max-w-[4rem]" />
          <span className="section-tag whitespace-nowrap">Our Mission Pillars</span>
          <Separator gold className="max-w-[4rem]" />
        </motion.div>

        {/* Pillar cards */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {pillars.map((p, i) => (
            <motion.div key={p.title} variants={cardVariant}>
              <Card className="relative h-full p-5 cursor-default overflow-hidden">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white mb-4"
                  style={{ background: "var(--navy)" }}
                >
                  {i + 1}
                </div>
                <h3 className="text-[11px] font-bold mb-2 leading-snug uppercase tracking-wide" style={{ color: "var(--navy)" }}>
                  {p.title}
                </h3>
                <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {p.desc}
                </p>
                <div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ width: `${(i + 1) * 20}%`, background: "linear-gradient(to right,#B8962E,#D4AF5A)", opacity: 0.4 }}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Banner */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-12 p-8 text-center border"
          style={{ background: "rgba(255,255,255,0.5)", borderColor: "rgba(184,150,46,0.15)" }}
        >
          <p className="text-lg font-semibold mb-1" style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}>
            Our mission is simple. Our impact is national.
          </p>
          <p className="text-sm" style={{ color: "var(--gold)" }}>
            Preparing people. Strengthening capability. Building Qatar's future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
