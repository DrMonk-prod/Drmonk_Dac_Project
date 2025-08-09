import SearchDoctor from "@/components/SearchDoctor";
import Image from "next/image";

function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-950/20 dark:to-indigo-950/20 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Content */}
          <div className="col-span-8">
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Skip the <span className="">Queue</span>!
              <br />
              <span className="text-blue-600 dark:text-blue-400">
                Find Online
              </span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find trusted doctors and clinics in your city. Book visits with
              ease.
            </p>

            {/* Search Section */}
            <SearchDoctor />
            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-14">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">5k+</div>
                <div className="text-sm text-muted-foreground">
                  Happy Patients
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">250+</div>
                <div className="text-sm text-muted-foreground">Doctors</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">700+</div>
                <div className="text-sm text-muted-foreground">Hospitals</div>
              </div>
            </div>
          </div>

          {/* Right Content - Hero Image */}
          <div className="hidden lg:inline-block relative col-span-4 w-full h-full">
            <Image
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/background/hero.webp"
              alt="Doctor consultation"
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
