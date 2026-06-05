"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer, cardVariant } from "@/lib/animations";
import { ArrowRight, Mail, MapPin, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const contacts = [
  { icon: <Mail size={20} />, title: "Email Us",  value: "info@qaiti.qa" },
  { icon: <MapPin size={20} />, title: "Location", value: "Doha, Qatar" },
  { icon: <Globe size={20} />, title: "Website",   value: "www.qaiti.qa" },
];

export default function ContactSection() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { margin: "-80px" });

  return (
    <section ref={ref} id="contact" className="relative py-32 overflow-hidden" style={{ background: "var(--navy-deepest,#07101F)" }}>

      <div className="absolute inset-0 dot-pattern text-[#D4AF5A] opacity-[0.04] pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "linear-gradient(to right,transparent,#B8962E,transparent)" }} />

      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span style={{ fontFamily: "Georgia,serif", fontSize: "clamp(7rem,18vw,16rem)", color: "rgba(255,255,255,0.016)", fontWeight: 700, letterSpacing: "-0.04em" }}>
          QAITI
        </span>
      </div>

      <div className="section-inner relative z-10">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.div variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"} className="flex justify-center">
            <Badge variant="ghost">Get in Touch</Badge>
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }} animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 0.55 }}
            className="gold-rule mx-auto mt-5 mb-8"
          />
          <motion.h2
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            style={{ fontSize: "clamp(2rem, 3.8vw, 3rem)", color: "white" }}
            className="mb-5"
          >
            Ready to Join the{" "}
            <span className="text-gold-gradient">QAITI</span> Mission?
          </motion.h2>
          <motion.p
            variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
            className="max-w-lg mx-auto text-[0.9rem] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)" }}
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
          {contacts.map((item) => (
            <motion.div key={item.title} variants={cardVariant}>
              <motion.div
                className="flex flex-col items-center text-center p-8 border border-white/7 bg-white/4 cursor-default"
                whileHover={{ background: "rgba(255,255,255,0.08)", borderColor: "rgba(184,150,46,0.35)", y: -4 }}
                transition={{ duration: 0.22 }}
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center mb-5"
                  style={{ background: "rgba(184,150,46,0.1)", color: "var(--gold)" }}>
                  {item.icon}
                </div>
                <div className="section-tag mb-2">{item.title}</div>
                <div className="text-sm font-semibold" style={{ color: "rgba(255,255,255,0.8)" }}>{item.value}</div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTAs */}
        <motion.div
          variants={fadeUp} initial="hidden" animate={inView ? "visible" : "hidden"}
          className="flex gap-4 justify-center flex-wrap"
        >
          <Button size="lg" className="text-[11px]">
            Explore the Vision <ArrowRight size={14} />
          </Button>
          <Button size="lg" variant="outlineLight" className="text-[11px]">
            Partner With Us <ArrowRight size={14} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
