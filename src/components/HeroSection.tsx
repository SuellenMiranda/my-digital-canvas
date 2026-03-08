import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      {/* Subtle glow effect */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-3xl text-center relative z-10">
        <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4 animate-fade-in">
          {t.hero.greeting}
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 text-gradient leading-tight">
          {t.hero.name}
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-3 font-light tracking-wide">
          {t.hero.title}
        </p>
        <p className="text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
          {t.hero.description}
        </p>
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
