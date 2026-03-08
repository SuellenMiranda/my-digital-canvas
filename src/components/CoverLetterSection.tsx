import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Download, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const CoverLetterSection = () => {
  const { t } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <section id="cover-letter" className="py-16 sm:py-24 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {/* Toggle button styled as a card */}
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

        {/* Animated content */}
        <div
          className={`overflow-hidden transition-all duration-500 ease-in-out ${
            open ? "max-h-[2000px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
          }`}
        >
          <div className="rounded-xl bg-card border border-border p-5 sm:p-8 md:p-12 space-y-6 text-foreground leading-relaxed animate-fade-in">
            <div className="text-center mb-8">
              <h3 className="text-xl font-bold text-foreground">Suellen Miranda Amorim</h3>
              <p className="text-sm text-muted-foreground mt-1">
                Vila Velha - ES · <a href="mailto:suellen.org@gmail.com" className="text-primary hover:underline">suellen.org@gmail.com</a> · <a href="https://www.linkedin.com/in/suellenmiranda" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">linkedin.com/in/suellenmiranda</a>
              </p>
            </div>

            <div className="border-t border-border pt-6 space-y-4 text-sm text-muted-foreground">
              <p>Prezado(a),</p>

              <p>
                Sou <strong className="text-foreground">Desenvolvedora Full Stack e Designer</strong>, formada em <strong className="text-foreground">Ciência da Computação</strong> pela Universidade Vila Velha, e possuo experiência diversificada em <strong className="text-foreground">desenvolvimento web, SAP e realidade virtual</strong>.
              </p>

              <p>
                Minha trajetória profissional inclui atuações em empresas como <strong className="text-foreground">Megawork Consultoria</strong>, onde atuei como <strong className="text-foreground">Desenvolvedora ABAP Trainee</strong>, e <strong className="text-foreground">PVT Software e Serviços</strong>, onde desenvolvi e mantive aplicações web e dei suporte em infraestrutura e cloud. Também atuei na <strong className="text-foreground">Jade Autism</strong>, com suporte e testes de aplicações, e na <strong className="text-foreground">Vale</strong>, no desenvolvimento de soluções de realidade virtual para treinamentos corporativos.
              </p>

              <p>
                Além da experiência profissional, destaco meu projeto de TCC – <strong className="text-foreground">Job Match</strong>, um aplicativo móvel inovador para otimizar o recrutamento de estágios e empregos, com foco em oferecer feedback construtivo a candidatos e empresas. O sistema foi desenvolvido em <strong className="text-foreground">React Native</strong> (multiplataforma Android/iOS) com backend em <strong className="text-foreground">Node.js e Express.js</strong>, banco de dados gerenciado pelo <strong className="text-foreground">Prisma ORM</strong>, e integrações para notificações em tempo real e segurança de dados.
              </p>

              <p>
                Ao longo da minha formação e carreira, desenvolvi habilidades em <strong className="text-foreground">React, React Native, TypeScript, Golang, SQL, SAP ABAP e SAP Build Apps</strong>, além de competências em infraestrutura de TI, cloud (<strong className="text-foreground">Azure, AWS, GCP</strong>) e <strong className="text-foreground">Unity para VR/AR</strong>. Meu perfil é marcado pela <strong className="text-foreground">proatividade, capacidade analítica e espírito colaborativo</strong>.
              </p>

              <p>
                Acredito que minha combinação de experiência prática, formação sólida e projetos aplicados pode contribuir significativamente para o crescimento da sua equipe. Estou motivada para aprender continuamente, assumir novos desafios e agregar valor com soluções eficientes e inovadoras.
              </p>

              <p>
                Agradeço a oportunidade e coloco-me à disposição para uma entrevista.
              </p>

              <p className="font-medium text-foreground mt-6">
                Atenciosamente,<br />
                Suellen Miranda
              </p>
            </div>

            {/* Download button */}
            <div className="flex justify-center pt-4">
              <a
                href="https://suellenmiranda.github.io/Portifolio/assets/PDF/carta.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full font-medium hover:opacity-90 transition-opacity"
              >
                <Download className="w-4 h-4" />
                Baixar PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoverLetterSection;
