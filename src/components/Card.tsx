import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Card: React.FC<Props> = ({children}) => {
  return <div className="rounded-3xl bg-gray-100/80 m-4">{children}</div>;
}

export default Card;
