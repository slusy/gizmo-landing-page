import Image from "next/image";
import React from "react";

export const Controls: React.FC = () => {
  return (
    <div className="flex items-center">
      <button className="flex items-center gap-2 border border-[#C6C6C6] text-[#2A2A2A] rounded-full px-5 py-2 bg-[#ECECEC]">
        <Image
          src="/icons/icon-arrow.svg"
          width={15}
          height={15}
          alt="arrow"
          className="rotate-180"
        />
        <span>Previous</span>
      </button>
      <div className="h-2 flex-1 flex items-center justify-center">
        <div className="bg-[#D5D5D5] h-full rounded-full w-5/6 relative">
          <div className="absolute w-2/4 h-full rounded-full bg-[#2A2A2A]"></div>
        </div>
      </div>
      <button className="flex items-center gap-2 border border-[#C6C6C6] text-[#2A2A2A] rounded-full px-5 py-2 bg-[#ECECEC]">
        <span>Next</span>
        <Image src="/icons/icon-arrow.svg" width={15} height={15} alt="arrow" />
      </button>
    </div>
  );
};
