
import { Wheat, Corn, Apple, Tractor, SeedingOutline } from "lucide-react";
import { cn } from "@/lib/utils";

interface CropInfo {
  icon: React.FC<{ className?: string; size?: number }>;
  name: string;
  description: string;
}

const SeedingOutline = ({ className, size = 24 }: { className?: string; size?: number }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M12 10a6 6 0 0 0-6-6c-3 0-5 2-5 5s2 5 5 5a6 6 0 0 0 6-6Z"/>
    <path d="M12 14a6 6 0 0 1 6-6c3 0 5 2 5 5s-2 5-5 5a6 6 0 0 1-6-6Z"/>
    <path d="M12 19a6 6 0 0 0 0-10"/>
  </svg>
);

const Agriculture = () => {
  const crops: CropInfo[] = [
    {
      icon: Wheat,
      name: "Pir",
      description: "Prastara žitarica visoke nutritivne vrijednosti koju uzgajamo na tradicionalan način za naša specijalna brašna."
    },
    {
      icon: Wheat,
      name: "Durum pšenica",
      description: "Posebna vrsta pšenice idealna za proizvodnju tjestenine i posebnih vrsta brašna."
    },
    {
      icon: SeedingOutline,
      name: "Grah",
      description: "Uzgajamo nekoliko sorti graha na naš tradicionalni način, pazeći na kvalitetu i okus."
    },
    {
      icon: Corn,
      name: "Kukuruz kokičar",
      description: "Posebna sorta kukuruza idealna za pripremu kokica, uzgojena bez primjene pesticida."
    },
    {
      icon: Apple,
      name: "Šljive",
      description: "Naše plantaže šljiva daju plodove izvrsne kvalitete za proizvodnju pekmeza i drugih proizvoda."
    }
  ];

  return (
    <section id="agriculture" className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content Column */}
          <div>
            <div className="space-y-6">
              <div className="inline-block px-3 py-1 rounded-full bg-dingo-cream text-dingo-green text-sm font-medium mb-4">
                Naša poljoprivreda
              </div>
              
              <h2 className="text-3xl md:text-4xl font-serif font-semibold text-dingo-dark mb-6">
                Održivi uzgoj na našim poljima
              </h2>
              
              <p className="text-lg text-dingo-dark/80 mb-8">
                Naša poljoprivredna proizvodnja temelji se na održivim principima, uz poštovanje prirode i tradicije. Uzgajamo razne kulture na našim poljima u srcu Slavonije, osiguravajući najbolje sirovine za naše proizvode.
              </p>

              <div className="space-y-8">
                {crops.map((crop, index) => (
                  <div 
                    key={index} 
                    className={cn(
                      "flex gap-4 opacity-0 animate-slideRight",
                      "transition-all duration-300"
                    )}
                    style={{animationDelay: `${0.2 + index * 0.1}s`}}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-dingo-green/10 rounded-lg flex items-center justify-center mt-1">
                      <crop.icon className="w-6 h-6 text-dingo-green" />
                    </div>
                    <div>
                      <h3 className="text-xl font-serif font-semibold text-dingo-dark mb-2">
                        {crop.name}
                      </h3>
                      <p className="text-dingo-dark/80">
                        {crop.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Image Column */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80" 
                alt="DINGO poljoprivredna proizvodnja" 
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-dingo-wheat/90 backdrop-blur-sm rounded-lg p-6 shadow-lg transform transition-transform duration-500 hover:translate-y-2">
              <Tractor className="text-dingo-green mb-3" size={32} />
              <h3 className="text-lg font-serif font-semibold text-dingo-dark mb-2">
                Vlastita proizvodnja
              </h3>
              <p className="text-sm text-dingo-dark/80">
                Kontroliramo cijeli proces od sjemena do gotovog proizvoda kako bismo osigurali najvišu kvalitetu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Agriculture;
