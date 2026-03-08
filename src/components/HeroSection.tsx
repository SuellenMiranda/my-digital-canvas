import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

const techBadges = [
  "React", "TypeScript", "Node.js", "Figma", "UI/UX", "React Native",
  "Golang", "SQL", "SAP ABAP", "Fiori/UI5", "S/4 HANA", "SAP CAP",
  "SAP Build Apps", "Unity (VR/AR)", "Cloud (AWS, Azure, GCP)",
];

const profileImages = [
  "/images/me.jpg",
  "/images/perfil.png",
  "/images/profile.jpeg",
];

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % profileImages.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12 relative z-10">
        <div className="flex-1 text-center md:text-left">
          <p className="text-sm font-mono text-primary tracking-widest uppercase mb-4">
            {t.hero.greeting}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-gradient leading-tight">
            {t.hero.name}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-3 font-light tracking-wide">
            {t.hero.title}
          </p>

          <p className="text-base md:text-lg text-foreground/80 italic mb-6">
            "Transformando ideias em soluções digitais inovadoras."
          </p>

          <p className="text-muted-foreground mb-6 leading-relaxed text-sm">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8">
            {techBadges.map((tech) => (
              <span key={tech} className="px-3 py-1 text-xs font-mono bg-secondary/60 text-primary border border-border rounded-full">
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="px-8 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity text-center">
              {t.hero.cta_projects}
            </a>
            <a href="#contact" className="px-8 py-3 border border-border text-foreground rounded-full font-medium hover:border-primary hover:text-primary transition-colors text-center">
              {t.hero.cta_contact}
            </a>
          </div>
        </div>

        {/* Cycling photo */}
        <div className="flex-shrink-0">
          <div className="w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-primary/30 glow relative">
            {profileImages.map((src, i) => (
              <img
                key={src}
                src={src}
                alt="Suellen Miranda Amorim"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
                  i === currentImage ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <a href="#about" className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce">
        <ArrowDown className="w-5 h-5" />
      </a>
    </section>
  );
};

export default HeroSection;
