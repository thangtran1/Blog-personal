import { Kbd } from '@heroui/kbd'
import { Link } from '@heroui/link'
import { Input } from '@heroui/input'
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem
} from '@heroui/navbar'

import { siteConfig } from '@/config/site'
import { ThemeSwitch } from '@/components/theme-switch'
import { InstagramIcon, GithubIcon, DiscordIcon, TiktokIcon, SearchIcon } from '@/components/icons'
import { Logo } from '@/components/icons'
import { useSearch } from '@/shared/search'

export const Navbar = () => {
  const { searchValue, setSearchValue } = useSearch()
  const searchInput = (
    <Input
      aria-label="Search"
      classNames={{
        inputWrapper: 'bg-default-100',
        input: 'text-sm'
      }}
      endContent={
        <Kbd className="hidden lg:inline-block" keys={['command']}>
          K
        </Kbd>
      }
      labelPlacement="outside"
      placeholder="Search..."
      startContent={
        <SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
      }
      type="search"
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
    />
  )

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link className="flex justify-start items-center gap-1" color="foreground" href="/">
            <Logo />
            <p className="font-bold text-inherit">TVT</p>
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal href={siteConfig.links.tiktok} title="Instagram">
            <TiktokIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.instagram} title="Instagram">
            <InstagramIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.discord} title="Discord">
            <DiscordIcon className="text-default-500" />
          </Link>
          <Link isExternal href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>

        <NavbarItem className="hidden lg:flex">{searchInput}</NavbarItem>
        <div>DanDevIT</div>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        {searchInput}
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems
            .filter((item) => item.label.toLowerCase().includes(searchValue.toLowerCase()))
            .map((item, index) => (
              <NavbarMenuItem key={`${item.label}-${index}`}>
                <Link
                  color={
                    index === 2 || index === 0
                      ? 'primary'
                      : index === siteConfig.navMenuItems.length - 1
                        ? 'danger'
                        : 'foreground'
                  }
                  href={item.url}
                  size="lg"
                  target="_blank"
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  )
}
