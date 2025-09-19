import { cn } from '../../utils/cn';

const Separator = ({ className, orientation = "horizontal", ...props }) => (
  <div
    className={cn(
      "shrink-0 bg-gray-200",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    )}
    {...props}
  />
);

export { Separator };
