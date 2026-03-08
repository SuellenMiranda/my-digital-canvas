import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Download, ChevronDown } from "lucide-react";
import { useState } from "react";

/** Render **bold** markdown segments as <strong> */
const renderBold = (text: string) => {
  const parts = text.split(/\*\*(.*?)\*\*/g);
  return parts.map((part, i) =>
    i % 2 === 1 ? (
      <strong key={i} className="text-foreground">{part}</strong>
    ) : (
      <span key={i}>{part}</span>
    )
  );
};

const CoverLetterSection = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  const paragraphs = [
    t.resumes.cl_p1,
    t.resumes.cl_p2,
    t.resumes.cl_p3,
    t.resumes.cl_p4,
    t.resumes.cl_p5,
    t.resumes.cl_p6,
  ];

  return (
    <section id="cover-letter" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => setOpen(!open)}
          className="w-full group rounded-xl bg-card border border-border hover:border-primary/40 p-6 sm:p-8 flex items-center justify-between transition-all duration-300"
        >
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-primary" />
            <span className="text-lg sm:text-xl font-semibold text-foreground">
              {t.resumes.cover_letter}
            </span>
          </div>
          <div className={`text-muted-foreground group-hover:text-primary transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
            <ChevronDown className="w-5 h-5" />
          </div>
        </button>

        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="rounded-xl bg-card border border-border p-5 sm:p-8 md:p-12 space-y-6 text-foreground leading-relaxed">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-foreground">Suellen Miranda Amorim</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Vila Velha - ES · <a href="mailto:suellen.org@gmail.com" className="text-primary hover:underline">suellen.org@gmail.com</a> · <a href="https://www.linkedin.com/in/suellenmiranda" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/suellenmiranda</a>
              </p>
            </div>

            <div className="border-t border-border pt-6 space-y-4 text-sm text-muted-foreground">
              <p>{t.resumes.cl_greeting}</p>
              {paragraphs.map((p, i) => (
                <p key={i}>{renderBold(p)}</p>
              ))}
              <p className="font-medium text-foreground mt-6">
                {t.resumes.cl_closing}<br />
                Suellen Miranda
              </p>
            </div>

            <div className="flex justify-center pt-4">
              <a
                href="https://suellenmiranda.github.io/Portifolio/assets/PDF/carta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                {t.resumes.cl_download}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetterSection;
