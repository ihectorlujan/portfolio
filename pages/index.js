import Navbar from "../components/Navbar"
import useDarkMode from "../hooks/useDarkMode"
import SectionMenu from "../components/SectionMenu"
import SectionName from "../components/SectionName"
import IconDark from "../components/IconDark"
import IconMenu from "../components/IconMenu"
import MobileMenu from "../components/MobileMenu"
import MobileElement from "../components/MobileElement"
import useDisplay from "../hooks/useDisplay"
import Section from "../components/Section"
import SectiionTwo from "../components/SectiionTwo"
import MainContainer from "../components/MainContainer"
import SectionContainer from "../components/SectionContainer"
import useWord from "../hooks/useWord"

export default function Home() {
  const [dark, toggle] = useDarkMode()
  const [display, showMenu] = useDisplay()
  const [word, changeWord] = useWord()

  return (
    <MainContainer>
      <Navbar>
        <h1 className="font-extrabold">H.</h1>
        <SectionMenu>
          <SectionName href="#home">Inicio</SectionName>
          <SectionName href="#about">Sobre mi</SectionName>
          <SectionName>Habilidades</SectionName>
          <SectionName>Proyectos</SectionName>
          <SectionName>Contacto</SectionName>
        </SectionMenu>

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

      <Section id="home">
        <SectionContainer>
          <h1 className="text-6xl">¡Hey...! I'm Hector Lujan</h1>
          <h1 className="p-4 text-sky-600 hover:font-bold">
            Frontend Junior Developer
          </h1>
          <div className="flex flex-row justify-center items-center py-10">
            <h1>Lover of: </h1>
            <h1
              className="text-2xl font-bold pb-1 px-2 cursor-pointer"
              onClick={changeWord}
            >
              {word}
            </h1>
          </div>
        </SectionContainer>
      </Section>

      <SectiionTwo id="about">
        <SectionContainer>
          <h1 className="text-2xl font-bold py-4">Acerca de mi:</h1>
          <h1 className="text-base mb-10">
            Ingeniero en Sistemas Computacionales en proceso de titulacion,
            desarrollador frontend fanatico de React.js y amante de las
            distribuciones GNU/Linux con especial cariño a los escritorios con
            KDE.
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 gap-x-4">
            <div>
              <h1 className="text-xl font-bold pt-4 text-fountain-blue">
                EDUCACION
              </h1>
            </div>
            <div>
              <h1 className="text-xl font-bold pt-4 pb-1">
                Ingenieria en Sistemas Computacionales
              </h1>
              <div className="divide-y divide-black dark:divide-white">
                <div></div>
                <div></div>
              </div>
              <h1 className="text-slate-600 dark:text-slate-300 pt-2">
                Instituto Tecnologico de Oaxaca •{" "}
                <small className="font-bold">Junio 2020</small>
              </h1>
              <small className="text-slate-600 dark:text-slate-300">
                Ingenieria de Software con Tecnologias Emergentes
              </small>
            </div>
            <div className="flex justify-center sm:justify-end">
              <img src="./ito.svg" width={120} height={120} />
            </div>

            <div>
              <h1 className="text-xl font-bold pt-4 text-fountain-blue">
                EXPERIENCIA
              </h1>
            </div>
            <div>
              <h1 className="text-xl font-bold pt-4 pb-1">
                Desarrollador FullStack
              </h1>
              <div className="divide-y divide-black dark:divide-white">
                <div></div>
                <div></div>
              </div>
              <h1 className="text-slate-600 dark:text-slate-300 pt-2">
                Instituto Tecnologico de Oaxaca •{" "}
                <small className="font-bold">Marzo 2021</small>
              </h1>
              <small className="text-slate-600 dark:text-slate-300">
                Residencia Profesional
              </small>
            </div>
            <div className="flex justify-center sm:justify-end"></div>

            <div></div>
            <div>
              <h1 className="text-xl font-bold pt-4 pb-1">
                Desarrollador Java
              </h1>
              <div className="divide-y divide-black dark:divide-white">
                <div></div>
                <div></div>
              </div>
              <h1 className="text-slate-600 dark:text-slate-300 pt-2">
                Aserradero de "Cordon Grande" •{" "}
                <small className="font-bold">Septiembre 2018</small>
              </h1>
              <small className="text-slate-600 dark:text-slate-300">
                Proyecto
              </small>
            </div>
            <div className="flex justify-center sm:justify-end"></div>
          </div>
        </SectionContainer>
      </SectiionTwo>
    </MainContainer>
  )
}
