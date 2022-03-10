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
import SectionTwo from "../components/SectionTwo"
import SectionThree from "../components/SectionThree"
import MainContainer from "../components/MainContainer"
import SectionContainer from "../components/SectionContainer"
import useWord from "../hooks/useWord"
import Card from "../components/Card"
import Image from "next/image"
import ContactCard from "../components/ContactCard"
import IconMail from "../components/IconMail"
import IconPhone from "../components/IconPhone"
import IconDownload from "../components/IconDownload"
import IconUser from "../components/IconUser"
import Head from "next/head"

export default function Home() {
  const [dark, toggle] = useDarkMode()
  const [display, showMenu] = useDisplay()
  const [word, changeWord] = useWord()

  return (
    <MainContainer>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700&family=Spline+Sans&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Navbar>
        <h1 className="font-extrabold">H.</h1>
        <SectionMenu>
          <SectionName href="#home">Inicio</SectionName>
          <SectionName href="#about">Sobre mi</SectionName>
          <SectionName href="#skills">Habilidades</SectionName>
          <SectionName href="#contact">Contacto</SectionName>
        </SectionMenu>

        <button onClick={toggle}>
          <IconDark dark={dark}></IconDark>
        </button>

        <button onClick={showMenu} className="sm:hidden">
          <IconMenu></IconMenu>
        </button>
      </Navbar>

      <MobileMenu display={display}>
        <MobileElement href="#home" onClick={showMenu}>
          Inicio
        </MobileElement>
        <MobileElement href="#about" onClick={showMenu}>
          Sobre mi
        </MobileElement>

        <MobileElement href="#skills" onClick={showMenu}>
          Habilidades
        </MobileElement>
        <MobileElement href="#contact" onClick={showMenu}>
          Contacto
        </MobileElement>
      </MobileMenu>

      <Section id="home">
        <SectionContainer>
          <div className="flex flex-row justify-around w-full">
            <div>
              <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 py-2">
                ¡Hey...! Soy Hector Lujan
              </h1>
              <h1 className="p-4 text-sky-600 hover:font-bold">
                Frontend Junior Developer
              </h1>
              <div className="flex flex-row justify-start items-center py-10">
                <h1>Amante de: </h1>
                <h1
                  className="text-2xl font-bold pb-1 px-2 cursor-pointer"
                  onClick={changeWord}
                >
                  {word}
                </h1>
              </div>
            </div>
          </div>
        </SectionContainer>
      </Section>

      <SectionTwo id="about">
        <SectionContainer>
          <h1 className="text-2xl font-bold py-4">Acerca de mi:</h1>
          <h1 className="text-base mb-10">
            Ingeniero en Sistemas Computacionales en proceso de titulacion,
            desarrollador frontend fanatico de React.js y amante de las
            distribuciones GNU/Linux con especial cariño a los escritorios con
            KDE.
          </h1>
          <div className=" p-4 w-full flex flex-row justify-center">
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
                <h1 className="text-sky-600 dark:text-columbia-blue pt-2">
                  Instituto Tecnologico de Oaxaca •{" "}
                  <small className="font-bold">Junio 2020</small>
                </h1>
                <small className="text-slate-600 dark:text-slate-300">
                  Ingenieria de Software con Tecnologias Emergentes
                </small>
              </div>
              <div className="flex justify-center sm:justify-end lg:justify-end lg:h-full lg:w-full">
                <Image src="/ito.svg" width={120} height={120} />
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
                <h1 className="text-sky-600 dark:text-columbia-blue pt-2">
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
                <h1 className="text-sky-600 dark:text-columbia-blue pt-2">
                  Aserradero de &quot;Cordon Grande&quot; •{" "}
                  <small className="font-bold">Septiembre 2018</small>
                </h1>
                <small className="text-slate-600 dark:text-slate-300">
                  Proyecto
                </small>
              </div>
              <div className="flex justify-center sm:justify-end"></div>
            </div>
          </div>
        </SectionContainer>
      </SectionTwo>

      <SectionThree id="skills">
        <SectionContainer>
          <h1 className="text-2xl font-bold my-10">Habilidades:</h1>
          <div className="grid grid-cols-3 lg:grid-cols-6 xl:grid-cols-7 gap-y-10 lg:gap-y-20 gap-x-10 w-full">
            <Card src="/javascript.svg" label="JavaScript" />
            <Card src="/typescript-icon.svg" label="TypeScript" />
            <Card src="/nodejs-icon.svg" label="Node.js" />
            <Card src="/git-icon.svg" label="Git" />
            <Card src="/css-3.svg" label="CSS3" />
            <Card src="/html-5.svg" label="HTML5" />
            <Card src="/react.svg" label="React" />
            <Card src="/redux.svg" label="Redux" />
            <Card src="/react-router.svg" label="React Router" />
            <Card src="/nextjs.svg" label="Next.js" />
            <Card src="/tailwindcss-icon.svg" label="Tailwind CSS" />
            <Card src="/postman-icon.svg" label="Postman" />
            <Card src="/graphql.svg" label="GraphQL" />
            <Card src="/postgresql.svg" label="PostgreSQL" />
            <Card src="/mysql-icon.svg" label="MySQL" />
            <Card src="/bootstrap.svg" label="Bootstrap" />
            <Card src="/java.svg" label="Java" />
            <Card src="/linux-tux.svg" label="Linux" />
            <Card src="/terminal.svg" label="Terminal" />
          </div>
        </SectionContainer>
      </SectionThree>

      <SectionTwo id="contact">
        <SectionContainer>
          <h1 className="text-2xl font-bold py-4">Contacto:</h1>
          <h1 className="text-base mb-10">
            Puedes escoger las siguientes alternativas
          </h1>
          <div className="w-full lg:h-1/2 rounded-md grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-4 py-4">
            <ContactCard icon={<IconUser />}>
              <a
                href="https://www.linkedin.com/in/ihectorlujan"
                target="_blank"
              >
                LinkedIn
              </a>
            </ContactCard>

            <ContactCard icon={<IconMail />}>
              <a href="mailto:ihectorlujan96@gmail.com">Email</a>
            </ContactCard>

            <ContactCard icon={<IconDownload />}>
              <a
                href="https://drive.google.com/file/d/1h68lqjfftOM_j-SW9Bn6CK0hzHI4kaVx/view?usp=sharing"
                target="_blank"
              >
                Resume
              </a>
            </ContactCard>
            <ContactCard icon={<IconPhone />}>
              <a href="tel:+52 1 9514136144">Phone</a>
            </ContactCard>
          </div>
        </SectionContainer>
      </SectionTwo>
    </MainContainer>
  )
}
