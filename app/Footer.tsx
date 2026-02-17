import Link from "next/link";

const usefulLinksLeft = [
  { label: "About", href: "#" },
  { label: "Our Vehicles", href: "#" },
  { label: "Services", href: "#" },
  { label: "Package", href: "#" },
  { label: "Login", href: "#" },
];

const usefulLinksRight = [
  { label: "Get a Cab", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Our News", href: "#" },
];

const PhoneIcon = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-white relative overflow-hidden">
      {/* Dot-grid background texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #22d3ee 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Ambient glow blobs - inspired by services section */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-cyan-400/5 rounded-full blur-3xl pointer-events-none" />

      {/* ── TOP SECTION ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 bg-gradient-to-br from-cyan-400 to-cyan-600 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.85 7h10.29l1.08 3.11H5.77L6.85 7zM19 17H5v-5h14v5z" />
                <circle cx="7.5" cy="14.5" r="1.5" />
                <circle cx="16.5" cy="14.5" r="1.5" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tight text-white">
              City<span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent">Cab</span>
            </span>
          </div>

          {/* Tagline */}
          <p className="text-gray-400 text-sm leading-relaxed text-center">
            Authoritatively simplify open-source resources via backend visualize business e-markets before parallel.
          </p>

          {/* Call for Taxi - inspired by service card button */}
          <div className="flex justify-end">
            <div className="relative group bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 px-6 py-4 rounded-2xl flex items-center gap-4 shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 transition-all duration-300 cursor-pointer overflow-hidden">
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-700"></div>
              <div className="text-white">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-cyan-100">Call for Taxi</p>
                <p className="text-xl font-black tracking-tight text-white">5267-214-392</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── DIVIDER - same as service card bottom glow line ── */}
      <div className="relative z-10 mx-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
      </div>

      {/* ── MAIN FOOTER GRID ── */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Column 1 — Download Mobile App */}
          <div className="group">
            <div className="mb-5">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white inline-block pb-3 relative">
                Download Mobile App
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full" />
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Competently re-engineer cross-media breed meta-services
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Google Play */}
              <a href="#" className="flex items-center gap-3 border border-white/10 hover:border-cyan-400/60 rounded-2xl px-4 py-3 hover:bg-cyan-400/5 transition-all duration-300 group/btn hover:shadow-lg hover:shadow-cyan-500/10">
                <svg className="w-6 h-6 text-gray-400 group-hover/btn:text-cyan-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.18 23.76c.32.18.68.24 1.04.18l11.3-11.3-2.9-2.9L3.18 23.76zM20.54 10.27l-2.43-1.4-3.22 3.22 3.22 3.22 2.44-1.41c.7-.4.7-1.23.01-1.63h-.02zM4.22.06C3.9-.12 3.54-.06 3.22.12L13.76 10.66l-2.9 2.9L3.22.06zM1.7 1.34C1.27 1.72 1 2.3 1 3.01v17.98c0 .71.27 1.29.7 1.67l.09.08 10.07-10.07v-.24L1.79 1.26l-.09.08z" />
                </svg>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Get it on</p>
                  <p className="text-sm font-bold text-white">Google Play</p>
                </div>
              </a>

              {/* App Store */}
              <a href="#" className="flex items-center gap-3 border border-white/10 hover:border-cyan-400/60 rounded-2xl px-4 py-3 hover:bg-cyan-400/5 transition-all duration-300 group/btn hover:shadow-lg hover:shadow-cyan-500/10">
                <svg className="w-6 h-6 text-gray-400 group-hover/btn:text-cyan-400 transition-colors duration-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <div>
                  <p className="text-[10px] text-gray-500 uppercase tracking-wider">Download on the</p>
                  <p className="text-sm font-bold text-white">App Store</p>
                </div>
              </a>
            </div>
          </div>

          {/* Column 2 — Useful Links */}
          <div>
            <div className="mb-5">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white inline-block pb-3 relative">
                Useful Links
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full" />
              </h3>
            </div>
            <div className="grid grid-cols-2 gap-x-6 gap-y-3 mt-5">
              <ul className="space-y-3">
                {usefulLinksLeft.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-2 text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-200 group/link">
                      <span className="w-5 h-5 rounded-lg bg-cyan-400/10 group-hover/link:bg-cyan-400/20 flex items-center justify-center transition-colors duration-200">
                        <svg className="w-3 h-3 text-cyan-400 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-3">
                {usefulLinksRight.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="flex items-center gap-2 text-gray-400 text-sm hover:text-cyan-400 transition-colors duration-200 group/link">
                      <span className="w-5 h-5 rounded-lg bg-cyan-400/10 group-hover/link:bg-cyan-400/20 flex items-center justify-center transition-colors duration-200">
                        <svg className="w-3 h-3 text-cyan-400 group-hover/link:translate-x-0.5 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 — Newsletter */}
          <div>
            <div className="mb-5">
              <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white inline-block pb-3 relative">
                Newsletter
                <span className="absolute bottom-0 left-0 h-[2px] w-full bg-gradient-to-r from-cyan-400 to-cyan-600 rounded-full" />
              </h3>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-5 mb-5">
              Signup for our weekly newsletter or updates.
            </p>
            <div className="space-y-3">
              <div className="relative group/input">
                <input
                  type="email"
                  placeholder="Enter Your email..."
                  className="w-full bg-white/5 border border-white/10 hover:border-cyan-400/30 focus:border-cyan-400/60 text-white text-sm px-4 py-3 rounded-2xl focus:outline-none transition-all duration-300 placeholder:text-gray-500 focus:bg-white/8 focus:shadow-lg focus:shadow-cyan-500/10"
                />
              </div>
              {/* Button matching service cards style */}
              <button className="relative w-full bg-gradient-to-r from-cyan-500 to-cyan-600 hover:from-cyan-600 hover:to-cyan-700 text-white font-semibold py-3.5 px-6 rounded-2xl transition-all duration-300 overflow-hidden group/btn shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/50 flex items-center justify-center gap-3">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-200%] group-hover/btn:translate-x-[200%] transition-transform duration-700"></div>
                <span className="text-[15px] font-bold uppercase tracking-widest relative z-10">Subscribe</span>
                <svg className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── BOTTOM DIVIDER ── */}
      <div className="relative z-10 mx-6">
        <div className="h-px bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
      </div>

      {/* ── BOTTOM BAR ── */}
      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © Copyright{" "}
            <span className="text-white font-semibold">Citycar</span> Reserved By{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-500 bg-clip-text text-transparent font-semibold">Kodesolution.</span>
          </p>
          <div className="flex items-center gap-2">
            {[
              {
                label: "Facebook",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                ),
              },
              {
                label: "Twitter",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                icon: (
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                ),
              },
            ].map((social) => (
              <a
                key={social.label}
                href="#"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-gradient-to-br hover:from-cyan-400 hover:to-cyan-600 border border-white/10 hover:border-transparent flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-110"
                title={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}