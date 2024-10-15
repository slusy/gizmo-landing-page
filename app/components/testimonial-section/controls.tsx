import Image from "next/image";
import React from "react";

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
  const scrollTrackWidth = 100;

  // Calculate handle width
  const contentRatio = scrollInfo.clientWidth / scrollInfo.scrollWidth;
  const handleWidth = Math.max(contentRatio * scrollTrackWidth, 20);

  // Calculate handle position
  const maxScroll = scrollInfo.scrollWidth - scrollInfo.clientWidth;
  const scrollPercentage =
    maxScroll > 0 ? scrollInfo.scrollLeft / maxScroll : 0;

  // Adjust handle position calculation
  const maxHandlePosition = scrollTrackWidth - handleWidth + 5.2;
  const handlePosition = scrollPercentage * maxHandlePosition;

  return (
    <div className="flex items-center">
      <button
        onClick={onPrevClick}
        className="flex items-center gap-2 border border-[#C6C6C6] text-[#2A2A2A] rounded-full px-5 py-2 bg-[#ECECEC] hover:bg-[#dcdcdc] transition-colors"
      >
        <Image
          src="/icons/icon-arrow.svg"
          width={15}
          height={15}
          alt="arrow"
          className="rotate-180"
        />
        <span>Previous</span>
      </button>
      <div className="h-2 flex-1 flex items-center justify-center">
        <div className="bg-[#D5D5D5] h-full rounded-full w-5/6 relative overflow-hidden">
          <div
            className="absolute h-full rounded-full bg-[#2A2A2A] transition-transform duration-300"
            style={{
              width: `${handleWidth}%`,
              transform: `translateX(${handlePosition}%)`,
            }}
          ></div>
        </div>
      </div>
      <button
        onClick={onNextClick}
        className="flex items-center gap-2 border border-[#C6C6C6] text-[#2A2A2A] rounded-full px-5 py-2 bg-[#ECECEC] hover:bg-[#dcdcdc] transition-colors"
      >
        <span>Next</span>
        <Image src="/icons/icon-arrow.svg" width={15} height={15} alt="arrow" />
      </button>
    </div>
  );
};
