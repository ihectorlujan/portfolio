"use client";

import React, { ReactNode, useState } from "react";
import XButton from "./XButton";

interface Props {
  children: ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center m-6">
      <div className="rounded-3xl bg-gray-100 min-h-[50px] w-2/3 max-w-[600px] p-3">
        <span className="hidden md:flex md:flex-row md:justify-evenly">
          {children}
        </span>
        <span className="flex flex-col justify-between md:hidden">
          <div className="flex flex-row justify-between">
            <a className="font-sans font-semibold text-md mx-1 p-1">Hector</a>
            <XButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div
            className={`transition-all duration-[0.3s] ease-in-out overflow-hidden ${
              isOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div>{children}</div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
