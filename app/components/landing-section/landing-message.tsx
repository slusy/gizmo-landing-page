import React from "react";

export const LandingMessage: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl md:text-6xl font-bold text-transparent bg-clip-text animate-gradient bg-[length:200%_200%] p-2 bg-gradient-to-br from-blue-600 from-40% via-black via-50% to-blue-600 to-60%">
        Discover the
        <br />
        Future of Smart Living
      </h1>
      <p className="text-[#525252] text-sm md:text-xl px-2">
        Explore the latest in smart home devices,
        <br />
        wearble tech, and personal gadgets
      </p>
    </div>
  );
};
