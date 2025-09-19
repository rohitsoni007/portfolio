import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, Database, Globe } from "lucide-react";

export const About = () => {
  const features = [
    {
      icon: Globe,
      title: "Frontend Development",
      description: "Building responsive, interactive web applications with React, TypeScript, and modern CSS frameworks."
    },
    {
      icon: Database,
      title: "Backend Development", 
      description: "Creating robust APIs and server-side logic with Node.js, Express, and MongoDB for scalable applications."
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Developing cross-platform mobile apps with React Native for iOS and Android platforms."
    },
    {
      icon: Code,
      title: "Full-Stack Solutions",
      description: "End-to-end development from database design to user interface, ensuring seamless integration."
    }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate full-stack developer with 5+ years of experience building 
            modern web and mobile applications. I specialize in the MERN stack and React Native, 
            creating solutions that are both technically robust and user-friendly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="gradient-card border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-elegant group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-block gradient-card rounded-2xl p-8 border border-primary/10">
            <h3 className="text-2xl font-bold mb-4 text-gradient">My Journey</h3>
            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Started as a frontend developer and evolved into full-stack development. 
              I've worked with startups and enterprises, building everything from 
              e-commerce platforms to social media apps. Always learning and adapting 
              to new technologies to deliver the best solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};