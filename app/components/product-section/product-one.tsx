import Image from "next/image";
import React from "react";
import PRODUCT_DETAILS from "./products";
import { Card } from "./card";
import { ShimmerButtonText } from "../misc/shimmer-button-text";

export const ProductOne: React.FC = () => {
  return (
    <div className="w-full h-[335px] lg:h-full p-8 lg:p-12 flex flex-col gap-4 relative overflow-hidden rounded-3xl border border-[#D8D8D8] bg-black shadow-[0px_0px_13px_0px_#00000040]">
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
      <ShimmerButtonText bgColor="black" />
    </div>
  );
};
