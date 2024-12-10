import { cn } from "../utils/cn";
import { ChevronDown } from "lucide-react";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "./Button";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  error?: boolean | string;
  label?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export function Select({
  options,
  value,
  onChange,
  error,
  label,
  placeholder = "Select an option",
  className,
  disabled
}: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const selectedOption = options.find(opt => opt.value === value);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      setHighlightedIndex(-1);
    }
  }, [isOpen]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (disabled) return;

    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          onChange?.(options[highlightedIndex].value);
          setIsOpen(false);
        } else {
          setIsOpen(true);
        }
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex(prev => 
            prev < options.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
        } else {
          setHighlightedIndex(prev => 
            prev > 0 ? prev - 1 : prev
          );
        }
        break;
      case 'Escape':
        setIsOpen(false);
        break;
      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
        }
        break;
    }
  };

  useEffect(() => {
    if (highlightedIndex >= 0 && isOpen) {
      optionsRef.current[highlightedIndex]?.scrollIntoView({
        block: 'nearest'
      });
    }
  }, [highlightedIndex, isOpen]);

  return (
    <div className={cn("relative", className)} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-green-900 mb-1.5">
          {label}
        </label>
      )}
      
      <Button
        type="button"
        variant="outline"
        onClick={() => !disabled && setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-labelledby={label ? `${label}-label` : undefined}
        className={cn(
          "w-full justify-between bg-white",
          error && "border-red-500 focus:ring-red-400",
          disabled && "opacity-50 cursor-not-allowed"
        )}
      >
        <span className={cn(
          "truncate",
          !selectedOption && "text-green-900/60"
        )}>
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown 
          className={cn(
            "w-4 h-4 shrink-0 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Button>

      <div
        className={cn(
          "absolute top-full mt-2 w-full rounded-lg border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] z-50",
          "transform transition-all duration-200 origin-top",
          isOpen
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        )}
        role="listbox"
        aria-activedescendant={highlightedIndex >= 0 ? `option-${highlightedIndex}` : undefined}
      >
        <div className="p-2">
          {options.map((option, index) => (
            <button
              key={option.value}
              ref={el => optionsRef.current[index] = el}
              role="option"
              aria-selected={option.value === value}
              id={`option-${index}`}
              onClick={() => {
                onChange?.(option.value);
                setIsOpen(false);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={cn(
                "w-full text-left px-3 py-2 rounded-md text-sm",
                "transition-colors font-medium",
                "hover:bg-green-100 focus:bg-green-100",
                "focus:outline-none focus:ring-2 focus:ring-green-400",
                option.value === value && "bg-green-100",
                highlightedIndex === index && "bg-green-50"
              )}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {error && (
        <p className="mt-1.5 text-sm text-red-500">
          {typeof error === 'string' ? error : 'This field is required'}
        </p>
      )}
    </div>
  );
}