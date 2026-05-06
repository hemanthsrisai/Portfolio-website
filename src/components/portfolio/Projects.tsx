import { resume } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

export function Projects() {
  return (
    <section id="projects" className="relative py-16 md:py-24 px-6 bg-surface/40">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="04 · Selected Work"
          title="Platforms, products, and ideas I've shipped."
          watermark="WORK"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {resume.projects.map((p, i) => (
            <article
              key={p.title}
              className="reveal group relative glass rounded-2xl overflow-hidden hover-lift"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              {/* Project image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="project-img w-full h-full object-cover"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Tags overlay */}
                <div className="absolute top-3 left-4 flex gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] uppercase tracking-widest bg-background/60 backdrop-blur-sm px-2.5 py-1 rounded-full font-medium text-foreground/90"
                    >
                      {t}
                    </span>
                  ))}
                </div>

              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-display text-xl font-bold group-hover:text-brand-blue transition-colors duration-300">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed min-h-[3.5em]">
                  {p.description}
                </p>

                {/* Tech stack */}
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground font-medium"
                    >
                      {s}
                    </span>
                  ))}
                </div>

              </div>

              {/* Bottom gradient line on hover */}
              <div className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-brand opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
