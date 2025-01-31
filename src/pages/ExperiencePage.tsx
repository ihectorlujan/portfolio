import ExperienceTemplate from "@/components/ExperienceTemplate";
import Title from "@/components/Title";
import Card from "@/components/Card";
import React from "react";

const ExperiencePage = () => {
  return (
    <>
      <section
        id="experience"
        className="h-auto md:h-screen p-20 px-6 md:p-20"
      >
        <Title label="Experience" />
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-col md:flex-row justify-evenly">
            <span>
              <Card className="min-w-[350px] h-auto">
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
              <Card className="min-w-[350px] h-auto">
                <ExperienceTemplate
                  icon
                  title="Software Development"
                  dateRange="11.2024 – Present"
                  field="React Frontend Developer"
                  organization="Freelancer"
                  details=""
                  color="text-blue-500"
                />
              </Card>
              <Card className="min-w-[350px] h-auto">
                <ExperienceTemplate
                  icon
                  title="Software Development"
                  dateRange="06.2022 – 08.2024"
                  field="Vue.js Frontend Developer"
                  organization="Azit Developers"
                  details=""
                  color="text-emerald-500"
                />
              </Card>
              <Card className="min-w-[350px] h-auto">
                <ExperienceTemplate
                  icon
                  title="Software Development"
                  dateRange="10.2020 – 03.2021"
                  field="JavaScript Fullstack Developer"
                  organization="Instituto Tecnológico de Oaxaca"
                  details=""
                  color="text-amber-500"
                />
              </Card>
              <Card className="min-w-[350px] h-auto">
                <ExperienceTemplate
                  icon
                  title="Software Development"
                  dateRange="07.2018 - 09.2018"
                  field="Java Fullstack Developer"
                  organization="Aserradero Cordon Grande"
                  details=""
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
