import { cn } from "../utils/cn";
import React from "react";

export interface TextAreaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
  label?: string;
}

export function TextArea({ className, error, label, ...props }: TextAreaProps) {
  return (
    <div className="space-y-2">
      {label && (
        <label className="text-sm font-medium text-green-900">{label}</label>
      )}
      <textarea
        className={cn(
          "flex min-h-[120px] w-full rounded-md border-2 border-black bg-white px-3 py-2 text-sm",
          "ring-offset-white placeholder:text-green-500",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2",
          "disabled:cursor-not-allowed disabled:opacity-50",
          "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] resize-y",
          error && "border-red-500 focus-visible:ring-red-400",
          className
        )}
        {...props}
      />
    </div>
  );
} 