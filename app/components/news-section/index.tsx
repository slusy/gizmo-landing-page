import React from "react";
import { NewsSectionDescription } from "./description";
import { Content } from "./content";

export const NewsSection: React.FC = () => {
  return (
    <div className="py-24">
      <NewsSectionDescription />
      <Content />
    </div>
  );
};
