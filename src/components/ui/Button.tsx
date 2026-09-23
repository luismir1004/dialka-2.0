"use client";

import React, { forwardRef, ButtonHTMLAttributes, ReactNode } from "react";
import { Loader2 } from "lucide-react";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "outline"
  | "ghost"
  | "whatsapp"
  | "danger";

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  fullWidth?: boolean;
  children?: ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-[#991b1b] hover:bg-[#7f1d1d] active:scale-[0.98] text-white shadow-xs hover:shadow-md border border-transparent",
  secondary:
    "bg-slate-900 hover:bg-slate-800 active:scale-[0.98] text-white shadow-xs hover:shadow-md border border-slate-800",
  outline:
    "bg-white hover:bg-slate-50 active:scale-[0.98] text-slate-800 border border-slate-300 hover:border-slate-400 shadow-2xs",
  ghost:
    "bg-transparent hover:bg-slate-100/80 text-slate-700 hover:text-slate-900 active:scale-[0.98]",
  whatsapp:
    "bg-emerald-600 hover:bg-emerald-500 active:scale-[0.98] text-white shadow-sm hover:shadow-md shadow-emerald-600/20 border border-transparent",
  danger:
    "bg-red-600 hover:bg-red-700 active:scale-[0.98] text-white shadow-xs hover:shadow-md border border-transparent",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs py-1.5 px-3 rounded-lg gap-1.5 min-h-[36px]",
  md: "text-xs sm:text-sm py-2.5 px-4 rounded-xl gap-2 min-h-[44px]",
  lg: "text-sm sm:text-base py-3.5 px-6 rounded-xl gap-2.5 min-h-[48px]",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      fullWidth = false,
      disabled,
      className = "",
      children,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || isLoading;

    return (
      <button
        ref={ref}
        disabled={isDisabled}
        className={`inline-flex items-center justify-center font-bold transition-all duration-200 cursor-pointer select-none ${
          variantStyles[variant]
        } ${sizeStyles[size]} ${
          fullWidth ? "w-full" : "w-auto"
        } ${
          isDisabled ? "opacity-60 cursor-not-allowed pointer-events-none scale-100" : ""
        } ${className}`}
        {...props}
      >
        {isLoading ? (
          <Loader2 size={size === "sm" ? 14 : size === "lg" ? 18 : 16} className="animate-spin shrink-0" />
        ) : (
          leftIcon && <span className="shrink-0">{leftIcon}</span>
        )}
        {children && <span>{children}</span>}
        {!isLoading && rightIcon && <span className="shrink-0">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";
