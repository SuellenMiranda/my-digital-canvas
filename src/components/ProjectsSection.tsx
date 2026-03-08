import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

const projectData = [
  { image: "/images/AppMobile.png", link: "" },
  { image: "/images/ligav.png", link: "https://ligav.com.br" },
  { image: "/images/SiteMarcenaria.png", link: "https://suellenmiranda.github.io/Marcenaria-Artesanal-Modelo/" },
  { image: "/images/dashboard.png", link: "https://suellenmiranda.github.io/finance-dashboard/" },
  { image: "/images/demo.jpg", link: "https://bryntum.com/products/gantt/examples/portfolio-planning" },
];

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-16 text-center">{t.projects.title}</h2>

        {/* Canva TCC embed */}
        <div className="mb-12">
          <div className="rounded-xl overflow-hidden border border-border" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
            <iframe
              loading="lazy"
              src="https://www.canva.com/design/DAGIgROScjU/pI_dgAkL-cm6MNA-eXIisA/view?embed"
              allowFullScreen
              style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none" }}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
          {t.projects.items.map((project, i) => {
            const data = projectData[i];
            const projectLink = data?.link || project.link;
            return (
              <div key={i} className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300">
                <div className="overflow-hidden h-48">
                  <img
                    src={data?.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                    {projectLink && (
                      <a href={projectLink} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors flex-shrink-0 mt-1">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-xs px-2.5 py-1 bg-secondary text-primary rounded-full font-mono">
                        {tag}
                      </span>
                    ))}
                  </div>
                  {projectLink && (
                    <a href={projectLink} target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-sm text-primary hover:underline">
                      {t.projects.view} →
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
