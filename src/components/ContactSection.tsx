import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Gamepad2, Twitch, Instagram } from "lucide-react";

const socials = [
  { icon: Gamepad2, label: "itch.io", href: "https://suh-euclxel.itch.io" },
  { icon: Github, label: "GitHub", href: "https://github.com/SuellenMiranda" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/suellenmiranda" },
  { icon: Twitch, label: "Twitch", href: "https://www.twitch.tv/suh_euclxel" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/mayukosuh" },
];

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6 bg-card/30">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">{t.contact.title}</h2>
        <p className="text-muted-foreground mb-8">{t.contact.subtitle}</p>

        <div className="mb-8">
          <p className="text-sm text-muted-foreground mb-3">{t.contact.emails_label}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <a href="mailto:suellen.org@gmail.com" className="text-primary hover:underline text-sm font-mono">
              suellen.org@gmail.com
            </a>
            <span className="hidden sm:inline text-border">|</span>
            <a href="mailto:suellen.dsredev@gmail.com" className="text-primary hover:underline text-sm font-mono">
              suellen.dsredev@gmail.com
            </a>
          </div>
        </div>

        <p className="text-sm text-muted-foreground mb-3">{t.contact.linkedin_cta}</p>
        <a
          href="https://www.linkedin.com/in/suellenmiranda"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity mb-16"
        >
          <Linkedin className="w-4 h-4" />
          LinkedIn
        </a>

        {/* Follow Me */}
        <div className="pt-8 border-t border-border">
          <h3 className="text-xl font-semibold text-foreground mb-2">{t.contact.follow_title}</h3>
          <p className="text-muted-foreground text-sm mb-6">{t.contact.follow_subtitle}</p>

          <div className="flex justify-center gap-5 flex-wrap">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center gap-1.5 group"
              >
                <div className="p-3 rounded-full bg-secondary text-muted-foreground group-hover:text-primary group-hover:border-primary/40 border border-border transition-colors">
                  <s.icon className="w-5 h-5" />
                </div>
                <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
