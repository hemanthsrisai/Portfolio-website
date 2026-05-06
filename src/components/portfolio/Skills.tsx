import { resume } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

/* Real SVG icons for each skill */
function SkillIcon({ name }: { name: string }) {
  const icons: Record<string, JSX.Element> = {
    AWS: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M13.5 27.2c0 .6.1 1.1.2 1.5.2.4.4.9.6 1.4.1.2.1.3.1.4 0 .2-.1.3-.3.5l-1 .7c-.1.1-.3.1-.4.1-.2 0-.3-.1-.5-.3-.2-.3-.4-.5-.6-.8-.2-.3-.3-.6-.5-1-1.3 1.5-2.9 2.3-4.7 2.3-1.4 0-2.4-.4-3.2-1.2-.8-.8-1.2-1.8-1.2-3.2 0-1.4.5-2.5 1.5-3.4s2.4-1.3 4.1-1.3c.6 0 1.1 0 1.7.1s1.2.2 1.9.3v-1.2c0-1.3-.3-2.1-.8-2.7-.6-.6-1.5-.8-2.8-.8-.6 0-1.2.1-1.8.2s-1.2.3-1.8.6c-.3.1-.4.2-.5.2h-.2c-.2 0-.3-.2-.3-.5v-.8c0-.3 0-.5.1-.6.1-.1.2-.3.5-.4.6-.3 1.3-.5 2-.7.8-.2 1.6-.3 2.4-.3 1.8 0 3.2.4 4 1.3.8.8 1.3 2.1 1.3 3.8v5zm-6.5 2.4c.5 0 1.1-.1 1.7-.3s1.1-.6 1.5-1.1c.3-.3.5-.7.6-1.1.1-.4.2-.9.2-1.5v-.7c-.5-.1-1-.2-1.5-.2s-1-.1-1.5-.1c-1.1 0-2 .2-2.5.7-.6.5-.8 1.1-.8 2 0 .8.2 1.4.6 1.8.4.3 1 .5 1.7.5zm12.8 1.7c-.2 0-.4-.1-.5-.2-.1-.1-.2-.3-.3-.6l-3.5-11.5c-.1-.3-.1-.5-.1-.6 0-.2.1-.4.4-.4h1.6c.3 0 .4.1.5.2.1.1.2.3.3.6l2.5 9.8 2.3-9.8c.1-.3.1-.5.3-.6.1-.1.3-.2.5-.2h1.3c.3 0 .4.1.5.2.1.1.2.3.3.6l2.3 10 2.6-10c.1-.3.1-.5.3-.6.1-.1.3-.2.5-.2h1.5c.2 0 .4.1.4.4 0 .1 0 .2 0 .3s-.1.2-.1.3L28 31.3c-.1.3-.1.5-.3.6-.1.1-.3.2-.5.2h-1.4c-.3 0-.4-.1-.5-.2-.1-.1-.2-.3-.3-.6l-2.3-9.6-2.3 9.6c-.1.3-.1.5-.3.6-.1.1-.3.2-.5.2H19.8zm20.5.4c-.8 0-1.7-.1-2.5-.3-.8-.2-1.4-.5-1.8-.8-.2-.2-.4-.3-.4-.5 0-.2-.1-.3-.1-.4v-.8c0-.3.1-.5.3-.5.1 0 .2 0 .3.1.1.1.2.1.4.2.5.3 1.1.5 1.7.6.6.2 1.2.2 1.9.2 1 0 1.7-.2 2.3-.6.5-.4.8-.9.8-1.6 0-.5-.1-.9-.4-1.2-.3-.3-.9-.6-1.6-.9l-2.4-.7c-1.2-.4-2-.9-2.6-1.6-.5-.7-.8-1.4-.8-2.3 0-.7.1-1.2.4-1.7.3-.5.7-.9 1.1-1.3.5-.3 1-.6 1.6-.8.6-.2 1.3-.3 2-.3.3 0 .7 0 1.1.1.4.1.7.1 1.1.2.3.1.6.2.9.3.3.1.5.2.7.3.2.1.4.3.5.4.1.2.1.3.1.5v.7c0 .3-.1.5-.3.5-.1 0-.3-.1-.5-.2-.8-.4-1.7-.6-2.7-.6-.9 0-1.6.2-2.1.5-.5.3-.7.8-.7 1.5 0 .5.2.9.5 1.2.3.3.9.6 1.7.9l2.3.7c1.1.4 2 .9 2.5 1.5.5.7.8 1.4.8 2.3 0 .7-.1 1.3-.4 1.8-.3.5-.7 1-1.2 1.3-.5.4-1.1.6-1.7.8-.7.2-1.5.3-2.3.3z" fill="#FF9900"/>
        <path d="M43.6 35.5c-5.2 3.8-12.6 5.9-19.1 5.9-9 0-17.2-3.3-23.3-8.9-.5-.4-.1-1 .5-.7 6.7 3.9 14.9 6.2 23.4 6.2 5.7 0 12-1.2 17.8-3.7.9-.3 1.6.6.7 1.2zm2-2.3c-.7-.9-4.4-.4-6.1-.2-.5.1-.6-.4-.1-.7 3-2.1 7.9-1.5 8.5-.8.5.7-.1 5.6-3 7.9-.4.4-.9.2-.7-.3.7-1.7 2.1-5 1.4-5.9z" fill="#FF9900"/>
      </svg>
    ),
    "Google Cloud": (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M30.3 17.7l2.9-2.9.2-1.2C29.1 9.7 23 8.6 17.9 10.6c-2.3.9-4.3 2.5-5.8 4.5l1 .1 5.7-.9.4-.4c2.8-3 7.4-3.4 10.7-1l.4.8z" fill="#EA4335"/>
        <path d="M35.6 16.3c-1.3-3.8-4.4-6.8-8.2-8.1l-3.5 3.5c2.7 1.1 4.9 3.3 5.9 6l5.8-.4z" fill="#4285F4"/>
        <path d="M12 28.5c-.4-1.4-.5-2.9-.3-4.3L6 20.8c-1.7 3.3-2.1 7.1-1 10.6L10.7 28l1.3.5z" fill="#FBBC05"/>
        <path d="M24 32.4c-3.2 0-6.1-1.7-7.8-4.3L10.7 31.5c3.1 5.1 8.8 8 14.7 7.6l-1.4-6.7z" fill="#34A853"/>
        <path d="M35.6 16.3l-5.8 5.4c.9 3.1.2 6.5-1.9 9l5.7 3.4c3.4-3.8 5-9 4.3-14.2l-2.3-3.6z" fill="#4285F4"/>
        <path d="M24 32.4l1.4 6.7c4.1-.3 7.8-2.3 10.5-5.5l-5.7-3.4c-1.6 1.5-3.8 2.2-6.2 2.2z" fill="#34A853"/>
      </svg>
    ),
    Azure: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M17.6 5L5.2 38.4h8.6l2.4-6.3h11.6L14.7 5h2.9zM30.7 12.1L38.4 38.4h-6.7l-3.7-12.2 6-1.7-3.3-12.4z" fill="#0078D4"/>
      </svg>
    ),
    SQL: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <rect x="8" y="6" width="32" height="36" rx="4" stroke="#00758F" strokeWidth="2.5"/>
        <ellipse cx="24" cy="14" rx="12" ry="4" stroke="#00758F" strokeWidth="2"/>
        <path d="M12 14v8c0 2.2 5.4 4 12 4s12-1.8 12-4v-8" stroke="#00758F" strokeWidth="2"/>
        <path d="M12 22v8c0 2.2 5.4 4 12 4s12-1.8 12-4v-8" stroke="#00758F" strokeWidth="2"/>
      </svg>
    ),
    Python: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M23.7 4C13.6 4 14.5 8.4 14.5 8.4v4.6h9.5v1.4H9.5S4 13.8 4 24s4.8 9.8 4.8 9.8h2.8v-4.7s-.2-4.8 4.7-4.8h8.2s4.6.1 4.6-4.4V9.4S29.6 4 23.7 4zm-4.6 3.2c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5z" fill="#3776AB"/>
        <path d="M24.3 44c10.1 0 9.2-4.4 9.2-4.4V35h-9.5v-1.4h14.5S44 34.2 44 24s-4.8-9.8-4.8-9.8h-2.8v4.7s.2 4.8-4.7 4.8h-8.2s-4.6-.1-4.6 4.4v10.5S18.4 44 24.3 44zm4.6-3.2c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z" fill="#FFD43B"/>
      </svg>
    ),
    Java: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M18 32.7s-2.2 1.3 1.5 1.7c4.5.5 6.8.4 11.7-.5 0 0 1.3.8 3.1 1.5-11 4.7-24.9-.3-16.3-2.7zm-1.3-6.2s-2.4 1.8 1.3 2.2c4.7.4 8.6.5 15.2-.7 0 0 .9.9 2.3 1.4-13.3 3.9-28.2.3-18.8-2.9z" fill="#5382A1"/>
        <path d="M26 22.5c2.7 3.1-0.7 5.9-0.7 5.9s6.8-3.5 3.7-7.9c-3-4.1-5.3-6.1 7.1-13.1 0 0-19.5 4.9-10.1 15.1z" fill="#E76F00"/>
        <path d="M36.5 36s1.6 1.3-1.7 2.3c-6.3 1.9-26.3 2.5-31.8.1-2-0.9 1.7-2.1 2.9-2.3 1.2-.3 1.9-.2 1.9-.2-2.2-1.5-14.1 3-6.1 4.3 21.9 3.6 39.9-1.6 34.8-4.2zm-18-12.7s-10 2.4-3.5 3.2c2.7.4 8.1.3 13.1-.1 4.1-.4 8.2-1.2 8.2-1.2s-1.4.6-2.5 1.3c-10 2.6-29.2 1.4-23.7-1.3 4.7-2.2 8.4-1.9 8.4-1.9zm17.6 9.9c10.2-5.3 5.5-10.4 2.2-9.7-.8.2-1.2.3-1.2.3s.3-.5.9-.7c6.5-2.3 11.5 6.8-2.1 10.4 0 0 .2-.1.2-.3z" fill="#5382A1"/>
        <path d="M28.7 4s5.7 5.7-5.4 14.4c-8.9 7-2 11-0 15.5-5.2-4.7-9-8.8-6.4-12.6C20.6 15.6 30.6 12.5 28.7 4z" fill="#E76F00"/>
      </svg>
    ),
    "C++": (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <path d="M24 6C13.5 6 5 14.5 5 25s8.5 19 19 19c7.4 0 13.8-4.2 17-10.4l-9.3-5.4c-1.3 2.7-4.1 4.5-7.2 4.5-4.5 0-8.2-3.7-8.2-8.2s3.7-8.2 8.2-8.2c3 0 5.7 1.6 7.1 4.1l9.4-5.4C37.8 10 31.3 6 24 6z" fill="#00599C"/>
        <path d="M36 21h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" fill="#00599C"/>
        <path d="M44 21h-2v-2h-2v2h-2v2h2v2h2v-2h2v-2z" fill="#00599C"/>
      </svg>
    ),
    "HTML/CSS": (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M8 4l3.3 37L24 44l12.7-3L40 4H8z" fill="#E44D26"/>
        <path d="M24 7.5v33l10.3-2.8L37 7.5H24z" fill="#F16529"/>
        <path d="M17.3 20.4h6.7v-4.5h-11.6l.3 4.5.3 0zm.8 8h-4.5l.6 6.8L24 38.5v-4.7l-6.8-1.8-.6-3.6z" fill="#EBEBEB"/>
        <path d="M24 20.4v4.5h6.1l-.6 6.9L24 33.8v4.7l9.8-2.7.1-1.2.8-9.2.2-5h-11z" fill="#FFF"/>
      </svg>
    ),
    "Power BI": (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <rect x="20" y="8" width="8" height="32" rx="2" fill="#F2C811"/>
        <rect x="10" y="16" width="8" height="24" rx="2" fill="#F2C811" opacity="0.7"/>
        <rect x="30" y="20" width="8" height="20" rx="2" fill="#F2C811" opacity="0.5"/>
      </svg>
    ),
    Athena: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M24 4l18 10v20L24 44 6 34V14L24 4z" fill="none" stroke="#8C4FFF" strokeWidth="2"/>
        <circle cx="24" cy="24" r="6" fill="#8C4FFF" opacity="0.3"/>
        <path d="M24 18v12M18 24h12" stroke="#8C4FFF" strokeWidth="2"/>
      </svg>
    ),
    Tosca: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <rect x="8" y="8" width="32" height="32" rx="6" stroke="#1B3A5C" strokeWidth="2.5"/>
        <path d="M16 24h16M24 16v16" stroke="#1B3A5C" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="4" stroke="#1B3A5C" strokeWidth="2"/>
      </svg>
    ),
    Django: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M22 6h6v28.5c-3.1.6-5.4.8-7.9.8-7.4 0-11.3-3.3-11.3-9.6 0-6 4.2-9.9 10.7-9.9 1 0 1.7.1 2.5.3V6zM22 20c-.7-.2-1.2-.3-2-.3-3.1 0-4.9 1.9-4.9 5.3 0 3.3 1.7 5.1 4.8 5.1.7 0 1.3 0 2.1-.2V20zM32 10.5c2 0 3.6-1.6 3.6-3.6S34 3.4 32 3.4s-3.6 1.6-3.6 3.6 1.6 3.5 3.6 3.5zM29 12.9h6v21.4h-6V12.9z" fill="#092E20"/>
      </svg>
    ),
    Git: (
      <svg viewBox="0 0 48 48" className="w-8 h-8">
        <path d="M44.1 22.1L25.9 3.9c-.8-.8-2-.8-2.8 0l-3.8 3.8 4.8 4.8c.6-.2 1.2-.3 1.9-.3 2.2 0 4 1.8 4 4 0 .7-.1 1.3-.3 1.9l4.6 4.6c.6-.2 1.2-.3 1.9-.3 2.2 0 4 1.8 4 4s-1.8 4-4 4-4-1.8-4-4c0-.7.1-1.3.3-1.9l-4.3-4.3v11.3c1.2.5 2 1.7 2 3.2 0 2.2-1.8 4-4 4s-4-1.8-4-4c0-1.4.7-2.6 1.8-3.2V20.6c-1.1-.5-1.8-1.7-1.8-3.2 0-.7.1-1.3.3-1.9L18 10.7l-14.1 14.1c-.8.8-.8 2 0 2.8l18.2 18.2c.8.8 2 .8 2.8 0l19.1-19.1c.8-.8.8-2 .1-2.6z" fill="#F05032"/>
      </svg>
    ),
    Agile: (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <circle cx="24" cy="24" r="18" stroke="#0079BF" strokeWidth="2"/>
        <path d="M16 24c2-6 6-10 8-10s6 4 8 10-2 10-8 10-10-4-8-10z" stroke="#0079BF" strokeWidth="2"/>
        <path d="M24 14v20M14 24h20" stroke="#0079BF" strokeWidth="1.5" opacity="0.5"/>
      </svg>
    ),
    "Generative AI": (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <circle cx="24" cy="24" r="4" fill="#8B5CF6"/>
        <path d="M24 8v8M24 32v8M8 24h8M32 24h8M13 13l5.7 5.7M29.3 29.3L35 35M35 13l-5.7 5.7M13 35l5.7-5.7" stroke="#8B5CF6" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="24" cy="24" r="16" stroke="#8B5CF6" strokeWidth="1.5" opacity="0.3"/>
      </svg>
    ),
    "Digital Transformation": (
      <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
        <rect x="6" y="10" width="36" height="24" rx="3" stroke="#059669" strokeWidth="2"/>
        <path d="M6 34h36M18 34v6M30 34v6M14 40h20" stroke="#059669" strokeWidth="2" strokeLinecap="round"/>
        <path d="M16 22l4 4 4-6 4 3 4-5" stroke="#059669" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  };
  return icons[name] || (
    <svg viewBox="0 0 48 48" className="w-8 h-8" fill="none">
      <circle cx="24" cy="24" r="16" stroke="currentColor" strokeWidth="2" opacity="0.5"/>
      <path d="M24 16v16M16 24h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  );
}

export function Skills() {
  return (
    <section id="skills" className="relative py-16 md:py-24 px-6 bg-transparent overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="02 · Capabilities"
          title="A precise toolkit, sharpened over years."
          watermark="SKILLS"
        />
      </div>

      {/* Scrolling Icons Marquee */}
      <div className="mt-16 relative overflow-hidden">
        <div className="absolute top-0 bottom-0 left-0 w-40 bg-gradient-to-r from-[color-mix(in_oklab,var(--surface)_80%,transparent)] to-transparent z-10 pointer-events-none" />
        <div className="absolute top-0 bottom-0 right-0 w-40 bg-gradient-to-l from-[color-mix(in_oklab,var(--surface)_80%,transparent)] to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 animate-marquee will-change-transform">
          {[...resume.skillTags, ...resume.skillTags].map((skill, i) => (
            <div
              key={`${skill}-${i}`}
              className="flex items-center gap-3 glass px-5 py-4 rounded-2xl hover:border-brand-blue hover:shadow-glow-blue transition-all cursor-default flex-shrink-0 group"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                <SkillIcon name={skill} />
              </div>
              <span className="font-medium text-sm whitespace-nowrap text-foreground/80 group-hover:text-brand-blue transition-colors">{skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
