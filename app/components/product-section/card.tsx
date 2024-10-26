import Image from "next/image";
import React from "react";

type CardProps = {
  icon: string;
  description: string;
};

export const Card = ({ icon, description }: CardProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="border border-[#2A2A2A] rounded-full p-1 w-[20px] h-[20px] flex items-center justify-center">
        <Image src={icon} width={10} height={10} alt={description} />
      </div>
      <p className="text-xs text-[#6A6A6A] lg:text-base">{description}</p>
    </div>
  );
};
