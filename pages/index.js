import Navbar from "../components/Navbar"
import useDarkMode from "../hooks/useDarkMode"
import SectionContainer from "../components/SectionContainer"
import SectionName from "../components/SectionName"
import IconDark from "../components/IconDark"

export default function Home() {
  const [dark, toggle] = useDarkMode()

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
      </Navbar>
    </>
  )
}
