import { useLanguage } from "@/contexts/LanguageContext";
import { Mail, Github, Linkedin } from "lucide-react";

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4 text-center">{t.contact.title}</h2>
        <p className="text-muted-foreground text-center mb-12">{t.contact.subtitle}</p>

        <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">{t.contact.name}</label>
            <input
              type="text"
              placeholder={t.contact.name_placeholder}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">{t.contact.email}</label>
            <input
              type="email"
              placeholder={t.contact.email_placeholder}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
          </div>
          <div>
            <label className="text-sm text-muted-foreground mb-1.5 block">{t.contact.message}</label>
            <textarea
              rows={5}
              placeholder={t.contact.message_placeholder}
              className="w-full px-4 py-3 bg-card border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
            />
          </div>
          <button type="submit" className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-opacity">
            {t.contact.send}
          </button>
        </form>

        <div className="flex justify-center gap-6 mt-12">
          <a href="mailto:contato@suellen.dev" className="text-muted-foreground hover:text-primary transition-colors">
            <Mail className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-5 h-5" />
          </a>
          <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
