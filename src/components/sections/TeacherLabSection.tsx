"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { staggerContainer, cardVariant, fadeUp, slideInRight } from "@/lib/animations";

const features = [
  {
    title: "Teacher Onboarding and Readiness",
    desc: "Structured onboarding to build confidence and ensure AI-era classroom readiness.",
  },
  {
    title: "AI-Era Classroom Preparation",
    desc: "Practical training, strategies, and tools to integrate AI confidently in teaching.",
  },
  {
    title: "Curriculum Delivery Support",
    desc: "Guidance, resources, and lesson support for effective curriculum implementation.",
  },
  {
    title: "Practical Simulations and Guided Practice",
    desc: "Hands-on practice through simulations, scenarios, and real classroom applications.",
  },
  {
    title: "Continuous Professional Development",
    desc: "Ongoing learning pathways to grow skills and stay future-ready.",
  },
  {
    title: "Quality Assurance and Feedback",
    desc: "Feedback loops, classroom insights, and quality support for continuous improvement.",
  },
];

export default function TeacherLabSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section
      ref={ref}
      id="teacher-lab"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--cream)" }}
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
              Section 6
            </motion.div>
            <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.1}
              className="text-[2.5rem] leading-[1.1] font-bold mb-2"
              style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}
            >
              Teacher Intelligence Lab™
            </motion.h2>

            <motion.h3
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.15}
              className="text-[1.6rem] leading-[1.2] font-bold mb-6"
              style={{ color: "var(--gold)", fontFamily: "Georgia, serif" }}
            >
              Empowering Teachers
              <br />
              for the AI Era
            </motion.h3>

            <div className="w-8 h-[2px] bg-[#B8962E] mb-6" />

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.2}
              className="text-xs italic mb-3"
              style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
            >
              Teachers are central to every successful transformation.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.25}
              className="text-sm leading-relaxed mb-4"
              style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
            >
              <strong style={{ color: "var(--navy)" }}>Teacher Intelligence Lab™</strong> is QAITI's
              proprietary teacher enablement environment designed to help educators gain the confidence,
              readiness, tools, and support required to deliver AI-era learning inside the classroom.
            </motion.p>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.3}
              className="text-sm leading-relaxed mb-8"
              style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
            >
              It is designed to support teacher training, classroom readiness, curriculum delivery,
              certification preparation, lesson confidence, and continuous improvement.
            </motion.p>

            {/* Quote card */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              custom={0.35}
              className="flex items-center gap-4 p-5 border border-[#B8962E]/20 bg-white/60"
            >
              <div className="shrink-0">
                <div className="w-10 h-10 rounded-full bg-[#B8962E]/10 flex items-center justify-center text-xl">
                  👩‍🏫
                </div>
              </div>
              <p
                className="text-xs leading-snug"
                style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
              >
                Empowered teachers.
                <br />
                Confident classrooms.
                <br />
                Future-ready students.
              </p>
            </motion.div>
          </div>

          {/* Right image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="relative"
          >
            <div className="relative rounded-sm overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&q=85"
                alt="Teacher Intelligence Lab"
                className="w-full h-[420px] object-cover"
              />
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: "radial-gradient(ellipse at 30% 20%, rgba(184,150,46,0.5) 0%, transparent 60%)",
                }}
              />
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3"
            >
              <div className="bg-white/90 backdrop-blur-sm p-4 text-center shadow-md">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--navy)", fontFamily: "Georgia, serif" }}
                >
                  150+
                </div>
                <div
                  className="text-[10px]"
                  style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
                >
                  Resources Available
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-4 text-center shadow-md">
                <div
                  className="text-2xl font-bold mb-1"
                  style={{ color: "var(--gold)", fontFamily: "Georgia, serif" }}
                >
                  3,250+
                </div>
                <div
                  className="text-[10px]"
                  style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
                >
                  Teachers Connected
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Feature cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-16"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={cardVariant}
              className="flex flex-col items-center text-center p-5 border border-[#B8962E]/15 bg-white/50 hover:bg-white hover:shadow-md hover:border-[#B8962E]/40 transition-all duration-300"
            >
              <h3
                className="text-xs font-bold mb-2 leading-snug"
                style={{ color: "var(--navy)", fontFamily: "sans-serif" }}
              >
                {f.title}
              </h3>
              <p
                className="text-[10px] leading-relaxed"
                style={{ color: "var(--text-muted)", fontFamily: "sans-serif" }}
              >
                {f.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom banner */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.6}
          className="mt-12 p-6"
          style={{ background: "var(--navy)" }}
        >
          <p
            className="text-center text-sm"
            style={{ color: "rgba(255,255,255,0.8)", fontFamily: "sans-serif" }}
          >
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
