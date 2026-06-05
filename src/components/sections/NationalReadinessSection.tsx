"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInLeft } from "@/lib/animations";

const pillars = [
  {
    title: "Students Prepared",
    desc: "Equipping students with the knowledge, skills, and human capabilities to thrive in the AI era and beyond.",
  },
  {
    title: "Teachers Empowered",
    desc: "Enabling teachers with the training, tools, and confidence to deliver AI-era learning with impact.",
  },
  {
    title: "Schools Supported",
    desc: "Providing schools with an integrated platform, resources, and continuous support for successful implementation.",
  },
  {
    title: "Human Capability Strengthened",
    desc: "Building essential human intelligence such as judgment, creativity, communication, ethics, and decision-making.",
  },
  {
    title: "Qatar Future-Ready",
    desc: "Contributing to a resilient, innovative, and competitive nation prepared for the future of work and society.",
  },
];

export default function NationalReadinessSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="implementation"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--cream-dark, #F2EDE4)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0}
              className="section-tag mb-3"
            >
              Section 5
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
              Building the{" "}
              <span style={{ color: "var(--gold)" }}>National Readiness</span>
              <br />
              System for the AI Era
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
              QAITI's mission is to build a national platform that integrates AI
              learning, teacher empowerment, human intelligence development,
              recognized credentials, and future readiness into the school ecosystem.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
            >
              Through this approach, QAITI aims to support students, teachers,
              schools, and national institutions in preparing for the next generation
              of education, work, and innovation.
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.15}
            className="relative rounded-sm overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=900&q=85"
              alt="Teacher empowering students"
              className="w-full h-[420px] object-cover"
            />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                background: "radial-gradient(ellipse at 50% 20%, rgba(184,150,46,0.5) 0%, transparent 60%)",
              }}
            />
          </motion.div>
        </div>

        {/* Mission pillars */}
        <div className="mt-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.35}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[1px] flex-1 bg-[#B8962E]/30" />
            <span
              className="text-xs tracking-widest uppercase font-semibold"
              style={{ color: "var(--gold)", fontFamily: "sans-serif" }}
            >
              Our Mission Pillars
            </span>
            <div className="h-[1px] flex-1 bg-[#B8962E]/30" />
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
          >
            {pillars.map((p, i) => (
              <motion.div
                key={p.title}
                variants={cardVariant}
                className="relative p-5 border border-[#B8962E]/15 bg-white/60 hover:bg-white hover:shadow-md hover:border-[#B8962E]/40 transition-all duration-300"
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold text-white mb-3"
                  style={{ background: "var(--navy)" }}
                >
                  {i + 1}
                </div>
                <h3
                  className="text-xs font-bold mb-2 leading-snug"
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
                <div
                  className="absolute bottom-0 left-0 h-[2px]"
                  style={{ width: `${(i + 1) * 20}%`, background: "var(--gold)", opacity: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.5}
          className="mt-12 p-8 text-center"
          style={{ background: "var(--cream)", border: "1px solid rgba(184,150,46,0.15)" }}
        >
          <p
            className="text-lg font-medium mb-1"
            style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}
          >
            Our mission is simple. Our impact is national.
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--gold)", fontFamily: "sans-serif" }}
          >
            Preparing people. Strengthening capability. Building Qatar's future.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
