import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBackground from "@/assets/hero-bg.jpg";
import { HERO_CONTENT, SOCIAL_LINKS } from "@/lib/constants";

export const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBackground})` }}
      >
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            {HERO_CONTENT.greeting}{" "}
            <span className="text-gradient">{HERO_CONTENT.name}</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {HERO_CONTENT.subtitle}{" "}
            <span className="text-primary font-semibold">
              {HERO_CONTENT.specializations[0]}
            </span>{" "}
            &{" "}
            <span className="text-primary font-semibold">
              {HERO_CONTENT.specializations[1]}
            </span>
          </p>
          <p className="text-lg text-muted-foreground mb-12 max-w-xl mx-auto">
            {HERO_CONTENT.description}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              className="gradient-primary hover:glow-primary transition-all duration-300 transform hover:scale-105"
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {HERO_CONTENT.ctaButtons[0].text}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
            >
              {HERO_CONTENT.ctaButtons[1].text}
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-16">
            {SOCIAL_LINKS.map((social, index) => {
              const IconComponent =
                social.icon === "Github"
                  ? Github
                  : social.icon === "Linkedin"
                  ? Linkedin
                  : Mail;
              return (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <IconComponent className="w-6 h-6" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hover:text-primary transition-colors duration-300"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};
