import { resume } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

export function Education() {
  return (
    <section id="education" className="relative py-28 md:py-36 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader
          eyebrow="05 · Education"
          title="Foundations built at world-class institutions."
          watermark="LEARN"
        />

        <div className="grid md:grid-cols-2 gap-6 mb-20">
          {resume.education.map((ed, i) => (
            <div
              key={ed.school}
              className="reveal glass rounded-2xl p-8 hover-lift group"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between gap-4 mb-5">
                <div className="w-14 h-14 rounded-2xl bg-gradient-brand flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {ed.degree.includes("MBA") ? "🎓" : "💻"}
                </div>
                <div className="text-xs uppercase tracking-widest text-brand-green font-medium bg-brand-green/10 px-3 py-1 rounded-full">
                  {ed.dates}
                </div>
              </div>
              <h3 className="font-display text-xl font-bold group-hover:text-brand-blue transition-colors">{ed.school}</h3>
              <div className="text-brand-blue font-medium mt-2 text-sm">{ed.degree}</div>
              <p className="mt-3 text-sm text-muted-foreground">{ed.detail}</p>

              {/* Bottom accent */}
              <div className="mt-6 h-[2px] bg-gradient-brand rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="reveal">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-green mb-8 font-medium">
            <span className="w-10 h-px bg-brand-green" />
            Certifications & Awards
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {resume.certifications.map((c, i) => (
              <div
                key={c.name}
                className="reveal glass rounded-xl p-5 hover-lift group"
                style={{ transitionDelay: `${i * 0.06}s` }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-brand-blue/10 text-brand-blue mb-4 group-hover:bg-brand-blue group-hover:text-white transition-all duration-300">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="6" />
                    <path d="M9 14l-2 7 5-3 5 3-2-7" />
                  </svg>
                </div>
                <div className="font-medium text-sm text-foreground group-hover:text-brand-blue transition-colors">{c.name}</div>
                <div className="text-xs text-muted-foreground mt-1">{c.issuer}</div>
                <div className="text-[11px] text-brand-green font-medium mt-2">{c.year}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
