import React, { useState, useRef, useEffect } from 'react';
import { cn } from "../utils/cn";
import { ChevronDown } from "lucide-react";
import { Button } from "./Button";

export interface ComboBoxOption {
  label: string;
  value: string;
}

export interface ComboBoxGroup {
  label: string;
  options: ComboBoxOption[];
}

export interface ComboBoxProps {
  options: (ComboBoxOption | ComboBoxGroup)[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  error?: boolean;
  disabled?: boolean;
  variant?: 'default' | 'outline';
  className?: string;
  id?: string;
}

export function ComboBox({
  options,
  value,
  onChange,
  placeholder = "Select an option",
  label,
  error,
  disabled,
  variant = 'outline',
  className,
  id,
}: ComboBoxProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('');
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const optionsRef = useRef<HTMLDivElement>(null);
  const uniqueId = id || `combobox-${Math.random().toString(36).substr(2, 9)}`;

  // Flatten options for keyboard navigation
  const flatOptions = options.reduce<ComboBoxOption[]>((acc, option) => {
    if ('options' in option) {
      return [...acc, ...option.options];
    }
    return [...acc, option];
  }, []);

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
    if (value) {
      options.forEach((option) => {
        if ('options' in option) {
          const found = option.options.find(o => o.value === value);
          if (found) setSelectedLabel(found.label);
        } else if (option.value === value) {
          setSelectedLabel(option.label);
        }
      });
    } else {
      setSelectedLabel('');
    }
  }, [value, options]);

  useEffect(() => {
    if (isOpen && optionsRef.current && highlightedIndex >= 0) {
      const highlightedElement = optionsRef.current.children[highlightedIndex] as HTMLElement;
      if (highlightedElement) {
        highlightedElement.scrollIntoView({ block: 'nearest' });
      }
    }
  }, [highlightedIndex, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setHighlightedIndex(0);
        } else {
          setHighlightedIndex(prev => 
            prev < flatOptions.length - 1 ? prev + 1 : prev
          );
        }
        break;
      case 'ArrowUp':
        e.preventDefault();
        if (isOpen) {
          setHighlightedIndex(prev => prev > 0 ? prev - 1 : prev);
        }
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        if (isOpen && highlightedIndex >= 0) {
          onChange?.(flatOptions[highlightedIndex].value);
          setIsOpen(false);
          setHighlightedIndex(-1);
        } else if (!isOpen) {
          setIsOpen(true);
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setHighlightedIndex(-1);
        break;
      case 'Tab':
        if (isOpen) {
          setIsOpen(false);
          setHighlightedIndex(-1);
        }
        break;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      {label && (
        <label 
          htmlFor={uniqueId}
          className="block text-sm font-medium text-green-900 mb-1.5"
        >
          {label}
        </label>
      )}
      <Button
        id={uniqueId}
        variant={variant}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls={`${uniqueId}-options`}
        aria-labelledby={label ? `${uniqueId}-label` : undefined}
        className={cn(
          "w-full justify-between",
          error && "border-red-500 focus-visible:ring-red-400",
          className
        )}
      >
        <span className={cn(
          "truncate",
          !selectedLabel && "text-green-900/60"
        )}>
          {selectedLabel || placeholder}
        </span>
        <ChevronDown
          className={cn(
            "w-4 h-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </Button>

      {isOpen && (
        <div 
          id={`${uniqueId}-options`}
          role="listbox"
          aria-labelledby={label ? `${uniqueId}-label` : undefined}
          className={cn(
            "absolute z-50 w-full mt-2",
            "bg-white border-2 border-black rounded-md",
            "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
            "animate-in fade-in-0 zoom-in-95 duration-200"
          )}
        >
          <div className="p-1 max-h-60 overflow-auto" ref={optionsRef}>
            {options.map((option, index) => {
              if ('options' in option) {
                return (
                  <div key={index} className="px-2 py-1.5">
                    <div 
                      className="text-sm font-semibold text-green-900 mb-1"
                      role="presentation"
                    >
                      {option.label}
                    </div>
                    <div className="space-y-1">
                      {option.options.map((subOption, subIndex) => {
                        const isHighlighted = highlightedIndex === flatOptions.findIndex(o => o.value === subOption.value);
                        return (
                          <button
                            key={subIndex}
                            role="option"
                            aria-selected={value === subOption.value}
                            onClick={() => {
                              onChange?.(subOption.value);
                              setIsOpen(false);
                            }}
                            onMouseEnter={() => {
                              setHighlightedIndex(flatOptions.findIndex(o => o.value === subOption.value));
                            }}
                            className={cn(
                              "w-full text-left px-3 py-1.5 text-sm rounded-md",
                              "transition-colors duration-200",
                              "hover:bg-green-100 focus:bg-green-100",
                              "focus:outline-none focus:ring-2 focus:ring-green-400",
                              (value === subOption.value || isHighlighted) && "bg-green-100 font-medium"
                            )}
                          >
                            {subOption.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                );
              }

              const isHighlighted = highlightedIndex === flatOptions.findIndex(o => o.value === option.value);
              return (
                <button
                  key={index}
                  role="option"
                  aria-selected={value === option.value}
                  onClick={() => {
                    onChange?.(option.value);
                    setIsOpen(false);
                  }}
                  onMouseEnter={() => {
                    setHighlightedIndex(flatOptions.findIndex(o => o.value === option.value));
                  }}
                  className={cn(
                    "w-full text-left px-3 py-1.5 text-sm rounded-md",
                    "transition-colors duration-200",
                    "hover:bg-green-100 focus:bg-green-100",
                    "focus:outline-none focus:ring-2 focus:ring-green-400",
                    (value === option.value || isHighlighted) && "bg-green-100 font-medium"
                  )}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
} 