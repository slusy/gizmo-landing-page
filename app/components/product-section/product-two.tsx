import Image from "next/image";
import React from "react";
import PRODUCT_DETAILS from "./products";
import { Card } from "./card";
import { ShimmerButtonText } from "../misc/shimmer-button-text";

export const ProductTwo: React.FC = () => {
  return (
    <div className="w-full h-[210px] p-8 flex flex-col gap-4 relative overflow-hidden rounded-3xl border border-[#D8D8D8] shadow-[0px_4px_13.3px_0px_#00000012]">
      <Image
        src="images/featured-vr.png"
        alt="watch"
        width={260}
        height={260}
        className="-z-50 absolute right-0 bottom-0"
      />
      <div>
        <h1 className="text-[#242424] text-2xl lg:text-3xl font-medium">
          {PRODUCT_DETAILS?.productTwo?.name}
        </h1>
        <p className="text-sm text-[#6D6B6B] lg:text-base">
          {PRODUCT_DETAILS?.productTwo?.category}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        {PRODUCT_DETAILS?.productTwo?.features?.map((item) => (
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
