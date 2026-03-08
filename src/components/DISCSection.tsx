import { useLanguage } from "@/contexts/LanguageContext";
import { Search, Target, Zap, Shield, Brain, Users, TrendingUp, Briefcase, Scale, ShoppingCart } from "lucide-react";

const discValues = { D: 24, I: 3, S: 24, C: 19 };
const maxVal = 30;

const DISCBar = ({ label, value, color }: { label: string; value: number; color: string }) => (
  <div className="flex items-center gap-3">
    <span className="w-6 text-sm font-bold" style={{ color }}>{label}</span>
    <div className="flex-1 h-6 bg-muted rounded-full overflow-hidden">
      <div
        className="h-full rounded-full transition-all duration-700 ease-out"
        style={{ width: `${(value / maxVal) * 100}%`, backgroundColor: color }}
      />
    </div>
    <span className="w-8 text-sm font-mono text-muted-foreground text-right">{value}</span>
  </div>
);

const areaIcons = [Briefcase, Scale, ShoppingCart];

const DISCSection = () => {
  const { t } = useLanguage();

  const detailCards = [
    { icon: Target, label: t.disc.objective_label, text: t.disc.objective },
    { icon: Zap, label: t.disc.pressure_label, text: t.disc.pressure },
    { icon: Shield, label: t.disc.org_value_label, text: t.disc.org_value },
  ];

  const insightCards = [
    { icon: Brain, label: t.disc.fears_title, text: t.disc.fears },
    { icon: TrendingUp, label: t.disc.behaviors_title, text: t.disc.behaviors },
    { icon: Users, label: t.disc.influence_title, text: t.disc.influence },
  ];

  return (
    <section id="disc" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4 text-center">{t.disc.title}</h2>
        <p className="text-muted-foreground text-center mb-12">{t.disc.subtitle}</p>

        {/* Profile Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12 p-8 rounded-2xl bg-card border border-border">
          <div className="flex-shrink-0 w-28 h-28 rounded-full bg-primary/10 flex items-center justify-center">
            <Search className="w-14 h-14 text-primary" />
          </div>
          <div className="text-center md:text-left">
            <p className="text-sm uppercase tracking-widest text-muted-foreground mb-1">{t.disc.profile_label}</p>
            <h3 className="text-3xl md:text-4xl font-extrabold text-primary mb-2">{t.disc.profile_name}</h3>
            <p className="text-xs text-muted-foreground">{t.disc.test_date}</p>
            <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
              {t.disc.traits.map((trait) => (
                <span key={trait} className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary font-medium">
                  {trait}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* What is DISC */}
        <div className="p-6 rounded-xl border-l-4 border-primary bg-primary/5 mb-10">
          <h4 className="font-semibold text-foreground mb-2">{t.disc.what_is}</h4>
          <p className="text-sm text-muted-foreground leading-relaxed">{t.disc.what_is_desc}</p>
        </div>

        {/* Description */}
        <p className="text-muted-foreground leading-relaxed mb-12 text-center max-w-3xl mx-auto">
          {t.disc.description}
        </p>

        {/* Chart */}
        <div className="p-8 rounded-2xl bg-card border border-border mb-12">
          <h4 className="font-semibold text-foreground mb-6 text-center">{t.disc.chart_title}</h4>
          <div className="max-w-md mx-auto space-y-4">
            <DISCBar label="D" value={discValues.D} color="hsl(0, 72%, 51%)" />
            <DISCBar label="I" value={discValues.I} color="hsl(38, 92%, 50%)" />
            <DISCBar label="S" value={discValues.S} color="hsl(142, 71%, 45%)" />
            <DISCBar label="C" value={discValues.C} color="hsl(221, 83%, 53%)" />
          </div>
        </div>

        {/* Areas */}
        <div className="mb-12">
          <h4 className="font-semibold text-foreground mb-6 text-center">{t.disc.areas_title}</h4>
          <div className="flex flex-wrap justify-center gap-4">
            {t.disc.areas.map((area, i) => {
              const Icon = areaIcons[i];
              return (
                <div key={area} className="flex items-center gap-2 px-5 py-3 rounded-full bg-card border border-border hover:border-primary/40 transition-colors">
                  <Icon className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-foreground">{area}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Details */}
        <div className="mb-12">
          <h4 className="font-semibold text-foreground mb-6 text-center">{t.disc.details_title}</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {detailCards.map((card) => (
              <div key={card.label} className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all">
                <card.icon className="w-6 h-6 text-primary mb-3" />
                <h5 className="font-semibold text-foreground text-sm mb-2">{card.label}</h5>
                <p className="text-sm text-muted-foreground">{card.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Insights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insightCards.map((card) => (
            <div key={card.label} className="p-6 rounded-xl bg-card border border-border hover:border-primary/40 transition-all">
              <card.icon className="w-6 h-6 text-primary mb-3" />
              <h5 className="font-semibold text-foreground text-sm mb-2">{card.label}</h5>
              <p className="text-sm text-muted-foreground">{card.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DISCSection;
