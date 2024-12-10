import { cn } from "../utils/cn";
import { X } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

const toastVariants = cva(
  "relative flex items-center justify-between p-4 rounded-lg border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all",
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

export interface ToastProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof toastVariants> {
  onClose?: () => void;
}

export function Toast({ className, variant, children, onClose, ...props }: ToastProps) {
  return (
    <div
      className={cn(toastVariants({ variant }), "animate-slide-up", className)}
      {...props}
    >
      <div className="mr-4">{children}</div>
      {onClose && (
        <button
          onClick={onClose}
          className="p-1 hover:bg-black/5 rounded-md transition-colors"
        >
          <X className="w-4 h-4" />
          <span className="sr-only">Close</span>
        </button>
      )}
    </div>
  );
} 