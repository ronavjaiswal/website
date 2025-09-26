import { cn } from "../../lib/cn";

export function Badge({
  className,
  variant = "secondary",
  ...props
}: React.HTMLAttributes<HTMLSpanElement> & {
  variant?: "secondary" | "outline";
}) {
  const base = "inline-flex items-center rounded-full px-2.5 py-1 text-xs";
  const styles =
    variant === "outline"
      ? "border border-white/15 text-foreground"
      : "bg-white/10 text-foreground";
  return <span className={cn(base, styles, className)} {...props} />;
}
