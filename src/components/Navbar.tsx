"use client";

import React, { ReactNode, useState } from "react";
import XButton from "./XButton";

interface Props {
  children: ReactNode;
}

const Navbar: React.FC<Props> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex justify-center w-full mt-6 px-5 fixed top-0 left-0 right-0 z-50">
      <div className="rounded-3xl bg-gray-100/70 min-h-[50px] w-full max-w-[600px] p-3 mx-auto">
        <span className="hidden md:flex md:flex-row md:justify-evenly">
          <a className="font-sans font-semibold text-md mx-1 p-1">Hector</a>
          {children}
        </span>
        <span className="flex flex-col justify-between md:hidden">
          <div className="flex flex-row justify-between">
            <a className="font-sans font-semibold text-md mx-1 p-1">Hector</a>
            <XButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
          <div
            className={`transition-all duration-[0.4s] linear overflow-hidden ${
              isOpen ? "max-h-[500px]" : "max-h-0"
            }`}
          >
            <div
              className={`transition-all duration-[0.4s] linear ${
                isOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-2"
              }`}
            >
              {children}
            </div>
          </div>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
