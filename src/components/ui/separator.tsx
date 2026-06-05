import * as React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: "horizontal" | "vertical";
  gold?: boolean;
}

function Separator({ className, orientation = "horizontal", gold = false, ...props }: SeparatorProps) {
  return (
    <div
      role="separator"
      className={cn(
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        gold
          ? "bg-gradient-to-r from-transparent via-[#B8962E]/40 to-transparent"
          : "bg-[#B8962E]/15",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
