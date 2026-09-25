import React, { ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

export type BadgeVariant =
  | "sencamer"
  | "stock"
  | "brand"
  | "warning"
  | "info"
  | "neutral";

export type BadgeSize = "sm" | "md" | "lg";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  size?: BadgeSize;
  dot?: boolean;
  pulseDot?: boolean;
  icon?: ReactNode;
  children: ReactNode;
}

const variantStyles: Record<BadgeVariant, string> = {
  sencamer:
    "bg-emerald-50 text-emerald-800 border-emerald-200/90 font-bold",
  stock:
    "bg-slate-100/95 text-slate-800 border-slate-200/90 font-semibold",
  brand:
    "bg-red-50 text-[#991b1b] border-red-200/80 font-bold",
  warning:
    "bg-amber-50 text-amber-800 border-amber-200/80 font-semibold",
  info:
    "bg-slate-100 text-slate-800 border-slate-300 font-semibold",
  neutral:
    "bg-slate-50 text-slate-600 border-slate-200/80 font-medium",
};

const dotColors: Record<BadgeVariant, string> = {
  sencamer: "bg-emerald-500",
  stock: "bg-emerald-500",
  brand: "bg-[#991b1b]",
  warning: "bg-amber-500",
  info: "bg-slate-600",
  neutral: "bg-slate-400",
};

const sizeStyles: Record<BadgeSize, string> = {
  sm: "text-[9px] sm:text-[10px] px-2 py-0.5 gap-1 rounded-md",
  md: "text-[10px] sm:text-[11px] px-2.5 py-1 gap-1.5 rounded-full",
  lg: "text-xs sm:text-sm px-3.5 py-1.5 gap-2 rounded-full font-bold",
};

export function Badge({
  variant = "neutral",
  size = "md",
  dot = false,
  pulseDot = false,
  icon,
  className = "",
  children,
  ...props
}: BadgeProps) {
  // Default icon for sencamer if none provided
  const defaultIcon =
    variant === "sencamer" && icon === undefined ? (
      <ShieldCheck size={size === "sm" ? 11 : 13} className="text-emerald-700 shrink-0" />
    ) : null;

  return (
    <span
      className={`inline-flex items-center border tracking-tight shadow-2xs select-none ${
        variantStyles[variant]
      } ${sizeStyles[size]} ${className}`}
      {...props}
    >
      {dot && (
        <span className="relative flex h-1.5 w-1.5 shrink-0">
          {pulseDot && (
            <span
              className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotColors[variant]}`}
            />
          )}
          <span
            className={`relative inline-flex rounded-full h-1.5 w-1.5 ${dotColors[variant]}`}
          />
        </span>
      )}
      {icon || defaultIcon}
      <span className="truncate">{children}</span>
    </span>
  );
}
