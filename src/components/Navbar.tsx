import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex justify-center m-6">
      <div className="rounded-full bg-gray-100 min-h-[50px] w-2/3 max-w-[600px] p-3">
        <span className="hidden md:flex md:flex-row md:justify-evenly">
          {children}
        </span>
        <span className="flex flex-row justify-between md:hidden">
          <a className="font-sans font-semibold text-md mx-1 p-1">Hector</a>
          <button className="px-3">X</button>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
