import { CheckCircle, Award, Users, Clock, Heart, Shield } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "A-to-Z Services",
    description: "Complete event management from planning to execution, all under one roof.",
  },
  {
    icon: Award,
    title: "8+ Years Experience",
    description: "A decade of excellence in creating memorable celebrations.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Dedicated professionals committed to making your event perfect.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We ensure every detail is ready before your event begins.",
  },
  {
    icon: Heart,
    title: "Personalized Touch",
    description: "Custom themes and unique ideas tailored to your vision.",
  },
  {
    icon: Shield,
    title: "Trusted & Reliable",
    description: "500+ successful events with 100% client satisfaction.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 lg:py-32 bg-foreground text-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-gold/20 text-gold rounded-full text-sm font-medium mb-4">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
              Creating <span className="text-gold">Unforgettable</span> Memories
            </h2>
            <p className="text-background/70 leading-relaxed mb-8">
              With over a decade of experience in event management, we bring your dreams to life. 
              From intimate gatherings to grand celebrations, our dedicated team ensures every 
              detail is perfect, making your special day truly memorable.
            </p>
            <div className="flex items-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold">250+</div>
                <div className="text-sm text-background/60">Events Completed</div>
              </div>
              <div className="w-px h-12 bg-background/20" />
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold">100%</div>
                <div className="text-sm text-background/60">Client Satisfaction</div>
              </div>
              <div className="w-px h-12 bg-background/20" />
              <div className="text-center">
                <div className="text-4xl font-heading font-bold text-gold">30+</div>
                <div className="text-sm text-background/60">Team Members</div>
              </div>
            </div>
          </div>

          {/* Right Grid */}
          <div className="grid grid-cols-2 gap-4">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className="p-5 bg-background/5 rounded-xl border border-background/10 hover:border-gold/50 hover:bg-background/10 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center mb-3">
                  <feature.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-heading font-semibold text-background mb-1">
                  {feature.title}
                </h3>
                <p className="text-sm text-background/60 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
