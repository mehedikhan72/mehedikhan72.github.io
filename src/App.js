import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import About from "./components/About";
import './index.css';
import 'boxicons/css/boxicons.min.css';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { useRef} from "react";

function App() {
  const about = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="App bg-[#323437] text-[#D1D0C5] min-h-screen">
      <NavBar scrollToSection={scrollToSection} aboutRef={about} skillsRef={skills} projectsRef={projects} contactRef={contact} />
      <Hero />
      <About aboutRef={about} />
      <Skills skillsRef={skills} />
      <Projects projectsRef={projects} />
      <Contact contactRef={contact} />
      <Footer />
    </div>
  );
}

export default App;
