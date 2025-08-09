import { Award, Clock, Shield, Users } from "lucide-react";

function WhyChooseUs() {
  const features = [
    {
      icon: Shield,
      title: "Verified Doctors",
      description:
        "All our doctors are verified and have valid medical licenses",
      color: "text-green-500 dark:text-green-400",
    },
    {
      icon: Clock,
      title: "24/7 Available",
      description:
        "Get medical consultation anytime, anywhere with our 24/7 service",
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      icon: Users,
      title: "2M+ Happy Patients",
      description:
        "Join millions of satisfied patients who trust us with their health",
      color: "text-purple-500 dark:text-purple-400",
    },
    {
      icon: Award,
      title: "Best Quality Care",
      description: "Award-winning healthcare platform with top-rated doctors",
      color: "text-orange-500 dark:text-orange-400",
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Why Choose DrMonk?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We&apos;re committed to providing you with the best healthcare
            experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => {
            const IconComponent = feature.icon;
            return (
              <div key={feature.title} className="text-center">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background shadow-lg mb-6`}
                >
                  <IconComponent className={`h-8 w-8 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;
