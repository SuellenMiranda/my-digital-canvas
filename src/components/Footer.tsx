import { useLanguage } from "@/contexts/LanguageContext";
import { Heart } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Suellen Miranda Amorim. {t.footer.rights}</p>
        <p className="flex items-center gap-1.5">
          {t.footer.made_with} <Heart className="w-3.5 h-3.5 text-primary fill-primary" />
        </p>
      </div>
    </footer>
  );
};

export default Footer;
