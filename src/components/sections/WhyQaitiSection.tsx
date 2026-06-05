"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInRight } from "@/lib/animations";

const reasons = [
  {
    num: "1",
    title: "Students Need AI-Era Readiness",
    desc: "Students need the knowledge, skills, mindset, and human capabilities to thrive in an AI-powered world.",
  },
  {
    num: "2",
    title: "Teachers Need Structured Support",
    desc: "Teachers need practical training, tools, and ongoing enablement to confidently deliver AI-era learning.",
  },
  {
    num: "3",
    title: "Human Skills Are Becoming More Important",
    desc: "Critical thinking, creativity, ethics, communication, and resilience are the differentiators in the age of AI.",
  },
  {
    num: "4",
    title: "Nations Need Future-Ready Talent",
    desc: "Nations that invest in human capability today will lead in innovation, productivity, and global competitiveness.",
  },
  {
    num: "5",
    title: "Schools Need a Practical Implementation Model",
    desc: "Schools need an integrated, scalable, and sustainable model that is easy to adopt and designed for impact.",
  },
];

export default function WhyQaitiSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section
      ref={ref}
      className="relative py-24 overflow-hidden"
      style={{ background: "#F5F0E8" }}
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
              Section 8
            </motion.div>
            <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="text-[2.8rem] leading-[1.1] font-bold mb-4"
              style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}
            >
              Why QAITI Matters Now
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.15}
              className="text-[1.5rem] leading-[1.3] font-semibold mb-6"
              style={{ color: "var(--gold)", fontFamily: "Georgia, serif" }}
            >
              The AI Era Requires More Than Technology Access
            </motion.h3>

            <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
            >
              Artificial intelligence is changing how people learn, work, solve problems,
              and make decisions. Countries that succeed in the AI era will not only be
              those that adopt technology, but those that prepare people to use it wisely,
              creatively, ethically, and productively.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.25}
              className="text-sm font-semibold"
              style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
            >
              QAITI is designed to help build that foundation early,
              <br />
              beginning with students and teachers.
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
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&q=85"
              alt="AI technology era"
              className="w-full h-[420px] object-cover"
            />
            <div
              className="absolute inset-0 opacity-25"
              style={{
                background: "radial-gradient(ellipse at 60% 30%, rgba(184,150,46,0.5) 0%, transparent 60%)",
              }}
            />
          </motion.div>
        </div>

        {/* Reason cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mt-16"
        >
          {reasons.map((r) => (
            <motion.div
              key={r.num}
              variants={cardVariant}
              className="relative p-5 border border-[#B8962E]/15 bg-white/60 hover:bg-white hover:shadow-md hover:border-[#B8962E]/40 transition-all duration-300 group"
            >
              <h3
                className="text-xs font-bold mb-3 leading-snug"
                style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
              >
                {r.title}
              </h3>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
              >
                {r.desc}
              </p>
              {/* Bottom number */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1">
                <div className="h-[1px] w-6 bg-[#B8962E]/40" />
                <span
                  className="text-[10px] font-semibold"
                  style={{ color: "var(--gold)", fontFamily: "sans-serif" }}
                >
                  {r.num}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.6}
          className="mt-12 p-6 border border-[#B8962E]/15 bg-white/40"
        >
          <p
            className="text-center text-sm leading-relaxed"
            style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
          >
            QAITI prepares students and teachers today for the opportunities and responsibilities of tomorrow.{" "}
            <span style={{ color: "var(--gold)" }}>
              Preparing human minds for an AI-powered future.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
