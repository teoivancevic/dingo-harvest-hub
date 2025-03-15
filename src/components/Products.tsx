
import { useState } from "react";
import { Wheat, Cherry, Popcorn, ShoppingCart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

type ProductCategoryType = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  items: {
    name: string;
    description: string;
    image: string;
  }[];
};

interface FlourGrainType {
  id: string;
  name: string;
  image: string;
}

interface FlourProcessType {
  id: string;
  name: string;
}

const Products = () => {
  const [selectedGrain, setSelectedGrain] = useState<string | null>(null);
  const [selectedProcessType, setSelectedProcessType] = useState<string | null>(null);

  const flourGrains: FlourGrainType[] = [
    {
      id: "pir",
      name: "Pirovo brašno",
      image: "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "psenica",
      name: "Pšenično brašno",
      image: "https://images.unsplash.com/photo-1551462147-ff29053bfc14?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "durum",
      name: "Durum brašno",
      image: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "kukuruz",
      name: "Kukuruzno brašno",
      image: "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "krupica",
      name: "Kukuruzna krupica (pura)",
      image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const flourProcessTypes: FlourProcessType[] = [
    { id: "glatko", name: "Glatko" },
    { id: "ostro", name: "Oštro" },
    { id: "krupica", name: "Krupica" },
    { id: "mekinje", name: "Mekinje" }
  ];

  const productCategories: ProductCategoryType[] = [
    {
      icon: Wheat,
      title: "Brašna",
      description: "Različiti tipovi brašna mljeveni na kamenom mlinu koji čuva hranjive tvari i prirodni okus žitarica.",
      items: []
    },
    {
      icon: Cherry,
      title: "Voćni proizvodi",
      description: "Džemovi i pekmezi od voća uzgojenog na našim plantažama, bez suvišnih aditiva i s punim okusom.",
      items: [
        {
          name: "Pekmez od šljiva",
          description: "Tradicionalni pekmez od šljiva s komadićima voća i bogatim okusom.",
          image: "https://images.unsplash.com/photo-1572635148818-ef6bdfba0233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "Džem od marelica",
          description: "Slatki džem od svježih marelica, idealan za doručak ili desert.",
          image: "https://images.unsplash.com/photo-1565454798804-62a4ed8e4d17?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "Džem od jabuka",
          description: "Aromatični džem od domaćih jabuka s dodatkom cimeta.",
          image: "https://images.unsplash.com/photo-1606859191214-25806e8e2423?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        }
      ]
    },
    {
      icon: Popcorn,
      title: "Kokice",
      description: "Kukuruz kokičar uzgojen na našim poljima, dostupan u različitim pakiranjima za pripremu kod kuće.",
      items: [
        {
          name: "Kokice za mikrovalnu",
          description: "Praktično pakiranje za brzu pripremu u mikrovalnoj pećnici.",
          image: "https://images.unsplash.com/photo-1578849278619-e73505e9610f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "Kokice za tavu",
          description: "Tradicionalna priprema kokica u tavi za najbolji okus.",
          image: "https://images.unsplash.com/photo-1512578000372-873c0107d6da?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        },
        {
          name: "Obiteljsko pakiranje",
          description: "Veće ekonomično pakiranje za ljubitelje kokica.",
          image: "https://images.unsplash.com/photo-1583053347305-6a46911663a4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
        }
      ]
    }
  ];

  const handleBuy = () => {
    window.open("https://webshop.dingo.hr", "_blank");
  };

  return (
    <section id="products" className="section-spacing bg-dingo-cream clip-section">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white text-dingo-green text-sm font-medium mb-4">
            Naši proizvodi
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-dingo-dark mb-6">
            Kvalitetni domaći proizvodi za vaš stol
          </h2>
          <p className="text-lg text-dingo-dark/80">
            Otkrijte našu ponudu visokokvalitetnih proizvoda izrađenih od sirovina uzgojenih na našim poljima u Slavoniji. Svaki proizvod nosi priču o tradiciji i kvaliteti.
          </p>
        </div>

        <div className="space-y-24">
          <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-4xl mx-auto">
              <div className="flex-shrink-0 w-16 h-16 bg-dingo-green/10 rounded-xl flex items-center justify-center">
                <Wheat className="w-8 h-8 text-dingo-green" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-semibold text-dingo-dark mb-3 text-center md:text-left">
                  Brašna
                </h3>
                <p className="text-lg text-dingo-dark/80 text-center md:text-left mb-8">
                  Različiti tipovi brašna mljeveni na kamenom mlinu koji čuva hranjive tvari i prirodni okus žitarica.
                </p>
                
                <div className="space-y-6 mt-4">
                  <div className="overflow-x-auto pb-4">
                    <ToggleGroup 
                      type="single" 
                      value={selectedGrain || ""} 
                      onValueChange={(value) => setSelectedGrain(value || null)}
                      className="inline-flex flex-nowrap gap-3 min-w-max"
                    >
                      {flourGrains.map((grain) => (
                        <ToggleGroupItem 
                          key={grain.id} 
                          value={grain.id} 
                          className={cn(
                            "flex items-center gap-2 border border-gray-200 rounded-full py-1 px-4 transition-all",
                            "data-[state=on]:bg-dingo-green data-[state=on]:text-white data-[state=on]:border-dingo-green",
                            "hover:border-dingo-green"
                          )}
                        >
                          <div className="w-6 h-6 rounded-full overflow-hidden flex-shrink-0">
                            <img 
                              src={grain.image} 
                              alt={grain.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <span className="text-sm whitespace-nowrap">{grain.name}</span>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                  <div className="overflow-x-auto pb-4">
                    <ToggleGroup 
                      type="single" 
                      value={selectedProcessType || ""} 
                      onValueChange={(value) => setSelectedProcessType(value || null)}
                      className="inline-flex flex-nowrap gap-3"
                    >
                      {flourProcessTypes.map((type) => (
                        <ToggleGroupItem 
                          key={type.id} 
                          value={type.id} 
                          className={cn(
                            "border border-gray-200 rounded-full py-1 px-4 transition-all",
                            "data-[state=on]:bg-dingo-green data-[state=on]:text-white data-[state=on]:border-dingo-green",
                            "hover:border-dingo-green"
                          )}
                        >
                          <span className="text-sm">{type.name}</span>
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </div>

                  {selectedGrain && selectedProcessType && (
                    <div className="animate-fadeIn">
                      <Button 
                        onClick={handleBuy}
                        className="bg-dingo-green hover:bg-dingo-green/90 text-white rounded-full"
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        Dodaj u košaricu
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {productCategories.slice(1).map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-12">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 max-w-4xl mx-auto">
                <div className="flex-shrink-0 w-16 h-16 bg-dingo-green/10 rounded-xl flex items-center justify-center">
                  <category.icon className="w-8 h-8 text-dingo-green" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif font-semibold text-dingo-dark mb-3 text-center md:text-left">
                    {category.title}
                  </h3>
                  <p className="text-lg text-dingo-dark/80 text-center md:text-left">
                    {category.description}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((product, productIndex) => (
                  <div 
                    key={productIndex} 
                    className={cn(
                      "bg-white rounded-xl overflow-hidden shadow-md product-card opacity-0 animate-slideUp",
                      "transition-all duration-300 hover:shadow-xl"
                    )}
                    style={{animationDelay: `${0.2 + productIndex * 0.1}s`}}
                  >
                    <div className="h-48 overflow-hidden">
                      <img 
                        src={product.image} 
                        alt={product.name} 
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <h4 className="text-xl font-serif font-semibold text-dingo-dark mb-2">
                        {product.name}
                      </h4>
                      <p className="text-dingo-dark/80">
                        {product.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
