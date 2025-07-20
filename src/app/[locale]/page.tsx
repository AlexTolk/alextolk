import Hero from '../../components/Hero';
import Projects from "../../components/Projects";
import Contact from "../../components/Contact";
import ResumeSection from '../../components/ResumeSection';

export default function HomePage() {
  return (
    <div>
      <Hero />
      <Projects />
      <Contact />
      <ResumeSection />
    </div>
  );
}
