import React from "react";

export const NewsSectionDescription: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl md:text-5xl text-[#2A2A2A] font-bold">
        Tech
        <span className="text-[#3064E8]"> Today</span>
      </h1>
      <p className="lg:px-48 mt-6 text-[#5E5E5E] text-sm lg:text-base">
        Stay up-to-date with the latest trends and innovations in the world of
        hardware technology. From groundbreaking advancements to insightful
        articles, explore how our products and the industry are evolving to make
        life smarter and more connected.
      </p>
    </div>
  );
};
