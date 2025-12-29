import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Subhash",
    event: "Wedding",
    rating: 5,
    text: "I can say Namee Events is the best event organization company in Hyderabad. They well organized my brother wedding and reception events. We are very much happy with their services and affordable Price. Highly recommended!",
  },
  {
    name: "Kishore",
    event: "Half Saree Ceremony",
    rating: 5,
    text: "We approached Nameevibes Em for our daughter's Half Saree Ceremony. Ameena Garu executed the event very well. She first listened our requirements and suggested better ideas according to our budget. The organizer was too good and beyond our expectations. Our guests are impressed with the arrangements. Lifetime memorable event!",
  },
  {
    name: "Amit Sharma",
    event: "Corporate Event",
    rating: 5,
    text: "Professional, punctual, and perfect execution. Our annual company gala was a huge success thanks to their exceptional planning and attention to detail.",
  },
  {
    name: "Avinash",
    event: "Engagement",
    rating: 5,
    text: "All events of my family are very well managed by Nameevibes. The ideas suggested made decision-making easy. Value for money and highly recommended for family and corporate events.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4">
            What Our <span className="text-gold">Clients</span> Say
          </h2>
          <p className="text-muted-foreground">
            Don't just take our word for it. Here's what our happy clients have to say.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="p-6 lg:p-8 bg-card rounded-2xl border border-border hover:border-gold/30 hover:shadow-card transition-all duration-300 relative"
            >
              {/* Quote Icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/20" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Text */}
              <p className="text-foreground/80 leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <h4 className="font-heading font-semibold text-foreground">
                  {testimonial.name}
                </h4>
                <span className="text-sm text-gold">{testimonial.event}</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
