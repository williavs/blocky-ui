import { cn } from "../utils/cn";
import React from "react";

export interface RadioProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
  id?: string;
}

export function Radio({ className, label, error, id: providedId, ...props }: RadioProps) {
  const uniqueId = providedId || `radio-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label 
      htmlFor={uniqueId}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <div className="relative inline-flex items-center justify-center">
        <input
          id={uniqueId}
          type="radio"
          aria-invalid={error ? "true" : undefined}
          className={cn(
            "peer appearance-none w-5 h-5 border-2 border-black rounded-full",
            "checked:border-black",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
            "transition-all duration-200",
            error && "border-red-500 focus-visible:ring-red-400",
            className
          )}
          {...props}
        />
        <div 
          aria-hidden="true"
          className={cn(
            "absolute",
            "w-2 h-2 rounded-full bg-black",
            "opacity-0 peer-checked:opacity-100 transition-opacity duration-200",
            "peer-checked:scale-100 scale-0 transition-transform duration-200"
          )} 
        />
      </div>
      {label && (
        <span className={cn(
          "text-sm font-medium select-none",
          error ? "text-red-500" : "text-green-900",
          "group-hover:text-green-800 transition-colors"
        )}>
          {label}
        </span>
      )}
    </label>
  );
} 