import { cn } from '../../utils/cn';

const Card = ({ className, ...props }) => (
  <div
    className={cn(
      "bg-white text-gray-900 flex flex-col gap-6 rounded-xl border shadow-sm",
      className
    )}
    {...props}
  />
);

const CardHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 pt-6",
      className
    )}
    {...props}
  />
);

const CardTitle = ({ className, ...props }) => (
  <h4
    className={cn("leading-none font-semibold text-lg", className)}
    {...props}
  />
);

const CardDescription = ({ className, ...props }) => (
  <p
    className={cn("text-gray-600 text-sm", className)}
    {...props}
  />
);

const CardContent = ({ className, ...props }) => (
  <div
    className={cn("px-6 pb-6", className)}
    {...props}
  />
);

const CardFooter = ({ className, ...props }) => (
  <div
    className={cn("flex items-center px-6 pb-6", className)}
    {...props}
  />
);

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
