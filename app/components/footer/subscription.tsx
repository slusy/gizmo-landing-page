import React from "react";

export const Subscription: React.FC = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 px-6 lg:gap-8 self-center">
      <div className="text-[#3064E8] text-center">
        <h3 className="text-xl font-medium lg:text-2xl">
          Join 3000+ Subscribers
        </h3>
        <p className="text-[11px] font-medium lg:text-[13px]">
          Keep up with all the latest developments in tech.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-4 items-center">
        <input
          type="email"
          name="email"
          placeholder="example@domain.com"
          className="border border-[#2B2B2B] rounded-full bg-transparent w-full lg:w-[352px] text-xs min-h-[40px] pl-6 placeholder-[#4D4D4D7D] hover:border-[#3064E8] transition-colors duration-500"
        />
        <button
          type="submit"
          className="bg-[#3064E8] text-[#F2F2F2] rounded-full w-[133px] h-[40px] text-sm"
        >
          Subscribe
        </button>
      </div>
    </div>
  );
};
