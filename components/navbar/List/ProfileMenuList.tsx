"use client";
import {
  Cog6ToothIcon,
  PowerIcon,
  UserCircleIcon,
} from "@heroicons/react/24/solid";
import { signOut } from "next-auth/react";

export default function ProfileMenuList() {
  return (
    <ul>
      <li>
        <UserCircleIcon />
        Dashboard
      </li>
      <li>
        <Cog6ToothIcon />
        Edit Profile
      </li>
      <li onClick={() => signOut()}>
        <PowerIcon />
        Sign Out
      </li>
    </ul>
  );
}
