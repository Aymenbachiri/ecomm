"use client";
import { Navbar, Typography } from "@material-tailwind/react";
import { CommonProps } from "@/constants/constants";
import MobileNavbar from "./MobileNavbar";
import useResponsiveNav from "@/hooks/useResponsiveNav";
import HamburgerIcon from "./HamburgerIcon";
import ProfileMenu from "./Menu/ProfileMenu";
import ThemeSwitch from "../ThemeSwitch";
import Link from "next/link";
import TranslationMenu from "./Menu/TranslationMenu";
import logo from "/public/assets/logo.png";
import Image from "next/image";
import NavList from "./List/NavList";
import Cart from "@/svg/Cart";
import { usePathname } from "next/navigation";

export default function StickyNavbar() {
  const { openNav, setOpenNav } = useResponsiveNav();
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] || "en";

  return (
    <div className="max-h-[768px] container mx-auto">
      <Navbar
        {...CommonProps}
        className="sticky top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4"
      >
        <div className="flex items-center justify-between text-blue-gray-900">
          <Typography
            {...CommonProps}
            className="mr-4 cursor-pointer font-medium"
          >
            <Link href="/">
              <Image
                className="rounded-full"
                src={logo}
                alt="logo"
                width={50}
                height={50}
                sizes="(min-width: 400px) 50px, calc(10vw + 12px)"
              />
            </Link>
          </Typography>
          <div className="flex items-center gap-4">
            <div className="mr-4 hidden lg:block">
              <NavList />
            </div>
            <ProfileMenu />
            <TranslationMenu />
            <ThemeSwitch />
            <Link
              href={`/${currentLanguage}/cart`}
              className="flex items-center md:hidden relative"
            >
              <div className="absolute w-4 h-4 rounded-full z-10 right-[-3px] top-[-10px] flex items-center justify-center text-[10px] text-white bg-red-600">
                0
              </div>
              <Cart />
            </Link>
            <HamburgerIcon openNav={openNav} setOpenNav={setOpenNav} />
          </div>
        </div>
        <MobileNavbar openNav={openNav} />
      </Navbar>
    </div>
  );
}
