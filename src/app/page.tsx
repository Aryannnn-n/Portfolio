import { About } from "@/components/About";
import { Contact } from "@/components/Contact";
import { Education } from "@/components/Education";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { WorkExperience } from "@/components/WorkExperience";

export default function Page() {
  return (
    <>
      <Hero />
      <About />
      <WorkExperience />
      <Education />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
