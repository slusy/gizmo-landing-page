import React from "react";
import { LandingSection } from "./components/landing-section";
import { ProductSection } from "./components/product-section";
import { TestimonialSection } from "./components/testimonial-section";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ProductSection />
      <TestimonialSection />
    </>
  );
}
