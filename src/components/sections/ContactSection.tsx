"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer, cardVariant } from "@/lib/animations";
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section ref={ref} id="contact" className="relative py-32 overflow-hidden" style={{ background: "var(--navy-dark, #0F1A2E)" }}>

      <div className="absolute inset-0 dot-pattern text-[#D4AF5A] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right,transparent,#B8962E,transparent)" }} />

      {/* Large background QAITI text */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        style={{ overflow: "hidden" }}
      >
        <span
          className="font-bold"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(8rem,20vw,18rem)",
            color: "rgba(255,255,255,0.018)",
            letterSpacing: "-0.04em",
          }}
        >
          QAITI
        </span>
      </div>

      <div className="max-w-5xl mx-auto px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.p variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="section-tag mb-2 text-center">
            Contact
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.55 }}
            className="h-[2px] w-10 mx-auto mb-8"
            style={{ background: "linear-gradient(to right,#B8962E,#D4AF5A)" }}
          />
          <motion.h2
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="font-bold mb-5"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2.2rem,4vw,3.2rem)",
              lineHeight: 1.1,
              letterSpacing: "-0.025em",
              color: "white",
            }}
          >
            Ready to Join the{" "}
            <span style={{ background: "linear-gradient(135deg,#B8962E,#D4AF5A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              QAITI
            </span>{" "}
            Mission?
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="max-w-lg mx-auto text-[0.9rem] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            Whether you are an educational institution, government partner, technology provider,
            or advisory organization — we welcome conversations about how QAITI can work for you.
          </motion.p>
        </div>

        {/* Contact cards */}
        <motion.div
          variants={staggerContainer} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-14"
        >
          {[
            { icon: <Mail size={20} />, title: "Email Us", value: "info@qaiti.qa" },
            { icon: <MapPin size={20} />, title: "Location", value: "Doha, Qatar" },
            { icon: <Globe size={20} />, title: "Website", value: "www.qaiti.qa" },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              className="flex flex-col items-center text-center p-8 cursor-default transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)" }}
              whileHover={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(184,150,46,0.35)", y: -4 }}
            >
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                style={{ background: "rgba(184,150,46,0.12)", color: "var(--gold)" }}
              >
                {item.icon}
              </div>
              <div className="section-tag mb-1">{item.title}</div>
              <div className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.85)" }}>{item.value}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button className="btn-gold text-xs tracking-widest uppercase">
            Explore the Vision <ArrowRight size={13} />
          </button>
          <button
            className="inline-flex items-center gap-2 px-8 py-[0.875rem] text-[0.75rem] font-semibold tracking-widest uppercase border transition-all duration-300 hover:bg-white/8"
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.7)" }}
          >
            Partner With Us <ArrowRight size={13} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
