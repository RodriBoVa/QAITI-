"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInRight } from "@/lib/animations";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const features = [
  { title: "Teacher Onboarding & Readiness",      desc: "Structured onboarding to build confidence and ensure AI-era classroom readiness." },
  { title: "AI-Era Classroom Preparation",         desc: "Practical training, strategies, and tools to integrate AI confidently in teaching." },
  { title: "Curriculum Delivery Support",          desc: "Guidance, resources, and lesson support for effective curriculum implementation." },
  { title: "Practical Simulations",                desc: "Hands-on practice through simulations, scenarios, and real classroom applications." },
  { title: "Continuous Professional Development",  desc: "Ongoing learning pathways to grow skills and stay future-ready." },
  { title: "Quality Assurance & Feedback",         desc: "Feedback loops, classroom insights, and quality support for continuous improvement." },
];

export default function TeacherLabSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section ref={ref} id="teacher-lab" className="relative py-32 overflow-hidden" style={{ background: "var(--cream)" }}>

      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Left */}
          <div>
            <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}>
              <Badge>Section 6</Badge>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.55 }}
              className="origin-left gold-rule mt-5 mb-7"
            />

            <motion.h2
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", color: "var(--navy)" }}
              className="mb-1"
            >
              Teacher Intelligence Lab™
            </motion.h2>
            <motion.h3
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[1.4rem] font-bold mb-7"
              style={{ color: "var(--gold)", fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}
            >
              Empowering Teachers<br />for the AI Era
            </motion.h3>
            <motion.div
              initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="origin-left gold-rule mb-7"
            />

            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-xs italic mb-4" style={{ color: "var(--navy)" }}
            >
              Teachers are central to every successful transformation.
            </motion.p>
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[0.9rem] leading-relaxed mb-4" style={{ color: "var(--text-muted)" }}
            >
              <strong style={{ color: "var(--navy)" }}>Teacher Intelligence Lab™</strong> is QAITI's
              proprietary teacher enablement environment designed to help educators gain the confidence,
              readiness, tools, and support required to deliver AI-era learning inside the classroom.
            </motion.p>
            <motion.p
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="text-[0.9rem] leading-relaxed mb-9" style={{ color: "var(--text-muted)" }}
            >
              It supports teacher training, classroom readiness, curriculum delivery, certification
              preparation, lesson confidence, and continuous improvement.
            </motion.p>

            {/* Quote card */}
            <motion.div
              variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
              className="flex items-center gap-4 p-5 border"
              style={{ background: "rgba(255,255,255,0.7)", borderColor: "rgba(184,150,46,0.15)", backdropFilter: "blur(8px)" }}
            >
              <div className="w-10 h-10 rounded-full bg-[#B8962E]/10 flex items-center justify-center text-xl shrink-0">
                👩‍🏫
              </div>
              <p className="text-xs font-semibold leading-relaxed" style={{ color: "var(--navy)" }}>
                Empowered teachers.<br />Confident classrooms.<br />Future-ready students.
              </p>
            </motion.div>
          </div>

          {/* Right image + stats */}
          <motion.div
            variants={slideInRight} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="relative"
          >
            <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: "2px" }}>
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=90"
                alt="Teacher Intelligence Lab"
                className="w-full object-cover"
                style={{ height: "440px" }}
              />
              <div className="absolute inset-0 img-cinematic" />
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3"
            >
              {[{ val: "150+", label: "Resources Available" }, { val: "3,250+", label: "Teachers Connected" }].map((s) => (
                <div key={s.label} className="p-4 text-center" style={{ background: "rgba(250,248,244,0.92)", backdropFilter: "blur(12px)" }}>
                  <div className="text-2xl font-bold mb-0.5" style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}>{s.val}</div>
                  <div className="text-[9px] uppercase tracking-wide" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        >
          {features.map((f) => (
            <motion.div key={f.title} variants={cardVariant}>
              <Card className="h-full flex flex-col text-center items-center p-5 cursor-default" style={{ background: "rgba(255,255,255,0.65)" }}>
                <h3 className="text-[10.5px] font-bold mb-2 uppercase tracking-wide leading-snug" style={{ color: "var(--navy)" }}>
                  {f.title}
                </h3>
                <p className="text-[10px] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {f.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="mt-12 p-6 text-center"
          style={{ background: "var(--navy)" }}
        >
          <p className="text-sm" style={{ color: "rgba(255,255,255,0.75)" }}>
            When teachers are empowered, students thrive.{" "}
            <span style={{ color: "var(--gold)" }}>
              Teacher Intelligence Lab™ — Enabling teachers. Elevating education. Shaping the future.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
