"use client";

import React, { useState, useRef, useEffect } from "react";
import { TestimonialSectionDescription } from "./description";
import { Testimonial } from "./testimonial";
import { Controls } from "./controls";

export const TestimonialSection: React.FC = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [scrollInfo, setScrollInfo] = useState({
    scrollLeft: 0,
    scrollWidth: 0,
    clientWidth: 0,
  });

  useEffect(() => {
    const updateScrollInfo = () => {
      const container = scrollContainerRef.current;
      if (container) {
        setScrollInfo({
          scrollLeft: container.scrollLeft,
          scrollWidth: container.scrollWidth,
          clientWidth: container.clientWidth,
        });
      }
    };

    updateScrollInfo();

    window.addEventListener("resize", updateScrollInfo);
    return () => window.removeEventListener("resize", updateScrollInfo);
  }, []);

  const handleScroll = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setScrollInfo({
        scrollLeft: container.scrollLeft,
        scrollWidth: container.scrollWidth,
        clientWidth: container.clientWidth,
      });
    }
  };

  const scrollTo = (direction: "prev" | "next") => {
    const container = scrollContainerRef.current;
    if (container) {
      const itemWidth = container.clientWidth;
      const currentScroll = container.scrollLeft;
      const targetScroll =
        direction === "next"
          ? currentScroll + itemWidth
          : currentScroll - itemWidth;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="py-8">
      <TestimonialSectionDescription />
      <Testimonial scrollRef={scrollContainerRef} onScroll={handleScroll} />
      <Controls
        onPrevClick={() => scrollTo("prev")}
        onNextClick={() => scrollTo("next")}
        scrollInfo={scrollInfo}
      />
    </div>
  );
};
