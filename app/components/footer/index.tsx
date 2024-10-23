import Image from "next/image";
import React from "react";
import { Header } from "./header";
import { Subscription } from "./subscription";
import { Navigation } from "./navigation";
import { Social } from "./social";

export const Footer: React.FC = () => {
  return (
    <div className="bg-[#121212] rounded-tl-[44px] rounded-tr-[44px] pt-12 px-4 lg:px-24 flex flex-col gap-8 lg:gap-14">
      <Header />
      <Subscription />
      <Navigation />
      <Social />
      <div className="flex justify-center">
        <Image
          src="logo/half-name-logo.svg"
          width={0}
          height={0}
          alt="logo"
          className="w-[85%] h-auto"
        />
      </div>
    </div>
  );
};
