import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3", "TailwindCSS", "Bootstrap"],
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      category: "Backend", 
      skills: ["Node.js", "Express.js", "PHP", "Laravel", "Python", "RESTful APIs"],
      color: "bg-green-500/10 text-green-600 border-green-200"
    },
    {
      category: "Database",
      skills: ["MongoDB", "MySQL", "Database Design", "Query Optimization"],
      color: "bg-purple-500/10 text-purple-600 border-purple-200"
    },
    {
      category: "Tools & DevOps",
      skills: ["Git", "Jenkins", "Linux", "WordPress", "CI/CD", "Digital Ocean", "AWS"],
      color: "bg-orange-500/10 text-orange-600 border-orange-200"
    },
    {
      category: "Emerging Tech",
      skills: ["Artificial Intelligence", "Large Language Models", "Retrieval-Augmented Generation"],
      color: "bg-pink-500/10 text-pink-600 border-pink-200"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack, 
            from frontend interfaces to backend systems and emerging technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card hover:shadow-elegant transition-smooth group">
              <CardHeader>
                <CardTitle className="text-xl text-center group-hover:text-gradient transition-smooth">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary"
                      className={`${category.color} hover:scale-105 transition-smooth cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "4+", label: "Years Experience" },
            { number: "50+", label: "Projects Completed" },
            { number: "15+", label: "Technologies Mastered" },
            { number: "100%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;