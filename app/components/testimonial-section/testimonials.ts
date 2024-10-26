interface testimonialFormat {
  id: number;
  message: string;
  profileImage: string;
  name: string;
  product: string;
}

type testimonial = testimonialFormat[];

const TESTIMONIAL: testimonial = [
  {
    id: 1,
    message:
      "The VR Headset is amazing! Stunning visuals and an immersive experience. Comfortable for extended use.",
    profileImage: "people/user-1.png",
    name: "Jane",
    product: "VR Headset",
  },
  {
    id: 2,
    message:
      "The Smart Watch is fantastic. Great health monitoring and stylish design. Impressive battery life. Highly recommended!",
    profileImage: "people/user-2.png",
    name: "John",
    product: "Smart Watch",
  },
  {
    id: 3,
    message:
      "The Smart Speaker is essential to my routine. Outstanding sound quality and smart home control. Multi-room audio is a big plus. ",
    profileImage: "people/user-3.png",
    name: "Chuck",
    product: "Smart Speaker",
  },
];

export default TESTIMONIAL;
