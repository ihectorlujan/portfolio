import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
}

const Card: React.FC<Props> = ({ children, className = "" }) => {
  return (
    <div className={`rounded-3xl bg-gray-100/80 p-4 m-4 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
