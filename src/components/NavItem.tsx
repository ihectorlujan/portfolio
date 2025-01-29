"use client"

import React from "react";
import scrollToSection from "@/helpers/scrollToSection";
interface Props {
  id: string;
  label: string;
}

const NavItem: React.FC<Props> = ({ id, label }) => {
  return (
    <div
      className="cursor-pointer flex items-center py-1 px-2 hover:bg-gray-200 hover:rounded-full "
      onClick={() => scrollToSection(id)}
    >
      <p className="font-semibold text-md mx-1">{label}</p>
    </div>
  );
};

export default NavItem;
