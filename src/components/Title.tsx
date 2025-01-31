import React from "react";

interface Props {
  label: string;
}

const Title: React.FC<Props> = ({ label }) => {
  return <h1 className="text-3xl md:text-5xl font-semibold text-[#1f1e2c] m-2 opacity-85">{label}</h1>;
};

export default Title;
