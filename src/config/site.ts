export const siteConfig = {
  name: 'Vite + HeroUI',
  description: 'Make beautiful websites regardless of your design experience.',

  navItems: [{ label: 'Home', href: '/' }],

  navMenuItems: [
    { label: 'My Portfolio', url: '/myportfolio' },
    { label: 'My Interest', url: '/interest' },
    { label: 'Home', url: '/' },
    { label: 'Github', url: 'https://github.com/thangtran1' },
    { label: 'Instagram', url: 'https://instagram.com/tranvanthang22' },
    { label: 'Facebook', url: 'https://www.facebook.com/share/1Do8bcSUrs/' },
    { label: 'Tiktok', url: 'https://www.tiktok.com/@ch.b.golden' }
  ],

  links: {
    github: 'https://github.com/thangtran1',
    instagram: 'https://instagram.com/tranvanthang22',
    tiktok: 'https://www.tiktok.com/@ch.b.golden',
    discord: 'https://discord.com/users/thangzidane_84415'
  }
}

export type SiteConfig = typeof siteConfig
