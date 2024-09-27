import React from "react";

export const ProductSectionDescription: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl text-[#2A2A2A] font-bold">
        Featured <span className="text-[#3064E8]">Products</span>
      </h1>
      <p className="lg:px-48 mt-6 text-[#5E5E5E] text-sm lg:text-base">
        Discover our top picks of innovative hardware solutions designed to
        enhance your everyday life. From cutting-edge smart home devices to the
        latest in wearable technology, explore how these products can transform
        your living experience.
      </p>
    </div>
  );
};
