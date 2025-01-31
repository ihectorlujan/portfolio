import { BookOpenIcon, BriefcaseIcon } from "@heroicons/react/24/solid";
import React from "react";

interface Props {
  icon?: boolean;
  title: string;
  dateRange: string;
  field: string;
  organization: string;
  details: string;
}

const ExperienceTemplate: React.FC<Props> = ({
  icon,
  title,
  dateRange,
  field,
  organization,
  details,
}) => {
  return (
    <>
      <div className="flex flex-row items-center">
        {icon ? (
          <BriefcaseIcon className="h-6 w-6 text-gray-600" />
        ) : (
          <BookOpenIcon className="h-6 w-6 text-gray-600" />
        )}
        <p className="font-semibold text-[#1f1e2c] m-2 opacity-85">{title}</p>
        <p className="text-sm font-semibold text-[#1f1e2c] m-2 opacity-55">
          {dateRange}
        </p>
      </div>

      <div className="mx-5">
        <p className="font-semibold text-[#1f1e2c] m-2 opacity-95">
          {field}
        </p>
        <p className="text-sm font-semibold text-[#1f1e2c] m-2 opacity-85">
          {organization}
        </p>
        <p className="text-sm font-semibold text-[#1f1e2c] m-2 opacity-75">
          {details}
        </p>
      </div>
    </>
  );
};

export default ExperienceTemplate;
