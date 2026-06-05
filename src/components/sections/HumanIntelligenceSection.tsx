"use client";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInRight } from "@/lib/animations";

const capabilities = [
  { icon: "💡", title: "Think", desc: "Develop deep understanding, analysis, and critical thinking." },
  { icon: "✏️", title: "Create", desc: "Empower creativity and innovation with purpose." },
  { icon: "🤝", title: "Collaborate", desc: "Build strong communication and collaboration skills." },
  { icon: "⚖️", title: "Decide Responsibly", desc: "Strengthen ethical reasoning and responsible decision-making." },
  { icon: "🚀", title: "Lead", desc: "Prepare future leaders who create positive impact." },
  { icon: "🌍", title: "Transform the Future", desc: "Shape a world where human intelligence drives meaningful change." },
];

export default function HumanIntelligenceSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);

  return (
    <section
      ref={ref}
      id="hi"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              className="section-tag mb-3"
            >
              Section 4
            </motion.div>
            <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="text-[2.8rem] leading-[1.1] font-bold mb-6"
              style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}
            >
              Preparing Human{" "}
              <span style={{ color: "var(--gold)" }}>Intelligence</span> for an
              AI-Powered Future
            </motion.h2>

            <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
            >
              Our vision is to help make Qatar a global benchmark for AI-era human
              capability by preparing students not only to understand technology,
              but to think, create, decide, collaborate, and lead responsibly in a
              world shaped by artificial intelligence.
            </motion.p>

            {/* Quote */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              className="relative p-6 border border-[#B8962E]/20 bg-white/60"
            >
              <div
                className="absolute top-4 left-4 text-5xl leading-none font-serif"
                style={{ color: "var(--gold)", opacity: 0.3 }}
              >
                "
              </div>
              <p
                className="text-sm leading-relaxed pl-6 font-medium"
                style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
              >
                QAITI prepares the human mind behind the technology.
              </p>
            </motion.div>
          </div>

          {/* Right image with parallax */}
          <motion.div
            style={{ y: imageY }}
            className="relative"
          >
            <motion.div
              variants={slideInRight}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="relative rounded-sm overflow-hidden shadow-2xl"
            >
              <img
                src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=900&q=85"
                alt="Students looking at cityscape"
                className="w-full h-[480px] object-cover"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 60%, rgba(250,248,244,0.4))",
                }}
              />
              {/* AI network overlay effect */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: "radial-gradient(ellipse at 70% 20%, rgba(184,150,46,0.6) 0%, transparent 50%)",
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Capability grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16"
        >
          {capabilities.map((cap) => (
            <motion.div
              key={cap.title}
              variants={cardVariant}
              className="flex flex-col items-center text-center p-5 border border-[#B8962E]/15 bg-white/50 hover:bg-white hover:shadow-md hover:border-[#B8962E]/40 transition-all duration-300"
            >
              <span className="text-2xl mb-3">{cap.icon}</span>
              <h3
                className="text-xs font-bold mb-2"
                style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
              >
                {cap.title}
              </h3>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
              >
                {cap.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
