import { useLanguage } from "@/contexts/LanguageContext";
import skillsData from "@/data/skills";

const SkillsSection = () => {
  const { t } = useLanguage();

  const categories = [
    { key: "frontend" as const, label: t.skills.frontend },
    { key: "backend" as const, label: t.skills.backend },
    { key: "design" as const, label: t.skills.design },
    { key: "sap" as const, label: t.skills.sap },
    { key: "tools" as const, label: t.skills.tools },
    { key: "games" as const, label: t.skills.games },
    { key: "other" as const, label: t.skills.other },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-16 text-center">{t.skills.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map(({ key, label }) => (
            <div key={key} className="space-y-4">
              <h3 className="text-sm font-mono text-primary tracking-wider uppercase">{label}</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData[key].map((skill) => (
                  <span key={skill} className="px-3 py-1.5 text-sm bg-secondary text-secondary-foreground rounded-full border border-border hover:border-primary/40 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
