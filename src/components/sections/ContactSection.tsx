"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer, cardVariant } from "@/lib/animations";
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="relative py-24 overflow-hidden"
      style={{ background: "var(--navy)" }}
    >
      {/* Subtle bg pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF5A 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      {/* Gold gradient bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{ background: "linear-gradient(to right, transparent, #B8962E, transparent)" }}
      />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0}
            className="section-tag mb-3 flex justify-center"
          >
            Contact
          </motion.div>
          <div className="w-8 h-[2px] bg-[#B8962E] mx-auto mb-6" />

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.1}
            className="text-[2.8rem] leading-[1.1] font-bold mb-4"
            style={{ color: "white", fontFamily: "Georgia, serif" }}
          >
            Ready to Join the{" "}
            <span style={{ color: "var(--gold)" }}>QAITI</span> Mission?
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            custom={0.2}
            className="max-w-lg mx-auto text-sm leading-relaxed"
            style={{ color: "rgba(255,255,255,0.55)", fontFamily: "sans-serif" }}
          >
            Whether you are an educational institution, government partner, technology provider,
            or advisory organization — we welcome conversations about how QAITI can work for you.
          </motion.p>
        </div>

        {/* Contact cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12"
        >
          {[
            { icon: <Mail size={20} />, title: "Email Us", value: "info@qaiti.qa" },
            { icon: <MapPin size={20} />, title: "Location", value: "Doha, Qatar" },
            { icon: <Globe size={20} />, title: "Website", value: "www.qaiti.qa" },
          ].map((item) => (
            <motion.div
              key={item.title}
              variants={cardVariant}
              className="flex flex-col items-center text-center p-6 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-[#B8962E]/50 transition-all duration-300"
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                style={{ background: "rgba(184,150,46,0.15)", color: "var(--gold)" }}
              >
                {item.icon}
              </div>
              <div
                className="text-xs font-semibold mb-1 uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "sans-serif" }}
              >
                {item.title}
              </div>
              <div
                className="text-sm font-medium"
                style={{ color: "white", fontFamily: "sans-serif" }}
              >
                {item.value}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          custom={0.4}
          className="flex gap-4 justify-center flex-wrap"
        >
          <button
            className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:opacity-90"
            style={{ background: "var(--gold)", fontFamily: "sans-serif" }}
          >
            Explore the Vision <ArrowRight size={14} />
          </button>
          <button
            className="flex items-center gap-2 px-8 py-3.5 text-sm font-semibold border border-white/30 text-white transition-all duration-300 hover:border-[#B8962E] hover:text-[#D4AF5A]"
            style={{ fontFamily: "sans-serif" }}
          >
            Partner With Us <ArrowRight size={14} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
