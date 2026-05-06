import { useEffect, useState } from "react";

const links = [
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Work" },
  { href: "#contact", label: "Contact" },
];

function SunMoonToggle({ isDark, onClick }: { isDark: boolean; onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="relative w-10 h-10 rounded-full glass flex items-center justify-center hover:border-brand-blue transition-all overflow-hidden"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      title={isDark ? "Light mode" : "Dark mode"}
    >
      {/* Sun */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-5 h-5 absolute transition-all duration-500 ${
          isDark ? "opacity-0 rotate-90 scale-0" : "opacity-100 rotate-0 scale-100 text-amber-500"
        }`}
      >
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>

      {/* Moon */}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`w-5 h-5 absolute transition-all duration-500 ${
          isDark ? "opacity-100 rotate-0 scale-100 text-brand-blue" : "opacity-0 -rotate-90 scale-0"
        }`}
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}

export function Nav({ name, isDark, toggleDark }: { name: string; isDark: boolean; toggleDark: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Track active section
  useEffect(() => {
    const sectionIds = links.map((l) => l.href.slice(1));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.1, rootMargin: "-100px 0px -40% 0px" },
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) io.observe(el);
    });
    return () => io.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong py-2.5" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="font-display font-bold text-lg tracking-tight group flex items-center gap-2">
          {/* Logo removed as requested */}
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm transition-colors relative py-1 ${
                activeSection === l.href.slice(1)
                  ? "text-brand-blue font-medium"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {l.label}
              <span
                className={`absolute -bottom-1 left-1/2 -translate-x-1/2 h-[2px] bg-brand-blue rounded-full transition-all duration-300 ${
                  activeSection === l.href.slice(1) ? "w-full" : "w-0"
                }`}
              />
            </a>
          ))}

          <SunMoonToggle isDark={isDark} onClick={toggleDark} />

          <a
            href="#contact"
            className="btn-shimmer bg-brand-blue text-white text-sm font-medium px-5 py-2 rounded-full hover:scale-105 transition-transform shadow-glow-blue"
          >
            Let's talk
          </a>
        </nav>

        {/* Mobile controls */}
        <div className="md:hidden flex items-center gap-3">
          <SunMoonToggle isDark={isDark} onClick={toggleDark} />
          <button
            className="text-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <div className={`w-6 transition-all duration-300 ${open ? "rotate-45 translate-y-[5px]" : ""}`}>
              <div className="w-6 h-px bg-foreground mb-1.5" />
            </div>
            <div className={`w-6 h-px bg-foreground mb-1.5 transition-opacity ${open ? "opacity-0" : ""}`} />
            <div className={`h-px bg-foreground transition-all duration-300 ${open ? "w-6 -rotate-45 -translate-y-[5px]" : "w-4 ml-auto"}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ${
          open ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="glass-strong border-t border-border mt-3">
          <div className="max-w-[1400px] mx-auto px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className={`text-lg transition-colors ${
                  activeSection === l.href.slice(1) ? "text-brand-blue font-medium" : "text-foreground/80 hover:text-brand-blue"
                }`}
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="btn-shimmer bg-brand-blue text-white text-center py-3 rounded-full font-medium mt-2"
            >
              Let's talk
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
