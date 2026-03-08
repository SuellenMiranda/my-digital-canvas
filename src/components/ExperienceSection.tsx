import { useLanguage } from "@/contexts/LanguageContext";
import { MapPin, ExternalLink, Play } from "lucide-react";
import { useState } from "react";

interface MediaItem {
  type: "image" | "youtube" | "link" | "jumpshare";
  src: string;
  label?: string;
  href?: string;
}

const experienceMedia: Record<number, MediaItem[]> = {
  0: [
    { type: "image", src: "/images/ligav.png", label: "Ligav", href: "https://ligav.com.br" },
  ],
  1: [
    { type: "youtube", src: "https://www.youtube.com/embed/lhrFaCAmT3E", label: "SAP Build Apps — Projeto 1" },
    { type: "youtube", src: "https://www.youtube.com/embed/EgcWgUYFjIY", label: "SAP Build Apps — Projeto 2" },
  ],
  2: [
    { type: "image", src: "/images/design-dev-fullstack.png", label: "Design DEV FullStack" },
    { type: "image", src: "/images/demo.jpg", label: "Demo Bryntum", href: "https://bryntum.com/products/gantt/examples/portfolio-planning" },
  ],
  3: [],
  4: [
    { type: "jumpshare", src: "https://jumpshare.com/embed/lomxWNKY86IxFCOTeiw0", label: "VR Demo 1" },
    { type: "jumpshare", src: "https://jumpshare.com/embed/SUv0ZduF2xRB4EcJDCoz", label: "VR Demo 2" },
    { type: "jumpshare", src: "https://jumpshare.com/embed/U8VLAJj2vZcTU2mwOLal", label: "VR Demo 3" },
    { type: "jumpshare", src: "https://jumpshare.com/embed/ntcNa7E3Dr43TgNwPRfI", label: "VR Video 1" },
    { type: "jumpshare", src: "https://jumpshare.com/embed/Obk30nWBPXIVcaksH1iv", label: "VR Video 2" },
    { type: "jumpshare", src: "https://jumpshare.com/embed/SNJkwS6I76KWC94Cm7IA", label: "VR Video 3" },
  ],
  5: [
    { type: "youtube", src: "https://www.youtube.com/embed/kE0_r3Eb6a8", label: "Colação de Grau — UVV 2024" },
  ],
};

const ExperienceSection = () => {
  const { t } = useLanguage();
  const [expandedVideo, setExpandedVideo] = useState<string | null>(null);

  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-16 text-center">{t.experience.title}</h2>

        <div className="relative">
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-border" />

          <div className="space-y-16">
            {t.experience.items.map((item, i) => {
              const media = experienceMedia[i] || [];
              return (
                <div key={i} className="relative pl-12">
                  {/* Dot */}
                  <div className="absolute left-4 -translate-x-1/2 w-3 h-3 bg-primary rounded-full ring-4 ring-background z-10 mt-1.5" />

                  {/* Content */}
                  <div>
                    <span className="text-xs font-mono text-primary tracking-wider">{item.period}</span>
                    <h3 className="text-lg font-semibold text-foreground mt-1">{item.role}</h3>
                    <p className="text-sm text-muted-foreground">{item.company}</p>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{item.description}</p>
                    <div className="flex items-center gap-1 mt-2 text-xs text-muted-foreground/70">
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>

                    {/* Media grid */}
                    {media.length > 0 && media[0].type !== "link" && (
                      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {media.map((m, j) => (
                          <div key={j}>
                            {m.type === "image" && (
                              <div className="group relative rounded-lg overflow-hidden border border-border">
                                <img src={m.src} alt={m.label || ""} className="w-full h-40 object-cover" loading="lazy" />
                                <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                  {m.href ? (
                                    <a href={m.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-sm text-primary font-medium">
                                      <ExternalLink className="w-4 h-4" /> {m.label}
                                    </a>
                                  ) : (
                                    <span className="text-sm text-foreground">{m.label}</span>
                                  )}
                                </div>
                              </div>
                            )}
                            {m.type === "youtube" && (
                              <div>
                                {expandedVideo === m.src ? (
                                  <div className="rounded-lg overflow-hidden border border-border" style={{ position: "relative", paddingBottom: "56.25%", height: 0 }}>
                                    <iframe
                                      src={m.src}
                                      title={m.label}
                                      allowFullScreen
                                      style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none" }}
                                    />
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => setExpandedVideo(m.src)}
                                    className="w-full h-28 rounded-lg border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/40 transition-all flex flex-col items-center justify-center gap-2"
                                  >
                                    <Play className="w-6 h-6 text-primary" />
                                    <span className="text-xs text-muted-foreground">{m.label}</span>
                                  </button>
                                )}
                              </div>
                            )}
                            {m.type === "jumpshare" && (
                              <div>
                                {expandedVideo === m.src ? (
                                  <div className="rounded-lg overflow-hidden border border-border" style={{ position: "relative", paddingBottom: "90%", height: 0 }}>
                                    <iframe
                                      src={m.src}
                                      title={m.label}
                                      allowFullScreen
                                      allow="autoplay"
                                      style={{ position: "absolute", width: "100%", height: "100%", top: 0, left: 0, border: "none" }}
                                    />
                                  </div>
                                ) : (
                                  <button
                                    onClick={() => setExpandedVideo(m.src)}
                                    className="w-full h-28 rounded-lg border border-border bg-secondary/50 hover:bg-secondary hover:border-primary/40 transition-all flex flex-col items-center justify-center gap-2"
                                  >
                                    <Play className="w-6 h-6 text-primary" />
                                    <span className="text-xs text-muted-foreground">{m.label}</span>
                                  </button>
                                )}
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
