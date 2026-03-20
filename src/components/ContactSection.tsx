import { useLanguage } from "@/contexts/LanguageContext";
import { Github, Linkedin, Gamepad2, Twitch, Instagram } from "lucide-react";

const socials = [
  {
    icon: Gamepad2,
    label: "itch.io",
    href: "https://suh-euclxel.itch.io",
    iconClass: "text-[#fa5c5c]",
    chipClass: "bg-[#fa5c5c]/10 border-[#fa5c5c]/40 group-hover:bg-[#fa5c5c]/20",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/SuellenMiranda",
    iconClass: "text-[#333333] dark:text-[#f5f5f5]",
    chipClass: "bg-secondary border-border group-hover:bg-secondary/80",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/suellenmiranda",
    iconClass: "text-[#0A66C2]",
    chipClass: "bg-[#0A66C2]/10 border-[#0A66C2]/40 group-hover:bg-[#0A66C2]/20",
  },
  {
    icon: Twitch,
    label: "Twitch",
    href: "https://www.twitch.tv/suh_euclxel",
    iconClass: "text-[#9146FF]",
    chipClass: "bg-[#9146FF]/10 border-[#9146FF]/40 group-hover:bg-[#9146FF]/20",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/mayukosuh",
    iconClass: "text-[#E1306C]",
    chipClass: "bg-[#E1306C]/10 border-[#E1306C]/40 group-hover:bg-[#E1306C]/20",
  },
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
                <div className={`p-3 rounded-full border transition-colors ${s.chipClass}`}>
                  <s.icon className={`w-5 h-5 ${s.iconClass}`} />
                </div>
                <span className={`text-xs transition-colors ${s.iconClass}`}>{s.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
