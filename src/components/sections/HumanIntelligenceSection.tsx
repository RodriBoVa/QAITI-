"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const capabilities = [
  { num: "01", title: "Think",              desc: "Develop deep understanding, analysis, and critical thinking." },
  { num: "02", title: "Create",             desc: "Empower creativity and innovation with purpose." },
  { num: "03", title: "Collaborate",        desc: "Build strong communication and collaboration skills." },
  { num: "04", title: "Decide Responsibly", desc: "Strengthen ethical reasoning and responsible decision-making." },
  { num: "05", title: "Lead",               desc: "Prepare future leaders who create positive impact." },
  { num: "06", title: "Transform",          desc: "Shape a world where human intelligence drives meaningful change." },
];

export default function HumanIntelligenceSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useSpring(useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]), { stiffness: 40, damping: 20 });

  return (
    <section ref={ref} id="hi" className="relative py-32" style={{ background: "var(--cream)", overflow: "hidden" }}>
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Left */}
          <div>
            <ScrollReveal progress={scrollYProgress} start={0.04} end={0.2} direction="up" fadeOut={false}>
              <Badge>Section 4</Badge>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.07} end={0.22} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mt-5 mb-8" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.09} end={0.26} direction="up" distance={40} fadeOut={false}>
              <h2 style={{ fontSize: "clamp(2rem,3.8vw,3rem)", color: "var(--navy)" }} className="mb-7">
                Preparing Human{" "}
                <span className="text-gold-gradient">Intelligence</span> for an
                <br />AI-Powered Future
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
                  style={{ fontSize: "5rem", lineHeight: 1, color: "#B8962E", opacity: 0.1, fontFamily: "Georgia" }}>"</div>
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
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t-2 border-l-2 pointer-events-none" style={{ borderColor: "rgba(184,150,46,0.25)" }} />
            </div>
          </ScrollReveal>
        </div>

        {/* Capability cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {capabilities.map((cap, i) => (
            <ScrollRevealItem key={cap.title} progress={scrollYProgress} index={i}
              baseStart={0.5} step={0.045} direction="up" distance={36} fadeOut={false}>
              <motion.div
                className="group relative p-7 h-full cursor-default"
                style={{ background: "white", border: "1px solid rgba(184,150,46,0.12)" }}
                whileHover={{ borderColor: "rgba(184,150,46,0.4)", y: -4, boxShadow: "0 16px 48px rgba(184,150,46,0.1)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }} />
                <div className="text-[2.2rem] font-bold mb-4 leading-none"
                  style={{ color: "rgba(184,150,46,0.14)", fontFamily: "Georgia,serif", letterSpacing: "-0.04em" }}>
                  {cap.num}
                </div>
                <h3 className="text-[0.8rem] font-bold mb-3 uppercase tracking-[0.1em]" style={{ color: "var(--navy)" }}>
                  {cap.title}
                </h3>
                <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {cap.desc}
                </p>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </div>
      </div>
    </section>
  );
}
