"use client";

import ExperienceTemplate from "@/components/ExperienceTemplate";
import experiences from "@/helpers/experienceList.json";
import React, { useState } from "react";
import Title from "@/components/Title";
import Card from "@/components/Card";

const ExperiencePage = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

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
              {experiences.map((experience, index) => (
                <Card className="min-w-[350px] h-auto lg:min-w-[450px] lg:max-w-[450px]">
                  <ExperienceTemplate
                    toggle
                    icon
                    key={index}
                    {...experience}
                    isActive={index === activeIndex}
                    onToggle={() => setActiveIndex(index === activeIndex ? null : index)}
                  />
                </Card>
              ))}
            </span>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default ExperiencePage;
