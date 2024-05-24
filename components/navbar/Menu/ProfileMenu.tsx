"use client";

<<<<<<< HEAD
import { ChevronDownIcon } from "@heroicons/react/24/solid";
=======
import {
  ChevronDownIcon,
  Cog6ToothIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
>>>>>>> master
import {
  Avatar,
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
<<<<<<< HEAD
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { ProfileMenuItems } from "../List/ProfileMenuList";
import { CommonProps } from "@/constants/constants";

export default function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
=======
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
>>>>>>> master

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
<<<<<<< HEAD
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
=======
            src="https://static.thenounproject.com/png/4035887-200.png"
>>>>>>> master
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
<<<<<<< HEAD
        {ProfileMenuItems.map(({ id, label, icon }) => {
          const isLastItem = id === ProfileMenuItems.length;
          return (
            <MenuItem
              {...CommonProps}
              key={id}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                {...CommonProps}
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
=======
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
>>>>>>> master
      </MenuList>
    </Menu>
  );
}
