// import components
import Hero from "./components/Hero";
import Navbar from "./Layouts/Navbar";
import Skills from "./components/Skills";
import Service from "./components/Services";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import { useEffect } from "react";
// Animation package
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init({
      duration: 1800,
      offset: 100,
      disable: "mobile",
    });
  }, []);
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Service />
      <Skills />
      <Testimonials />
      <Projects />
      <footer className="p-3 text-center">
        <h6 className="mb-3">Aldo Wiranata</h6>
        <p>codeaprogram © All CopyRights Reserved 2025</p>
      </footer>
    </div>
  );
};

export default App;
