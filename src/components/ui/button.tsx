import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full border text-sm font-semibold tracking-normal transition-[transform,box-shadow,background-color,color,border-color,backdrop-filter,opacity] duration-250 ease-[var(--ease-emphasis)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-45 hover:-translate-y-0.5 active:translate-y-px [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default:
          "border-primary/92 bg-primary text-primary-foreground shadow-[var(--shadow-button)] hover:bg-secondary hover:shadow-[var(--shadow-strong)]",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:brightness-95",
        outline:
          "border-[var(--glass-border)] bg-[var(--glass-bg-strong)] text-primary shadow-[var(--shadow-glass)] backdrop-blur-[calc(var(--glass-blur)+2px)] hover:border-primary/44 hover:bg-[var(--glass-highlight)] hover:text-primary",
        secondary:
          "border-secondary/70 bg-secondary text-secondary-foreground shadow-[var(--shadow-button)] hover:bg-primary hover:text-primary-foreground",
        ghost: "border-transparent bg-transparent text-primary/88 hover:border-[var(--glass-border)] hover:bg-[var(--glass-bg)] hover:text-primary",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
