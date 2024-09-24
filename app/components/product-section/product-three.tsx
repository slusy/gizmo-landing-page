import Image from "next/image";
import React from "react";
import PRODUCT_DETAILS from "./products";
import { Card } from "./card";
import { ShimmerButtonText } from "../misc/shimmer-button-text";

export const ProductThree: React.FC = () => {
  return (
    <div className="w-full h-[260px] p-8 flex flex-col gap-4 relative overflow-hidden rounded-3xl border border-[#D8D8D8]">
      <Image
        src="/images/featured-speaker.png"
        alt="watch"
        width={360}
        height={360}
        className="-z-50 absolute right-[-40px] bottom-[-60px]"
      />
      <div>
        <h1 className="text-[#242424] text-2xl lg:text-3xl font-medium">
          {PRODUCT_DETAILS?.productThree?.name}
        </h1>
        <p className="text-sm text-[#6D6B6B] lg:text-base">
          {PRODUCT_DETAILS?.productThree?.category}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {PRODUCT_DETAILS?.productThree?.features?.map((item) => (
          <Card
            key={item?.description}
            icon={item?.icon}
            description={item?.description}
          />
        ))}
      </div>
      <ShimmerButtonText bgColor="white" />
    </div>
  );
};
