import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Heart, 
  Cake, 
  Camera, 
  Utensils, 
  Music, 
  Sparkles,
  PartyPopper,
  Users,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Complete wedding management from venue selection to the final farewell. We make your dream wedding a reality.",
    color: "text-rose",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Fun-filled birthday celebrations with themed decorations, entertainment, and memorable moments.",
    color: "text-gold",
  },
  {
    icon: PartyPopper,
    title: "Engagement & Reception",
    description: "Elegant engagement ceremonies and reception parties with stunning setups and arrangements.",
    color: "text-rose",
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Professional corporate functions, conferences, and team celebrations organized flawlessly.",
    color: "text-gold",
  },
  {
    icon: Sparkles,
    title: "Decoration & Themes",
    description: "Creative themes, stunning stage setups, floral arrangements, and ambient lighting.",
    color: "text-rose",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Delicious multi-cuisine menus, live counters, and customized food experiences.",
    color: "text-gold",
  },
  {
    icon: Camera,
    title: "Photography & Video",
    description: "Professional photography, cinematic videography, and drone coverage to capture every moment.",
    color: "text-rose",
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "DJ, live bands, anchors, dancers, and complete entertainment arrangements.",
    color: "text-gold",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Our Premium <span className="text-gold">Services</span>
          </h2>
          <p className="text-muted-foreground">
            From planning to execution, we provide comprehensive event management services 
            to make your special occasions truly memorable.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group p-6 bg-card rounded-2xl border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color} group-hover:text-primary-foreground transition-colors`} />
              </div>
              <h3 className="text-lg font-heading font-semibold text-foreground mb-2">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" asChild>
            <Link to="/services" className="flex items-center gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
