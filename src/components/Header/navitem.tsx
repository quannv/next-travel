"use client";
import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { MenuItemProps } from "@/types";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { getIcon } from "@/lib/iconMap";
export interface INavItemProps {
  menuItem: MenuItemProps[];
}

export default function NavItem({ menuItem }: INavItemProps) {
  return (
    <div className="hidden items-center gap-x-2 lg:flex">
      <NavigationMenu>
        <NavigationMenuList className="flex gap-6 p-0">
          {menuItem &&
            menuItem?.length > 0 &&
            menuItem?.map((item: MenuItemProps) => (
              <NavigationMenuItem
                key={item.id}
                className="menu-item relative mb-0"
              >
                {item.children && item.children.length > 0 ? (
                  <NavigationMenuTrigger className="z-50 bg-transparent px-4 py-2 text-base font-medium">
                    <Link
                      href={`${item.url ? item.url : "#"}`}
                      aria-label={item.title}
                      passHref
                    >
                      {getIcon(item.icon)}
                    </Link>
                  </NavigationMenuTrigger>
                ) : (
                  <Link
                    href={`${item.url ? item.url : "#"}`}
                    aria-label={item.title}
                    className={"bg-transparent px-4 py-2 text-base font-medium"}
                    passHref
                  >
                    {getIcon(item.icon)}
                  </Link>
                )}

                {item.children && item.children.length > 0 && (
                  <ul className="submenu text-text1 absolute top-full left-0 z-10000 grid w-[100px] gap-3 rounded-lg bg-white p-4 shadow-lg md:w-[200px] md:grid-cols-1 lg:w-[300px]">
                    {item.children &&
                      item.children.length > 0 &&
                      item.children.map((child) => (
                        <ListItem
                          key={child.title}
                          title={child.title}
                          href={child.url || ""}
                        ></ListItem>
                      ))}
                  </ul>
                )}
              </NavigationMenuItem>
            ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

interface ListItemProps {
  className?: string;
  title: string;
  children?: React.ReactNode;
  href: string;
  [key: string]: any;
}

const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: ListItemProps) => {
  return (
    <li>
      <Link
        href={`${href}`}
        aria-label={title}
        className={cn(
          "hover:bg-accent hover:text-primary focus:bg-accent focus:text-primary mb-0 block space-y-1 rounded-md p-3 leading-none no-underline outline-hidden transition-colors select-none",
          className,
        )}
        {...props}
      >
        <div className="cursor-pointer">
          <div className="leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </div>
      </Link>
    </li>
  );
};
