"use client";

import Image from "next/image";
import React, { useState } from "react";
import NAV_LINKS from "./navlinks";
import classNames from "classnames";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from "framer-motion";

export const DesktopNavbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState<Boolean>(false);
  const [prevScroll, setPrevScroll] = useState<number>(0);
  const [selectedLink, setSelectedLink] = useState<String>("home");

  const update = (latest: number, prev: number) => {
    if (latest < prev) {
      setHidden(false);
    } else if (latest > 100 && latest > prev) {
      setHidden(true);
    }
  };

  useMotionValueEvent(scrollY, "change", (latest: number) => {
    update(latest, prevScroll);
    setPrevScroll(latest);
  });

  return (
    <nav className="hidden lg:grid grid-cols-1 items-center">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="col-start-1 col-end-2 row-start-1 row-end-2"
      >
        <Image src="logo/full-logo.svg" alt="logo" width={130} height={130} />
      </motion.div>
      <AnimatePresence>
        {!hidden && (
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="fixed col-start-1 col-end-2 row-start-1 row-end-2 self-center justify-self-center flex items-center gap-1 border border-[#C4CACB] px-2 py-[6px] rounded-full backdrop-blur-md z-[99999]"
          >
            {NAV_LINKS?.map((item) => (
              <a
                href={item?.link}
                key={`desktop-nav-key-${item?.id}`}
                className={classNames({
                  "rounded-full px-5 py-2 text-sm relative transition-[color] duration-700":
                    true,
                  "text-white": item?.id === selectedLink,
                  "hover:bg-gray-200 text-[#4A4A4A]": item?.id !== selectedLink,
                })}
                onClick={() => setSelectedLink(item?.id)}
              >
                {item?.label}
                {selectedLink === item?.id ? (
                  <motion.div
                    transition={{
                      layout: {
                        duration: 0.5,
                        ease: "anticipate",
                      },
                    }}
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      background: "#3064E8",
                      borderRadius: "9999px",
                      zIndex: -10,
                    }}
                    layoutId="highlight"
                  />
                ) : null}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
