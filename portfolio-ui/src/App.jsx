import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Reveal from "./components/Reveal";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Navbar />

      <Reveal>
        <Hero />
      </Reveal>

      <Reveal>
        <About />
      </Reveal>

      <Reveal>
        <Skills />
      </Reveal>

      <Reveal>
        <Experience />
      </Reveal>

      <Reveal>
        <Projects />
      </Reveal>

      <Reveal>
        <Education />
      </Reveal>

      <Reveal>
        <Contact />
      </Reveal>

      <Reveal>
        <Footer />
      </Reveal>
    </div>
  );
}

export default App;