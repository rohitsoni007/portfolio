import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Database, Globe } from "lucide-react";
import { ABOUT_CONTENT } from "@/lib/constants";

export const About = () => {
  const iconMap = {
    Globe: Globe,
    Database: Database,
    Smartphone: Smartphone,
    Code: Code,
  };

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {ABOUT_CONTENT.title} <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {ABOUT_CONTENT.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {ABOUT_CONTENT.features.map((feature, index) => {
            const IconComponent = iconMap[feature.icon as keyof typeof iconMap];
            return (
              <Card
                key={index}
                className="gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="inline-block gradient-card rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-gradient">
              My Journey
            </h3>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              {ABOUT_CONTENT.journey}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
