
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="lg:w-1/2">
            <p className="text-primary mb-2">Hello, I'm</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              John Doe
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              Full Stack Developer
            </h2>
            <p className="text-lg mb-8 max-w-xl">
              I build exceptional and accessible digital experiences for the web.
              Focused on creating clean, user-friendly applications with modern technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" asChild>
                <a href="#projects">View my work</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative">
            <div className="w-64 h-64 md:w-80 md:h-80 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full overflow-hidden flex items-center justify-center">
              <div className="absolute inset-4 bg-card rounded-full flex items-center justify-center">
                <p className="text-lg font-medium">Your Photo Here</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll to About section">
            <ArrowDown className="text-primary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
