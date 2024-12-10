import { useState } from 'react';
import { cn } from "../utils/cn";
import { Menu, X, Home, Blocks, FileText, Github, Sun, Moon } from "lucide-react";
import { Button } from "./Button";
import { useTheme } from './ThemeProvider';

export interface NavigationProps {
  className?: string;
}

export function Navigation({ className }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const { theme, toggleTheme } = useTheme();

  const menuItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Components', href: '/components', icon: Blocks },
    { name: 'Documentation', href: '/docs', icon: FileText },
    { name: 'GitHub', href: 'https://github.com/williavs/blocky-ui', icon: Github, external: true },
  ];

  return (
    <>
      {/* Hamburger Button */}
      <div className={cn(
        "fixed top-4 z-50 transition-all duration-300",
        isOpen ? "left-[319px]" : "left-[19px]",
        className
      )}>
        <Button
          variant="outline"
          size="sm"
          className={cn(
            "w-10 h-10 p-2",
            "bg-[#FFB324] hover:bg-[#FFA500]",
            "border-border text-foreground",
            "transition-colors duration-200"
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </div>

      {/* Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Menu Panel */}
      <div
        className={cn(
          "fixed top-0 left-0 h-screen w-[300px] text-menu-foreground border-r-2 border-border shadow-[4px_0_0_0_rgba(0,0,0,1)] z-40",
          "transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full",
          theme === 'light' ? "bg-white" : "bg-[#1F2937]"
        )}
      >
        <div className="p-6 h-full flex flex-col">
          <div className="mb-6">
            <div className="p-3 bg-[#FFB324]/10 rounded-lg border-2 border-border shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-2xl font-display font-bold">Menu</h2>
              <p className="text-menu-foreground/80 text-sm">Navigate around the site</p>
            </div>
          </div>

          <nav className="space-y-2">
            {menuItems.map((item) => {
              const Icon = item.icon;
              const isHovered = hoveredItem === item.name;
              
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noopener noreferrer" : undefined}
                  className={cn(
                    "group block w-full py-2 px-3 text-left rounded-lg",
                    "border-2 border-transparent",
                    "font-display font-medium transition-all duration-200",
                    "hover:border-border hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent",
                    "focus:outline-none focus:ring-2 focus:ring-ring",
                    "relative"
                  )}
                  onClick={() => !item.external && setIsOpen(false)}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="flex items-center gap-3">
                    <div className={cn(
                      "p-1.5 rounded-md border-2 border-border",
                      theme === 'light' ? "bg-white" : "bg-background",
                      "transition-transform duration-200 group-hover:scale-110",
                      isHovered && "rotate-[-5deg]"
                    )}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="transition-transform duration-200 group-hover:translate-x-1">
                      {item.name}
                    </span>
                  </div>
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle */}
          <div className="mt-4">
            <button
              onClick={toggleTheme}
              className={cn(
                "w-full py-2 px-3 text-left rounded-lg",
                "border-2 border-transparent",
                "font-display font-medium transition-all duration-200",
                "hover:border-border hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-accent",
                "focus:outline-none focus:ring-2 focus:ring-ring",
                "flex items-center gap-3"
              )}
            >
              <div className={cn(
                "p-1.5 rounded-md border-2 border-border",
                theme === 'light' ? "bg-white" : "bg-background"
              )}>
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </div>
              <span>
                {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
              </span>
            </button>
          </div>

          <div className="mt-auto">
            <div className="p-3 bg-accent rounded-lg border-2 border-border text-sm">
              <p className="font-medium mb-1">Tip:</p>
              <p className="text-menu-foreground/80">Use the menu to explore different sections of the design system.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 