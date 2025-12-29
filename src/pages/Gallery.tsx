import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryBirthday from "@/assets/gallery-birthday.jpg";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import galleryEngagement from "@/assets/gallery-engagement.jpg";

const categories = ["All", "Wedding", "Birthday", "Corporate", "Engagement", "Decoration"];

const galleryItems = [
  { src: galleryWedding, title: "Royal Wedding Setup", category: "Wedding" },
  { src: galleryBirthday, title: "Kids Birthday Party", category: "Birthday" },
  { src: galleryCorporate, title: "Corporate Gala", category: "Corporate" },
  { src: galleryEngagement, title: "Romantic Engagement", category: "Engagement" },
  { src: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&h=600&fit=crop", title: "Floral Mandap", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&h=600&fit=crop", title: "Balloon Decoration", category: "Birthday" },
  { src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=600&fit=crop", title: "Stage Decoration", category: "Decoration" },
  { src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=600&h=600&fit=crop", title: "Corporate Meeting", category: "Corporate" },
  { src: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&h=600&fit=crop", title: "Beach Wedding", category: "Wedding" },
  { src: "https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&h=600&fit=crop", title: "Carnival Theme", category: "Birthday" },
  { src: "https://images.unsplash.com/photo-1478146059778-58e4a94c6e9c?w=600&h=600&fit=crop", title: "Light Decoration", category: "Decoration" },
  { src: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=600&h=600&fit=crop", title: "Conference Setup", category: "Corporate" },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems = activeCategory === "All" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero */}
      <section className="pt-32 pb-20 bg-ivory">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
              Our Work
            </span>
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-6">
              Event <span className="text-gold">Gallery</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Browse through our portfolio of beautifully executed events and get inspired for your special occasion.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Gallery */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-gold text-primary-foreground shadow-soft"
                    : "bg-card border border-border text-foreground hover:border-gold/50"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map((item, index) => (
              <div
                key={`${item.title}-${index}`}
                className="group relative aspect-square rounded-xl overflow-hidden cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <span className="text-xs text-gold font-medium">{item.category}</span>
                  <h3 className="text-primary-foreground font-heading font-semibold">{item.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </main>
  );
};

export default Gallery;
