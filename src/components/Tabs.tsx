import React, { useState } from 'react';
import { cn } from "../utils/cn";

export interface Tab {
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: Tab[];
  className?: string;
  defaultTab?: number;
}

export function Tabs({ tabs, className, defaultTab = 0 }: TabsProps) {
  const [activeTab, setActiveTab] = useState(defaultTab);

  return (
    <div className={cn("flex flex-col h-[calc(100vh-12rem)]", className)}>
      <div className="flex gap-2 overflow-x-auto p-2 sticky top-0 backdrop-blur-sm bg-background/80">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={cn(
              "px-4 py-2 rounded-md border-2 transition-all whitespace-nowrap font-display",
              "focus:outline-none focus:ring-2 focus:ring-[--ring]",
              activeTab === index
                ? "border-[--border] bg-primary shadow-[4px_4px_0px_0px_var(--shadow-hover)] text-foreground dark:text-gray-900"
                : "border-transparent hover:border-[--border] hover:shadow-[4px_4px_0px_0px_var(--shadow)]",
              "text-foreground hover:text-foreground"
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex-1 relative overflow-hidden">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={cn(
              "absolute inset-0 overflow-y-auto",
              "transition-all duration-300",
              activeTab === index
                ? "opacity-100 translate-x-0 pointer-events-auto"
                : "opacity-0 translate-x-4 pointer-events-none"
            )}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </div>
  );
} 