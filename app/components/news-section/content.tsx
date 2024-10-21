"use client";

import React, { useEffect, useState } from "react";
import { NEWS } from "./news";
import Image from "next/image";

export const Content: React.FC = () => {
  const [news, SetNews] = useState(NEWS);

  useEffect(() => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    )
      SetNews((prev) => prev.slice(0, 3));
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-12 gap-8">
      {news?.map((item) => (
        <div
          key={item?.title}
          className="bg-[#EDEDED] border border-[#D8D8D8] rounded-[28px] hover:shadow-xl transition-all duration-300 ease-linear"
        >
          <div>
            <Image
              src={item?.image}
              width={100}
              height={100}
              quality={100}
              alt={item?.title}
              className="w-full h-auto rounded-t-[28px]"
            />
          </div>
          <div className="p-4 flex flex-col gap-2">
            <h1 className="font-bold lg:text-lg text-[#1F1F1F]">
              {item?.title}
            </h1>
            <p className="text-sm text-[#676767]">{item?.description}</p>
            <p className="text-xs text-[#8F8F8F]">{item?.date}</p>
          </div>
        </div>
      ))}
      <button className="col-span-full bg-[#EDEDED] border border-[#D8D8D8] rounded-full w-max px-6 py-2 text-[#2A2A2A] justify-self-center hover:bg-[#dcdcdc] transition-colors duration-500">
        Load More..
      </button>
    </div>
  );
};
