"use client";

const col1 = ["Home", "About QAITI", "Platform", "Teacher Intelligence Lab™"];
const col2 = ["HI+™", "Implementation", "Partners", "Contact"];

export default function Footer() {
  return (
    <footer className="py-16 border-t" style={{ background: "#07101F", borderColor: "rgba(184,150,46,0.1)" }}>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-5">
              <span className="text-3xl font-bold tracking-tight" style={{ color: "white", fontFamily: "Georgia, serif", letterSpacing: "-0.02em" }}>
                QAITI
              </span>
              <div className="border-l pl-4" style={{ borderColor: "rgba(184,150,46,0.25)" }}>
                <div className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "sans-serif" }}>
                  Qatar Artificial Intelligence
                </div>
                <div className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: "rgba(184,150,46,0.6)", fontFamily: "sans-serif" }}>
                  &amp; Technology Initiative
                </div>
              </div>
            </div>
            <p className="text-xs leading-relaxed max-w-xs mb-5" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "sans-serif" }}>
              A national AI and technology preparedness platform designed to equip students, empower teachers,
              and build the human capability required for the age of artificial intelligence.
            </p>
            <p className="text-xs font-bold tracking-wide uppercase" style={{ color: "var(--gold)", fontFamily: "sans-serif" }}>
              Built in Qatar. Designed for global impact.
            </p>
          </div>

          {/* Links */}
          {[col1, col2].map((col, i) => (
            <div key={i}>
              <ul className="flex flex-col gap-3">
                {col.map((link) => (
                  <li key={link}>
                    <button
                      className="text-[11px] tracking-wide transition-colors duration-200 hover:text-[#D4AF5A] text-left uppercase"
                      style={{ color: "rgba(255,255,255,0.3)", fontFamily: "sans-serif", letterSpacing: "0.06em" }}
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-3" style={{ borderColor: "rgba(184,150,46,0.08)" }}>
          <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.18)", fontFamily: "sans-serif" }}>
            © {new Date().getFullYear()} QAITI — Qatar Artificial Intelligence & Technology Initiative. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Use"].map((item) => (
              <button key={item} className="text-[10px] transition-colors duration-200 hover:text-[#D4AF5A]"
                style={{ color: "rgba(255,255,255,0.18)", fontFamily: "sans-serif" }}>
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
