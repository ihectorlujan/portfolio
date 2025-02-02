"use client";

import React from "react";
import { BookOpenIcon, CommandLineIcon, ArrowDownIcon, ArrowUpIcon } from "@heroicons/react/24/solid";

interface Props {
  icon?: boolean;
  title: string;
  dateRange: string;
  field: string;
  organization: string;
  details: string;
  color?: string;
  toggle?: boolean;
  activities?: string[];
  isActive?: boolean;
  onToggle?: () => void;
}

const ExperienceTemplate: React.FC<Props> = ({
  icon,
  title,
  dateRange,
  field,
  organization,
  details,
  color,
  toggle,
  activities,
  isActive,
  onToggle,
}) => {
  return (
    <>
      <div className="flex flex-row items-center">
        {icon ? (
          <CommandLineIcon className="h-6 w-6 text-gray-600" />
        ) : (
          <BookOpenIcon className="h-6 w-6 text-gray-600" />
        )}
        <p className="font-semibold text-[#1f1e2c] m-2 opacity-85">{title}</p>
        <p className="text-sm font-semibold text-[#1f1e2c] m-2 opacity-55">{dateRange}</p>
      </div>

      <div className="mx-5">
        <p className={`font-semibold m-2 opacity-95 ${color}`}>{field}</p>
        <p className="text-sm font-semibold text-[#1f1e2c] m-2 opacity-85">{organization}</p>
        <p className="text-sm font-semibold text-[#1f1e2c] m-2 opacity-75">{details}</p>
      </div>

      <div
        className={`transition-all duration-[0.4s] linear overflow-hidden px-4 py-1 ${
          isActive ? "max-h-[500px]" : "max-h-0"
        }`}
      >
        <ul>
          {activities?.map((element, index) => (
            <li className="text-sm font-semibold text-[#1f1e2c] m-2 opacity-75" key={index}>
              <span className={`${color}`}>{'>'}</span> {element}
            </li>
          ))}
        </ul>
      </div>

      {toggle && (
        <span className="flex justify-end">
          {isActive ? (
            <ArrowUpIcon
              className={`h-4 w-4 ${color} font-bold animate-bounce`}
              onClick={onToggle}
            />
          ) : (
            <ArrowDownIcon
              className={`h-4 w-4 ${color} font-bold animate-bounce`}
              onClick={onToggle}
            />
          )}
        </span>
      )}
    </>
  );
};

export default ExperienceTemplate;