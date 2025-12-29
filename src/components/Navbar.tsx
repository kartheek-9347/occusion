import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

// 1. Import your logo file (ensure the path is correct for your project)
import logoImg from "@/assets/occusion_logo.png"; 

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Gallery", path: "/gallery" },
  { name: "Packages", path: "/packages" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo Section Updated */}
          {/* Logo Section */}
<Link to="/" className="flex items-center gap-3 group">
  {/* Logo Image */}
  <img 
    src={logoImg} 
    alt="Logo" 
    className="h-10 w-auto object-contain" 
  />

  <span className="text-xl font-heading font-bold flex">
    {"NAMEE VIBES".split("").map((letter, index) => {
      // Define a sequence of colors (Tailwind classes)
      const colors = [
        "text-gold", 
        "text-red-500", 
        "text-blue-500", 
        "text-green-500", 
        "text-purple-500", 
        "text-orange-500"
      ];
      
      // If it's a space, render a non-breaking space to keep the gap
      if (letter === " ") {
        return <span key={index}>&nbsp;</span>;
      }

      return (
        <span 
          key={index} 
          className={`${colors[index % colors.length]} transition-transform duration-300 group-hover:-translate-y-1`}
        >
          {letter}
        </span>
      );
    })}
  </span>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors duration-200 hover:text-gold ${
                  location.pathname === link.path
                    ? "text-gold"
                    : "text-foreground"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+1234567890" className="flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors">
              <Phone className="w-4 h-4" />
              <span className="font-medium">7659851659</span>
            </a>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Quote</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden bg-background/98 backdrop-blur-md border-t border-border animate-fade-up">
            <div className="py-4 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-4 py-3 font-medium transition-colors ${
                    location.pathname === link.path
                      ? "text-gold bg-gold/10"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-4">
                <Button variant="hero" size="lg" className="w-full" asChild>
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    Get Quote
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;