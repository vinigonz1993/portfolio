import About from "./sections/About";
import Experience from "./sections/Experience";
import Navbar from "./components/Navbar";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}

export default App;