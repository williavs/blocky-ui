import { cn } from "../utils/cn";

export interface SpinnerProps {
  variant?: 'default' | 'dots' | 'blocks' | 'circle';
  size?: 'sm' | 'default' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: "w-4 h-4",
  default: "w-8 h-8",
  lg: "w-12 h-12",
};

export function Spinner({ variant = 'default', size = 'default', className }: SpinnerProps) {
  if (variant === 'dots') {
    return (
      <div className={cn("flex gap-1", className)}>
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "bg-black rounded-full animate-bounce",
              sizeClasses[size],
              i === 1 && "delay-100",
              i === 2 && "delay-200"
            )}
            style={{ animationDuration: '0.6s' }}
          />
        ))}
      </div>
    );
  }

  if (variant === 'blocks') {
    return (
      <div className={cn("grid grid-cols-2 gap-1", className)}>
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className={cn(
              "border-2 border-black bg-green-100",
              "animate-pulse shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]",
              sizeClasses[size],
              i === 1 && "delay-100",
              i === 2 && "delay-200",
              i === 3 && "delay-300"
            )}
          />
        ))}
      </div>
    );
  }

  if (variant === 'circle') {
    return (
      <div className={cn("relative", sizeClasses[size], className)}>
        <svg
          className="animate-spin"
          viewBox="0 0 50 50"
        >
          <circle
            className="stroke-black"
            strokeWidth="4"
            stroke="currentColor"
            fill="none"
            r="20"
            cx="25"
            cy="25"
          />
          <circle
            className="stroke-green-100"
            strokeWidth="4"
            strokeDasharray="80"
            strokeDashoffset="20"
            stroke="currentColor"
            fill="none"
            r="20"
            cx="25"
            cy="25"
          />
        </svg>
      </div>
    );
  }

  // Default spinner (rotating border)
  return (
    <div
      className={cn(
        "border-4 border-black border-t-green-100",
        "rounded-full animate-spin",
        sizeClasses[size],
        className
      )}
    />
  );
} 