import "@/app/index.css";
import PopularSpecialties from "@/components/Home/PopularSpeciality";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import HealthArticles from "@/components/Home/HealthArticles";
import Testimonials from "@/components/Home/Testimonials";
import Hero from "@/components/Home/Hero";
import Footer from "@/components/Home/Footer";
export default function Home() {
  return (
    <div className="">
      <div className="min-h-screen bg-background">
        <Hero />
        <PopularSpecialties />
        <WhyChooseUs />
        <HealthArticles />
        <Testimonials />
        <Footer />
      </div>
    </div>
  );
}
