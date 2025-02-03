import ExperiencePage from "@/pages/ExperiencePage";
import SkillsPage from "@/pages/SkillsPage";
import NavItem from "@/components/NavItem";
import Navbar from "@/components/Navbar";
import HomePage from "@/pages/HomePage";

export default function Home() {
  return (
    <>
      <Navbar>
        <NavItem id="experience" label="Experience" />
        <NavItem id="projects" label="Projects" />
        <NavItem id="skills" label="Skills" />
        <NavItem id="contact" label="Contact" />
      </Navbar>
      <HomePage />
      <ExperiencePage />
      <SkillsPage />
    </>
  );
}
