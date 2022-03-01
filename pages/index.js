import Navbar from "../components/Navbar"
import useDarkMode from "../hooks/useDarkMode"
import SectionContainer from "../components/SectionContainer"
import SectionName from "../components/SectionName"
import IconDark from "../components/IconDark"
import IconMenu from "../components/IconMenu"
import MobileMenu from "../components/MobileMenu"
import MobileElement from "../components/MobileElement"
import useDisplay from "../hooks/useDisplay"
import Section from "../components/Section"
import SectiionTwo from "../components/SectiionTwo"

export default function Home() {
  const [dark, toggle] = useDarkMode()
  const [display, showMenu] = useDisplay()

  return (
    <>
      <Navbar>
        <h1 className="font-extrabold">H.</h1>
        <SectionContainer>
          <SectionName>Home</SectionName>
          <SectionName>About</SectionName>
          <SectionName>Resume</SectionName>
          <SectionName>Skills</SectionName>
          <SectionName>Contact</SectionName>
        </SectionContainer>

        <button onClick={toggle}>
          <IconDark dark={dark}></IconDark>
        </button>
        <button onClick={showMenu} className="sm:hidden">
          <IconMenu></IconMenu>
        </button>
      </Navbar>

      <MobileMenu display={display}>
        <MobileElement>Home</MobileElement>
        <MobileElement>About</MobileElement>
        <MobileElement>Resume</MobileElement>
        <MobileElement>Skills</MobileElement>
        <MobileElement>Contact</MobileElement>
      </MobileMenu>

      <Section></Section>
      <SectiionTwo></SectiionTwo>
    </>
  )
}
