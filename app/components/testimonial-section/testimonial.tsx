import React from "react";
import TESTIMONIAL from "./testimonials";
import Image from "next/image";

interface TestimonialProps {
  scrollRef: React.RefObject<HTMLDivElement>;
  onScroll: () => void;
}

export const Testimonial: React.FC<TestimonialProps> = ({
  scrollRef,
  onScroll,
}) => {
  return (
    <div
      ref={scrollRef}
      onScroll={onScroll}
      className="flex gap-6 w-full overflow-x-scroll py-12 scrollbar-hide"
    >
      {TESTIMONIAL?.map((item) => (
        <div
          className="border border-[#DCDCDC] rounded-3xl min-w-full lg:min-w-[528px] h-[325px] flex p-8 gap-2"
          key={`testimonial-section-id-${item?.id}`}
        >
          <div className="top-2 relative">
            <Image
              src="icons/icon-quote.svg"
              width={15}
              height={15}
              alt="quote"
            />
          </div>
          <div className="flex-1 flex flex-col gap-8">
            <h1 className="text-2xl lg:text-3xl">{item?.message}</h1>
            <div className="flex items-center gap-4">
              <div>
                <Image
                  src={item?.profileImage}
                  width={55}
                  height={55}
                  alt="user profile"
                />
              </div>
              <div>
                <p className="text-[#3064E8] text-xl font-medium">
                  {item?.name}
                </p>
                <p className="text-xs">on {item?.product}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
