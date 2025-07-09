import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/class-merge";

const navLink = cva("text-black bg-brand cursor-pointer group", {
  variants: {
    intent: {
      link: "flex justify-center items-center rounded-md hover:text-accent",
      iconLink: "flex justify-start gap-4 items-center rounded-md bg-brand_100 px-3 py-2 hover:text-accent md:flex-col md:bg-brand md:text-sm md:gap-1 md:hover:bg-brand_100",
    },
  },
});

export default function NavLink({ intent, label, size, icon, ...props }) {
  return (
    <>
      <span className={cn(navLink({ intent, size }))} {...props}>
        {icon}
        {label}
      </span>
    </>
  );
}
