import React from "react";
import { TestimonialSectionDescription } from "./description";
import { Testimonial } from "./testimonial";

export const TestimonialSection: React.FC = () => {
  return (
    <div className="py-8">
      <TestimonialSectionDescription />
      <Testimonial />
    </div>
  );
};
