"use client";

import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ShapeDivider from "@/components/ShapeDivider";
import scrollToSection from "@/helpers/scrollToSection";

const Home = () => {
  return (
    <>
      <section id="home" className="h-screen flex flex-col justify-center">
        <ShapeDivider />

        <div className="flex flex-col md:flex-row items-center md:justify-center">
          <div className="h-[150px] w-[150px] md:h-auto md:w-auto mb-10">
            <img src="/images/Astro.png" alt="" />
          </div>
          <span className="flex flex-col justify-center">
            <h1 className="font-bold text-4xl md:text-5xl">Hector Lujan</h1>
            <h2 className="font-semibold text-3xl md:text-4xl">
              Frontend Developer
            </h2>
          </span>
        </div>
        <span
          className="flex flex-col items-center m-5"
          onClick={() => scrollToSection("experience")}
        >
          <ChevronDownIcon className="h-6 w-6 animate-bounce" />
          <p>Scroll for more!</p>
        </span>
      </section>
    </>
  );
};

export default Home;
