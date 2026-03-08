import { useLanguage } from "@/contexts/LanguageContext";
import { Globe, Menu, X } from "lucide-react";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const { language, setLanguage, t } = useLanguage();
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: t.nav.about },
    { href: "#skills", label: t.nav.skills },
    { href: "#experience", label: t.nav.experience },
    { href: "#projects", label: t.nav.projects },
    { href: "#resumes", label: t.nav.resumes },
    { href: "#contact", label: t.nav.contact },
  ];

  const toggleLang = () => setLanguage(language === "pt" ? "en" : "pt");

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#" className="text-lg font-mono font-bold text-gradient">&lt;/Meu Portfólio&gt;</a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <button onClick={toggleLang} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors border border-border rounded-full px-3 py-1">
            <Globe className="w-3.5 h-3.5" />
            {language === "pt" ? "🇧🇷 PT" : "🇺🇸 EN"}
          </button>
        </div>

        <div className="flex md:hidden items-center gap-3">
          <ThemeToggle />
          <button onClick={toggleLang} className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary border border-border rounded-full px-2.5 py-1">
            <Globe className="w-3.5 h-3.5" />
            {language === "pt" ? "🇧🇷" : "🇺🇸"}
          </button>
          <button onClick={() => setOpen(!open)} className="text-foreground">
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-lg">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-muted/50 transition-colors">
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
