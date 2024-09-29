import React from "react";
import { TestimonialSectionDescription } from "./description";
import { Testimonial } from "./testimonial";
import { Controls } from "./controls";

export const TestimonialSection: React.FC = () => {
  return (
    <div className="py-8">
      <TestimonialSectionDescription />
      <Testimonial />
      <Controls />
    </div>
  );
};
