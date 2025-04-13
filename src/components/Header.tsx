
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useIsMobile();
  
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  
  return (
    <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-primary">Dev</span>Portfolio
        </div>
        
        {isMobile ? (
          <>
            <button 
              onClick={toggleMenu} 
              className="p-2 rounded-md hover:bg-muted"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            
            {isMenuOpen && (
              <div className="absolute top-16 left-0 w-full bg-background border-b shadow-lg py-4">
                <nav className="flex flex-col space-y-4 px-4">
                  <a href="#home" className="py-2 hover:text-primary" onClick={toggleMenu}>Home</a>
                  <a href="#about" className="py-2 hover:text-primary" onClick={toggleMenu}>About</a>
                  <a href="#skills" className="py-2 hover:text-primary" onClick={toggleMenu}>Skills</a>
                  <a href="#projects" className="py-2 hover:text-primary" onClick={toggleMenu}>Projects</a>
                  <a href="#contact" className="py-2 hover:text-primary" onClick={toggleMenu}>Contact</a>
                </nav>
              </div>
            )}
          </>
        ) : (
          <nav className="flex space-x-8">
            <a href="#home" className="hover:text-primary transition-colors">Home</a>
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
