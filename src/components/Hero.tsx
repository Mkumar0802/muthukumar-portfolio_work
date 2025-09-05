import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-subtle overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(220, 220, 240, 0.9), rgba(220, 220, 240, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="text-gradient">Muthu Kumar</span>
              </h1>
              <p className="text-2xl text-muted-foreground font-medium">
                MERN Stack Developer
              </p>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                4+ years of experience building scalable web applications. 
                Expertise in React, Node.js, Laravel, and modern web technologies. 
                Ready to bring your ideas to life with clean, efficient code.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group">
                View My Work
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline" size="lg">
                Get In Touch
              </Button>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-sm text-muted-foreground font-medium">Follow me:</span>
              <div className="flex space-x-4">
                <Button variant="ghost" size="icon">
                  <Github className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Linkedin className="h-5 w-5" />
                </Button>
                <Button variant="ghost" size="icon">
                  <Mail className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-hero-gradient rounded-full blur-2xl opacity-30 scale-110"></div>
              <img
                src={profilePhoto}
                alt="Muthu Kumar K - MERN Stack Developer"
                className="relative w-80 h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-elegant border-4 border-white"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold shadow-card">
                Available for Hire
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;