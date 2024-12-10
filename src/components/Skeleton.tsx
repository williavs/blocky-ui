import { cn } from "../utils/cn";

export interface SkeletonProps {
  variant?: 'text' | 'avatar' | 'button' | 'card' | 'image';
  className?: string;
  lines?: number;
}

export function Skeleton({ variant = 'text', className, lines = 1 }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-green-50 border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]";

  if (variant === 'avatar') {
    return (
      <div
        className={cn(
          baseClasses,
          "w-12 h-12 rounded-full",
          className
        )}
      />
    );
  }

  if (variant === 'button') {
    return (
      <div
        className={cn(
          baseClasses,
          "h-10 w-24 rounded-md",
          className
        )}
      />
    );
  }

  if (variant === 'image') {
    return (
      <div
        className={cn(
          baseClasses,
          "h-48 w-full rounded-md",
          className
        )}
      />
    );
  }

  if (variant === 'card') {
    return (
      <div className={cn("space-y-4", className)}>
        <div className={cn(baseClasses, "h-24 w-full rounded-md")} />
        <div className="space-y-2">
          <div className={cn(baseClasses, "h-10 w-3/4 rounded-md")} />
          <div className={cn(baseClasses, "h-10 w-1/2 rounded-md")} />
        </div>
      </div>
    );
  }

  // Text variant (default)
  return (
    <div className={cn("space-y-2", className)}>
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className={cn(
            baseClasses,
            "h-10 rounded-md",
            i === lines - 1 ? "w-3/4" : "w-full"
          )}
        />
      ))}
    </div>
  );
} 