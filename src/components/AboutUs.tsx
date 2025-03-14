
import { Sprout, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const AboutUs = () => {
  const benefits = [
    "Domaća proizvodnja",
    "Vlastite sirovine",
    "Tradicionalna prerada",
    "Visoka kvaliteta",
    "Bez suvišnih aditiva",
    "Podrška hrvatskim poljoprivrednicima"
  ];

  return (
    <section id="about" className="section-spacing bg-white overflow-hidden">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-xl transform rotate-1 transition-transform duration-500 hover:rotate-0">
                <img 
                  src="https://images.unsplash.com/photo-1589923188900-85dae523342b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" 
                  alt="DINGO poljoprivredna proizvodnja" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-dingo-wheat/90 backdrop-blur-sm rounded-lg p-6 shadow-lg max-w-xs transform transition-transform duration-500 hover:translate-y-2">
                <Sprout className="text-dingo-green mb-3" size={32} />
                <h3 className="text-lg font-serif font-semibold text-dingo-dark mb-2">
                  Od vlastitih polja
                </h3>
                <p className="text-sm text-dingo-dark/80">
                  Naši proizvodi kreću svoj put na našim poljima u srcu Slavonije, gdje s ljubavlju uzgajamo sirovine najviše kvalitete.
                </p>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <div className="space-y-6">
              <div 
                className="inline-block px-3 py-1 rounded-full bg-dingo-cream text-dingo-green text-sm font-medium mb-2"
              >
                O nama
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-dingo-dark mb-6">
                DINGO - Hrvatska poljoprivreda i prehrambeni proizvodi
              </h2>
              
              <p className="text-lg text-dingo-dark/80 mb-8">
                DINGO je mlada tvrtka s velikim ambicijama i iskustvom u poljoprivredi, posvećena proizvodnji visokokvalitetnih prehrambenih proizvoda od domaćih sirovina. Naša misija je doprinijeti zadržavanju repromaterijala u Hrvatskoj i stvarati dodanu vrijednost kroz kvalitetnu preradu.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex items-center space-x-3 opacity-0 animate-slideRight",
                      "transition-all duration-300"
                    )}
                    style={{animationDelay: `${0.2 + index * 0.1}s`}}
                  >
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-dingo-green/10 flex items-center justify-center">
                      <Check className="w-4 h-4 text-dingo-green" />
                    </div>
                    <span className="text-dingo-dark font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
