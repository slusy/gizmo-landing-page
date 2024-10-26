interface newsFormat {
  image: string;
  title: string;
  description: string;
  date: string;
}

type news = newsFormat[];

export const NEWS: news = [
  {
    image: "images/card-camera.png",
    title: "Advancements in Smart Home Security Systems",
    description:
      "Learn about the latest advancements in smart home security systems. Discover new features like AI-powered threat detection and seamless integr..",
    date: "Friday · June 28, 2024",
  },
  {
    image: "images/card-speaker.png",
    title: "Revolutionizing Home Automation with Smart Speakers",
    description:
      "Discover how smart speakers are transforming home automation. Learn about the latest features and how they integrate with other smart home d..",
    date: "Friday · July 12, 2024",
  },
  {
    image: "images/card-watch.png",
    title: "The Future of Wearable Technology",
    description:
      "Explore the future of wearable technology and how smart watches are leading the way. From health monitoring to seamless connectivity, see what’s next for these innovative devices. Explore the futu..",
    date: "Friday · July 12, 2024",
  },
  {
    image: "images/card-vr.png",
    title: "Next-Gen VR Headsets: What to Expect",
    description:
      "Get a sneak peek into the upcoming VR headsets that promise to elevate your virtual experiences. From enhanced resolution to intuitive controls, find out what’s in store for VR enthusiasts. Get a snea..",
    date: "Friday · July 12, 2024",
  },
  {
    image: "images/card-chip.png",
    title: "Intel Unveils Next-Gen Processors",
    description:
      "Intel has announced their latest line of processors, promising unprecedented performance and efficiency. With enhanced AI capabilities and improved security features, these processors ar..",
    date: "Friday · July 12, 2024",
  },
  {
    image: "images/card-graphics.png",
    title: "NVIDIA's New RTX GPUs: A Game Changer",
    description:
      "NVIDIA has introduced their latest RTX GPUs, bringing incredible advancements in graphics performance and real-time ray tracing. Gamers a..",
    date: "Friday · July 12, 2024",
  },
];
