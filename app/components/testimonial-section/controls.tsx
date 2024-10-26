import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";

interface ControlsProps {
  onPrevClick: () => void;
  onNextClick: () => void;
  scrollInfo: {
    scrollLeft: number;
    scrollWidth: number;
    clientWidth: number;
  };
}

export const Controls: React.FC<ControlsProps> = ({
  onPrevClick,
  onNextClick,
  scrollInfo,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [trackWidth, setTrackWidth] = useState(0);

  useEffect(() => {
    const updateTrackWidth = () => {
      if (trackRef.current) {
        setTrackWidth(trackRef.current.clientWidth);
      }
    };

    updateTrackWidth();
    window.addEventListener("resize", updateTrackWidth);
    return () => window.removeEventListener("resize", updateTrackWidth);
  }, []);

  const scrollableWidth = scrollInfo.scrollWidth - scrollInfo.clientWidth;
  const handleWidthRatio = scrollInfo.clientWidth / scrollInfo.scrollWidth;
  const handleWidth = Math.max(handleWidthRatio * trackWidth, 20); // Minimum 20px width

  const scrollRatio =
    scrollableWidth > 0 ? scrollInfo.scrollLeft / scrollableWidth : 0;
  const handlePosition = scrollRatio * (trackWidth - handleWidth);

  return (
    <div className="flex items-center">
      <button
        onClick={onPrevClick}
        disabled={scrollInfo.scrollLeft <= 0}
        className="hidden md:flex items-center gap-2 border border-[#C6C6C6] text-[#2A2A2A] rounded-full px-5 py-2 bg-[#ECECEC] hover:bg-[#dcdcdc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <Image
          src="icons/icon-arrow.svg"
          width={15}
          height={15}
          alt="arrow"
          className="rotate-180"
        />
        <span>Previous</span>
      </button>
      <div className="h-2 flex-1 flex items-center justify-center">
        <div
          ref={trackRef}
          className="bg-[#D5D5D5] h-full rounded-full w-5/6 relative overflow-hidden"
        >
          <div
            className="absolute h-full rounded-full bg-[#2A2A2A] transition-transform duration-300"
            style={{
              width: `${handleWidth}px`,
              transform: `translateX(${handlePosition}px)`,
            }}
          ></div>
        </div>
      </div>
      <button
        onClick={onNextClick}
        disabled={scrollInfo.scrollLeft >= scrollableWidth - 1}
        className="hidden md:flex items-center gap-2 border border-[#C6C6C6] text-[#2A2A2A] rounded-full px-5 py-2 bg-[#ECECEC] hover:bg-[#dcdcdc] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>Next</span>
        <Image src="icons/icon-arrow.svg" width={15} height={15} alt="arrow" />
      </button>
    </div>
  );
};
