import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya & Rahul",
    event: "Wedding",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Our wedding was nothing short of magical! The team took care of every single detail. From the stunning mandap to the delicious food, everything was perfect. Highly recommended!",
  },
  {
    name: "Sarah Johnson",
    event: "Birthday Party",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "They planned my daughter's 5th birthday party and it was amazing! The unicorn theme was executed beautifully. All the kids had so much fun. Thank you for the memories!",
  },
  {
    name: "Amit Sharma",
    event: "Corporate Event",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "Professional, punctual, and perfect execution. Our annual company gala was a huge success thanks to their exceptional planning and attention to detail.",
  },
  {
    name: "Ananya & Vikram",
    event: "Engagement",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
    rating: 5,
    text: "The engagement ceremony was breathtaking! The floral decorations, lighting, and overall ambiance exceeded our expectations. Can't wait for them to plan our wedding!",
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
            Don't just take our word for it. Here's what our happy clients have to say about their experience with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
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
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover ring-2 ring-gold/20"
                />
                <div>
                  <h4 className="font-heading font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <span className="text-sm text-gold">{testimonial.event}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
