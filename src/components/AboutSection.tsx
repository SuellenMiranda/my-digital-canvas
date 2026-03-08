import { useLanguage } from "@/contexts/LanguageContext";
import { Code2, Palette, Database, Briefcase } from "lucide-react";

const AboutSection = () => {
  const { t } = useLanguage();

  const areas = [
    { icon: Code2, label: t.about.label_dev, desc: t.about.desc_dev },
    { icon: Palette, label: t.about.label_design, desc: t.about.desc_design },
    { icon: Database, label: t.about.label_sap, desc: t.about.desc_sap },
    { icon: Briefcase, label: t.about.label_freelancer, desc: t.about.desc_freelancer },
  ];

  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">{t.about.title}</h2>

        <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto text-center mb-16">
          {t.about.text}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area) => (
            <div key={area.label} className="group p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all duration-300 glow hover:glow">
              <area.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="font-semibold text-foreground mb-2">{area.label}</h3>
              <p className="text-sm text-muted-foreground">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
