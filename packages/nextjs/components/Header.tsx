"use client";

import React, { useCallback, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bars3Icon } from "@heroicons/react/24/outline";
import { useOutsideClick } from "~~/hooks/scaffold-eth";

type HeaderMenuLink = {
  label: string;
  href: string;
  icon?: React.ReactNode;
  submenu?: HeaderMenuLink[];
};

export const menuLinks: HeaderMenuLink[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about-me",
  },
  {
    label: "Services",
    href: "",
    submenu: [
      { label: "For your Horse", href: "/horse-services" },
      { label: "For your Dog", href: "/dog-services" },
      { label: "For your Cat", href: "/cat-services" },
      { label: "For your Other Pets", href: "/other-animal-services" },
      { label: "Common Issues", href: "/common-issues" },
    ],
  },

  {
    label: "Resources",
    href: "",
    submenu: [
      { label: "Freebies", href: "/Freebies" },
      { label: "Media", href: "" },
      { label: "Diet", href: "" },
      { label: "Books", href: "" },
      { label: "Hygiene & Safety", href: "" },
    ],
  },
  {
    label: "Contact",
    href: "/contact",
    submenu: [{ label: "Policies", href: "/policies" }],
  },
];

const HeaderSubmenu = ({ submenu }: { submenu: HeaderMenuLink[] }) => {
  return (
    <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md">
      {submenu.map(({ label, href }) => (
        <li key={href}>
          <Link href={href} passHref className="block px-4 py-2 text-sm hover:bg-gray-100">
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const HeaderMenuLinks = () => {
  const pathname = usePathname();

  return (
    <>
      {menuLinks.map(({ label, href, icon, submenu }) => {
        const isActive = pathname === href;
        return (
          <li key={href} className="relative group">
            <Link
              href={href}
              passHref
              className={`${
                isActive ? "bg-secondary shadow-md" : ""
              } hover:bg-secondary hover:shadow-md focus:!bg-secondary active:!text-neutral py-1.5 px-3 text-sm rounded-full gap-6 grid grid-flow-col`}
            >
              {icon}
              <span>{label}</span>
            </Link>
            {submenu && submenu.length > 0 && (
              <div className="hidden group-hover:block">
                <HeaderSubmenu submenu={submenu} />
              </div>
            )}
          </li>
        );
      })}
    </>
  );
};

export const Header = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const burgerMenuRef = useRef<HTMLDivElement>(null);
  useOutsideClick(
    burgerMenuRef,
    useCallback(() => setIsDrawerOpen(false), []),
  );

  return (
    <div className="sticky top-0 navbar bg-white h-20 flex-shrink-0 justify-between z-20 shadow-md px-0 sm:px-2">
      <div className="navbar-start w-auto lg:w-1/2">
        <div className="lg:hidden dropdown" ref={burgerMenuRef}>
          <label
            tabIndex={0}
            className={`ml-1 btn btn-ghost ${isDrawerOpen ? "hover:bg-secondary" : "hover:bg-transparent"}`}
            onClick={() => {
              setIsDrawerOpen(prevIsOpenState => !prevIsOpenState);
            }}
          >
            <Bars3Icon className="h-1/2" />
          </label>
          {isDrawerOpen && (
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
              onClick={() => {
                setIsDrawerOpen(false);
              }}
            >
              <HeaderMenuLinks />
            </ul>
          )}
        </div>
        <Link href="/" passHref className="hidden lg:flex items-center gap-4 ml-4 mr-6 shrink-0">
          <div className="flex relative w-10 h-10">
            <Image alt="BAW Logo" className="cursor-pointer" fill src="/logo.png" />
          </div>
          <div className="flex flex-col">
            <span className="font-bold leading-tight">Birch Animal Wellness</span>
          </div>
        </Link>
        <ul className="hidden lg:flex lg:flex-nowrap menu menu-horizontal px-1 gap-3">
          <HeaderMenuLinks />
        </ul>
      </div>
    </div>
  );
};
