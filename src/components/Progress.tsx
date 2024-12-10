import { cn } from "../utils/cn";

export interface ProgressProps {
  value: number;
  max?: number;
  variant?: 'default' | 'success' | 'error';
  size?: 'sm' | 'default' | 'lg';
  animated?: boolean;
  className?: string;
}

const sizeClasses = {
  sm: "h-2",
  default: "h-3",
  lg: "h-4",
};

const variantClasses = {
  default: "bg-green-100",
  success: "bg-green-200",
  error: "bg-red-100",
};

export function Progress({ 
  value, 
  max = 100, 
  variant = 'default',
  size = 'default',
  animated = false,
  className 
}: ProgressProps) {
  const percentage = Math.min(100, Math.max(0, (value / max) * 100));

  return (
    <div
      className={cn(
        "w-full rounded-full border-2 border-black bg-white overflow-hidden",
        "shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]",
        sizeClasses[size],
        className
      )}
    >
      <div
        className={cn(
          "h-full rounded-r-sm border-r-2 border-black transition-all duration-500",
          variantClasses[variant],
          animated && "animate-pulse",
          percentage === 100 && "rounded-r-none"
        )}
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
} 