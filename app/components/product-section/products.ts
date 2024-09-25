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

export default PRODUCT_DETAILS;
