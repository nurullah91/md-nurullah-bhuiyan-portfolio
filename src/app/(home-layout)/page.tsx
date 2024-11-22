import About from "@/components/Home/Sections/About";
import Contact from "@/components/Home/Sections/Contact";
import Intro from "@/components/Home/Sections/Intro";
import Projects from "@/components/Home/Sections/Projects";
import Skills from "@/components/Home/Sections/Skills";
export default function Home() {
  return (
    <div>
      <Intro />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
