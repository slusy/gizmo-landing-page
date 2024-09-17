"use client";

import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";
import NAV_LINKS from "./navlinks";

export const MobileNavbar: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = useState<Boolean>(false);
  const [selectedLink, setSelectedLink] = useState<String>("home");

  return (
    <nav className="mb-12 flex items-center justify-between lg:hidden px-4">
      <div>
        <Image src="logo/full-logo.svg" alt="logo" width={120} height={120} />
      </div>
      <button
        className={classNames({
          "border rounded-full w-10 h-10 p-2 flex items-center justify-center z-[1000] backdrop-blur-md":
            true,
          "border-[#C4CACB]": !showMobileNav,
          "border-transparent bg-[#3D3D3D] fixed right-4": showMobileNav,
        })}
        onClick={() => setShowMobileNav((prev) => !prev)}
      >
        <Image
          src={
            showMobileNav ? "icons/icon-close.svg" : "icons/icon-hamburger.svg"
          }
          alt="logo"
          width={15}
          height={15}
        />
      </button>
      <div
        className={classNames({
          "bg-[#313131] top-0 fixed left-0 w-full h-full flex flex-col items-center justify-center gap-4":
            true,
          block: showMobileNav,
          hidden: !showMobileNav,
        })}
      >
        {NAV_LINKS?.map((item) => (
          <div
            key={`mobile-nav-key-${item?.id}`}
            className="w-full flex flex-col items-center gap-4"
          >
            <a
              href={item?.link}
              className={classNames({
                "text-3xl": true,
                "text-[#3064E8] border-b-2 border-[#3064E8]":
                  item?.id === selectedLink,
                "text-[#6E6E6E]": item?.id !== selectedLink,
              })}
              onClick={() => {
                setSelectedLink(item?.id);
                setShowMobileNav(false);
              }}
            >
              {item?.label}
            </a>
            {!item?.last && (
              <div className="w-1/2 h-[2px] bg-[rgba(153,182,255,0.06)]"></div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};
