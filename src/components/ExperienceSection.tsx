import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin } from "lucide-react";

const ExperienceSection = () => {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-16 text-center">{t.experience.title}</h2>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-12">
            {t.experience.items.map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-background z-10 mt-1.5" />

                <div className={`ml-10 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"}`}>
                  <span className="text-xs font-mono text-primary tracking-wider">{item.period}</span>
                  <h3 className="text-lg font-semibold text-foreground mt-1">{item.role}</h3>
                  <p className="text-sm text-muted-foreground">{item.company}</p>
                  <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                  <div className={`flex items-center gap-1 mt-2 text-xs text-muted-foreground/70 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                    <MapPin className="w-3 h-3" />
                    <span>{item.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
