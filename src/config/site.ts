export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Vite + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
  ],
  navMenuItems: [
    {
      label: "My Portfolio",
      url: "/myportfolio",
    },
    {
      label: "Home",
      url: "/",
    },
    {
      label: "Tiktok",
      url: "https://www.tiktok.com/@ch.b.golden",
    },
    {
      label: "Team",
      url: "/team",
    },
    {
      label: "Calendar",
      url: "/calendar",
    },
    {
      label: "Settings",
      url: "/settings",
    },
    {
      label: "Help & Feedback",
      url: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    tiktok: "https://www.tiktok.com/@ch.b.golden",
    github: "https://github.com/thangtran1",
    instagram: "https://instagram.com/tranvanthang22",
    discord: "https://discord.com/users/thangzidane_84415",
  },
};
