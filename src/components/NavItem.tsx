import React from "react";

interface Props {
  label: string;
}

const NavItem: React.FC<Props> = ({ label }) => {
  return (
    <span className="cursor-pointer flex items-center py-1 px-2 hover:bg-gray-200 hover:rounded-full ">
      <a className="font-sans font-semibold text-md mx-1">{label}</a>
    </span>
  );
};

export default NavItem;
