import { useEffect, useState } from "react";
import { resume } from "@/data/resume";
import avatar from "@/assets/avatar.jpg";

function CharStagger({ text, className = "" }: { text: string; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {text.split("").map((ch, i) => (
        <span
          key={i}
          className="char"
          style={{ animationDelay: `${0.4 + i * 0.03}s` }}
        >
          {ch === " " ? "\u00A0" : ch}
        </span>
      ))}
    </span>
  );
}

export function Hero() {
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 bg-mesh animate-mesh" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,var(--background)_80%)]" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 rounded-full bg-brand-blue/15 blur-3xl animate-float" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 rounded-full bg-brand-green/10 blur-3xl animate-float" style={{ animationDelay: "3s" }} />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <h1 className="font-display font-bold leading-[0.92] text-[clamp(2.5rem,4.5vw,4.5rem)] flex flex-wrap gap-x-4">
              <CharStagger text={resume.name.split(" ")[0]} className="inline-block text-foreground" />
              <CharStagger text={resume.name.split(" ").slice(1).join(" ")} className="inline-block text-gradient-brand" />
            </h1>

            {/* Title with bold animated style */}
            <div
              className={`mt-6 transition-all duration-700 delay-[0.2s] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
              }`}
            >
              <p className="text-2xl md:text-4xl lg:text-5xl font-display font-bold text-foreground/90 leading-snug">
                {resume.title}
              </p>
            </div>

            {/* Tagline replaced with dynamic bullet points in stylish glass boxes */}
            <div className="mt-8 space-y-4 max-w-2xl">
              {[
                { icon: "💡", text: "Bridging business strategy with technical execution." },
                { icon: "☁️", text: "Driving cloud migration and digital transformation." },
                { icon: "📊", text: "Leveraging data for executive-level decision making." }
              ].map((bullet, i) => (
                <div 
                  key={i}
                  className={`flex items-center gap-5 transition-all duration-700 glass px-6 py-4 rounded-2xl shadow-sm hover:shadow-md hover:border-brand-blue/40 ${
                    loaded ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                  }`}
                  style={{ transitionDelay: `${0.4 + i * 0.15}s` }}
                >
                  <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center flex-shrink-0 text-xl">
                    {bullet.icon}
                  </div>
                  <span className="text-base md:text-lg lg:text-xl text-foreground font-medium">{bullet.text}</span>
                </div>
              ))}
            </div>

            <div
              className={`mt-8 flex flex-wrap items-center justify-center lg:justify-start gap-4 transition-all duration-700 delay-[0.8s] ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <a
                href="#contact"
                className="btn-shimmer bg-brand-blue text-white px-8 py-3.5 rounded-full font-medium hover:scale-105 transition-transform shadow-glow-blue text-sm md:text-base"
              >
                Get in touch
              </a>
              <a
                href={resume.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:border-brand-blue hover:text-brand-blue transition-all hover-lift text-sm font-medium"
              >
                in
              </a>
            </div>
          </div>

          {/* Avatar */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div
              className={`relative group transition-all duration-700 delay-[0.2s] ${
                loaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              {/* Glow ring behind avatar */}
              <div className="absolute -inset-4 bg-gradient-brand rounded-full blur-2xl opacity-20 group-hover:opacity-35 transition-opacity duration-700 animate-float-gentle" />

              {/* Decorative rings */}
              <div className="absolute -inset-3 rounded-full border border-brand-blue/20 group-hover:border-brand-blue/40 transition-colors duration-500" />
              <div className="absolute -inset-6 rounded-full border border-brand-green/10 group-hover:border-brand-green/20 transition-colors duration-700" />

              {/* Main avatar */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-border group-hover:border-brand-blue/40 transition-all duration-500">
                <img
                  src={avatar}
                  alt={`Portrait of ${resume.name}`}
                  width={640}
                  height={640}
                  loading="eager"
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent opacity-50 group-hover:opacity-20 transition-opacity" />
              </div>

              {/* Floating Badges */}
              <div className="absolute top-[5%] -left-6 md:-left-12 glass rounded-2xl p-3 shadow-elevated animate-float-gentle flex flex-col items-center gap-1">
                <span className="text-xl">📊</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">Analyst</span>
              </div>
              <div className="absolute top-[20%] -right-4 md:-right-8 glass rounded-2xl p-3 shadow-elevated animate-float flex flex-col items-center gap-1 z-20" style={{ animationDelay: '1.5s' }}>
                <span className="text-xl">🎯</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground text-center leading-tight">Product<br/>Mgmt</span>
              </div>
              <div className="absolute bottom-[15%] -left-4 md:-left-10 glass rounded-2xl p-3 shadow-elevated animate-float-gentle flex flex-col items-center gap-1" style={{ animationDelay: '2.5s' }}>
                <span className="text-xl">🎓</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">MBA</span>
              </div>
              <div className="absolute bottom-[5%] right-0 md:-right-2 glass rounded-2xl p-3 shadow-elevated animate-float flex flex-col items-center gap-1" style={{ animationDelay: '0.8s' }}>
                <span className="text-xl">💻</span>
                <span className="text-[10px] md:text-xs font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">SDE</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">
        <span>Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-brand-blue to-transparent animate-pulse" />
      </div>
    </section>
  );
}
