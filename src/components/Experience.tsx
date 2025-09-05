import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Calendar, Building } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      company: "Athulya Senior Care Pvt. Ltd.",
      role: "Senior Executive - Web Developer",
      period: "Jul 2022 – Present",
      location: "Chennai, India",
      description: "Leading web development initiatives for healthcare solutions",
      achievements: [
        "Developed consolidated internal dashboards for HR, finance, and operations",
        "Built user-friendly interfaces using React.js and responsive design principles",
        "Designed and maintained secure RESTful APIs for system integrations",
        "Lead development of business tools for invoicing, billing, and attendance tracking",
        "Integrated APIs including Zimyo, Sell.do, Actionboard, and Gupshup",
        "Migrated Laravel projects from v5.8 to v11.0, ensuring stability and scalability",
        "Created WhatsApp chatbot features to enhance customer support",
        "Managed deployment environments on Digital Ocean with Jenkins automation"
      ],
      technologies: ["React.js", "Laravel", "Node.js", "MySQL", "Digital Ocean", "Jenkins", "API Integration"]
    },
    {
      company: "Freelancer",
      role: "MERN Stack Developer",
      period: "May 2021 – Apr 2022",
      location: "Remote",
      description: "Delivering custom web solutions for diverse clients",
      achievements: [
        "Delivered custom web applications using MERN stack for clients",
        "Deployed fully responsive landing pages and handled full-cycle development",
        "Managed client relationships and project timelines effectively",
        "Implemented modern web development best practices"
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "JavaScript", "CSS3", "HTML5"]
    },
    {
      company: "6univers Pvt. Ltd.",
      role: "Web Developer",
      period: "Feb 2019 – Jul 2021",
      location: "Chennai, India",
      description: "Full-stack development and maintenance of client websites",
      achievements: [
        "Designed and developed client websites using PHP, MySQL, and WordPress",
        "Maintained hosting environments, configured domains, and managed emails",
        "Implemented change requests and basic security updates for client systems",
        "Collaborated with design teams to implement pixel-perfect UIs"
      ],
      technologies: ["PHP", "MySQL", "WordPress", "JavaScript", "CSS", "HTML"]
    },
    {
      company: "Honeywell",
      role: "BMS Engineer",
      period: "Jul 2017 – Aug 2018",
      location: "Chennai, India",
      description: "Building Management Systems monitoring and maintenance",
      achievements: [
        "Monitored and maintained Building Management Systems",
        "Handled power, lighting, fire safety, and HVAC automation systems",
        "Troubleshooted system issues and provided technical support",
        "Maintained documentation and system reports"
      ],
      technologies: ["BMS Systems", "HVAC", "Automation", "Monitoring Systems"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A journey through diverse roles and technologies, building expertise 
            in full-stack development and system integrations.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-border h-full"></div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                {/* Timeline dot */}
                <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-card"></div>

                {/* Content */}
                <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <Card className="shadow-card hover:shadow-elegant transition-smooth group">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <CardTitle className="text-xl group-hover:text-gradient transition-smooth">
                            {exp.role}
                          </CardTitle>
                          <div className="flex items-center space-x-2 text-primary font-semibold mt-1">
                            <Building className="h-4 w-4" />
                            <span>{exp.company}</span>
                          </div>
                        </div>
                        <Badge variant="secondary" className="shrink-0">
                          Current
                        </Badge>
                      </div>
                      
                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </CardHeader>

                    <CardContent>
                      <p className="text-muted-foreground mb-4 italic">
                        {exp.description}
                      </p>

                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Key Achievements:</h4>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                                <span className="text-primary mr-2 mt-1">•</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold mb-2">Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <Badge key={techIndex} variant="outline" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;