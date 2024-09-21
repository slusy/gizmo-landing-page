import React from "react";
import { VideoBackground } from "./video-background";
import { LandingMessage } from "./landing-message";

export const LandingSection: React.FC = () => {
  return (
    <div className="h-screen overflow-hidden flex items-center">
      <VideoBackground />
      <LandingMessage />
    </div>
  );
};
