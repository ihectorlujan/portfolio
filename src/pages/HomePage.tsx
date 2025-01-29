import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import styles from "@/styles/Shape.module.css";
import ShapeDivider from "@/components/ShapeDivider";

const Home = () => {
  return (
    <>
      <section className="h-screen">
        <ShapeDivider />
        <div className="flex flex-col items-center m-5">
          <ChevronDownIcon className="h-6 w-6" />
          <p>Scroll for more!</p>
        </div>
      </section>
    </>
  );
};

export default Home;
