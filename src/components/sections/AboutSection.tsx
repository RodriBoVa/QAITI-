"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInRight } from "@/lib/animations";

const pillars = [
  { emoji: "🇶🇦", title: "National Platform", desc: "A sovereign initiative built in Qatar for national impact and global contribution." },
  { emoji: "🏫", title: "School-Based Model", desc: "Designed for seamless integration into schools and the education system." },
  { emoji: "👩‍🏫", title: "Teacher-Enabled", desc: "Teachers at the center, empowered through proprietary enablement and continuous support." },
  { emoji: "🧠", title: "Human Intelligence", desc: "Proprietary layers that build human capability for the AI era — beyond technology." },
  { emoji: "🤝", title: "Partner Ecosystem", desc: "Curriculum, certification, technology, and advisory partners under one platform." },
  { emoji: "🌐", title: "Future Scale", desc: "Built on scalable architecture to support pilot success and national expansion." },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section ref={ref} id="about" className="relative py-32 overflow-hidden" style={{ background: "var(--cream)" }}>

      {/* Subtle dot BG */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full dot-pattern text-[#B8962E] opacity-[0.035] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto px-8">

        {/* ── Header + Image grid ── */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">

          {/* Left */}
          <div>
            <motion.p variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-tag mb-2">
              Section 2
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="origin-left h-[2px] w-10 mb-8"
              style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
            />

            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-bold mb-3"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2.2rem,4vw,3.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--navy)",
              }}
            >
              A National Human{" "}
              <span
                style={{
                  background: "linear-gradient(135deg,#B8962E,#D4AF5A)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Capability
              </span>{" "}
              Platform
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.55, delay: 0.15, ease: "easeOut" }}
              className="origin-left h-[2px] w-10 mb-7"
              style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
            />

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[0.95rem] leading-relaxed mb-5"
              style={{ color: "var(--text-muted)" }}
            >
              QAITI is being developed as a sovereign platform that brings AI learning,
              teacher enablement, human intelligence development, recognized credentials,
              and national readiness into one integrated school-based ecosystem.
            </motion.p>

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[0.95rem] leading-relaxed"
              style={{ color: "var(--text-muted)" }}
            >
              It is designed to support students, teachers, schools, families, and national
              institutions as Qatar prepares the next generation for an AI-powered world.
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div
            variants={slideInRight} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: "2px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1000&q=90"
                alt="Students learning with technology"
                className="w-full object-cover"
                style={{ height: "460px" }}
              />
              <div className="img-overlay" />
              {/* Gold glow */}
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 65% 25%, rgba(184,150,46,0.18) 0%, transparent 55%)" }}
              />
            </div>
            {/* Accent corner */}
            <div
              className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 pointer-events-none"
              style={{ borderColor: "rgba(184,150,46,0.3)" }}
            />
          </motion.div>
        </div>

        {/* ── Pillar cards ── */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariant}
              className="group flex flex-col items-center text-center p-6 cursor-default transition-all duration-400"
              style={{
                background: "rgba(255,255,255,0.6)",
                border: "1px solid rgba(184,150,46,0.1)",
                backdropFilter: "blur(8px)",
              }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(184,150,46,0.12)" }}
            >
              <span className="text-2xl mb-4">{p.emoji}</span>
              <h3 className="text-xs font-bold mb-2 leading-snug uppercase tracking-wide" style={{ color: "var(--navy)" }}>
                {p.title}
              </h3>
              <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* ── Tagline ── */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex items-center justify-center gap-5 mt-14"
        >
          <div className="h-[1px] w-20" style={{ background: "linear-gradient(to right,transparent,rgba(184,150,46,0.4))" }} />
          <FlowerMark size={20} />
          <span className="section-tag" style={{ letterSpacing: "0.2em" }}>Built in Qatar. Designed for global impact.</span>
          <FlowerMark size={20} />
          <div className="h-[1px] w-20" style={{ background: "linear-gradient(to left,transparent,rgba(184,150,46,0.4))" }} />
        </motion.div>
      </div>
    </section>
  );
}

function FlowerMark({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 60 60" fill="none">
      {[0,30,60,90,120,150,180,210,240,270,300,330].map((deg,i) => (
        <ellipse key={i} cx="30" cy="30" rx="4" ry="13"
          fill="none" stroke="#B8962E" strokeWidth="1.5"
          transform={`rotate(${deg} 30 30)`} />
      ))}
      <circle cx="30" cy="30" r="3.5" fill="#B8962E" />
    </svg>
  );
}
