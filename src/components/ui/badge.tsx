import * as React from "react";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "gold" | "navy" | "ghost";
}

function Badge({ className, variant = "gold", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[10px] font-bold tracking-widest uppercase transition-colors",
        {
          "bg-[#B8962E]/15 text-[#B8962E] border border-[#B8962E]/25": variant === "gold",
          "bg-[#1A2744]/10 text-[#1A2744] border border-[#1A2744]/20": variant === "navy",
          "bg-white/10 text-white/70 border border-white/15": variant === "ghost",
        },
        className
      )}
      {...props}
    />
  );
}

export { Badge };
