
import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-card border-t py-12  bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="text-2xl font-bold text-white">
              <span className="text-primary">Yakub</span>TECH
            </div>
            <p className="text-muted-foreground mt-2 max-w-sm text-white">
              Creating engaging digital experiences with clean, efficient code.
            </p>
          </div>
          
          <div className="flex flex-col md:flex-row items-center gap-6">
            <nav className="flex flex-wrap justify-center gap-6 text-white">
              <a href="#home" className="text-sm relative group hover:text-primary transition-colors">
                Home
                <span className="absolute left-0 bottom-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#about" className="text-sm relative group hover:text-primary transition-colors">
                About
                <span className="absolute left-0 bottom-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#skills" className="text-sm relative group hover:text-primary transition-colors">
                Skills
                <span className="absolute left-0 bottom-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#projects" className="text-sm relative group hover:text-primary transition-colors">
                Projects
                <span className="absolute left-0 bottom-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              <a href="#contact" className="text-sm relative group hover:text-primary transition-colors">
                Contact
                <span className="absolute left-0 bottom-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </a>
              
            </nav>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p className={cn(
            "flex items-center justify-center gap-1",
            "group"
          )}>
            Built  <Heart className="h-4 w-4 text-red-500 fill-red-500 group-hover:animate-pulse" /> by Zurkanaini Musah Yakubu © {currentYear}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
