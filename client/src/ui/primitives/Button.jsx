import { cva } from "class-variance-authority";
import { cn } from "../../utils/class-merge";

const button = cva(
  "flex justify-center items-center capitalize whitespace-nowrap hover:text-accent hover:bg-brand_100  disabled:cursor-not-allowed disabled:opacity-35 disabled:hover:text-slate-300 disabled:hover:bg-brand text-black bg-brand group",
  {
    variants: {
      intent: {
        primary: "w-full text-md rounded-md px-3 py-2  bg-brand_100 hover:opacity-80 hover:text-accent",
        navBtn: "py-2 px-3 bg-brand_100 gap-4 justify-start w-full rounded-md md:text-sm md:gap-1 md:px-2 md:flex-col md:bg-brand md:hover:bg-brand_100",
        filterBtn: "py-2 px-4 flex-row-reverse text-xs md:flex-col gap-2 rounded-xl md:rounded-none md:group-[.rtl]:first:rounded-r-lg md:group-[.rtl]:last:rounded-l-lg md:group-[.ltr]:first:rounded-l-lg md:group-[.ltr]:last:rounded-r-lg ",
        backBtn: "justify-between flex-col hover:text-accent rounded-md",
      },
      active: {
        true: "text-accent opacity-80",
      },
    },
  }
);
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  intent,
  icon,
  label,
  active = false,
  handleClick,
  ...props
}) => {
  return (
    <button
      className={cn(button({ intent, active }))}
      {...props}
      onClick={handleClick}
    >
      {icon}
      {label}
    </button>
  );
};
