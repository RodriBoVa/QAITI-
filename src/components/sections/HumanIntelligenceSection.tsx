"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInRight } from "@/lib/animations";

const capabilities = [
  { emoji: "💡", title: "Think", desc: "Develop deep understanding, analysis, and critical thinking." },
  { emoji: "✏️", title: "Create", desc: "Empower creativity and innovation with purpose." },
  { emoji: "🤝", title: "Collaborate", desc: "Build strong communication and collaboration skills." },
  { emoji: "⚖️", title: "Decide Responsibly", desc: "Strengthen ethical reasoning and responsible decision-making." },
  { emoji: "🚀", title: "Lead", desc: "Prepare future leaders who create positive impact." },
  { emoji: "🌍", title: "Transform", desc: "Shape a world where human intelligence drives meaningful change." },
];

export default function HumanIntelligenceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["4%", "-4%"]);

  return (
    <section ref={ref} id="hi" className="relative py-32 overflow-hidden" style={{ background: "var(--cream)" }}>
      <div className="max-w-7xl mx-auto px-8">

        <div className="grid lg:grid-cols-2 gap-20 items-center mb-20">
          {/* Left */}
          <div>
            <motion.p variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-tag mb-2">
              Section 4
            </motion.p>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.55 }}
              className="origin-left h-[2px] w-10 mb-8"
              style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
            />
            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="font-bold mb-7"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2.2rem,4vw,3.2rem)",
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "var(--navy)",
              }}
            >
              Preparing Human{" "}
              <span style={{ background: "linear-gradient(135deg,#B8962E,#D4AF5A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                Intelligence
              </span>{" "}
              for an
              <br />
              AI-Powered Future
            </motion.h2>

            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="origin-left h-[2px] w-10 mb-7"
              style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
            />

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[0.95rem] leading-relaxed mb-9"
              style={{ color: "var(--text-muted)" }}
            >
              Our vision is to help make Qatar a global benchmark for AI-era human capability by preparing
              students not only to understand technology, but to think, create, decide, collaborate, and
              lead responsibly in a world shaped by artificial intelligence.
            </motion.p>

            {/* Quote */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="relative p-7"
              style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(184,150,46,0.15)", backdropFilter: "blur(8px)" }}
            >
              <div
                className="absolute top-4 left-5 font-serif leading-none select-none"
                style={{ fontSize: "4rem", color: "#B8962E", opacity: 0.2, fontFamily: "Georgia" }}
              >
                "
              </div>
              <p className="text-[0.9rem] leading-relaxed pl-6 font-semibold" style={{ color: "var(--navy)" }}>
                QAITI prepares the human mind behind the technology.
              </p>
              <div className="mt-3 pl-6">
                <div className="h-[1px] w-8" style={{ background: "var(--gold)" }} />
              </div>
            </motion.div>
          </div>

          {/* Right image with parallax */}
          <motion.div style={{ y: imageY }}>
            <motion.div
              variants={slideInRight} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="relative overflow-hidden shadow-2xl"
              style={{ borderRadius: "2px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1000&q=90"
                alt="Students looking at cityscape"
                className="w-full object-cover"
                style={{ height: "500px" }}
              />
              <div className="img-overlay" />
              <div
                className="absolute inset-0"
                style={{ background: "radial-gradient(ellipse at 65% 20%, rgba(184,150,46,0.2) 0%, transparent 55%)" }}
              />
            </motion.div>
            {/* Accent corner */}
            <div
              className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 pointer-events-none"
              style={{ borderColor: "rgba(184,150,46,0.3)" }}
            />
          </motion.div>
        </div>

        {/* Capability grid */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={cardVariant}
              className="flex flex-col items-center text-center p-6 cursor-default"
              style={{ background: "rgba(255,255,255,0.6)", border: "1px solid rgba(184,150,46,0.1)" }}
              whileHover={{ y: -4, boxShadow: "0 12px 40px rgba(184,150,46,0.12)" }}
            >
              <span className="text-2xl mb-4">{cap.emoji}</span>
              <h3 className="text-xs font-bold mb-2 uppercase tracking-wide" style={{ color: "var(--navy)" }}>{cap.title}</h3>
              <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-muted)" }}>{cap.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
