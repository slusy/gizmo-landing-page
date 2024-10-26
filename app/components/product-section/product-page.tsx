import Image from "next/image";
import React from "react";
import { ProductOne } from "./product-one";
import { ProductTwo } from "./product-two";
import { ProductThree } from "./product-three";

export const ProductPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-2">
      <ProductOne />
      <div className="flex flex-col gap-2">
        <ProductTwo />
        <ProductThree />
      </div>
    </div>
  );
};
