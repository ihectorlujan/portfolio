import Title from "@/components/Title";
import React from "react";
import AnimatedImage from "@/components/AnimatedImage";

const SkillsPage: React.FC = () => {
  return (
    <>
      <section id="skills" className="h-auto md:min-h-screen p-20 px-6 md:p-20 relative flex flex-col">
        <Title label="Skills" />

        <div className="relative w-full flex flex-1 justify-center items-center">
          <AnimatedImage
            src="/images/vuejs.svg"
            alt="Vue.js Icon"
            className="w-20 h-20 p-1 absolute top-[10%] left-[15%]"
          />
          <AnimatedImage
            src="/images/react.svg"
            alt="Vue.js Icon"
            className="w-20 h-20 p-1 absolute top-[30%] left-[60%]"
          />
          <AnimatedImage
            src="/images/tailwind.svg"
            alt="Vue.js Icon"
            className="w-20 h-20 p-1 absolute top-[50%] left-[40%]"
          />
          <AnimatedImage
            src="/images/vscode.svg"
            alt="Vue.js Icon"
            className="w-20 h-20 p-1 absolute top-[80%] left-[70%]"
          />
          <p>hola</p>
        </div>
      </section>
    </>
  );
};

export default SkillsPage;
