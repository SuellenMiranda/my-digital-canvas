import { useLanguage } from "@/contexts/LanguageContext";

const SupportSection = () => {
  const { t } = useLanguage();

  return (
    <section id="support" className="py-16 sm:py-24 px-4 sm:px-6 bg-card/20 border-t border-border">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-gradient mb-3">{t.support.title}</h2>
        <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-md mx-auto">{t.support.subtitle}</p>

        <a
          href="https://www.buymeacoffee.com/Suuh"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-lg overflow-hidden ring-1 ring-border/60 hover:ring-primary/50 transition-all hover:opacity-95"
        >
          <img
            src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
            alt={t.support.bmc_alt}
            className="w-[150px] h-auto mx-auto"
            width={150}
            height={42}
            loading="lazy"
          />
        </a>
      </div>
    </section>
  );
};

export default SupportSection;
