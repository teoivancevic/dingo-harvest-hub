
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";

const Footer = () => {
  const socialLinks = [
    { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
    { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" }
  ];

  const footerLinks = [
    {
      title: "Proizvodi",
      links: [
        { label: "Brašna", href: "#products" },
        { label: "Voćni proizvodi", href: "#products" },
        { label: "Kokice", href: "#products" }
      ]
    },
    {
      title: "Tvrtka",
      links: [
        { label: "O nama", href: "#about" },
        { label: "Uzgoj", href: "#agriculture" },
        { label: "Budući planovi", href: "#future" }
      ]
    },
    {
      title: "Informacije",
      links: [
        { label: "Gdje nas pronaći", href: "#find-us" },
        { label: "Kontakt", href: "#contact" },
        { label: "Webshop", href: "https://dingo.hr" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "info@dingo.hr",
      link: "mailto:info@dingo.hr"
    },
    {
      icon: Phone,
      title: "Telefon",
      details: "+385 1 234 5678",
      link: "tel:+38512345678"
    },
    {
      icon: MapPin,
      title: "Adresa",
      details: "Slavonska ulica 123, Osijek, Hrvatska",
      link: "https://maps.google.com/?q=Osijek,Croatia"
    }
  ];

  return (
    <footer className="bg-dingo-dark text-white">
      <div className="container mx-auto container-padding py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-6" aria-label="DINGO - Back to home">
              <span className="text-3xl font-serif font-bold tracking-tight">DINGO</span>
            </a>
            <p className="text-white/80 mb-6 max-w-md">
              Hrvatska tvrtka posvećena proizvodnji visokokvalitetnih prehrambenih proizvoda od domaćih sirovina. Naša misija je doprinijeti zadržavanju repromaterijala u Hrvatskoj.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-4 mb-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3">
                  <info.icon className="w-5 h-5 text-dingo-wheat" />
                  <a 
                    href={info.link} 
                    className="text-white/80 hover:text-white transition-colors"
                    target={info.icon === MapPin ? "_blank" : undefined}
                    rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
                  >
                    {info.details}
                  </a>
                </div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-serif font-semibold mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <hr className="border-white/10 my-10" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-white/60 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} DINGO. Sva prava pridržana.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Politika privatnosti
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Uvjeti korištenja
            </a>
            <a href="#" className="text-white/60 text-sm hover:text-white transition-colors">
              Kolačići
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
