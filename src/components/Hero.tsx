 import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 overflow-hidden relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-23 right-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="lg:w-2/5 space-y-6 animate-in slide-in-from-left duration-700">
            {/* Semi-transparent background for text */}
            <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg">
              <div className="inline-block px-4 py-2 text-sm rounded-full bg-primary/20 text-primary border border-primary/30 shadow-md">
                Full Stack Developer
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-md">
                <span className="block">Hi, I'm</span>
                <span className="block mt-2 text-white">
                  Zurkanaini Musah Yakubu
                </span>
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-xl drop-shadow-md">
                I build <span className="text-white font-medium">exceptional</span> and <span className="text-white font-medium">accessible</span> digital 
                experiences for the web, focused on creating clean, user-friendly applications.
              </p>
              <p className="text-md md:text-lg text-gray-400 italic drop-shadow-md">
                "Turning ideas into reality with modern web technologies."
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" className="rounded-full px-6 bg-gradient-to-r from-primary to-secondary text-white shadow-lg hover:shadow-xl hover:brightness-110 transition-all" asChild>
                  <a href="#contact">Get in touch</a>
                </Button>
                <Button variant="outline" size="lg" className="rounded-full px-6 border-gray-500 text-gray-600 hover:bg-gray-700 hover:text-white transition-colors shadow-md" asChild>
                  <a href="#projects">View my work</a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-2/5 relative animate-in slide-in-from-right duration-700">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Animated background circles */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-sm animate-pulse"></div>
              
              <div className="absolute inset-4 rounded-lg overflow-hidden bg-card border flex items-center justify-center shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
                <div className="relative z-10 text-center p-6">
                  <div className="w-36 h-36 md:w-48 md:h-48 rounded-lg bg-muted mx-auto flex items-center justify-center">
                    <img 
                      src="/myprofile.jpeg" 
                      alt="mypic" 
                      className="rounded-full w-full h-full object-cover" 
                    />
                  </div>
                  <p className="mt-10 text-gray-400">Software Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Down Indicator */}
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