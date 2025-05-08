import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: [
          "border border-primary/75 bg-primary text-primary-foreground",
          "shadow-[0_5px_0_0_#009C9C,0_10px_8px_0_rgba(0,255,255,0.2),0_4px_8px_0_rgba(0,0,0,0.15)]",
          "hover:translate-y-[2px] hover:shadow-[0_3px_0_0_#009C9C,0_8px_6px_0_rgba(0,255,255,0.15),0_3px_6px_0_rgba(0,0,0,0.1)]",
          "active:translate-y-[4px] active:shadow-[0_1px_0_0_#009C9C,0_6px_4px_0_rgba(0,255,255,0.1),0_2px_4px_0_rgba(0,0,0,0.05)]",
          "disabled:translate-y-0 disabled:shadow-[0_5px_0_0_#009C9C,0_10px_8px_0_rgba(0,255,255,0.2),0_4px_8px_0_rgba(0,0,0,0.15)]",
        ],
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-[hsl(var(--primary-link))] underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-5 py-3",
        sm: "h-9 rounded-xl px-3",
        lg: "h-14 rounded-xl px-8",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
