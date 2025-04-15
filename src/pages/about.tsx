import { FaGithub } from "react-icons/fa6";
import { LuTwitter } from "react-icons/lu";
import { MdFacebook } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { TbBrandGravatar } from "react-icons/tb";
import { HiDotsVertical } from "react-icons/hi";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";

import DefaultLayout from "@/layouts/default";

const bio = {
  name: "Vanthang",
  age: "21 Age - crypto investors",
  avatar: "/vite.svg",
  links: [
    {
      label: "Portfolio Website",
      url: "https://your-portfolio.com",
      icon: <TbBrandGravatar />,
    },
    {
      label: "Github",
      url: "https://github.com/thangtran1",
      icon: <FaGithub />,
    },
    {
      label: "Twitter",
      url: "https://twitter.com/your-twitter",
      icon: <LuTwitter />,
    },
    {
      label: "Profile Facebook",
      url: "https://facebook.com/your-profile",
      icon: <MdFacebook />,
    },
    {
      label: "Telegram",
      url: "https://t.me/your-telegram",
      icon: <FaTelegram />,
    },
  ],
};

export default function BioPage() {
  return (
    <DefaultLayout>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 pb-10">
        <img
          alt="Avatar"
          className="w-24 h-24 rounded-full mb-4 object-cover"
          src={bio.avatar}
        />
        <h1 className="text-xl font-bold text-center">@{bio.name}</h1>
        <p className="text-sm text-gray-500 text-center">{bio.age}</p>

        <div className="mt-6 w-full max-w-md flex flex-col gap-3">
          {bio.links.map((link, idx) => (
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
                          e.preventDefault(); // 🛑 ngăn click vào thẻ <a>
                          e.stopPropagation(); // 🛑 ngăn lan ra ngoài
                        }}
                      >
                        <HiDotsVertical className="text-default-300" />
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

        {/* Footer (giống linktree) */}
        <div className="mt-10 w-full text-center text-sm text-gray-400">
          <div className="w-fit mx-auto bg-white px-4 py-1 rounded-full shadow-sm flex items-center gap-2 border">
            <span className="text-black font-medium">linktr.ee/you ✕</span>
          </div>
          <p className="mt-2">Tham gia cùng {bio.name} trên Linktree</p>
        </div>
      </section>
    </DefaultLayout>
  );
}
