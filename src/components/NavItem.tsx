import React from "react";

interface Props {
  id: string;
  label: string;
}

const NavItem: React.FC<Props> = ({ id, label }) => {
  return (
    <a
      className="cursor-pointer flex items-center py-1 px-2 hover:bg-gray-200 hover:rounded-full "
      href={`#${id}`}
    >
      <p className="font-semibold text-md mx-1">{label}</p>
    </a>
  );
};

export default NavItem;
