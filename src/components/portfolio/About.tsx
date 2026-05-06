import { resume } from "@/data/resume";

export function About() {
  return (
    <section id="about" className="relative py-16 md:py-24 px-6">
      <div className="max-w-5xl mx-auto text-center">
        <div className="reveal-up">
          <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.3em] text-brand-green mb-8 font-medium">
            <span className="w-10 h-px bg-gradient-brand" />
            01 · About
            <span className="w-10 h-px bg-gradient-brand" />
          </div>
          <h2 className="font-display font-bold text-2xl md:text-4xl lg:text-5xl tracking-tight leading-snug md:leading-snug text-foreground max-w-4xl mx-auto">
            {resume.about.headline}
          </h2>
        </div>
      </div>
    </section>
  );
}
