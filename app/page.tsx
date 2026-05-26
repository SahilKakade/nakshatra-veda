import Header from "../components/Header";

import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Amenities from "../components/sections/Amenities";
import Configuration from "../components/sections/Configuration";
import Gallery from "../components/sections/Gallery";
import Proximity from "../components/sections/Proximity";
import Connectivity from "../components/sections/Connectivity";
import FloorPlans from "../components/sections/FloorPlans";
import ContactSection from "../components/sections/ContactSection";
import Footer from "../components/sections/Footer";

export default function HomePage() {
  return (
    <main className="bg-black text-white overflow-hidden">

      <Header />

      <Hero />

      <About />

      <Amenities />

      <Configuration />

      <Gallery />

      <Proximity />

      <Connectivity />

      <FloorPlans />

      <ContactSection />

      <Footer />

    </main>
  );
}