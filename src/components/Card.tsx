import { cn } from "../utils/cn";
import { ReactNode } from "react";

export interface CardProps {
  children: ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border-2 border-[--border] bg-card p-6",
        "shadow-[4px_4px_0px_0px_var(--shadow)]",
        "transition-colors duration-200",
        className
      )}
    >
      {children}
    </div>
  );
}