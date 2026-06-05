"use client";
import { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import ScrollReveal, { ScrollRevealItem } from "@/components/ui/ScrollReveal";
import { Badge } from "@/components/ui/badge";

const features = [
  { num: "01", title: "Teacher Onboarding & Readiness",     desc: "Structured onboarding to build confidence and ensure AI-era classroom readiness." },
  { num: "02", title: "AI-Era Classroom Preparation",        desc: "Practical training, strategies, and tools to integrate AI confidently in teaching." },
  { num: "03", title: "Curriculum Delivery Support",         desc: "Guidance, resources, and lesson support for effective curriculum implementation." },
  { num: "04", title: "Practical Simulations",               desc: "Hands-on practice through simulations, scenarios, and real classroom applications." },
  { num: "05", title: "Continuous Professional Development", desc: "Ongoing learning pathways to grow skills and stay future-ready." },
  { num: "06", title: "Quality Assurance & Feedback",        desc: "Feedback loops, classroom insights, and quality support for continuous improvement." },
];

export default function TeacherLabSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });

  return (
    <section ref={ref} id="teacher-lab" className="relative py-32" style={{ background: "var(--cream)", overflow: "hidden" }}>
      <div className="section-inner">
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-24">
          {/* Left */}
          <div>
            <ScrollReveal progress={scrollYProgress} start={0.04} end={0.2} direction="up" fadeOut={false}>
              <Badge>Section 6</Badge>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.07} end={0.22} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mt-5 mb-7" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.09} end={0.25} direction="up" distance={40} fadeOut={false}>
              <h2 style={{ fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "var(--navy)" }} className="mb-1">
                Teacher Intelligence Lab™
              </h2>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.12} end={0.27} direction="up" distance={30} fadeOut={false}>
              <h3 className="text-[1.35rem] font-bold mb-7" style={{ color: "var(--gold)", fontFamily: "Georgia,serif", letterSpacing: "-0.02em" }}>
                Empowering Teachers<br />for the AI Era
              </h3>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.15} end={0.3} direction="up" fadeOut={false}>
              <div className="origin-left gold-rule mb-7" />
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.17} end={0.32} direction="up" fadeOut={false}>
              <p className="text-xs italic mb-4" style={{ color: "var(--navy)" }}>
                Teachers are central to every successful transformation.
              </p>
            </ScrollReveal>
            <ScrollReveal progress={scrollYProgress} start={0.19} end={0.34} direction="up" fadeOut={false}>
              <p className="text-[0.9rem] leading-relaxed mb-9" style={{ color: "var(--text-muted)" }}>
                <strong style={{ color: "var(--navy)" }}>Teacher Intelligence Lab™</strong> is QAITI's
                proprietary teacher enablement environment designed to help educators gain the confidence,
                readiness, tools, and support required to deliver AI-era learning inside the classroom.
              </p>
            </ScrollReveal>

            {/* Quote card */}
            <ScrollReveal progress={scrollYProgress} start={0.22} end={0.36} direction="up" fadeOut={false}>
              <div className="flex items-center gap-4 p-5 border"
                style={{ background: "rgba(255,255,255,0.7)", borderColor: "rgba(184,150,46,0.15)", backdropFilter: "blur(8px)" }}>
                <div className="w-10 h-10 rounded-full bg-[#B8962E]/10 flex items-center justify-center text-xl shrink-0">👩‍🏫</div>
                <div>
                  <p className="text-xs font-semibold leading-relaxed" style={{ color: "var(--navy)" }}>
                    Empowered teachers. Confident classrooms. Future-ready students.
                  </p>
                  <div className="mt-2 gold-rule" style={{ width: "2rem" }} />
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right image */}
          <ScrollReveal progress={scrollYProgress} start={0.06} end={0.28} direction="right" distance={56} fadeOut={false}>
            <div className="relative">
              <div className="relative overflow-hidden shadow-2xl" style={{ borderRadius: "2px" }}>
                <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1000&q=90"
                  alt="Teacher Intelligence Lab" className="w-full object-cover" style={{ height: "440px" }} />
                <div className="absolute inset-0 img-cinematic" />
              </div>
              {/* Stats */}
              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3">
                {[{ val: "150+", label: "Resources Available" }, { val: "3,250+", label: "Teachers Connected", gold: true }].map((s) => (
                  <div key={s.label} className="p-4 text-center" style={{ background: "rgba(250,248,244,0.94)", backdropFilter: "blur(12px)" }}>
                    <div className="text-2xl font-bold mb-0.5" style={{ color: s.gold ? "var(--gold)" : "var(--navy)", fontFamily: "Georgia,serif" }}>
                      {s.val}
                    </div>
                    <div className="text-[9px] uppercase tracking-wide font-semibold" style={{ color: "var(--text-muted)" }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((f, i) => (
            <ScrollRevealItem key={f.title} progress={scrollYProgress} index={i}
              baseStart={0.5} step={0.045} direction="up" distance={36} fadeOut={false}>
              <motion.div
                className="group relative p-7 h-full cursor-default"
                style={{ background: "white", border: "1px solid rgba(184,150,46,0.12)" }}
                whileHover={{ borderColor: "rgba(184,150,46,0.4)", y: -4, boxShadow: "0 16px 48px rgba(184,150,46,0.1)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"
                  style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }} />
                <div className="text-[2.2rem] font-bold mb-4 leading-none"
                  style={{ color: "rgba(184,150,46,0.14)", fontFamily: "Georgia,serif", letterSpacing: "-0.04em" }}>
                  {f.num}
                </div>
                <h3 className="text-[0.8rem] font-bold mb-3 uppercase tracking-[0.1em]" style={{ color: "var(--navy)" }}>
                  {f.title}
                </h3>
                <p className="text-[0.82rem] leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {f.desc}
                </p>
              </motion.div>
            </ScrollRevealItem>
          ))}
        </div>

        {/* Bottom banner */}
        <ScrollReveal progress={scrollYProgress} start={0.76} end={0.86} direction="up" fadeOut={false}>
          <div className="mt-12 p-6 text-center" style={{ background: "var(--navy)" }}>
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.72)" }}>
              When teachers are empowered, students thrive.{" "}
              <span style={{ color: "var(--gold)" }}>
                Teacher Intelligence Lab™ — Enabling teachers. Elevating education. Shaping the future.
              </span>
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
