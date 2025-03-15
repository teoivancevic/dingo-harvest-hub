import { Store, ShoppingBag, Globe, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
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
          <p className="text-lg text-dingo-dark/80">
            Naši proizvodi dostupni su kroz različite prodajne kanale. Odaberite onaj koji vam najviše odgovara i uživajte u kvalitetnim domaćim proizvodima.
          </p>
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
