"use client";

import React from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const shimmer = {
  initial: { top: -25, left: -20, display: "none" },
  animate: { top: 0, left: 0, display: "block" },
};

interface Props {
  bgColor: string;
}

export const ShimmerButtonText = (props: Props) => {
  const { bgColor } = props;

  const iconColor = {
    initial: { fill: "#949494" },
    animate: { fill: bgColor === "white" ? "#000" : "#fff" },
  };

  return (
    <motion.button
      initial="initial"
      animate="initial"
      whileHover="animate"
      className={classNames({
        "flex items-center gap-2 border rounded-full py-2 px-3 self-start":
          true,
        "border-[#DADADA]": bgColor === "white",
        "border-[#2D2D2D]": bgColor === "black",
      })}
    >
      <span
        className={classNames({
          "text-[#414141]": bgColor === "white",
          "text-white": bgColor === "black",
        })}
      >
        Learn More
      </span>
      <div
        className={classNames({
          "border  rounded-full p-2 w-[35px] h-[35px] flex items-center justify-center relative overflow-hidden":
            true,
          "border-[#C0C0C0]": bgColor === "white",
          "border-[#343434]": bgColor === "black",
        })}
      >
        <motion.div
          variants={shimmer}
          className={classNames({
            "absolute w-full h-full rotate-45": true,
            "bg-[#cecece]": bgColor === "white",
            "bg-[#484848]": bgColor === "black",
          })}
        ></motion.div>
        <motion.svg
          variants={iconColor}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          xmlns="http://www.w3.org/2000/svg"
          style={{ zIndex: 50 }}
        >
          <path d="M0.37777 9.07533C0.182508 9.27059 0.182508 9.58717 0.37777 9.78243C0.573032 9.97769 0.889614 9.97769 1.08488 9.78243L0.37777 9.07533ZM9.76877 0.891434C9.76877 0.615291 9.54491 0.391434 9.26877 0.391434L4.76877 0.391434C4.49263 0.391434 4.26877 0.615292 4.26877 0.891434C4.26877 1.16758 4.49263 1.39143 4.76877 1.39143L8.76877 1.39143L8.76877 5.39143C8.76877 5.66758 8.99263 5.89143 9.26877 5.89143C9.54491 5.89143 9.76877 5.66758 9.76877 5.39143L9.76877 0.891434ZM1.08488 9.78243L9.62232 1.24499L8.91521 0.537881L0.37777 9.07533L1.08488 9.78243Z" />
        </motion.svg>
      </div>
    </motion.button>
  );
};
