
import { Store, ShoppingBag, Globe, MapPin, Facebook, Search, ExternalLink } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";

interface SalesChannel {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FindUs = () => {
  const salesChannels: SalesChannel[] = [
    {
      icon: ShoppingBag,
      title: "Webshop",
      description: "Posjetite naš webshop dingo.hr gdje možete naručiti sve naše proizvode s dostavom na vašu adresu."
    },
    {
      icon: Store,
      title: "Lokalne trgovine",
      description: "Naše proizvode možete pronaći u odabranim lokalnim trgovinama i na tržnicama diljem Hrvatske."
    },
    {
      icon: MapPin,
      title: "Online tržnice",
      description: "Dostupni smo na Njuškalu i Facebook Marketplace-u za jednostavnu kupovinu naših proizvoda."
    },
    {
      icon: Globe,
      title: "Širenje na EU tržište",
      description: "Uskoro planiramo širenje na tržište Europske unije, posebno u susjedne zemlje."
    }
  ];

  return (
    <section id="find-us" className="section-spacing bg-dingo-cream clip-section-reverse">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-white text-dingo-green text-sm font-medium mb-4">
            Gdje nas pronaći
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-dingo-dark mb-6">
            Kupite naše proizvode
          </h2>
          <p className="text-lg text-dingo-dark/80 mb-10">
            Naši proizvodi dostupni su kroz različite prodajne kanale. Odaberite onaj koji vam najviše odgovara i uživajte u kvalitetnim domaćim proizvodima.
          </p>

          {/* Online channels with buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Button 
              className="bg-dingo-green hover:bg-dingo-green/90 text-white w-full sm:w-auto flex gap-2"
              size="lg"
              onClick={() => window.open('https://dingo.hr', '_blank')}
            >
              <ShoppingBag size={20} />
              <span>Webshop</span>
              <ExternalLink size={16} className="ml-1" />
            </Button>
            
            <Button 
              className="bg-[#1877F2] hover:bg-[#1877F2]/90 text-white w-full sm:w-auto flex gap-2"
              size="lg"
              onClick={() => window.open('https://www.facebook.com/marketplace', '_blank')}
            >
              <Facebook size={20} />
              <span>Facebook Marketplace</span>
              <ExternalLink size={16} className="ml-1" />
            </Button>
            
            <Button 
              className="bg-[#FF5A00] hover:bg-[#FF5A00]/90 text-white w-full sm:w-auto flex gap-2"
              size="lg"
              onClick={() => window.open('https://www.njuskalo.hr', '_blank')}
            >
              <Search size={20} />
              <span>Njuškalo.hr</span>
              <ExternalLink size={16} className="ml-1" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {salesChannels.map((channel, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-white rounded-xl p-8 shadow-md opacity-0 animate-slideUp",
                "transition-all duration-300 hover:shadow-xl"
              )}
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-dingo-green/10 rounded-xl flex items-center justify-center mx-auto md:mx-0">
                  <channel.icon className="w-8 h-8 text-dingo-green" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-serif font-semibold text-dingo-dark mb-3">
                    {channel.title}
                  </h3>
                  <p className="text-dingo-dark/80">
                    {channel.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};

export default FindUs;
