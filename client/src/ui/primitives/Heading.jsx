import React, { forwardRef } from "react";
import { cva } from "class-variance-authority";

const heading = cva("flex justify-center items-center", {
  variants: {
    intent: {
      primary: ["text-slate-800"],
      secondary: ["text-slate-50"],
    },
    size: {
      sm: ["text-sm"],
      md: ["text-base"],
      lg: ["text-lg"],
      xl: ["text-xl"],
      xl_2: ["text-2xl"],
    },
    defaultVariants: { intent: "primary", size: "lg" },
  },
});

const Heading = forwardRef(function ({ content, intent, size, ...props }, ref) {
  return (
    <h1 className={heading({ intent, size })} {...props} ref={ref}>
      {content}
    </h1>
  );
});

export default Heading;
