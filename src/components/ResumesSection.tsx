import { useLanguage } from "@/contexts/LanguageContext";
import { FileText } from "lucide-react";

const ResumesSection = () => {
  const { t } = useLanguage();

  const cards = [
    { title: t.resumes.basic, desc: t.resumes.basic_desc },
    { title: t.resumes.complete, desc: t.resumes.complete_desc },
    { title: t.resumes.specific, desc: t.resumes.specific_desc },
  ];

  return (
    <section id="resumes" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4 text-center">{t.resumes.title}</h2>
        <p className="text-muted-foreground text-center mb-12">{t.resumes.subtitle}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {cards.map((card) => (
            <div key={card.title} className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all text-center">
              <h3 className="text-lg font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{card.desc}</p>
              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                  🇧🇷 Português
                </button>
                <button className="px-4 py-2 text-sm bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors">
                  🇺🇸 English
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
            <FileText className="w-4 h-4" />
            {t.resumes.cover_letter}
          </a>
          <a href="#" className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border rounded-full text-sm text-foreground hover:border-primary hover:text-primary transition-colors">
            <FileText className="w-4 h-4" />
            {t.resumes.disc_profile}
          </a>
        </div>
      </div>
    </section>
  );
};

export default ResumesSection;
