import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight, Star } from "lucide-react";

const packages = [
  {
    name: "Essential",
    price: "₹50,000",
    description: "Perfect for intimate gatherings and small celebrations",
    features: [
      "Event Planning & Coordination",
      "Basic Venue Decoration",
      "Sound System Setup",
      "Photography (4 hours)",
      "Basic Catering (50 guests)",
    ],
    popular: false,
  },
  {
    name: "Premium",
    price: "₹1,50,000",
    description: "Ideal for weddings and large celebrations",
    features: [
      "Complete Event Management",
      "Premium Theme Decoration",
      "Lighting & Sound Setup",
      "Photography + Videography",
      "Premium Catering (150 guests)",
      "DJ & Entertainment",
      "Makeup & Styling",
      "Return Gifts",
    ],
    popular: true,
  },
  {
    name: "Royal",
    price: "₹3,00,000",
    description: "Ultimate luxury for grand celebrations",
    features: [
      "Everything in Premium",
      "Destination Wedding Planning",
      "Celebrity Anchors & Performers",
      "Drone Photography",
      "Luxury Catering (300+ guests)",
      "Custom Theme Design",
      "Live Band & Orchestra",
      "Complete Guest Management",
      "VIP Arrangements",
    ],
    popular: false,
  },
];

const PackagesPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-ivory">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Event <span className="text-gold">Packages</span>
          </h2>
          <p className="text-muted-foreground">
            Choose the perfect package for your celebration or let us create a custom plan tailored to your needs.
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative p-6 lg:p-8 rounded-2xl border transition-all duration-300 ${
                pkg.popular
                  ? "bg-foreground text-background border-gold scale-105 shadow-xl"
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

              {/* Package Name */}
              <h3 className={`text-xl font-heading font-bold mb-2 ${pkg.popular ? "text-gold" : "text-foreground"}`}>
                {pkg.name}
              </h3>
              <p className={`text-sm mb-4 ${pkg.popular ? "text-background/70" : "text-muted-foreground"}`}>
                {pkg.description}
              </p>

              {/* Price */}
              <div className="mb-6">
                <span className={`text-3xl font-heading font-bold ${pkg.popular ? "text-background" : "text-foreground"}`}>
                  {pkg.price}
                </span>
                <span className={`text-sm ${pkg.popular ? "text-background/60" : "text-muted-foreground"}`}> onwards</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <Check className={`w-5 h-5 flex-shrink-0 ${pkg.popular ? "text-gold" : "text-gold"}`} />
                    <span className={`text-sm ${pkg.popular ? "text-background/80" : "text-foreground/80"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Button
                variant={pkg.popular ? "hero" : "outline"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Custom Package CTA */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Need a custom package? We'll create one that fits your budget and requirements.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Request Custom Quote
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PackagesPreview;
