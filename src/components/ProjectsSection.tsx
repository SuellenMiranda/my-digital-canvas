import { useLanguage } from "@/contexts/LanguageContext";
import { ExternalLink } from "lucide-react";

const projectImages = [
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1563986768609-322da13575f2?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
  "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=600&h=400&fit=crop",
];

const ProjectsSection = () => {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-24 px-6 bg-card/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-16 text-center">{t.projects.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.projects.items.map((project, i) => (
            <div key={i} className="group rounded-xl overflow-hidden bg-card border border-border hover:border-primary/40 transition-all duration-300">
              <div className="overflow-hidden h-48">
                <img
                  src={projectImages[i]}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-lg font-semibold text-foreground">{project.title}</h3>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                </div>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 bg-secondary text-primary rounded-full font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
