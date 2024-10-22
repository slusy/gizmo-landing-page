import Image from "next/image";
import React from "react";

export const Header: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 items-center text-center px-6">
      <Image
        src="logo/name-logo.svg"
        width={0}
        height={0}
        alt="logo"
        className="w-[110px] lg:w-[146px] h-auto"
      />
      <p className="text-[#6A6A6A] font-medium text-sm lg:text-base">
        Changing Lives
      </p>
    </div>
  );
};
