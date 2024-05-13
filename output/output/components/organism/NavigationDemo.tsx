"use client";

import * as React from "react";
import Link from "next/link";
import cn from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    className: string;
    title: string;
  }
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export type NavigationData = Array<
  | {
      key: "MENU";
      title: string;
      href?: string;
      contentClass?: string;
      content: Array<{
        title: string;
        href: string;
        itemClass?: string;
      }>;
    }
  | {
      key: "LINK";
      title: string;
      href: string;
      contentClass?: string;
    }
>;

function NavigationMenuDemo({
  navigationData,
  orientation = "horizontal",
}: {
  navigationData: NavigationData;
  orientation?: "horizontal" | "vertical";
}) {
  return (
    <NavigationMenu>
      <NavigationMenuList
        className={cn(
          orientation === "horizontal" ? "" : "flex-col items-start",
        )}
      >
        {navigationData.map((data, i) => {
          if (data.key === "LINK") {
            return (
              <NavigationMenuItem key={data.title + String(i)}>
                <Link
                  className={cn(
                    navigationMenuTriggerStyle(),
                    data.contentClass,
                  )}
                  href={data.href}
                  passHref
                >
                  <NavigationMenuLink>{data.title}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={data.title + String(i)}>
              <NavigationMenuTrigger>{data.title}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className={cn("grid w-full gap-3 p-4 ", data.contentClass)}>
                  {data.content.map((item) => (
                    <ListItem
                      className={item.itemClass || ""}
                      key={item.title}
                      title={item.title}
                      href={item.href}
                    />
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          );
        })}

        {/* <NavigationMenuItem>
          <NavigationMenuTrigger>Components</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={cn(
                "grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ",
              )}
            >
              {components.map((component) => (
                <ListItem
                  className=""
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem> */}
        {/* <NavigationMenuItem>
          <Link className={navigationMenuTriggerStyle()} href="/docs" passHref>
            <NavigationMenuLink>Documentation</NavigationMenuLink>
          </Link>
        </NavigationMenuItem> */}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

export default NavigationMenuDemo;
