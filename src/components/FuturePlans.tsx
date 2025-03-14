
import { PackagePlus, Handshake, TrendingUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface FuturePlan {
  icon: React.FC<{ className?: string; size?: number }>;
  title: string;
  description: string;
}

const FuturePlans = () => {
  const plans: FuturePlan[] = [
    {
      icon: PackagePlus,
      title: "Proširenje asortimana",
      description: "Planiramo proširiti našu ponudu proizvoda na sušeno voće, domaću tjesteninu i tradicionalne likere, sve uz zadržavanje naše filozofije korištenja vlastitih sirovina."
    },
    {
      icon: TrendingUp,
      title: "Rast proizvodnje",
      description: "Radimo na povećanju proizvodnih kapaciteta kako bismo mogli odgovoriti na rastuću potražnju za našim proizvodima, uz očuvanje kvalitete i autentičnosti."
    },
    {
      icon: Handshake,
      title: "Suradnja s partnerima",
      description: "Otvoreni smo za suradnju s partnerima koji dijele našu viziju kvalitetne domaće proizvodnje i koji mogu doprinijeti našem rastu i razvoju."
    }
  ];

  return (
    <section id="future" className="section-spacing bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-dingo-cream text-dingo-green text-sm font-medium mb-4">
            Budući planovi
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-semibold text-dingo-dark mb-6">
            Naša vizija razvoja
          </h2>
          <p className="text-lg text-dingo-dark/80">
            Iako smo u ranoj fazi poslovanja, imamo jasnu viziju kako želimo rasti i razvijati našu tvrtku u budućnosti, zadržavajući fokus na kvaliteti i autentičnosti.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={cn(
                "bg-dingo-cream rounded-xl p-8 opacity-0 animate-slideUp",
                "transition-all duration-300 hover:shadow-xl"
              )}
              style={{animationDelay: `${0.2 + index * 0.1}s`}}
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-dingo-green/10 rounded-full flex items-center justify-center mb-6">
                  <plan.icon className="w-8 h-8 text-dingo-green" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-dingo-dark mb-4">
                  {plan.title}
                </h3>
                <p className="text-dingo-dark/80">
                  {plan.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-dingo-green/10 to-dingo-wheat/20 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <h3 className="text-2xl font-serif font-semibold text-dingo-dark mb-4">
                Želite surađivati s nama?
              </h3>
              <p className="text-lg text-dingo-dark/80 mb-4">
                Ako ste zainteresirani za suradnju, bilo da ste trgovac, distributer ili potencijalni partner, javite nam se. Otvoreni smo za razne oblike suradnje koji mogu doprinijeti zajedničkom uspjehu.
              </p>
              <a 
                href="#contact" 
                className="inline-flex items-center text-dingo-green hover:text-dingo-green/80 font-medium"
              >
                Kontaktirajte nas <Handshake className="w-5 h-5 ml-2" />
              </a>
            </div>
            <div className="hidden lg:block">
              <img 
                src="https://images.unsplash.com/photo-1570586437263-ab629fccc818?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80" 
                alt="Suradnja s DINGO-m" 
                className="rounded-lg shadow-lg max-h-64 w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
