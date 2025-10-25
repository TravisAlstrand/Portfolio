import { Toaster } from "@/components/ui/sonner";
import Hero from "../Sections/Hero";
import AboutMe from "../Sections/AboutMe";
import Projects from "../Sections/Projects";
import Contact from "../Sections/Contact";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
      <Toaster />
    </main>
  );
};

export default HomePage;
