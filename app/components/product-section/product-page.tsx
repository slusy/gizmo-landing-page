import Image from "next/image";
import React from "react";

interface Feature {
  icon: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  category: string;
  features: Feature[];
}

interface ProductDetails {
  [key: string]: Product;
}

const PRODUCT_DETAILS: ProductDetails = {
  productOne: {
    id: "watch",
    name: "Gizmo TNX",
    category: "Smart Watch",
    features: [
      {
        icon: "/icons/icon-heart.svg",
        description: "Continous heart rate tracking",
      },
      {
        icon: "/icons/icon-sleep.svg",
        description: "Sleep analysis and insights",
      },
      {
        icon: "/icons/icon-bloodOxygen.svg",
        description: "Blood oxygen level monitoring",
      },
      {
        icon: "/icons/icon-nfc.svg",
        description: "Contactless payments",
      },
      {
        icon: "/icons/icon-music.svg",
        description: "Music control",
      },
    ],
  },
  productTwo: {
    id: "vr",
    name: "Gizmo Fantasy",
    category: "VR Headset",
    features: [
      {
        icon: "/icons/icon-display.svg",
        description: "8K Resolution virtual display",
      },
    ],
  },
  productThree: {
    id: "speaker",
    name: "Gizmo Smart Pill",
    category: "Smart Speaker",
    features: [
      {
        icon: "/icons/icon-spatial.svg",
        description: "360-degree sound for immersive listening",
      },
      {
        icon: "/icons/icon-wave.svg",
        description: "Smart home devices controls with voice",
      },
    ],
  },
};

type CardProps = {
  icon: string;
  description: string;
};

const Card = ({ icon, description }: CardProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="border border-[#2A2A2A] rounded-full p-1 w-[20px] h-[20px] flex items-center justify-center">
        <Image src={icon} width={10} height={10} alt={description} />
      </div>
      <p className="text-xs text-[#6A6A6A]">{description}</p>
    </div>
  );
};

export const ProductPage: React.FC = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 mt-12 gap-2">
      {/* update image */}
      <div className="w-full h-[335px] p-8 flex flex-col gap-4 relative">
        <Image
          src="/images/featured-watch.png"
          alt="watch"
          fill
          className="-z-50"
        />

        <div>
          <h1 className="text-white text-2xl font-medium">
            {PRODUCT_DETAILS?.productOne?.name}
          </h1>
          <p className="text-sm text-[#6D6B6B]">
            {PRODUCT_DETAILS?.productOne?.category}
          </p>
        </div>
        <div className="flex flex-col gap-2">
          {PRODUCT_DETAILS?.productOne?.features?.map((item) => (
            <Card
              key={item?.description}
              icon={item?.icon}
              description={item?.description}
            />
          ))}
        </div>
        <button className="flex items-center gap-2 border border-[#2D2D2D] rounded-full py-2 px-3 self-start">
          <span className="text-white">Learn More</span>
          <div className="border border-[#343434] rounded-full p-2 w-[30px] h-[30px] flex items-center justify-center">
            <Image
              src="/icons/icon-redirect.svg"
              width={12}
              height={12}
              alt="redirect"
            />
          </div>
        </button>
      </div>
      <div className="flex flex-col gap-2">
        {/* Update image */}
        <div className="w-full h-[210px] p-8 flex flex-col gap-4 relative">
          <Image
            src="/images/featured-vr.png"
            alt="watch"
            fill
            className="-z-50"
          />
          <div>
            <h1 className="text-[#242424] text-2xl font-medium">
              {PRODUCT_DETAILS?.productTwo?.name}
            </h1>
            <p className="text-sm text-[#6D6B6B]">
              {PRODUCT_DETAILS?.productTwo?.category}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {PRODUCT_DETAILS?.productTwo?.features?.map((item) => (
              <Card
                key={item?.description}
                icon={item?.icon}
                description={item?.description}
              />
            ))}
          </div>
          <button className="flex items-center gap-2 border border-[#DADADA] rounded-full py-2 px-3 self-start">
            <span className="text-[#414141]">Learn More</span>
            <div className="border border-[#C0C0C0] rounded-full p-2 w-[30px] h-[30px] flex items-center justify-center">
              <Image
                src="/icons/icon-redirect.svg"
                width={12}
                height={12}
                alt="redirect"
              />
            </div>
          </button>
        </div>
        {/* Finished section */}
        <div className="w-full h-[260px] p-8 flex flex-col gap-4 relative overflow-hidden rounded-3xl border border-[#D8D8D8]">
          <Image
            src="/images/featured-speaker.png"
            alt="watch"
            width={360}
            height={360}
            className="-z-50 absolute right-[-40px] bottom-[-60px]"
          />
          <div>
            <h1 className="text-[#242424] text-2xl font-medium">
              {PRODUCT_DETAILS?.productThree?.name}
            </h1>
            <p className="text-sm text-[#6D6B6B]">
              {PRODUCT_DETAILS?.productThree?.category}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {PRODUCT_DETAILS?.productThree?.features?.map((item) => (
              <Card
                key={item?.description}
                icon={item?.icon}
                description={item?.description}
              />
            ))}
          </div>
          <button className="flex items-center gap-2 border border-[#DADADA] rounded-full py-2 px-3 self-start">
            <span className="text-[#414141]">Learn More</span>
            <div className="border border-[#C0C0C0] rounded-full p-2 w-[30px] h-[30px] flex items-center justify-center">
              <Image
                src="/icons/icon-redirect.svg"
                width={12}
                height={12}
                alt="redirect"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
