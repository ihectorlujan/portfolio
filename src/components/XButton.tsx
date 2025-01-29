import React from "react";
import styles from "@/styles/XButton.module.css";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const XButton: React.FC<Props> = ({ isOpen, setIsOpen }) => {
  return (
    <button
      className={`${styles.menu} ${isOpen ? styles.active : ""}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div></div>
      <div></div>
    </button>
  );
};

export default XButton;
