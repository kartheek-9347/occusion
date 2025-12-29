import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, Star, Phone } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "₹50,000",
    description: "Perfect for intimate gatherings and small celebrations up to 50 guests",
    features: [
      "Event Planning & Coordination",
      "Basic Venue Decoration",
      "Sound System Setup",
      "Photography (4 hours)",
      "Basic Catering (50 guests)",
      "Welcome Board & Entrance",
      "Basic Lighting",
    ],
    notIncluded: ["Videography", "DJ Services", "Makeup", "Return Gifts"],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹1,50,000",
    description: "Ideal for weddings and large celebrations up to 150 guests",
    features: [
      "Complete Event Management",
      "Premium Theme Decoration",
      "Professional Lighting & Sound",
      "Photography + Videography (Full Day)",
      "Premium Multi-Cuisine Catering",
      "DJ & Entertainment (4 hours)",
      "Bridal/Groom Makeup & Styling",
      "Custom Invitations (100 pcs)",
      "Return Gifts for All Guests",
      "Photo Booth Setup",
      "Dedicated Event Coordinator",
    ],
    notIncluded: ["Drone Coverage", "Celebrity Performers"],
    popular: true,
  },
  {
    name: "Royal",
    price: "₹3,00,000",
    description: "Ultimate luxury package for grand celebrations up to 300 guests",
    features: [
      "Everything in Premium Package",
      "Luxury Theme Design & Setup",
      "Destination Event Planning",
      "Drone Photography & Videography",
      "Celebrity Anchors & Performers",
      "Luxury Multi-Cuisine Catering",
      "Live Band & Orchestra",
      "Premium Makeup for Family",
      "Designer Invitations (300 pcs)",
      "Luxury Return Gift Hampers",
      "Multiple Photo/Video Teams",
      "VIP Guest Management",
      "Complete Transportation",
      "After-Party Arrangements",
    ],
    notIncluded: [],
    popular: false,
  },
  {
    name: "Custom",
    price: "Contact Us",
    description: "Tailored package designed specifically for your unique requirements",
    features: [
      "Personalized Consultation",
      "Custom Budget Planning",
      "Mix & Match Services",
      "Flexible Guest Count",
      "Choose Your Vendors",
      "Custom Theme Development",
      "Dedicated Planning Team",
      "Pay-As-You-Go Options",
    ],
    notIncluded: [],
    popular: false,
    isCustom: true,
  },
];

const Packages = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Event <span className="text-gold">Packages</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose from our carefully crafted packages or let us create a custom plan that fits your budget and requirements perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`relative p-6 rounded-2xl border transition-all duration-300 ${
                  pkg.popular
                    ? "bg-foreground text-background border-gold shadow-xl"
                    : "bg-card border-border hover:border-gold/50 hover:shadow-card"
                }`}
              >
                {/* Popular Badge */}
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 bg-gold rounded-full flex items-center gap-1">
                    <Star className="w-4 h-4 fill-primary-foreground text-primary-foreground" />
                    <span className="text-sm font-semibold text-primary-foreground">Most Popular</span>
                  </div>
                )}

                {/* Header */}
                <h3 className={`text-xl font-heading font-bold mb-2 ${pkg.popular ? "text-gold" : "text-foreground"}`}>
                  {pkg.name}
                </h3>
                <p className={`text-sm mb-4 min-h-[40px] ${pkg.popular ? "text-background/70" : "text-muted-foreground"}`}>
                  {pkg.description}
                </p>

                {/* Price */}
                <div className="mb-6">
                  <span className={`text-3xl font-heading font-bold ${pkg.popular ? "text-background" : "text-foreground"}`}>
                    {pkg.price}
                  </span>
                  {!pkg.isCustom && (
                    <span className={`text-sm ${pkg.popular ? "text-background/60" : "text-muted-foreground"}`}> onwards</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className={`w-4 h-4 flex-shrink-0 mt-0.5 ${pkg.popular ? "text-gold" : "text-gold"}`} />
                      <span className={`text-sm ${pkg.popular ? "text-background/80" : "text-foreground/80"}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Not Included */}
                {pkg.notIncluded && pkg.notIncluded.length > 0 && (
                  <div className="mb-6 pt-4 border-t border-border/20">
                    <p className={`text-xs mb-2 ${pkg.popular ? "text-background/50" : "text-muted-foreground"}`}>
                      Available as add-ons:
                    </p>
                    <p className={`text-xs ${pkg.popular ? "text-background/50" : "text-muted-foreground"}`}>
                      {pkg.notIncluded.join(", ")}
                    </p>
                  </div>
                )}

                {/* CTA */}
                <Button
                  variant={pkg.popular ? "hero" : pkg.isCustom ? "gold" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">
                    {pkg.isCustom ? "Get Quote" : "Choose Plan"}
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Additional Info */}
      <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-heading font-bold text-foreground mb-6">
              Have Questions?
            </h2>
            <p className="text-muted-foreground mb-8">
              Our packages are flexible and can be customized to match your specific needs and budget. 
              Contact us for a free consultation and let's plan your perfect event together.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Free Consultation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+1234567890" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Packages;
