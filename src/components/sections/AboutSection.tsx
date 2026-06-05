"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInLeft, slideInRight } from "@/lib/animations";

const pillars = [
  {
    icon: "🇶🇦",
    title: "National Platform",
    desc: "A sovereign initiative built in Qatar for national impact and global contribution.",
  },
  {
    icon: "🏫",
    title: "School-Based Model",
    desc: "Designed for seamless integration into schools and the education system.",
  },
  {
    icon: "👩‍🏫",
    title: "Teacher-Enabled Implementation",
    desc: "Teachers at the center, empowered through proprietary enablement and continuous support.",
  },
  {
    icon: "🧠",
    title: "Human Intelligence Development",
    desc: "Proprietary layers that build human capability for the AI era — beyond technology.",
  },
  {
    icon: "🤝",
    title: "Partner-Supported Ecosystem",
    desc: "Curriculum, certification, technology, and advisory partners working together under one platform.",
  },
  {
    icon: "🌐",
    title: "Designed for Future Scale",
    desc: "Built on a scalable architecture to support pilot success and national expansion.",
  },
];

export default function AboutSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="about"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--cream)" }}
    >
      {/* Decorative background */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, #B8962E 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left content */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              className="section-tag mb-3"
            >
              Section 2
            </motion.div>
            <div className="w-8 h-[2px] bg-[#B8962E] mb-8" />

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="text-[2.8rem] leading-[1.1] font-bold mb-6"
              style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}
            >
              A National Human{" "}
              <span style={{ color: "var(--gold)" }}>Capability</span> Platform
            </motion.h2>

            <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
            >
              QAITI is being developed as a sovereign platform that brings AI
              learning, teacher enablement, human intelligence development,
              recognized credentials, and national readiness into one integrated
              school-based ecosystem.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
            >
              It is designed to support students, teachers, schools, families,
              and national institutions as Qatar prepares the next generation
              for an AI-powered world.
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="relative rounded-sm overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900&q=85"
              alt="Students learning with technology"
              className="w-full h-[420px] object-cover"
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background:
                  "radial-gradient(ellipse at 60% 30%, rgba(184,150,46,0.5) 0%, transparent 60%)",
              }}
            />
          </motion.div>
        </div>

        {/* Pillar cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16"
        >
          {pillars.map((p) => (
            <motion.div
              key={p.title}
              variants={cardVariant}
              className="flex flex-col items-center text-center p-5 border border-[#B8962E]/15 bg-white/50 hover:bg-white hover:shadow-md hover:border-[#B8962E]/40 transition-all duration-300 group cursor-default"
            >
              <span className="text-2xl mb-3">{p.icon}</span>
              <h3
                className="text-xs font-bold mb-2 leading-tight"
                style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
              >
                {p.title}
              </h3>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
              >
                {p.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer tagline */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <div className="h-[1px] w-24 bg-[#B8962E]/30" />
          <span
            className="text-xs tracking-widest uppercase"
            style={{ color: "var(--gold)", fontFamily: "sans-serif" }}
          >
            Built in Qatar. Designed for global impact.
          </span>
          <div className="h-[1px] w-24 bg-[#B8962E]/30" />
        </motion.div>
      </div>
    </section>
  );
}
