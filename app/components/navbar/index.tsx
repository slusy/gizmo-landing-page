"use client";

import classNames from "classnames";
import Image from "next/image";
import React, { useState } from "react";

interface navLinkFormat {
  id: string;
  label: string;
  link: string;
  last?: boolean;
}

type navLink = navLinkFormat[];

const NAV_LINKS: navLink = [
  {
    id: "home",
    label: "Home",
    link: "#",
  },
  {
    id: "product",
    label: "Products",
    link: "#",
  },
  {
    id: "innovation",
    label: "Innovations",
    link: "#",
  },
  {
    id: "news",
    label: "News",
    link: "#",
  },
  {
    id: "about",
    label: "About Us",
    link: "#",
  },
  {
    id: "contact",
    label: "Contact Us",
    link: "#",
    last: true,
  },
];

const Navbar: React.FC = () => {
  const [showMobileNav, setShowMobileNav] = useState<Boolean>(false);
  const [selectedLink, setSelectedLink] = useState("home");

  return (
    <>
      <nav className="mb-12 flex items-center justify-between lg:hidden">
        <div>
          <Image src="logo/full-logo.svg" alt="logo" width={120} height={120} />
        </div>
        <button
          className={classNames({
            "border rounded-full w-10 h-10 p-2 flex items-center justify-center z-[1000]":
              true,
            "border-[#C4CACB]": !showMobileNav,
            "border-transparent bg-[#3D3D3D] fixed right-4": showMobileNav,
          })}
          onClick={() => setShowMobileNav((prev) => !prev)}
        >
          <Image
            src={
              showMobileNav
                ? "icons/icon-close.svg"
                : "icons/icon-hamburger.svg"
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
            <>
              <a
                key={`mobile-nav-key-${item?.id}`}
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
            </>
          ))}
        </div>
      </nav>
      <nav className="hidden lg:block">Desktop nav</nav>
    </>
  );
};

export default Navbar;
