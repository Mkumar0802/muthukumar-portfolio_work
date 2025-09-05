import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-card border-b shadow-card sticky top-0 z-50 transition-smooth">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-bold text-gradient">Muthu Kumar K</h1>
            <span className="text-sm text-muted-foreground bg-secondary px-3 py-1 rounded-full">
              MERN Stack Developer
            </span>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4" />
              <span>9566420177</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" />
              <span>mkumar0802@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              <span>Chennai, India</span>
            </div>
            <Button variant="hero" size="sm">
              <Download className="h-4 w-4" />
              Resume
            </Button>
          </div>

          <div className="md:hidden">
            <Button variant="ghost" size="sm">
              Contact
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;