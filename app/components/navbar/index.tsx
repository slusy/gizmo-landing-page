import React from "react";
import { MobileNavbar } from "./mobile-navbar";
import { DesktopNavbar } from "./desktop-navbar";

const Navbar: React.FC = () => {
  return (
    <div className="max-w-[1300px] absolute w-full pt-6">
      <MobileNavbar />
      <DesktopNavbar />
    </div>
  );
};

export default Navbar;
