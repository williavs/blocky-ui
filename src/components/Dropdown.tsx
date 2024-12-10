import React, { useState, useRef, useEffect } from 'react';
import { cn } from "../utils/cn";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";

export interface DropdownProps {
  trigger: React.ReactNode;
  items: {
    label: string;
    onClick: () => void;
  }[];
  className?: string;
}

export function Dropdown({ trigger, items, className }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      <div onClick={() => setIsOpen(!isOpen)}>
        {trigger || (
          <Button
            variant="outline"
            className="inline-flex items-center gap-2"
          >
            Menu
            <ChevronDown className="w-4 h-4" />
          </Button>
        )}
      </div>

      <div
        className={cn(
          "absolute top-full mt-2 w-48 rounded-lg border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50",
          "transform transition-all duration-200 origin-top",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
      >
        <div className="p-2">
          {items.map((item, index) => (
            <button
              key={index}
              onClick={() => {
                item.onClick();
                setIsOpen(false);
              }}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm",
                "transition-colors font-medium",
                "hover:bg-green-100 focus:bg-green-100",
                "focus:outline-none focus:ring-2 focus:ring-green-400"
              )}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
} 