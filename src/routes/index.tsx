import { createFileRoute } from "@tanstack/react-router";
import { useReveal } from "@/hooks/use-reveal";
import { useCursor } from "@/hooks/use-cursor";
import { useScrollProgress } from "@/hooks/use-scroll-progress";
import { useDarkMode } from "@/hooks/use-dark-mode";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { EducationBanners } from "@/components/portfolio/EducationBanners";
import { Skills } from "@/components/portfolio/Skills";
import { Experience } from "@/components/portfolio/Experience";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { ScrollProgress } from "@/components/portfolio/ScrollProgress";
import { BackgroundBlobs } from "@/components/portfolio/BackgroundBlobs";
import { resume } from "@/data/resume";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${resume.name} — ${resume.title}` },
      {
        name: "description",
        content: resume.tagline,
      },
      { property: "og:title", content: `${resume.name} — Portfolio` },
      { property: "og:description", content: resume.tagline },
      { property: "og:type", content: "website" },
    ],
  }),
});

function Index() {
  useReveal();
  useCursor();
  const scrollProgress = useScrollProgress();
  const { isDark, toggle } = useDarkMode();

  return (
    <main className="bg-transparent text-foreground relative">
      <ScrollProgress progress={scrollProgress} />
      <BackgroundBlobs />
      <Nav name={resume.name} isDark={isDark} toggleDark={toggle} />
      <Hero />
      <EducationBanners />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  );
}
