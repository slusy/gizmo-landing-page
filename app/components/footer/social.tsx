import Image from "next/image";
import React from "react";

const SOCIAL: readonly string[] = ["instagram", "linkedin", "x", "facebook"];

export const Social: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 lg:gap-8 px-6">
      {SOCIAL?.map((item) => (
        <div
          className="border border-[#414141] rounded-full p-3 bg-[#1D1D1D] hover:border-gray-400 hover:bg-[#383838] transition-colors duration-500 cursor-pointer"
          key={`social-${item}-key`}
        >
          <Image
            src={`icons/icon-${item}.svg`}
            width={15}
            height={15}
            alt={item}
          />
        </div>
      ))}
    </div>
  );
};
