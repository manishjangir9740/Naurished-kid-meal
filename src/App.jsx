import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import MealBuilder from "./components/sections/MealBuilder";
import AgeGroupsMenu from "./components/sections/AgeGroupsMenu";
import Benefits from "./components/sections/Benefits";
import PricingPlans from "./components/sections/PricingPlans";
import Testimonials from "./components/sections/Testimonials";
import FAQ from "./components/sections/FAQ";
import Contact from "./components/sections/Contact";
import Footer from "./components/ui/Footer";
import FloatingFood from "./components/ui/FloatingFood";

export default function App() {
  return (
    <>
        <FloatingFood />
        <Navbar />
        <Hero />
        <MealBuilder />
        <AgeGroupsMenu />
        <Benefits />
        <PricingPlans />
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      
    </>
  );
}
