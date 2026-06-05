"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInRight } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const reasons = [
  { num: "1", title: "Students Need AI-Era Readiness",          desc: "Students need the knowledge, skills, mindset, and human capabilities to thrive in an AI-powered world." },
  { num: "2", title: "Teachers Need Structured Support",        desc: "Teachers need practical training, tools, and ongoing enablement to confidently deliver AI-era learning." },
  { num: "3", title: "Human Skills Are Becoming More Important",desc: "Critical thinking, creativity, ethics, communication, and resilience are the differentiators in the age of AI." },
  { num: "4", title: "Nations Need Future-Ready Talent",        desc: "Nations that invest in human capability today will lead in innovation, productivity, and global competitiveness." },
  { num: "5", title: "Schools Need a Practical Model",          desc: "Schools need an integrated, scalable, and sustainable model that is easy to adopt and designed for impact." },
];

export default function WhyQaitiSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section ref={ref} className="relative py-32 overflow-hidden" style={{ background: "#F5F0E8" }}>

      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <Badge>Section 8</Badge>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.55 }}
              className="origin-left gold-rule mt-5 mb-8"
            />
            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", color: "var(--navy)" }}
              className="mb-3"
            >
              Why QAITI Matters Now
            </motion.h2>
            <motion.h3
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[1.3rem] font-bold mb-7"
              style={{ color: "var(--gold)", fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
            >
              The AI Era Requires More Than Technology Access
            </motion.h3>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="origin-left gold-rule mb-7"
            />
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[0.95rem] leading-relaxed mb-5" style={{ color: "var(--text-muted)" }}
            >
              Artificial intelligence is changing how people learn, work, solve problems, and make
              decisions. Countries that succeed in the AI era will be those that prepare people to
              use it wisely, creatively, ethically, and productively.
            </motion.p>
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[0.95rem] font-semibold" style={{ color: "var(--navy)" }}
            >
              QAITI is designed to help build that foundation early,
              <br />beginning with students and teachers.
            </motion.p>
          </div>

          {/* Right image */}
          <motion.div
            variants={slideInRight} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="relative overflow-hidden shadow-2xl"
            style={{ borderRadius: "2px" }}
          >
            <img
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1000&q=90"
              alt="AI technology era"
              className="w-full object-cover"
              style={{ height: "440px" }}
            />
            <div className="absolute inset-0 img-cinematic" />
          </motion.div>
        </div>

        {/* Reason cards */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4"
        >
          {reasons.map((r, i) => (
            <motion.div key={r.num} variants={cardVariant}>
              <Card className="relative h-full p-5 cursor-default overflow-hidden">
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold text-white mb-4"
                  style={{ background: "var(--navy)" }}
                >
                  {r.num}
                </div>
                <h3 className="text-[11px] font-bold mb-2 uppercase tracking-wide leading-snug" style={{ color: "var(--navy)" }}>
                  {r.title}
                </h3>
                <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {r.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Quote banner */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-12 p-7 border text-center"
          style={{ background: "rgba(255,255,255,0.5)", borderColor: "rgba(184,150,46,0.15)" }}
        >
          <p className="text-[0.95rem] leading-relaxed" style={{ color: "var(--navy)" }}>
            QAITI prepares students and teachers today for the opportunities and responsibilities of tomorrow.{" "}
            <span style={{ color: "var(--gold)", fontStyle: "italic" }}>
              Preparing human minds for an AI-powered future.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
