import ExperienceTemplate from "@/components/ExperienceTemplate";
import Title from "@/components/Title";
import Card from "@/components/Card";

const ExperiencePage = () => {
  return (
    <>
      <section id="experience" className="h-auto md:min-h-screen p-20 px-6 md:p-20">
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
                    "Development and maintenance of dynamic and responsive user interfaces using React",
                    "Implementation of reusable and modular components to optimize code performance and scalability",
                    "Integration of RESTful APIs for data management",
                    "Optimization of frontend performance to enhance user experience",
                    "Use of tools like Redux and Zustand for application state management",
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
                    "Development of user interfaces using Vue.js, utilizing both APIs (Options API, Composition API) and libraries like Quasar or Bootstrap",
                    "Configuration and structuring of projects with Vite and Vue.js",
                    "First implementation of Clean Architecture to improve code organization and maintainability in future projects",
                    "Proposals for enhancing user experience across multiple interfaces",
                    "Development of collaborative solutions with various internal and external teams",
                    "Development of reusable and responsive components",
                    "Use of CSS libraries such as Bootstrap, Quasar, and Tailwind",
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
                    "Database development with MySQL",
                    "Software development management using XP methodology",
                    "Backend development with JavaScript, Express.js, and Node.js",
                    "Frontend development with HTML, CSS, Bootstrap, and Handlebars",
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
                    "Interface design with JavaFX",
                    "Database design and implementation with PostgreSQL",
                    "Code development using the MVC model",
                    "Software development management using SCRUM",
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
