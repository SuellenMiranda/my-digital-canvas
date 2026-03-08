import { useLanguage } from "@/contexts/LanguageContext";
import { FileText, Download } from "lucide-react";

const CoverLetterSection = () => {
  const { t } = useLanguage();

  return (
    <section id="cover-letter" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12 text-center">
          {t.resumes.cover_letter}
        </h2>

        <div className="rounded-xl bg-card border border-border p-8 md:p-12 space-y-6 text-foreground leading-relaxed">
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
              Além da experiência profissional, destaco meu projeto de TCC – <strong className="text-foreground">Job Match</strong>, um aplicativo móvel inovador para otimizar o recrutamento de estágios e empregos, com foco em oferecer feedback construtivo a candidatos e empresas. O sistema foi desenvolvido em <strong className="text-foreground">React Native</strong> (multiplataforma Android/iOS) com backend em <strong className="text-foreground">Node.js e Express.js</strong>, banco de dados gerenciado pelo <strong className="text-foreground">Prisma ORM</strong>, e integrações para notificações em tempo real e segurança de dados. O projeto contempla cadastro de candidatos e empresas, candidaturas, avaliações interativas e acessibilidade, sendo versionado no GitHub e desenvolvido com <strong className="text-foreground">Expo</strong> para facilitar testes e usabilidade. Esse trabalho reforça minhas competências em <strong className="text-foreground">arquitetura de software, desenvolvimento mobile e boas práticas de segurança e escalabilidade</strong>.
            </p>

            <p>
              Ao longo da minha formação e carreira, desenvolvi habilidades em <strong className="text-foreground">React, React Native, TypeScript, Golang, SQL, SAP ABAP e SAP Build Apps</strong>, além de competências em infraestrutura de TI, cloud (<strong className="text-foreground">Azure, AWS, GCP</strong>) e <strong className="text-foreground">Unity para VR/AR</strong>. Meu perfil é marcado pela <strong className="text-foreground">proatividade, capacidade analítica e espírito colaborativo</strong>, sempre buscando transformar ideias em soluções digitais inovadoras e de impacto.
            </p>

            <p>
              Acredito que minha combinação de experiência prática, formação sólida e projetos aplicados pode contribuir significativamente para o crescimento da sua equipe e para o sucesso dos projetos da empresa. Estou motivada para aprender continuamente, assumir novos desafios e agregar valor com soluções eficientes e inovadoras.
            </p>

            <p>
              Agradeço a oportunidade e coloco-me à disposição para uma entrevista, onde poderei detalhar melhor como minhas habilidades e experiências podem contribuir para sua organização.
            </p>

            <p className="font-medium text-foreground mt-6">
              Atenciosamente,<br />
              Suellen Miranda
            </p>
          </div>
        </div>

        <div className="flex justify-center mt-6">
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
    </section>
  );
};

export default CoverLetterSection;
