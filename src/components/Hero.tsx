
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Hero = () => {
  const scrollToProducts = () => {
    const productsSection = document.getElementById("products");
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent z-10"
          aria-hidden="true"
        />
        <div 
          className="w-full h-full bg-[url('https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center"
          aria-hidden="true"
        />
      </div>

      {/* Hero Content */}
      <div className="container relative z-20 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6 opacity-0 animate-fadeIn" style={{animationDelay: "0.3s"}}>
            DINGO - Hrvatski prehrambeni proizvodi iz srca Slavonije
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl mx-auto opacity-0 animate-fadeIn" style={{animationDelay: "0.6s"}}>
            Od vlastitih polja do vašeg stola - kvalitetni domaći proizvodi
          </p>
          
          <div className="opacity-0 animate-fadeIn" style={{animationDelay: "0.9s"}}>
            <Button 
              onClick={scrollToProducts}
              size="lg" 
              className="bg-dingo-green hover:bg-dingo-green/90 text-white font-medium px-8 py-6 text-lg rounded-md transition-all duration-300 transform hover:scale-105"
            >
              Istražite naše proizvode
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20 opacity-0 animate-fadeIn" style={{animationDelay: "1.2s"}}>
        <button 
          onClick={() => {
            const aboutSection = document.getElementById("about");
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="text-white flex flex-col items-center opacity-80 hover:opacity-100 transition-opacity"
          aria-label="Scroll down"
        >
          <span className="text-sm font-medium mb-2">Saznajte više</span>
          <ChevronDown className="animate-bounce" size={24} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
