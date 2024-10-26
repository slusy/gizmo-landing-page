import React from "react";
import { LandingSection } from "./components/landing-section";
import { ProductSection } from "./components/product-section";
import { TestimonialSection } from "./components/testimonial-section";
import { NewsSection } from "./components/news-section";

export default function Home() {
  return (
    <>
      <LandingSection />
      <ProductSection />
      <TestimonialSection />
      <NewsSection />
    </>
  );
}
