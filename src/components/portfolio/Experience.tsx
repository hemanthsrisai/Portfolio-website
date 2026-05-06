import { resume } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

export function Experience() {
  return (
    <section id="experience" className="relative py-16 md:py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          eyebrow="03 · Experience"
          title="Building, leading, and shipping."
          watermark="WORK"
        />

        <div className="relative mt-12">
          {/* Animated spine */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-border" />
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px spine bg-gradient-to-b from-brand-blue via-brand-green to-transparent" />

          <div className="space-y-16">
            {resume.experience.map((job, i) => (
              <div
                key={job.company + job.dates}
                className="xp-item reveal from-left relative"
                style={{ transitionDelay: `${i * 0.12}s` }}
              >
                {/* Node */}
                <div className="xp-node absolute left-6 md:left-8 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-blue ring-4 ring-background shadow-glow-blue z-10" />

                <div className="pl-16 md:pl-20">
                  <div className="text-xs uppercase tracking-[0.25em] text-brand-green mb-3 font-medium">
                    {job.dates}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-6">
                    <div className="flex items-center gap-3">
                      <span
                        className="w-10 h-10 rounded-xl flex items-center justify-center text-lg font-bold text-white shadow-lg"
                        style={{ backgroundColor: job.color }}
                      >
                        {job.companyLogo}
                      </span>
                      <div>
                        <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground">{job.role}</h3>
                        <div className="text-brand-blue font-medium text-sm md:text-base mt-1">
                          {job.company} <span className="text-muted-foreground">· {job.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Achievement metrics */}
                  {job.achievements && job.achievements.length > 0 && (
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                      {job.achievements.map((ach) => (
                        <div key={ach.label} className="bg-surface/60 rounded-xl p-4 text-center hover-lift border border-border/50">
                          <div className="text-xl md:text-2xl font-display font-bold text-gradient-brand">{ach.metric}</div>
                          <div className="text-[10px] md:text-xs text-muted-foreground uppercase tracking-wider mt-1">{ach.label}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="xp-card glass rounded-2xl p-6 md:p-8 border border-border">
                    <ul className="space-y-4">
                      {job.bullets.map((b, bi) => (
                        <li
                          key={b}
                          className="xp-bullet flex gap-4 text-sm md:text-base text-foreground/80 leading-relaxed"
                          style={{ transitionDelay: `${i * 0.12 + 0.25 + bi * 0.08}s` }}
                        >
                          <span className="text-brand-green mt-1 flex-shrink-0 text-lg">▸</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
