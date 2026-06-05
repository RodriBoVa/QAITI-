import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-semibold tracking-widest uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B8962E] disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-[#B8962E] to-[#D4AF5A] text-white shadow-[0_4px_20px_rgba(184,150,46,0.35)] hover:shadow-[0_8px_30px_rgba(184,150,46,0.5)] hover:-translate-y-0.5",
        outline:
          "border border-[#1A2744]/30 text-[#1A2744] hover:bg-[#1A2744] hover:text-white hover:border-[#1A2744]",
        outlineLight:
          "border border-white/25 text-white/85 hover:bg-white/10 hover:border-white/40",
        ghost: "hover:bg-[#B8962E]/10 text-[#B8962E]",
        link: "text-[#B8962E] underline-offset-4 hover:underline p-0 h-auto",
      },
      size: {
        default: "h-12 px-8 py-3",
        sm: "h-9 px-5 text-xs",
        lg: "h-14 px-10 text-sm",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
