import Hero from "../components/Hero";
import NavBar from "../components/NavBar";
import About from "../components/About";
import '../index.css';
import 'boxicons/css/boxicons.min.css';
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { useRef } from "react";
import Experience from "../components/Experience";
import AwardAndAchievements from "../components/AwardAndAchievements";

function SectionDivider() {
  return <div className="h-1 w-full bg-primary/30 mx-auto my-8" />;
}

function HomePage() {
  const about = useRef(null);
  const experience = useRef(null);
  const skills = useRef(null);
  const projects = useRef(null);
  const contact = useRef(null);
  const awards = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth"
    })
  }

  return (
    <div className="App text-primary bg-secondary min-h-screen">
      <NavBar scrollToSection={scrollToSection} aboutRef={about} experienceRef={experience} skillsRef={skills} projectsRef={projects} contactRef={contact} />
      <Hero />
      <About aboutRef={about} />
      <Experience experienceRef={experience}/>
      <SectionDivider />
      <AwardAndAchievements awardsRef={awards} />
      <SectionDivider />
      <Skills skillsRef={skills} />
      <SectionDivider />
      <Projects projectsRef={projects} />
      <SectionDivider />
      <Contact contactRef={contact} />
      <Footer />
    </div>
  );
}

export default HomePage;
