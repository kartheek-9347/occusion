import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Play, Sparkles } from "lucide-react";

// Import your 3 images here
import heroBg1 from "@/assets/hero-bg.jpg"; 
import heroBg2 from "@/assets/hero-bg-2.png"; // Update paths as needed
import heroBg3 from "@/assets/hero-bg-3.png"; // Update paths as needed

const HeroSection = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroBg1, heroBg2, heroBg3];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Changes image every 5 seconds

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image Carousel */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            index === currentImageIndex ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${image})` }}
        />
      ))}
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-overlay" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gold/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-rose/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 ">
            {/* <Sparkles className="w-4 h-4 text-gold" />
            <span className="text-primary-foreground text-sm font-medium">A-to-Z Event Management</span> */}
           </div> 

          {/* Heading */}
          <h1 
            className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-primary-foreground leading-tight animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            Making Your{" "}
            <span className="text-gold">Celebrations</span>
            <br />
            Memorable
          </h1>

          {/* Subheading */}
          <p 
            className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed animate-fade-up"
            style={{ animationDelay: "0.2s" }}
          >
            From dream weddings to magical birthday parties, we craft unforgettable 
            experiences with complete event planning, stunning decorations, and flawless execution.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Book Your Event
              </Link>
            </Button>
            <Button variant="hero-outline" size="xl" asChild>
              <Link to="/gallery" className="flex items-center gap-2">
                <Play className="w-5 h-5" />
                View Gallery
              </Link>
            </Button>
          </div>

          {/* Stats */}
          <div 
            className="grid grid-cols-3 gap-8 pt-12 max-w-lg mx-auto animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {[
              { number: "250+", label: "Events" },
              { number: "8+", label: "Years" },
              { number: "100%", label: "Happy Clients" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl md:text-4xl font-heading font-bold text-gold">
                  {stat.number}
                </div>
                <div className="text-sm text-primary-foreground/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary-foreground/50 flex justify-center pt-2">
          <div className="w-1 h-3 bg-primary-foreground/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;