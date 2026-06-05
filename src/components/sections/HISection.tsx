"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInLeft } from "@/lib/animations";

const coreCapabilities = [
  { title: "Critical Thinking", desc: "Develop deep understanding, analysis, and sound judgment." },
  { title: "Creative Problem-Solving", desc: "Empower creativity and innovation to solve real world challenges." },
  { title: "Ethical Reasoning", desc: "Strengthen ethical awareness and responsible decision-making." },
  { title: "Communication & Collaboration", desc: "Build strong communication skills and the ability to work effectively with others." },
  { title: "Resilience & Self-Awareness", desc: "Cultivate resilience, well-being, and self understanding." },
  { title: "Leadership & Decision-Making", desc: "Prepare future leaders who make confident and responsible decisions." },
  { title: "Responsible Use of AI & Technology", desc: "Promote safe, ethical, and responsible use of AI and technology." },
];

export default function HISection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="hi-layer"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF5A 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
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
              Section 7
            </motion.div>
            <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="text-[2.5rem] leading-[1.1] font-bold mb-3"
              style={{ color: "white", fontFamily: "Georgia, serif" }}
            >
              HI+™ Human Intelligence Layer
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.15}
              className="text-[1.6rem] leading-[1.2] font-bold mb-6"
              style={{ color: "var(--gold)", fontFamily: "Georgia, serif" }}
            >
              Building Human Intelligence
              <br />
              for the AI Era
            </motion.h3>

            <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              className="text-sm leading-relaxed mb-3"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "sans-serif" }}
            >
              AI will transform what machines can do.{" "}
              <strong style={{ color: "white" }}>
                HI+™ focuses on what humans must become.
              </strong>
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.25}
              className="text-sm leading-relaxed mb-3"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "sans-serif" }}
            >
              The HI+™ Human Intelligence Layer is QAITI's proprietary capability layer
              designed to strengthen the human skills students need in the AI era:
              judgment, creativity, communication, collaboration, ethical reasoning,
              resilience, leadership, and responsible decision-making.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.55)", fontFamily: "sans-serif" }}
            >
              QAITI believes the future is not only about artificial intelligence.{" "}
              <strong style={{ color: "white" }}>
                It is about preparing human intelligence to work with artificial intelligence.
              </strong>
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.15}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=900&q=85"
                alt="Human Intelligence concept"
                className="w-full h-[460px] object-cover object-top"
              />
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, rgba(26,39,68,0.3), rgba(26,39,68,0.6))",
                }}
              />
              {/* Floating capability labels */}
              {["Critical Thinking", "Creative Problem-Solving", "Ethical Reasoning", "Communication & Collaboration", "Resilience & Self-Awareness"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="absolute px-3 py-1.5 text-[9px] font-semibold border border-[#B8962E]/50 bg-[#0F1A2E]/70 backdrop-blur-sm text-white rounded-full"
                  style={{
                    top: `${15 + i * 15}%`,
                    left: i % 2 === 0 ? "8%" : "auto",
                    right: i % 2 !== 0 ? "8%" : "auto",
                    fontFamily: "sans-serif",
                  }}
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core capabilities */}
        <div className="mt-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.4}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] flex-1 bg-[#B8962E]/30" />
            <span
              className="text-xs tracking-widest uppercase font-semibold"
              style={{ color: "var(--gold)", fontFamily: "sans-serif" }}
            >
              Core Capabilities
            </span>
            <div className="h-[1px] flex-1 bg-[#B8962E]/30" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3"
          >
            {coreCapabilities.map((cap) => (
              <motion.div
                key={cap.title}
                variants={cardVariant}
                className="flex flex-col items-center text-center p-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#B8962E]/50 transition-all duration-300"
              >
                <h3
                  className="text-[10px] font-bold mb-2 leading-snug"
                  style={{ color: "white", fontFamily: "sans-serif" }}
                >
                  {cap.title}
                </h3>
                <p
                  className="text-[9px] leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.45)", fontFamily: "sans-serif" }}
                >
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Bottom banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.6}
          className="mt-12 p-6 border border-[#B8962E]/30 bg-[#B8962E]/5"
        >
          <p
            className="text-center text-sm"
            style={{ color: "rgba(255,255,255,0.7)", fontFamily: "sans-serif" }}
          >
            Human intelligence is our greatest advantage.{" "}
            <span style={{ color: "var(--gold)" }}>
              Strong humans. Responsible technology. A better future for all.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
