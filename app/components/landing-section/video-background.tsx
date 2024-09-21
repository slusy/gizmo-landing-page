import React from "react";

export const VideoBackground: React.FC = () => {
  return (
    <video
      autoPlay
      muted
      loop
      playsInline
      className="h-full w-full absolute left-0 object-cover object-center -z-50"
    >
      <source src="hero-video.mp4" type="video/mp4" />
    </video>
  );
};
