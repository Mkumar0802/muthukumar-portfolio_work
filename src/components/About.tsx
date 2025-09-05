import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Database, Server, Smartphone } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Frontend Development",
      description: "React.js, Next.js, TailwindCSS, JavaScript/TypeScript"
    },
    {
      icon: Server,
      title: "Backend Development", 
      description: "Node.js, Express.js, PHP, Laravel, RESTful APIs"
    },
    {
      icon: Database,
      title: "Database Management",
      description: "MongoDB, MySQL, Database Design, Query Optimization"
    },
    {
      icon: Smartphone,
      title: "Full-Stack Solutions",
      description: "End-to-end development, CI/CD, Cloud Deployment"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate MERN Stack Developer with a proven track record of delivering 
            high-quality web solutions and leading development teams.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed">
              Result-oriented MERN Stack Developer with 4+ years of experience building scalable web
              applications and dynamic user interfaces. Currently serving as Senior Executive - Web Developer
              at Athulya Senior Care Pvt. Ltd., where I lead the development of consolidated internal 
              dashboards and business automation tools.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My expertise spans the full development lifecycle, from conception to deployment, 
              with strong skills in React.js, Node.js, Laravel, and cloud technologies. 
              I'm passionate about creating efficient, maintainable code and staying current 
              with emerging technologies like AI and LLMs.
            </p>
            
            <div className="space-y-3">
              <h4 className="font-semibold text-lg">Key Achievements:</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <Badge variant="secondary" className="mr-3">✓</Badge>
                  Migrated Laravel projects from v5.8 to v11.0
                </li>
                <li className="flex items-center">
                  <Badge variant="secondary" className="mr-3">✓</Badge>
                  Integrated multiple third-party APIs (Zimyo, Sell.do, Gupshup)
                </li>
                <li className="flex items-center">
                  <Badge variant="secondary" className="mr-3">✓</Badge>
                  Developed WhatsApp chatbot features
                </li>
                <li className="flex items-center">
                  <Badge variant="secondary" className="mr-3">✓</Badge>
                  Automated deployment with Jenkins and Digital Ocean
                </li>
              </ul>
            </div>
          </div>

          <div className="grid gap-6">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-primary/10 p-3 rounded-lg group-hover:bg-primary/20 transition-smooth">
                        <Icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;