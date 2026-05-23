import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Rooms from "./components/Rooms.jsx";
import Amenities from "./components/Amenities.jsx";
import Gallery from "./components/Gallery.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Policy from "./components/Policy.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-cream text-ink">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Rooms />
        <Amenities />
        <Gallery />
        <Policy />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
