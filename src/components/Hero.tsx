
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden relative">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 space-y-6 animate-in slide-in-from-left duration-700">
            <div className="inline-block px-3 py-1 text-sm rounded-full bg-primary/10 text-primary border border-primary/20">
              Full Stack Developer
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              <span className="block">Hi, I'm</span>
              <span className="text-primary block mt-2">John Doe</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              I build <span className="text-foreground font-medium">exceptional</span> and <span className="text-foreground font-medium">accessible</span> digital 
              experiences for the web, focused on creating clean, user-friendly applications.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full px-6" asChild>
                <a href="#contact">Get in touch</a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-6" asChild>
                <a href="#projects">View my work</a>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-2/5 relative animate-in slide-in-from-right duration-700">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-sm animate-pulse"></div>
              
              <div className="absolute inset-4 rounded-full overflow-hidden bg-card border flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="w-36 h-36 md:w-48 md:h-48 rounded-full bg-muted mx-auto flex items-center justify-center">
                    <p className="text-lg font-medium">Your Photo</p>
                  </div>
                  <p className="mt-4 text-muted-foreground">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
          <a 
            href="#about" 
            aria-label="Scroll to About section"
            className={cn(
              "flex items-center justify-center w-10 h-10 rounded-full",
              "bg-primary/10 hover:bg-primary/20 transition-colors"
            )}
          >
            <ArrowDown className="text-primary" size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
