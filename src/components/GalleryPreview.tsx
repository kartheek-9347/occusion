import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import galleryWedding from "@/assets/gallery-wedding.jpg";
import galleryBirthday from "@/assets/gallery-birthday.jpg";
import galleryCorporate from "@/assets/gallery-corporate.jpg";
import galleryEngagement from "@/assets/gallery-engagement.jpg";

const galleryImages = [
  { src: galleryWedding, title: "Wedding Celebrations", category: "Wedding" },
  { src: galleryBirthday, title: "Birthday Parties", category: "Birthday" },
  { src: galleryCorporate, title: "Corporate Events", category: "Corporate" },
  { src: galleryEngagement, title: "Engagement Ceremonies", category: "Engagement" },
];

const GalleryPreview = () => {
  return (
    <section className="py-20 lg:py-32 bg-ivory">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-rose/10 text-rose rounded-full text-sm font-medium mb-4">
            Our Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            Event <span className="text-gold">Gallery</span>
          </h2>
          <p className="text-muted-foreground">
            Browse through our collection of beautifully executed events and get inspired for your special day.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.title}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
            >
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-gold font-medium">{image.category}</span>
                <h3 className="text-primary-foreground font-heading font-semibold">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="gold" size="lg" asChild>
            <Link to="/gallery" className="flex items-center gap-2">
              View Full Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GalleryPreview;
