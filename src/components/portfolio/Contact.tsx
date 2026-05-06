import { useState } from "react";
import { resume } from "@/data/resume";
import { SectionHeader } from "./SectionHeader";

  // Use Vercel API route instead of createServerFn
  const sendEmail = async (data: { name: string; email: string; company: string; message: string }) => {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    
    return response.json();
  };

export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      company: formData.get("company") as string,
      message: formData.get("message") as string,
    };

    try {
      await sendEmail(data);
      setSent(true);
      setTimeout(() => setSent(false), 4000);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="relative py-16 md:py-24 px-6 bg-transparent overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[70vw] max-w-[800px] max-h-[800px] rounded-full bg-brand-blue/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] max-w-[500px] max-h-[500px] rounded-full bg-brand-green/5 blur-3xl" />

      <div className="relative max-w-[1400px] mx-auto">
        <SectionHeader
          eyebrow="05 · Contact"
          title="Let's build something that matters."
          watermark="TALK"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 reveal">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Whether you're scoping a digital transformation, sharpening a product roadmap, or simply trading ideas, I'd love to hear from you.
            </p>

            <div className="mt-10 space-y-4">
              <a
                href={`mailto:${resume.email}`}
                className="flex items-center gap-4 text-foreground hover:text-brand-blue transition-all group p-3 -ml-3 rounded-xl hover:bg-surface/60"
              >
                <span className="w-12 h-12 rounded-xl glass flex items-center justify-center text-lg group-hover:border-brand-blue group-hover:shadow-glow-blue transition-all">✉</span>
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <div className="text-xs text-muted-foreground">{resume.email}</div>
                </div>
              </a>
              <a
                href={resume.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 text-foreground hover:text-brand-blue transition-all group p-3 -ml-3 rounded-xl hover:bg-surface/60"
              >
                <span className="w-12 h-12 rounded-xl glass flex items-center justify-center text-lg font-bold group-hover:border-brand-blue group-hover:shadow-glow-blue transition-all">in</span>
                <div>
                  <div className="text-sm font-medium">LinkedIn</div>
                  <div className="text-xs text-muted-foreground">linkedin.com/in/hemanthsrisai</div>
                </div>
              </a>
            </div>

            {/* Download Resume CTA */}
            <div className="mt-10">
              <a
                href="#"
                className="inline-flex items-center gap-2 btn-shimmer bg-gradient-brand text-white px-6 py-3 rounded-full font-medium hover:scale-105 transition-transform shadow-lg"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                  <polyline points="7,10 12,15 17,10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>

          <form
            onSubmit={onSubmit}
            className="lg:col-span-3 reveal glass rounded-2xl p-8 space-y-5"
            style={{ transitionDelay: "0.15s" }}
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <Field label="Name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <Field label="Company" name="company" />
            <div>
              <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={5}
                className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand-blue focus:shadow-glow-blue transition-all resize-none text-sm"
                placeholder="Tell me about your project..."
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className={`btn-shimmer w-full py-4 rounded-full font-medium transition-all text-base ${
                sent
                  ? "bg-brand-green text-white shadow-glow-green"
                  : loading 
                    ? "bg-brand-blue/70 text-white cursor-not-allowed"
                    : "bg-brand-blue text-white hover:scale-[1.02] shadow-glow-blue"
              }`}
            >
              {sent ? "✓ Message sent successfully!" : loading ? "Sending..." : "Send message →"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <div className="mt-24 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
              <path d="M10 10V30M10 20H20M20 10V30M25 10H30C32.7614 10 35 12.2386 35 15C35 17.7614 32.7614 20 30 20H25V10ZM25 20H30C32.7614 20 35 22.2386 35 25C35 27.7614 32.7614 30 30 30H25V20Z" stroke="url(#contact-logo-grad)" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"/>
              <defs>
                <linearGradient id="contact-logo-grad" x1="10" y1="10" x2="35" y2="30" gradientUnits="userSpaceOnUse">
                  <stop stopColor="var(--brand-blue)" />
                  <stop offset="1" stopColor="var(--brand-green)" />
                </linearGradient>
              </defs>
            </svg>
            <span>© {new Date().getFullYear()} {resume.name}. Crafted with precision.</span>
          </div>
          <div className="flex gap-6">
            <a href={resume.socials.linkedin} className="hover:text-brand-blue transition-colors">LinkedIn</a>
            <a href={resume.socials.twitter} className="hover:text-brand-blue transition-colors">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, name, type = "text" }: { label: string; name: string; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2 font-medium">{label}</label>
      <input
        type={type}
        name={name}
        required
        placeholder={label}
        className="w-full bg-background/50 border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-brand-blue focus:shadow-glow-blue transition-all text-sm"
      />
    </div>
  );
}
