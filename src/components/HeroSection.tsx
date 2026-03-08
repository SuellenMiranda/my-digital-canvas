import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";

const techBadges = [
  "React", "TypeScript", "Node.js", "Figma", "UI/UX", "React Native",
  "Golang", "SQL", "SAP ABAP", "Fiori/UI5", "S/4 HANA", "SAP CAP",
  "SAP Build Apps", "Unity (VR/AR)", "Cloud (AWS, Azure, GCP)",
];

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl text-center relative z-10">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
          {t.hero.greeting}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-gradient leading-tight">
          {t.hero.name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-3 font-light tracking-wide">
          {t.hero.title}
        </p>

        {/* Branding separado */}
        <p className="text-base md:text-lg text-foreground/80 italic mb-8 max-w-xl mx-auto">
          "Transformando ideias em soluções digitais inovadoras."
        </p>

        <p className="text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed text-sm">
          {t.hero.description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 max-w-2xl mx-auto">
          {techBadges.map((tech) => (
            <span key={tech} className="px-3 py-1 text-xs font-mono bg-secondary/60 text-primary border border-border rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#projects" className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity">
            {t.hero.cta_projects}
          </a>
          <a href="#contact" className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-colors">
            {t.hero.cta_contact}
          </a>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
