import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Briefcase } from "lucide-react";
import { CONTACT_CONTENT } from "@/lib/constants";
import { ContactForm } from "./ContactForm";

export const Contact = () => {
  const iconMap = {
    Mail: Mail,
    Phone: Phone,
    MapPin: MapPin,
    Briefcase: Briefcase,
  };

  return (
    <section id="contact" className="py-20 px-4 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {CONTACT_CONTENT.title} <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {CONTACT_CONTENT.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-up">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gradient">
                Let's Connect
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                {CONTACT_CONTENT.description}
              </p>
            </div>

            <div className="space-y-6">
              {CONTACT_CONTENT.contactInfo.map((info, index) => {
                const IconComponent =
                  iconMap[info.icon as keyof typeof iconMap];
                return (
                  <Card
                    key={index}
                    className="gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group"
                  >
                    <CardContent className="p-6">
                      {info.link ? (
                        <a
                          href={info.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-4 text-foreground hover:text-primary transition-colors duration-300"
                        >
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              {info.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {info.value}
                            </p>
                          </div>
                        </a>
                      ) : (
                        <div className="flex items-center space-x-4 text-foreground">
                          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                            <IconComponent className="w-6 h-6 text-primary" />
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg">
                              {info.title}
                            </h4>
                            <p className="text-muted-foreground">
                              {info.value}
                            </p>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};
