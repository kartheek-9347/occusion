import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Heart, Target, Eye, Users } from "lucide-react";

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20  to-neutral-900 text-white bg-ivory ">

        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Crafting <span className="text-gold">Unforgettable</span> Moments Since 2020
            </h1>
            <p className="text-lg text-muted-foreground">
              We are a passionate team of event planners dedicated to turning your dreams into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                Our <span className="text-gold">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded in 2020, Celebrations Events began with a simple vision – to transform 
                  ordinary gatherings into extraordinary experiences. What started as a small team 
                  of passionate event enthusiasts has grown into a full-service event management 
                  company trusted by hundreds of families and businesses.
                </p>
                <p>
                  Over the past decade, we have had the privilege of being part of more than 500 
                  celebrations, each unique and special in its own way. From intimate birthday 
                  parties to grand destination weddings, we bring the same level of dedication 
                  and attention to detail to every event.
                </p>
                <p>
                  Our A-to-Z approach means you can relax and enjoy your special day while we 
                  handle everything – from venue decoration and catering to photography and 
                  entertainment. We believe that every celebration deserves to be memorable, 
                  and we work tirelessly to make that happen.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=500&fit=crop" 
                    alt="Wedding decoration"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop" 
                    alt="Birthday celebration"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-square rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=400&h=400&fit=crop" 
                    alt="Event planning"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=400&h=500&fit=crop" 
                    alt="Corporate event"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Mission, Vision, Values */}
<section className="py-20 bg-ivory"> {/* Removed text-white here */}
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-3 gap-8">
      
      {/* Mission */}
      <div className="text-center p-8">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
          <Target className="w-8 h-8 text-gold" />
        </div>
        <h3 className="text-xl font-heading font-bold mb-4 text-gold">Our Mission</h3>
        <p className="text-black">
          To create exceptional events that exceed expectations, bringing joy and 
          unforgettable memories to every celebration we touch.
        </p>
      </div>

      {/* Vision */}
      <div className="text-center p-8">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
          <Eye className="w-8 h-8 text-gold" />
        </div>
        <h3 className="text-xl font-heading font-bold mb-4 text-gold">Our Vision</h3>
        <p className="text-black">
          To be the most trusted and beloved event management company, known for our 
          creativity, reliability, and commitment to excellence.
        </p>
      </div>

      {/* Values */}
      <div className="text-center p-8">
        <div className="w-16 h-16 rounded-full bg-gold/20 flex items-center justify-center mx-auto mb-6">
          <Heart className="w-8 h-8 text-gold" />
        </div>
        <h3 className="text-xl font-heading font-bold mb-4 text-gold">Our Values</h3>
        <p className="text-black">
          Passion, integrity, creativity, and client satisfaction are at the heart 
          of everything we do. Your happiness is our success.
        </p>
      </div>

    </div>
  </div>
</section>

      {/* Team */}
      {/* <section className="py-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Meet the <span className="text-gold">Experts</span>
            </h2>
            <p className="text-muted-foreground">
              Our dedicated team of professionals brings passion and expertise to every event.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { name: "Rajesh Kumar", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" },
              { name: "Priya Sharma", role: "Creative Director", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" },
              { name: "Amit Patel", role: "Operations Head", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" },
              { name: "Sneha Reddy", role: "Client Relations", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&h=300&fit=crop&crop=face" },
            ].map((member) => (
              <div key={member.name} className="text-center group">
                <div className="aspect-square rounded-2xl overflow-hidden mb-4">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-heading font-semibold text-foreground">{member.name}</h3>
                <p className="text-sm text-gold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default About;
