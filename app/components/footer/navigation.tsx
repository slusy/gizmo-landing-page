import React from "react";

interface FooterLink {
  link: string;
  placeholder: string;
}

const FOOTER_LINKS: FooterLink[] = [
  {
    link: "#",
    placeholder: "Our Missions",
  },
  {
    link: "#",
    placeholder: "How it works",
  },
  {
    link: "#",
    placeholder: "Book a call",
  },
  {
    link: "#",
    placeholder: "News",
  },
  {
    link: "#",
    placeholder: "Blog",
  },
];

export const Navigation: React.FC = () => {
  return (
    <div className="text-[#6E6E6E] font-medium flex items-center justify-center gap-4 lg:gap-8 flex-wrap px-6 lg:text-lg">
      {FOOTER_LINKS?.map((item) => (
        <a
          key={`footer-link-${item?.placeholder}-key`}
          href={item?.link}
          className="hover:text-[#3064E8] border-b border-transparent hover:border-[#3064E8] transition-colors duration-500"
        >
          {item?.placeholder}
        </a>
      ))}
    </div>
  );
};
