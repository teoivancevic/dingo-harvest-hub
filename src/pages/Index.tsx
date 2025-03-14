
import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Products from "@/components/Products";
import Agriculture from "@/components/Agriculture";
import FindUs from "@/components/FindUs";
import FuturePlans from "@/components/FuturePlans";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    // Intersection Observer for animation on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.1,
      }
    );

    // Observe all elements with the appear-element class
    document.querySelectorAll(".appear-element").forEach((element) => {
      observer.observe(element);
    });

    // Lazy load images with blur effect
    document.querySelectorAll(".blur-load").forEach((element) => {
      const img = element.querySelector("img");
      
      if (img) {
        function loaded() {
          element.classList.add("loaded");
        }
        
        if (img.complete) {
          loaded();
        } else {
          img.addEventListener("load", loaded);
        }
      }
    });

    return () => {
      // Clean up the observer
      document.querySelectorAll(".appear-element").forEach((element) => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <div className="overflow-hidden">
      <Header />
      <Hero />
      <AboutUs />
      <Products />
      <Agriculture />
      <FindUs />
      <FuturePlans />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
