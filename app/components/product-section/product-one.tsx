import Image from "next/image";
import React from "react";
import PRODUCT_DETAILS from "./products";
import { Card } from "./card";

export const ProductOne: React.FC = () => {
  return (
    <div className="w-full h-[335px] lg:h-full p-8 lg:p-12 flex flex-col gap-4 relative overflow-hidden rounded-3xl border border-[#D8D8D8] bg-black">
      <Image
        src="/images/featured-watch.png"
        alt="watch"
        width={550}
        height={550}
        className="absolute right-[-100px] bottom-[-50px]"
      />
      <div>
        <h1 className="text-white text-2xl lg:text-3xl font-medium">
          {PRODUCT_DETAILS?.productOne?.name}
        </h1>
        <p className="text-sm text-[#6D6B6B] lg:text-base">
          {PRODUCT_DETAILS?.productOne?.category}
        </p>
      </div>
      <div className="flex flex-col gap-2 z-10">
        {PRODUCT_DETAILS?.productOne?.features?.map((item) => (
          <Card
            key={item?.description}
            icon={item?.icon}
            description={item?.description}
          />
        ))}
      </div>
      <button className="flex items-center gap-2 border border-[#2D2D2D] rounded-full py-2 px-3 self-start">
        <span className="text-white">Learn More</span>
        <div className="border border-[#343434] rounded-full p-2 w-[30px] h-[30px] flex items-center justify-center">
          <Image
            src="/icons/icon-redirect.svg"
            width={12}
            height={12}
            alt="redirect"
          />
        </div>
      </button>
    </div>
  );
};
