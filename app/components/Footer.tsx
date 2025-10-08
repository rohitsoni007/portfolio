import { HERO_CONTENT, SOCIAL_LINKS } from "@/lib/constants";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

// Map icon names to actual components
const iconComponents = {
  Github,
  Linkedin,
  Mail,
};

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background border-t border-primary/10 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gradient mb-2">
              {HERO_CONTENT.name} Developer
            </h3>
            <p className="text-muted-foreground">
              Building the future, one line of code at a time.
            </p>
          </div>

          <div className="flex space-x-6">
            {SOCIAL_LINKS.map((social, index) => {
              const IconComponent =
                iconComponents[social.icon as keyof typeof iconComponents];
              return (
                <a
                  key={index}
                  href={social.url}
                  target={social.url.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.url.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  className="p-3 rounded-full border border-primary/20 hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  {IconComponent && <IconComponent className="w-5 h-5" />}
                </a>
              );
            })}
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center gap-2">
            © {currentYear} {HERO_CONTENT.name} Developer. Made with{" "}
            <Heart className="w-4 h-4 text-red-500" fill="currentColor" /> using
            React, Shadcn UI, Tailwind CSS, and ReactRouter.
          </p>
        </div>
      </div>
    </footer>
  );
};
