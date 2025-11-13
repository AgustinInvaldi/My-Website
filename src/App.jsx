// src/App.jsx
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Teaching from "./components/Teaching";
import SkillsChart from "./components/SkillsChart";
import useScrollReveal from "./hooks/useScrollReveal";
import FXUltraLite from "./components/FXUltraLite";

export default function App() {
  useScrollReveal();

  return (
    <>
      <FXUltraLite />
      <Navbar />
      <Hero data-reveal />
      <About data-reveal />
      <Experience data-reveal />
      <Projects data-reveal />
      <Skills data-reveal />
      <SkillsChart data-reveal />
      <Teaching data-reveal />
      <Footer data-reveal />
    </>
  );
}
