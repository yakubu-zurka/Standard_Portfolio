
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/80 backdrop-blur-sm" 
    )}>
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-primary">Dev</span>Portfolio
        </div>
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md hover:bg-muted transition-colors"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b shadow-lg py-4 animate-in slide-in-from-top duration-300">
                <nav className="flex flex-col space-y-4 px-4">
                  <a href="#home" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Home</a>
                  <a href="#about" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>About</a>
                  <a href="#skills" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Skills</a>
                  <a href="#projects" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Projects</a>
                  <a href="#contact" className="py-2 hover:text-primary transition-colors" onClick={toggleMenu}>Contact</a>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex space-x-8">
            <a href="#home" className="relative group py-2">
              <span className="hover:text-primary transition-colors">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#about" className="relative group py-2">
              <span className="hover:text-primary transition-colors">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#skills" className="relative group py-2">
              <span className="hover:text-primary transition-colors">Skills</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#projects" className="relative group py-2">
              <span className="hover:text-primary transition-colors">Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="relative group py-2">
              <span className="hover:text-primary transition-colors">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
