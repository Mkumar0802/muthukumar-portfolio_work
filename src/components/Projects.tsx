import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Code2 } from "lucide-react";

const Projects = () => {
  // Placeholder projects - user will provide actual project list
  const projects = [
    {
      title: "Healthcare Dashboard Suite",
      description: "Comprehensive internal dashboards for HR, finance, and operations at Athulya Senior Care. Features real-time analytics, automated reporting, and seamless API integrations.",
      technologies: ["React.js", "Laravel", "MySQL", "Chart.js", "REST APIs"],
      category: "Enterprise Application",
      status: "Production",
      features: [
        "Real-time data visualization",
        "Automated invoice generation", 
        "Employee attendance tracking",
        "Financial reporting dashboard"
      ]
    },
    {
      title: "WhatsApp Chatbot Integration",
      description: "Intelligent chatbot system for customer support using Gupshup API. Handles common queries, appointment booking, and customer service automation.",
      technologies: ["Node.js", "Express.js", "MongoDB", "Gupshup API", "NLP"],
      category: "Automation",
      status: "Production",
      features: [
        "Natural language processing",
        "Appointment scheduling",
        "Automated responses",
        "Customer query routing"
      ]
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution with payment gateway integration, inventory management, and admin dashboard. Built for scalability and performance.",
      technologies: ["MERN Stack", "Stripe API", "MongoDB", "Redis", "AWS"],
      category: "E-commerce",
      status: "Completed",
      features: [
        "Payment gateway integration",
        "Inventory management",
        "Order tracking system",
        "Analytics dashboard"
      ]
    },
    {
      title: "Real Estate Management System",
      description: "Property management platform with advanced search, virtual tours, and CRM integration. Streamlines property listings and client management.",
      technologies: ["React.js", "Laravel", "MySQL", "Google Maps API", "Sell.do API"],
      category: "Business Application",
      status: "Production",
      features: [
        "Advanced property search",
        "CRM integration",
        "Document management",
        "Lead tracking system"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of innovative solutions and technical expertise across various domains, 
            from healthcare systems to e-commerce platforms.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <CardTitle className="text-xl group-hover:text-gradient transition-smooth mb-2">
                      {project.title}
                    </CardTitle>
                    <div className="flex items-center space-x-2">
                      <Badge variant="secondary">{project.category}</Badge>
                      <Badge 
                        variant={project.status === 'Production' ? 'default' : 'outline'}
                        className={project.status === 'Production' ? 'bg-green-500/10 text-green-600 border-green-200' : ''}
                      >
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  <Code2 className="h-6 w-6 text-primary group-hover:scale-110 transition-smooth" />
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                <div>
                  <h4 className="font-semibold mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-sm text-muted-foreground flex items-start">
                        <span className="text-primary mr-2 mt-1">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex space-x-3 pt-4">
                  <Button variant="default" size="sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="outline" size="sm">
                    <Github className="h-4 w-4 mr-2" />
                    Source Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <p className="text-muted-foreground mb-6">
            Want to see more of my work? Check out my complete portfolio on GitHub.
          </p>
          <Button variant="hero" size="lg">
            <Github className="h-5 w-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;