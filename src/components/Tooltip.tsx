import React, { useState, useRef } from 'react';
import { cn } from "../utils/cn";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  position?: 'top' | 'right' | 'bottom' | 'left';
  className?: string;
  delayDuration?: number;
  id?: string;
}

const positionClasses = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
};

const arrowClasses = {
  top: "bottom-[-6px] left-1/2 -translate-x-1/2 border-t-2 border-l-2",
  right: "left-[-6px] top-1/2 -translate-y-1/2 border-t-2 border-r-2",
  bottom: "top-[-6px] left-1/2 -translate-x-1/2 border-b-2 border-r-2",
  left: "right-[-6px] top-1/2 -translate-y-1/2 border-b-2 border-l-2",
};

export function Tooltip({ 
  content, 
  children, 
  position = 'top', 
  className,
  delayDuration = 200,
  id: providedId
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const showTimeout = useRef<number>();
  const uniqueId = providedId || `tooltip-${Math.random().toString(36).substr(2, 9)}`;

  const handleShow = () => {
    if (showTimeout.current) {
      window.clearTimeout(showTimeout.current);
    }
    showTimeout.current = window.setTimeout(() => {
      setIsVisible(true);
    }, delayDuration);
  };

  const handleHide = () => {
    if (showTimeout.current) {
      window.clearTimeout(showTimeout.current);
    }
    setIsVisible(false);
  };

  React.useEffect(() => {
    return () => {
      if (showTimeout.current) {
        window.clearTimeout(showTimeout.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative inline-block"
      onMouseEnter={handleShow}
      onMouseLeave={handleHide}
      onFocus={handleShow}
      onBlur={handleHide}
    >
      <div
        aria-describedby={isVisible ? uniqueId : undefined}
      >
        {children}
      </div>
      
      {isVisible && (
        <div 
          id={uniqueId}
          role="tooltip" 
          className={cn("absolute z-50", positionClasses[position])}
        >
          <div
            className={cn(
              "relative bg-white px-3 py-1.5 rounded-md text-sm whitespace-nowrap",
              "border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
              "animate-in fade-in-0 zoom-in-95 duration-200",
              className
            )}
          >
            {content}
            <div 
              className={cn(
                "absolute w-3 h-3 bg-white border-black rotate-45",
                arrowClasses[position]
              )}
              aria-hidden="true"
            />
          </div>
        </div>
      )}
    </div>
  );
} 