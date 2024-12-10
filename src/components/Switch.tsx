import { cn } from "../utils/cn";
import React from "react";

export interface SwitchProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label?: string;
  error?: boolean;
  id?: string;
}

export function Switch({ className, label, error, id: providedId, ...props }: SwitchProps) {
  const uniqueId = providedId || `switch-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <label 
      htmlFor={uniqueId}
      className="flex items-center gap-2 cursor-pointer group"
    >
      <div className="relative inline-flex items-center">
        <input
          id={uniqueId}
          type="checkbox"
          role="switch"
          aria-invalid={error ? "true" : undefined}
          aria-checked={props.checked}
          className={cn(
            "peer appearance-none w-11 h-6 rounded-full border-2 border-black",
            "checked:bg-green-100 checked:border-black",
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
            "pointer-events-none absolute left-1",
            "w-4 h-4 rounded-full bg-black border-2 border-white",
            "peer-checked:translate-x-5 transition-transform duration-200",
            "shadow-[1px_1px_0px_0px_rgba(0,0,0,0.2)]"
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