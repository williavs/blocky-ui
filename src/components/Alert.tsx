import { cn } from "../utils/cn";
import { cva, type VariantProps } from "class-variance-authority";

const alertVariants = cva(
  "relative w-full rounded-lg border-2 border-black p-4 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
  {
    variants: {
      variant: {
        default: "bg-white text-green-900",
        success: "bg-green-100 text-green-900",
        error: "bg-red-100 text-red-900",
        warning: "bg-yellow-100 text-yellow-900",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

export function Alert({ className, variant, ...props }: AlertProps) {
  return (
    <div className={cn(alertVariants({ variant, className }))} {...props} />
  );
}