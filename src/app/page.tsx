import Navbar from "@/components/Navbar";
import NavItem from "@/components/NavItem";
import HomePage from "@/pages/HomePage";
import ExperiencePage from "../pages/ExperiencePage";

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
    </>
  );
}
