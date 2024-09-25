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

export default NAV_LINKS;