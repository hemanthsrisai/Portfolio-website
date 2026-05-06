import { SectionHeader } from "./SectionHeader";
import glimLogo from "@/assets/glim_logo.png";
import srmLogo from "@/assets/srm_logo.png";

export function EducationBanners() {
  return (
    <section id="education" className="relative py-16 px-6 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <SectionHeader eyebrow="01 · Education" title="Foundations built at world-class institutions." watermark="LEARN" />
        
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {/* MBA Banner */}
          <div className="glass rounded-2xl p-6 flex items-center gap-6 hover-lift reveal">
            <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-lg flex-shrink-0 p-2 border border-border">
              <img src={glimLogo} alt="Great Lakes Institute of Management" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">MBA</h3>
              <p className="text-muted-foreground mt-1 text-lg">Great Lakes Institute of Management</p>
            </div>
          </div>

          {/* B.Tech Banner */}
          <div className="glass rounded-2xl p-6 flex items-center gap-6 hover-lift reveal" style={{ transitionDelay: '0.2s' }}>
            <div className="w-20 h-20 rounded-xl bg-white flex items-center justify-center shadow-lg flex-shrink-0 p-2 border border-border">
              <img src={srmLogo} alt="SRM University" className="w-full h-full object-contain" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-foreground">B.Tech CSE</h3>
              <p className="text-muted-foreground mt-1 text-lg">SRM University, Andhra Pradesh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
