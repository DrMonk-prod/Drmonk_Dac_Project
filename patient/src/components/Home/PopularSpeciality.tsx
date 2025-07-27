import {
  Heart,
  Brain,
  Eye,
  Baby,
  Bone,
  Stethoscope,
  Pill,
  Activity,
} from "lucide-react";

function PopularSpecialties() {
  const specialties = [
    {
      name: "Cardiology",
      icon: Heart,
      patients: "2.5K+",
      color: "text-red-500 dark:text-red-400",
    },
    {
      name: "Neurology",
      icon: Brain,
      patients: "1.8K+",
      color: "text-purple-500 dark:text-purple-400",
    },
    {
      name: "Ophthalmology",
      icon: Eye,
      patients: "3.2K+",
      color: "text-blue-500 dark:text-blue-400",
    },
    {
      name: "Pediatrics",
      icon: Baby,
      patients: "4.1K+",
      color: "text-pink-500 dark:text-pink-400",
    },
    {
      name: "Orthopedics",
      icon: Bone,
      patients: "2.9K+",
      color: "text-orange-500 dark:text-orange-400",
    },
    {
      name: "General Medicine",
      icon: Stethoscope,
      patients: "5.6K+",
      color: "text-green-500 dark:text-green-400",
    },
    {
      name: "Dermatology",
      icon: Pill,
      patients: "2.1K+",
      color: "text-yellow-500 dark:text-yellow-400",
    },
    {
      name: "Psychiatry",
      icon: Activity,
      patients: "1.5K+",
      color: "text-indigo-500 dark:text-indigo-400",
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            25+ Specialities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Consult with top doctors across a range of specialities
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {specialties.map((specialty) => {
            const IconComponent = specialty.icon;
            return (
              <div
                key={specialty.name}
                className="group bg-card border border-border rounded-xl p-6 hover:shadow-lg hover:border-blue-200 dark:hover:border-blue-800 transition-all duration-300 cursor-pointer"
              >
                <div className="text-center">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-muted group-hover:bg-blue-50 dark:group-hover:bg-blue-950/50 transition-colors mb-4`}
                  >
                    <IconComponent className={`h-8 w-8 ${specialty.color}`} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">
                    {specialty.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {specialty.patients} patients treated
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-8">
          <button className="text-blue-600 dark:text-blue-400 font-semibold hover:text-blue-700 dark:hover:text-blue-300 transition-colors">
            View All Specialities →
          </button>
        </div>
      </div>
    </section>
  );
}

export default PopularSpecialties;
