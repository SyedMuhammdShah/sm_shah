import "./index.css";
import ParticleCanvas    from "./components/ParticleCanvas";
import Navbar            from "./components/Navbar";
import Hero              from "./components/Hero";
import About             from "./components/About";
import Skills            from "./components/Skills";
import Projects          from "./components/Projects";
import Experience        from "./components/Experience";
import { Education, Contact, Footer } from "./components/BottomSections";

export default function App() {
  return (
    <>
      {/* Fixed background particle canvas */}
      <ParticleCanvas />

      {/* Fixed navigation */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
