import { cn } from "../utils/cn";
import { Loader2 } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "download";
  size?: "default" | "sm" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export function Button({
  className,
  variant = "default",
  size = "default",
  isLoading = false,
  leftIcon,
  rightIcon,
  children,
  ...props
}: ButtonProps) {
  const renderLeftIcon = !isLoading && leftIcon && (
    <span className="inline-flex shrink-0 items-center justify-center">
      {leftIcon}
    </span>
  );

  const renderRightIcon = !isLoading && rightIcon && (
    <span className="inline-flex shrink-0 items-center justify-center">
      {rightIcon}
    </span>
  );

  return (
    <button
      className={cn(
        "relative inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-all duration-200 disabled:opacity-50",
        "border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] active:translate-x-[0px] active:translate-y-[0px] active:shadow-[0px_0px_0px_0px_rgba(0,0,0,1)]",
        {
          "bg-primary text-foreground": variant === "default",
          "bg-transparent": variant === "outline",
          "bg-transparent border-transparent shadow-none hover:bg-accent hover:shadow-none hover:translate-x-0 hover:translate-y-0": variant === "ghost",
          "bg-[#D1FAE5] text-foreground hover:bg-[#A7F3D0]": variant === "download",
        },
        {
          "h-10 px-4 text-sm": size === "default",
          "h-8 px-3 text-xs": size === "sm",
          "h-12 px-6 text-base": size === "lg",
        },
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
      {renderLeftIcon}
      <span className="inline-flex items-center justify-center leading-none">
        {children}
      </span>
      {renderRightIcon}
    </button>
  );
}