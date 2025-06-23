"use client";
import * as React from "react";

import { Link } from "@/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { signOut, useSession } from "next-auth/react";
import { UserSession } from "@/types";
import {
  IconArrowRightFromBracket,
  IconBookBookmark,
  IconChevronDown,
  IconCircleUser,
  IconUser,
} from "../icons";
import { useTranslations } from "next-intl";
import avatar from "../../assets/images/resources/avatar.svg";
import Image from "next/image";

export interface IAccountProps {
  openMenu?: () => void;
  session?: any;
}

export default function Account({ openMenu, session }: IAccountProps) {
  const t = useTranslations("account");
  // const { data: session } = useSession();
  let user = session && (session.user as UserSession | null);
  // console.log('account', user);
  let login = "login";
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger
          aria-label={(user && user.firstname + user.lastname) || "Aria Name"}
          className="relative z-50 flex cursor-pointer items-center gap-x-1 fill-slate-200 p-2 text-base outline-hidden lg:px-2 lg:py-1"
        >
          {session ? (
            <div className="bg-secondary flex h-8 w-8 items-center justify-center rounded-full text-white uppercase">
              {session && session?.user && session.user
                ? `${user && user.firstname.charAt(0)}${
                    user && user.lastname.charAt(0)
                  }`
                : ""}
            </div>
          ) : (
            <Image
              src={avatar}
              alt="avatar icon"
              width={40}
              height={40}
              className="h-10 w-10"
            />
          )}
          <IconChevronDown
            className="fill-text1 relative top-px ml-1 h-4 w-4 transition duration-200"
            aria-hidden="true"
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="relative z-100 m-0 box-border max-w-[312px] min-w-[312px] border-0 px-4 py-3"
          style={{
            boxShadow: "rgba(0, 0, 0, 0.2) 0px 0px 10px 0px",
          }}
        >
          {" "}
          {!session && (
            <>
              <DropdownMenuItem className="border-b-1 p-0">
                <Link
                  href={`/booking`}
                  className="flex w-full flex-col items-center justify-center gap-8 rounded-lg p-2"
                  passHref
                >
                  <Image
                    src={avatar}
                    alt="avatar icon"
                    width={104}
                    height={104}
                    className="h-[104px] w-[104px]"
                  />
                  <span className="text-center">strongbody@example.com</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/${login}`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">Buy Voice Translation</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">My Dashboard & Message</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">Post Request</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">Referrals</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">Setting</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="border-b-1 p-0">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">Help center</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">Become a Seller</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">Create Product/Service/Course</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="border-b-1 p-0">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">Wholesale Platform</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/booking`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <span className="text-lg">Log out</span>
                </Link>
              </DropdownMenuItem>
              {/* <DropdownMenuSeparator /> */}
            </>
          )}
          {session && (
            <>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/account/bookings`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <IconBookBookmark className="fill-text1 h-4 w-4" />
                  <span>{t("my_bookings")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem className="p-0 hover:bg-transparent">
                <Link
                  href={`/account/profile`}
                  className="flex items-center gap-x-2 rounded-lg p-2"
                  passHref
                >
                  <IconUser className="fill-text1 h-4 w-4" />
                  <span> {t("profile")}</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="flex cursor-pointer items-center gap-x-2 rounded-lg p-2">
                <IconArrowRightFromBracket className="fill-text1 h-4 w-4" />
                <span onClick={() => signOut()} className="ml-1">
                  {t("logout")}
                </span>
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
}
