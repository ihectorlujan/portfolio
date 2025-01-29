import React from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const Home = () => {
  return (
    <>
      <section className="h-screen flex flex-col justify-end">
        <div className="flex flex-col items-center m-5">
          <ChevronDownIcon className="h-6 w-6" />
          <p>Scroll for more!</p>
        </div>
      </section>
    </>
  );
};

export default Home;
