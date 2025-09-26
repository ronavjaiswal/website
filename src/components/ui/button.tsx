import * as React from "react";
import { cn } from "../../lib/cn";

type Variant = "default" | "outline" | "secondary";
type Size = "sm" | "md" | "lg";

const variantClass: Record<Variant, string> = {
  default: "bg-foreground text-background hover:opacity-90",
  outline: "border border-white/20 bg-transparent hover:bg-white/5",
  secondary: "bg-white/10 hover:bg-white/20",
};

const sizeClass: Record<Size, string> = {
  sm: "h-9 px-3 text-sm rounded-xl",
  md: "h-10 px-4 rounded-xl",
  lg: "h-12 px-5 text-base rounded-2xl",
};

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "md", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 transition focus:outline-none focus:ring-2 focus:ring-white/20",
        variantClass[variant],
        sizeClass[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
