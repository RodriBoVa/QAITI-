"use client";
import { motion } from "framer-motion";

const navLinks = [
  ["Home", "About QAITI", "Platform"],
  ["Teacher Intelligence Lab™", "HI+™", "Implementation"],
  ["Partners", "Contact"],
];

export default function Footer() {
  return (
    <footer
      className="py-12 border-t"
      style={{ background: "var(--navy-dark, #0F1A2E)", borderColor: "rgba(184,150,46,0.15)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <span
                className="text-3xl font-bold"
                style={{ color: "white", fontFamily: "Georgia, serif" }}
              >
                QAITI
              </span>
              <div
                className="text-[10px] leading-tight"
                style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif" }}
              >
                <div>Qatar Artificial Intelligence</div>
                <div>&amp; Technology Initiative</div>
              </div>
            </div>
            <p
              className="text-xs leading-relaxed max-w-xs mb-4"
              style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif" }}
            >
              A national AI and technology preparedness platform designed to equip students,
              empower teachers, and build the human capability required for the age of
              artificial intelligence.
            </p>
            <p
              className="text-xs font-semibold"
              style={{ color: "var(--gold)", fontFamily: "sans-serif" }}
            >
              Built in Qatar. Designed for global impact.
            </p>
          </div>

          {/* Links */}
          {navLinks.map((group, i) => (
            <div key={i}>
              <ul className="flex flex-col gap-2">
                {group.map((link) => (
                  <li key={link}>
                    <button
                      className="text-xs transition-colors duration-200 hover:text-[#D4AF5A] text-left"
                      style={{ color: "rgba(255,255,255,0.4)", fontFamily: "sans-serif" }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div
          className="pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-2"
          style={{ borderColor: "rgba(184,150,46,0.1)" }}
        >
          <p
            className="text-[10px]"
            style={{ color: "rgba(255,255,255,0.25)", fontFamily: "sans-serif" }}
          >
            © {new Date().getFullYear()} QAITI – Qatar Artificial Intelligence & Technology Initiative.
            All rights reserved.
          </p>
          <div className="flex gap-4">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <button
                key={item}
                className="text-[10px] transition-colors duration-200 hover:text-[#D4AF5A]"
                style={{ color: "rgba(255,255,255,0.25)", fontFamily: "sans-serif" }}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
