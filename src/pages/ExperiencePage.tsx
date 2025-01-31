import ExperienceTemplate from "@/components/ExperienceTemplate";
import Title from "@/components/Title";
import Card from "@/components/Card";
import React from "react";

const ExperiencePage = () => {
  return (
    <>
      <section
        id="experience"
        className="h-screen py-10 px-6 md:p-20  border-4"
      >
        <Title label="Experience" />
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-col md:flex-row justify-evenly">
            <span>
              <Card className="min-w-[400px] h-auto">
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
              <Card className="min-w-[400px] h-auto">
                <ExperienceTemplate
                  icon
                  title=""
                  dateRange="11/2024 – Present"
                  field="Frontend Developer"
                  organization="Freelancer"
                  details=""
                />
              </Card>
              <Card className="min-w-[400px] h-auto">
                <ExperienceTemplate
                  icon
                  title=""
                  dateRange="06/2022 – 08/2024"
                  field="Frontend Developer"
                  organization="Azit Developers"
                  details=""
                />
              </Card>
              <Card className="min-w-[400px] h-auto">
                <ExperienceTemplate
                  icon
                  title=""
                  dateRange="10/2020 – 03/2021"
                  field="Fullstack Developer"
                  organization="Instituto Tecnológico de Oaxaca"
                  details=""
                />
              </Card>
              <Card className="min-w-[400px] h-auto">
                <ExperienceTemplate
                  icon
                  title=""
                  dateRange="07/2018 - 09/2018"
                  field="Fullstack Developer"
                  organization="Aserradero Cordon Grande"
                  details=""
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
