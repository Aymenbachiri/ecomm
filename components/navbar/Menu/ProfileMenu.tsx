"use client";

import {
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { CommonProps } from "@/constants/constants";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathName = usePathname();
  const currentLanguage = pathName.split("/")[1] || "en";

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          {...CommonProps}
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://static.thenounproject.com/png/4035887-200.png"
            placeholder=""
            onPointerEnterCapture={() => {}}
            onPointerLeaveCapture={() => {}}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList {...CommonProps} className="p-1">
        <MenuItem
          {...CommonProps}
          onClick={closeMenu}
          className="flex items-center gap-2 rounded w-full"
        >
          <Link
            className="flex items-center gap-2 rounded w-full"
            href={`/${currentLanguage}/dashboard`}
          >
            <UserCircleIcon className="w-6" />
            <span className="flex-grow">Dashboard</span>
          </Link>
        </MenuItem>
        <MenuItem
          {...CommonProps}
          onClick={closeMenu}
          className="flex items-center gap-2 rounded w-full"
        >
          <Link
            className="flex items-center gap-2 rounded w-full"
            href={`/${currentLanguage}/edit-profile`}
          >
            <Cog6ToothIcon className="w-6" />
            <span className="flex-grow">Edit Profile</span>
          </Link>
        </MenuItem>
        <MenuItem
          {...CommonProps}
          onClick={() => signOut()}
          className="flex items-center gap-2 rounded w-full text-red-600"
        >
          <PowerIcon className="w-6" />
          <span className="flex-grow">Sign Out</span>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
