import { FaGithub, FaFutbol } from "react-icons/fa6";
import { MdFacebook } from "react-icons/md";
import { TbBrandGravatar } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";

import { TiktokIcon, InstagramIcon } from "@/components/icons";
import DefaultLayout from "@/layouts/default";
import { useSearch } from "@/shared/search";

const bio = {
  name: "Vanthang",
  age: "21 Age - crypto investors",
  avatar: "/avatar.jpg",
  links: [
    {
      label: "My Portfolio",
      url: "/myportfolio",
      icon: <TbBrandGravatar />,
      isInternal: true,
    },
    {
      label: "My Interest",
      url: "/interest",
      icon: <FaFutbol />,
      isInternal: true,
    },
    {
      label: "Github",
      url: "https://github.com/thangtran1",
      icon: <FaGithub />,
    },
    {
      label: "Instagram",
      url: "https://instagram.com/tranvanthang22",
      icon: <InstagramIcon />,
    },
    {
      label: "Profile Facebook",
      url: "https://www.facebook.com/share/1Do8bcSUrs/",
      icon: <MdFacebook />,
    },
    {
      label: "Tiktok",
      url: "https://www.tiktok.com/@ch.b.golden",
      icon: <TiktokIcon />,
    },
  ],
};

export default function Myportfolio() {
  const { searchValue } = useSearch();

  const filteredLinks = bio.links.filter((link) =>
    link.label.toLowerCase().includes(searchValue.toLowerCase())
  );
  return (
    <DefaultLayout>
      <section className="min-h-[calc(100vh-130px)] flex flex-col items-center justify-center px-4">
        <img
          alt="Avatar"
          className="w-28 h-28 rounded-full mb-4 object-cover"
          src={bio.avatar}
        />
        <h1 className="text-xl font-bold text-center">@{bio.name}</h1>
        <p className="text-sm text-gray-500 text-center">{bio.age}</p>

        <div className="mt-6 w-full max-w-md flex flex-col gap-3">
          {filteredLinks.map((link, idx) => (
            <a
              key={idx}
              className="group flex items-center justify-between w-full bg-green-500 hover:bg-green-400 transition-all duration-300 ease-in-out text-white px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:scale-[1.02]"
              href={link.url}
              rel="noreferrer"
              target="_blank"
            >
              <div className="flex items-center justify-between w-full">
                <div className="border border-white/30 bg-white/10 p-2 rounded-lg group-hover:rotate-6 transition duration-300">
                  {typeof link.icon === "string" ? (
                    <img
                      alt=""
                      className="w-6 h-6 rounded-full"
                      src={link.icon}
                    />
                  ) : (
                    <span className="text-white text-xl">{link.icon}</span>
                  )}
                </div>
                <div className="text-white text-center font-medium group-hover:tracking-wide transition-all duration-300">
                  {link.label}
                </div>
                <div className="text-xl opacity-50 group-hover:opacity-100 transition duration-300">
                  <Dropdown>
                    <DropdownTrigger>
                      <Button
                        isIconOnly
                        size="sm"
                        variant="light"
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                        }}
                      >
                        <HiDotsVertical
                          className="text-default-300 "
                          size={20}
                          color="black"
                        />
                      </Button>
                    </DropdownTrigger>
                    <DropdownMenu>
                      <DropdownItem key="view">View</DropdownItem>
                      <DropdownItem key="edit">Edit</DropdownItem>
                      <DropdownItem key="delete">Delete</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
