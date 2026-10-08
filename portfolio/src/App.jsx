import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Achievement from "./components/Achievement";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-surface text-ink antialiased">
      <Navbar />
      <main id="main-content" className="marginalia-container">
        <Hero />
        <About />
        <Skills />
        <Achievement />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
