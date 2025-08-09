import "@/app/index.css";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import HealthArticles from "@/components/Home/HealthArticles";
import Testimonials from "@/components/Home/Testimonials";
import Hero from "@/components/Home/Hero";
import Footer from "@/components/Home/Footer";
import PopularSpecialities from "@/components/Home/PopularSpeciality";
export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen bg-background">
        <Hero />
        <PopularSpecialities />
        <WhyChooseUs />
        <HealthArticles />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
