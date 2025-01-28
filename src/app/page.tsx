import Navbar from "@/components/Navbar";
import NavItem from "@/components/NavItem";

export default function Home() {
  return (
    <>
      <Navbar>
        <NavItem label="Experience" />
        <NavItem label="Projects" />
        <NavItem label="Skills" />
        <NavItem label="Contact" />
      </Navbar>
    </>
  );
}
