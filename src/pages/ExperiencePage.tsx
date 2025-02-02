import ExperienceTemplate from "@/components/ExperienceTemplate";
import Title from "@/components/Title";
import Card from "@/components/Card";
import React from "react";

const ExperiencePage = () => {
  return (
    <>
      <section id="experience" className="h-auto md:h-screen p-20 px-6 md:p-20">
        <Title label="Experience" />
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-col lg:flex-row justify-evenly">
            <span>
              <Card className="min-w-[350px] h-auto lg:min-w-[450px] lg:max-w-[450px]">
                <ExperienceTemplate
                  title="Bachelor's Degree"
                  dateRange="2015 - 2021"
                  field="Computer Systems Engineering"
                  organization="Instituto Tecnológico de Oaxaca"
                  details="Specialization in Software Engineering"
                />
              </Card>
            </span>
            <span>
              <Card className="min-w-[350px] h-auto lg:min-w-[450px] lg:max-w-[450px]">
                <ExperienceTemplate
                  toggle
                  icon
                  title="Software Development"
                  dateRange="11.2024 – Present"
                  field="React Frontend Developer"
                  organization="Freelancer"
                  details=""
                  activities={[
                    "Desarrollo y mantenimiento de interfaces de usuario dinámicas y responsivas utilizando React",
                    "Implementación de componentes reutilizables y modulares para optimizar el rendimiento y la escalabilidad del código",
                    "Integración de APIs RESTful para la gestión de datos",
                    "Optimización del rendimiento del frontend para mejorar la experiencia del usuario",
                    "Uso de herramientas como Redux y Zustand para la gestión del estado de la aplicación",
                  ]}
                  color="text-blue-500"
                />
              </Card>
              <Card className="min-w-[350px] h-auto lg:min-w-[450px] lg:max-w-[450px]">
                <ExperienceTemplate
                  toggle
                  icon
                  title="Software Development"
                  dateRange="06.2022 – 08.2024"
                  field="Vue.js Frontend Developer"
                  organization="Azit Developers"
                  details=""
                  activities={[
                    "Desarrollo de interfaces de usuario utilizando Vue.js haciendo uso de ambas APIs (Options API, Composition API) y librerías como Quasar o Bootstrap",
                    "Configuración y estructurado de proyectos con Vite y Vue.js",
                    "Primera implementación de Clean Architecture para mejorar la organización y mantenibilidad del código en proyectos futuros",
                    "Propuestas para una mejor experiencia de usuario en múltiples interfaces",
                    "Desarrollo de soluciones colaborativas con distintos equipos internos y externos a la empresa",
                    "Desarrollo de componentes reutilizables y responsivos",
                    "Utilización de librerías para CSS como Bootstrap, Quasar y Tailwind",
                  ]}
                  color="text-emerald-500"
                />
              </Card>
              <Card className="min-w-[350px] h-auto lg:min-w-[450px] lg:max-w-[450px]">
                <ExperienceTemplate
                  toggle
                  icon
                  title="Software Development"
                  dateRange="10.2020 – 03.2021"
                  field="JavaScript Fullstack Developer"
                  organization="Instituto Tecnológico de Oaxaca"
                  details=""
                  activities={[
                    "Desarrollo de la base de datos con MySQL",
                    "Gestión del desarrollo de software utilizando metodología XP",
                    "Desarrollo Backend con JavaScript, Express.js y Node.js",
                    "Desarrollo Frontend con HTML, CSS, Bootstrap y Handlebars",
                  ]}
                  color="text-amber-500"
                />
              </Card>
              <Card className="min-w-[350px] h-auto lg:min-w-[450px] lg:max-w-[450px]">
                <ExperienceTemplate
                  toggle
                  icon
                  title="Software Development"
                  dateRange="07.2018 - 09.2018"
                  field="Java Fullstack Developer"
                  organization="Aserradero Cordon Grande"
                  details=""
                  activities={[
                    "Diseño de interfaces con JavaFX",
                    "Diseño e implementación de base de datos con PostgreSQL",
                    "Desarrollo del código con modelo MVC",
                    "Gestión del desarrollo de software utilizando SCRUM",
                  ]}
                  color="text-red-500"
                />
              </Card>
            </span>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default ExperiencePage;
