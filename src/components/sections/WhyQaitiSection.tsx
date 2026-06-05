"use client";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reasons = [
  { num: "1", title: "Students Need AI-Era Readiness",           desc: "Students need the knowledge, skills, mindset, and human capabilities to thrive in an AI-powered world." },
  { num: "2", title: "Teachers Need Structured Support",         desc: "Teachers need practical training, tools, and ongoing enablement to confidently deliver AI-era learning." },
  { num: "3", title: "Human Skills Are Becoming More Important", desc: "Critical thinking, creativity, ethics, communication, and resilience are the differentiators in the age of AI." },
  { num: "4", title: "Nations Need Future-Ready Talent",         desc: "Nations that invest in human capability today will lead in innovation, productivity, and global competitiveness." },
  { num: "5", title: "Schools Need a Practical Model",           desc: "Schools need an integrated, scalable, and sustainable model that is easy to adopt and designed for impact." },
];

export default function WhyQaitiSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: "#F5F0E8" }}>
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">

          {/* Left */}
          <div>
            <ScrollReveal progress={scrollYProgress} start={0.04} end={0.2} direction="up" fadeOut={false}>
              <Badge>Section 8</Badge>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.07} end={0.22} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mt-5 mb-8" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.09} end={0.26} direction="up" distance={40} fadeOut={false}>
              <h2 style={{ fontSize: "clamp(2rem,3.8vw,3rem)", color: "var(--navy)" }} className="mb-3">
                Why QAITI Matters Now
              </h2>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.12} end={0.27} direction="up" distance={28} fadeOut={false}>
              <h3 className="text-[1.3rem] font-bold mb-7" style={{ color: "var(--gold)", fontFamily: "Georgia,serif", letterSpacing: "-0.02em" }}>
                The AI Era Requires More Than Technology Access
              </h3>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.15} end={0.3} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mb-7" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.17} end={0.32} direction="up" fadeOut={false}>
              <p className="text-[0.95rem] leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}>
                Artificial intelligence is changing how people learn, work, solve problems, and make decisions.
                Countries that succeed in the AI era will be those that prepare people to use it wisely,
                creatively, ethically, and productively.
              </p>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.2} end={0.34} direction="up" fadeOut={false}>
              <p className="text-[0.95rem] font-semibold" style={{ color: "var(--navy)" }}>
                QAITI is designed to help build that foundation early,<br />beginning with students and teachers.
              </p>
            </ScrollReveal>
          </div>

          {/* Right image */}
          <ScrollReveal progress={scrollYProgress} start={0.06} end={0.28} direction="right" distance={56} fadeOut={false}>
            <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: "2px" }}>
              <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=90"
                alt="AI technology era" className="w-full object-cover" style={{ height: "440px" }} />
              <div className="absolute inset-0 img-cinematic" />
            </div>
          </ScrollReveal>
        </div>

        {/* Reason cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {reasons.map((r, i) => (
            <ScrollRevealItem key={r.num} progress={scrollYProgress} index={i} baseStart={0.42} step={0.045} direction="up" distance={36} fadeOut={false}>
              <Card className="relative h-full p-5 cursor-default overflow-hidden">
                <div className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white mb-4" style={{ background: "var(--navy)" }}>
                  {r.num}
                </div>
                <h3 className="text-[11px] font-bold mb-2 uppercase tracking-wide leading-snug" style={{ color: "var(--navy)" }}>{r.title}</h3>
                <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{r.desc}</p>
              </Card>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Quote banner */}
        <ScrollReveal progress={scrollYProgress} start={0.7} end={0.82} direction="up" fadeOut={false}>
          <div className="mt-12 p-7 border text-center" style={{ background: "rgba(255,255,255,0.5)", borderColor: "rgba(184,150,46,0.15)" }}>
            <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--navy)" }}>
              QAITI prepares students and teachers today for the opportunities and responsibilities of tomorrow.{" "}
              <span style={{ color: "var(--gold)", fontStyle: "italic" }}>Preparing human minds for an AI-powered future.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
