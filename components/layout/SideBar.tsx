"use client";

import React, { useState } from "react";
import { Menus } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();
  return (
    <nav
      className={` ${
        open ? "w-72" : "w-20 "
      } bg-sky-800 h-screen p-5 duration-300 sticky top-0 left-0 z-50`}
    >
      <img
        src="/assets/control.png"
        className={`absolute cursor-pointer -right-3 top-6 w-7 border-sky-800
           border-2 rounded-full  ${!open && "rotate-180"}`}
        onClick={() => setOpen(!open)}
      />
      <div className="flex gap-x-4 items-center">
        <img
          src="/assets/logo.png"
          className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
        />
        <h1
          className={`text-white origin-left font-medium text-xl duration-200 truncate ${
            !open && "hidden"
          }`}
        >
          HR System
        </h1>
      </div>
      <ul className="pt-6 ">
        {Menus.map((Menu, index) => (
          <li key={index}>
            <Link
              href={Menu.path}
              className={`flex h-12 rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                Menu.path === pathname && "bg-light-white"
              } `}
            >
              <Image
                width={25}
                height={25}
                src={`/assets/${Menu.src}.svg`}
                alt="icon"
              />
              <span className={`truncate origin-left duration-200`}>
                {Menu.title}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SideBar;
