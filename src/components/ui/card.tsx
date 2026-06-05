import * as React from "react";
import { cn } from "@/lib/utils";

const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden border border-[#B8962E]/12 bg-white/55 backdrop-blur-sm transition-all duration-300 hover:border-[#B8962E]/30 hover:bg-white/80 hover:shadow-[0_12px_40px_rgba(184,150,46,0.1)]",
        className
      )}
      {...props}
    />
  )
);
Card.displayName = "Card";

const CardDark = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "relative overflow-hidden border border-white/7 bg-white/4 backdrop-blur-sm transition-all duration-300 hover:border-[#B8962E]/35 hover:bg-white/8",
        className
      )}
      {...props}
    />
  )
);
CardDark.displayName = "CardDark";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  )
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-sm font-bold leading-snug tracking-wide", className)}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  )
);
CardContent.displayName = "CardContent";

export { Card, CardDark, CardHeader, CardTitle, CardContent };
