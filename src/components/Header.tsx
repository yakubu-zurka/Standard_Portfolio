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
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm"
          : "bg-background/80 backdrop-blur-sm"
      )}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold">
          <span className="text-primary">Yakub</span>TECH
        </div>

        {/* Navbar Links */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#home" className="text-lg font-medium hover:text-primary transition-colors">
            Home
          </a>
          <a href="#projects" className="text-lg font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="text-lg font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#contact" className="text-lg font-medium hover:text-primary transition-colors">
            Contact
          </a>
        </nav>

        {/* Resume Button */}
        <div className="hidden md:block">
          <a
            href="/resume.pdf" // Path to your resume file in the public folder
            download="Yakubu_Musah_Resume.pdf" // Optional: Specify the download file name
            className="px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-all"
          >
            Download Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden p-2 rounded-md hover:bg-primary/10 transition-all"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-background shadow-md md:hidden">
            <nav className="flex flex-col items-center gap-4 py-4">
              <a
                href="#home"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Home
              </a>
              <a
                href="#projects"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Projects
              </a>
              <a
                href="#skills"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Skills
              </a>
              <a
                href="#contact"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <a
                href="/resume.pdf"
                download="Yakubu_Musah_Resume.pdf"
                className="px-4 py-2 bg-primary text-white rounded-md shadow hover:bg-primary/90 transition-all"
                onClick={toggleMenu}
              >
                Download Resume
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
