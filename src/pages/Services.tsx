import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
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
  Lightbulb,
  Gift,
  Mic,
  Palette,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Complete wedding management from venue selection to the final farewell. We handle pre-wedding ceremonies, main wedding day, and post-wedding events with perfection.",
    features: ["Venue Selection", "Mandap Decoration", "Guest Management", "Mehendi & Sangeet", "Reception Planning"],
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Fun-filled birthday celebrations for all ages. From themed kids' parties to elegant adult celebrations, we create memories that last a lifetime.",
    features: ["Theme Setup", "Balloon Decoration", "Cake & Catering", "Games & Activities", "Return Gifts"],
  },
  {
    icon: PartyPopper,
    title: "Engagement Ceremonies",
    description: "Elegant engagement ceremonies that mark the beginning of a beautiful journey. We create intimate yet grand setups for this special occasion.",
    features: ["Ring Ceremony Setup", "Floral Arrangements", "Photography", "Catering", "Guest Seating"],
  },
  {
    icon: Users,
    title: "Corporate Events",
    description: "Professional corporate functions, conferences, product launches, and team celebrations. We ensure your business events reflect your brand perfectly.",
    features: ["Conference Setup", "Product Launches", "Team Building", "Award Ceremonies", "Business Dinners"],
  },
  {
    icon: Sparkles,
    title: "Decoration Services",
    description: "Stunning decorations that transform any venue into a magical space. Custom themes, stage setups, and ambient lighting to match your vision.",
    features: ["Stage Design", "Floral Décor", "Theme Setups", "Lighting Design", "Entrance Arches"],
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Delicious multi-cuisine menus prepared by expert chefs. From traditional to continental, we offer customized food experiences for all occasions.",
    features: ["Multi-Cuisine Menu", "Live Counters", "Dessert Stations", "Beverage Service", "Dietary Options"],
  },
  {
    icon: Camera,
    title: "Photography & Videography",
    description: "Professional photography and cinematic videography to capture every precious moment. Drone coverage and same-day edits available.",
    features: ["Candid Photography", "Cinematic Video", "Drone Coverage", "Same-Day Edits", "Photo Albums"],
  },
  {
    icon: Music,
    title: "Entertainment",
    description: "Complete entertainment solutions including DJ, live bands, dancers, and celebrity performances to keep your guests engaged and entertained.",
    features: ["Professional DJ", "Live Bands", "Dance Troupes", "Celebrity Acts", "Sound Systems"],
  },
  {
    icon: Palette,
    title: "Makeup & Styling",
    description: "Professional bridal and party makeup services. Our expert makeup artists ensure you look your absolute best on your special day.",
    features: ["Bridal Makeup", "Party Makeup", "Hair Styling", "Costume Draping", "Family Makeup"],
  },
  {
    icon: Lightbulb,
    title: "Lighting & Sound",
    description: "State-of-the-art lighting and sound systems to create the perfect ambiance. From soft romantic lighting to energetic party setups.",
    features: ["LED Lighting", "Mood Lighting", "Sound Systems", "Special Effects", "Dance Floors"],
  },
  {
    icon: Mic,
    title: "Anchoring & Hosting",
    description: "Professional anchors and MCs to keep your event running smoothly. From ceremonies to games, they ensure every moment is engaging.",
    features: ["Event Hosting", "Game Coordination", "Ceremony Anchoring", "Bilingual MCs", "Script Writing"],
  },
  {
    icon: Gift,
    title: "Invitations & Gifts",
    description: "Beautiful invitation cards and thoughtful return gifts that leave a lasting impression on your guests.",
    features: ["Custom Invitations", "Return Gifts", "Welcome Kits", "Trousseau Packing", "Gift Hampers"],
  },
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
     
      {/* Hero */}
      <section className="pt-32 pb-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Complete <span className="text-gold">A-to-Z</span> Event Solutions
            </h1>
            <p className="text-lg text-muted-foreground">
              From planning to execution, we offer comprehensive event management services 
              to make your celebrations truly memorable.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="group p-6 bg-card rounded-2xl border border-border hover:border-gold/50 hover:shadow-card transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold group-hover:scale-110 transition-all duration-300">
                  <service.icon className="w-7 h-7 text-gold group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/70">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-foreground text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
            Need a <span className="text-gold">Custom Service</span>?
          </h2>
          <p className="text-background/70 max-w-2xl mx-auto mb-8">
            Don't see what you're looking for? We offer customized solutions tailored to your specific needs. 
            Get in touch and let's create something special together.
          </p>
          <Button variant="hero" size="xl" asChild>
            <Link to="/contact" className="flex items-center gap-2">
              Contact Us
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Services;
