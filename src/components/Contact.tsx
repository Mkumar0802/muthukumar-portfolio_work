import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Mail, Phone, MapPin, Linkedin, Github, MessageCircle, Download } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "mkumar0802@gmail.com",
      action: "Send Email",
      href: "mailto:mkumar0802@gmail.com",
      primary: true
    },
    {
      icon: Phone,
      label: "Phone",
      value: "9566420177",
      action: "Call Now",
      href: "tel:+919566420177",
      primary: true
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "9566420177",
      action: "Chat on WhatsApp",
      href: "https://wa.me/919566420177",
      primary: false
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect on LinkedIn",
      action: "View Profile",
      href: "#",
      primary: false
    }
  ];

  const services = [
    "Full-Stack Web Development",
    "MERN Stack Applications", 
    "Laravel Development",
    "API Development & Integration",
    "Database Design & Optimization",
    "Cloud Deployment & DevOps",
    "Legacy System Migration",
    "Technical Consulting"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Let's Work <span className="text-gradient">Together</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your ideas to life? I'm available for freelance projects 
            and would love to discuss how we can create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <span>Get In Touch</span>
                  <Badge variant="secondary" className="bg-green-500/10 text-green-600 border-green-200">
                    Available
                  </Badge>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50 hover:bg-secondary transition-smooth">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="font-medium">{method.label}</p>
                          <p className="text-sm text-muted-foreground">{method.value}</p>
                        </div>
                      </div>
                      <Button 
                        variant={method.primary ? "hero" : "outline"} 
                        size="sm"
                        asChild
                      >
                        <a href={method.href} target={method.label === "LinkedIn" ? "_blank" : undefined}>
                          {method.action}
                        </a>
                      </Button>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Location & Availability</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-medium">Chennai, Tamil Nadu, India</p>
                    <p className="text-sm text-muted-foreground">Available for remote work worldwide</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <p className="font-semibold text-gradient">4+ Years</p>
                    <p className="text-sm text-muted-foreground">Experience</p>
                  </div>
                  <div className="text-center p-3 bg-secondary/50 rounded-lg">
                    <p className="font-semibold text-gradient">24-48h</p>
                    <p className="text-sm text-muted-foreground">Response Time</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Services & Quick Action */}
          <div className="space-y-8">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle>Services I Offer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-3">
                  {services.map((service, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 rounded-lg hover:bg-secondary/50 transition-smooth">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">{service}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card bg-gradient-subtle">
              <CardContent className="p-8 text-center">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6">
                  Let's discuss your requirements and create a solution that exceeds your expectations.
                </p>
                
                <div className="space-y-4">
                  <Button variant="hero" size="lg" className="w-full" asChild>
                    <a href="mailto:mkumar0802@gmail.com?subject=Project Inquiry&body=Hi Muthu, I'm interested in discussing a project with you.">
                      <Mail className="h-5 w-5 mr-2" />
                      Start a Project
                    </a>
                  </Button>
                  
                  <div className="flex space-x-4">
                    <Button variant="outline" size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href="#" target="_blank">
                        <Github className="h-4 w-4 mr-2" />
                        View GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t">
          <p className="text-muted-foreground">
            © 2024 Muthu Kumar K. Available for freelance opportunities worldwide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;