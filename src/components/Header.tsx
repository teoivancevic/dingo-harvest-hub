
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useIsMobile();

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
    { name: "Uzgoj", href: "#agriculture" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full px-4",
        isScrolled 
          ? "py-3" 
          : "py-5",
        !isMobile && "flex justify-center items-center"
      )}
    >
      <div 
        className={cn(
          "container mx-auto flex items-center justify-between",
          !isMobile && "bg-white/95 backdrop-blur-md shadow-md rounded-full px-8 py-4 max-w-5xl"
        )}
      >
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
            className="bg-dingo-green hover:bg-dingo-green/90 text-white font-medium px-6 rounded-full"
          >
            <a href="https://dingo.hr" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <span>Webshop</span>
              <ShoppingCart size={16} />
            </a>
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
            className="bg-dingo-green hover:bg-dingo-green/90 text-white font-medium w-full flex items-center justify-center gap-2"
          >
            <a 
              href="https://dingo.hr"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
            >
              <span>Webshop</span>
              <ShoppingCart size={16} />
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
