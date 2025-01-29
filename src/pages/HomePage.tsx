import { ChevronDownIcon } from "@heroicons/react/24/outline";
import ShapeDivider from "@/components/ShapeDivider";

const Home = () => {
  return (
    <>
      <section className="h-screen flex flex-col justify-center">
        <ShapeDivider />

        <div className="flex flex-row justify-center">
          <img src="/images/Astro.png" alt="" />
          <span className="flex flex-col justify-center">
            <h1 className="text-5xl">Hector Lujan</h1>
            <h2 className="text-4xl">Frontend Developer</h2>
          </span>
        </div>
        <div className="flex flex-col items-center m-5">
          <ChevronDownIcon className="h-6 w-6 animate-bounce" />
          <p>Scroll for more!</p>
        </div>
      </section>
    </>
  );
};

export default Home;
