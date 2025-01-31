import React from "react";
import Card from "@/components/Card";
import Title from "@/components/Title";
import { BookOpenIcon } from "@heroicons/react/24/solid";

const ExperiencePage = () => {
  return (
    <>
      <section id="experience" className="h-screen py-10 md:p-20 border-4">
        <Title label="Experience" />
        <div className="flex flex-col h-full justify-center">
          <div className="flex flex-col md:flex-row justify-evenly">
            <span>
              <Card className="min-w-[400px] min-h-[200px]">
                <div className="flex flex-row items-center">
                  <BookOpenIcon className="h-6 w-6 text-gray-600" />
                  <p className="font-semibold text-[#1f1e2c] m-2 opacity-85">
                    Education
                  </p>
                </div>
                <div>
                  
                </div>
              </Card>
            </span>
            <span>
              <Card className="min-w-[400px] min-h-[200px]">Hola</Card>
              <Card className="min-w-[400px] min-h-[200px]">Hola</Card>
            </span>
          </div>
        </div>
        <div></div>
      </section>
    </>
  );
};

export default ExperiencePage;
