"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const caps = [
  { title: "Critical Thinking",                  desc: "Deep understanding, analysis, and sound judgment." },
  { title: "Creative Problem-Solving",            desc: "Creativity and innovation to solve real world challenges." },
  { title: "Ethical Reasoning",                   desc: "Ethical awareness and responsible decision-making." },
  { title: "Communication & Collaboration",       desc: "Strong communication and ability to work with others." },
  { title: "Resilience & Self-Awareness",         desc: "Resilience, well-being, and self understanding." },
  { title: "Leadership & Decision-Making",        desc: "Confident and responsible future leaders." },
  { title: "Responsible Use of AI & Technology", desc: "Safe, ethical, and responsible use of AI." },
];

const floatingLabels = ["Critical Thinking", "Creative Problem-Solving", "Ethical Reasoning", "Communication & Collaboration", "Resilience"];

export default function HISection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} id="hi-layer" className="relative py-32 overflow-hidden" style={{ background: "var(--navy-dark,#0F1A2E)" }}>
      <div className="absolute inset-0 dot-pattern text-[#D4AF5A] opacity-[0.04] pointer-events-none" />

      <div className="section-inner relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">

          {/* Left */}
          <div>
            <ScrollReveal progress={scrollYProgress} start={0.04} end={0.2} direction="up" fadeOut={false}>
              <Badge variant="ghost">Section 7</Badge>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.07} end={0.22} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mt-5 mb-7" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.09} end={0.25} direction="up" distance={40} fadeOut={false}>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "white" }} className="mb-2">
                HI+™ Human Intelligence Layer
              </h2>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.12} end={0.27} direction="up" distance={30} fadeOut={false}>
              <h3 className="text-[1.35rem] font-bold mb-7" style={{ color: "var(--gold)", fontFamily: "Georgia,serif", letterSpacing: "-0.02em" }}>
                Building Human Intelligence<br />for the AI Era
              </h3>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.15} end={0.3} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mb-7" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.17} end={0.32} direction="up" fadeOut={false}>
              <p className="text-[0.9rem] leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.48)" }}>
                AI will transform what machines can do.{" "}
                <strong style={{ color: "white" }}>HI+™ focuses on what humans must become.</strong>
              </p>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.2} end={0.34} direction="up" fadeOut={false}>
              <p className="text-[0.9rem] leading-relaxed mb-3" style={{ color: "rgba(255,255,255,0.48)" }}>
                The HI+™ Human Intelligence Layer is QAITI's proprietary capability layer designed to strengthen
                the human skills students need in the AI era: judgment, creativity, communication, collaboration,
                ethical reasoning, resilience, leadership, and responsible decision-making.
              </p>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.23} end={0.36} direction="up" fadeOut={false}>
              <p className="text-[0.9rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.48)" }}>
                QAITI believes the future is not only about artificial intelligence.{" "}
                <strong style={{ color: "white" }}>It is about preparing human intelligence to work with artificial intelligence.</strong>
              </p>
            </ScrollReveal>
          </div>

          {/* Right image */}
          <ScrollReveal progress={scrollYProgress} start={0.06} end={0.28} direction="left" distance={56} fadeOut={false}>
            <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: "2px" }}>
              <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1000&q=90"
                alt="Human Intelligence" className="w-full object-cover object-top" style={{ height: "460px" }} />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom,rgba(15,26,46,0.25),rgba(15,26,46,0.6))" }} />
              {/* Floating labels — staggered via scroll */}
              {floatingLabels.map((label, i) => (
                <ScrollRevealItem key={label} progress={scrollYProgress} index={i} baseStart={0.12} step={0.06} direction="up" distance={14} fadeOut={false}>
                  <div
                    className="absolute px-3 py-1.5 text-[8.5px] font-bold border rounded-full text-white"
                    style={{
                      top: `${14 + i * 15}%`,
                      left: i % 2 === 0 ? "6%" : "auto",
                      right: i % 2 !== 0 ? "6%" : "auto",
                      background: "rgba(7,16,31,0.75)",
                      borderColor: "rgba(184,150,46,0.4)",
                      backdropFilter: "blur(8px)",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {label}
                  </div>
                </ScrollRevealItem>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Core capabilities label */}
        <ScrollReveal progress={scrollYProgress} start={0.4} end={0.52} direction="up" fadeOut={false}>
          <div className="flex items-center gap-5 mb-10">
            <Separator className="max-w-[4rem]" style={{ background: "rgba(184,150,46,0.25)" }} />
            <span className="section-tag whitespace-nowrap">Core Capabilities</span>
            <Separator className="max-w-[4rem]" style={{ background: "rgba(184,150,46,0.25)" }} />
          </div>
        </ScrollReveal>

        {/* Caps grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
          {caps.map((cap, i) => (
            <ScrollRevealItem key={cap.title} progress={scrollYProgress} index={i} baseStart={0.48} step={0.038} direction="up" distance={32} fadeOut={false}>
              <motion.div
                className="flex flex-col items-center text-center p-4 h-full cursor-default border border-white/7 bg-white/4"
                whileHover={{ background: "rgba(255,255,255,0.09)", borderColor: "rgba(184,150,46,0.35)", y: -3 }}
                transition={{ duration: 0.22 }}
              >
                <h3 className="text-[10px] font-bold mb-2 leading-snug uppercase tracking-wide" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {cap.title}
                </h3>
                <p className="text-[9px] leading-relaxed" style={{ color: "rgba(255,255,255,0.35)" }}>{cap.desc}</p>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Banner */}
        <ScrollReveal progress={scrollYProgress} start={0.8} end={0.9} direction="up" fadeOut={false}>
          <div className="mt-12 p-6 border text-center" style={{ background: "rgba(184,150,46,0.05)", borderColor: "rgba(184,150,46,0.18)" }}>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.62)" }}>
              Human intelligence is our greatest advantage.{" "}
              <span style={{ color: "var(--gold)" }}>Strong humans. Responsible technology. A better future for all.</span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
