import { Quote, Star } from "lucide-react";
import Image from "next/image";

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      location: "Mumbai",
      rating: 5,
      text: "Excellent service! I was able to consult with a specialist within minutes. The doctor was very professional and provided great advice.",
      avatar: "/placeholder.png",
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      location: "Delhi",
      rating: 5,
      text: "Dr Monk made it so easy to find the right doctor for my condition. The online consultation saved me time and money.",
      avatar: "/placeholder.png",
    },
    {
      id: 3,
      name: "Anita Patel",
      location: "Bangalore",
      rating: 5,
      text: "Great platform with verified doctors. I've been using it for my family's healthcare needs and it's been fantastic.",
      avatar: "/placeholder.png",
    },
  ];

  return (
    <section className="py-16 bg-blue-50 dark:bg-blue-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            What Our Patients Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Real stories from real patients who trust us with their health
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-border"
            >
              <div className="flex items-center mb-4">
                <Quote className="h-8 w-8 text-blue-600 dark:text-blue-400 mr-3" />
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>

              <p className="text-foreground mb-6 italic">{testimonial.text}</p>

              <div className="flex items-center">
                <Image
                  src={testimonial.avatar || "/placeholder.png"}
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />

                <div>
                  <h4 className="font-semibold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
