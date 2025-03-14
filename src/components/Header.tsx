
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "O nama", href: "#about" },
    { name: "Proizvodi", href: "#products" },
    { name: "Poljoprivreda", href: "#agriculture" },
    { name: "Gdje nas pronaći", href: "#find-us" },
    { name: "Budući planovi", href: "#future" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a 
          href="#" 
          className="flex items-center gap-2 text-dingo-green"
          aria-label="DINGO - Back to home"
        >
          <span className="text-2xl font-serif font-bold tracking-tight">DINGO</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-dingo-dark hover:text-dingo-green transition-colors relative group"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-dingo-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <Button 
            asChild 
            className="bg-dingo-green hover:bg-dingo-green/90 text-white font-medium"
          >
            <a href="#contact">Kontakt</a>
          </Button>
        </nav>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden text-dingo-dark p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 pt-20 px-6 transition-transform duration-300 ease-in-out md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <nav className="flex flex-col space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-medium text-dingo-dark hover:text-dingo-green transition-colors py-2 border-b border-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            asChild 
            className="bg-dingo-green hover:bg-dingo-green/90 text-white font-medium w-full"
          >
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontakt
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
