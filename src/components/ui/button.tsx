import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer rounded-[1rem]",
  {
    variants: {
      variant: {
        default: [
          "rounded-[1rem] border border-[var(--Border-Border-dark,rgba(0,0,0,0.30))] bg-[var(--Primary-Primary,#00FFF0)] text-black cursor-pointer",
          "shadow-[0_4px_0_0_var(--Surface-Colors-Surface-Accent-3,#00B3B3),0_10px_8px_0_var(--Surface-Colors-Surface-Accent-t1,rgba(0,255,240,0.20))]",
          "hover:bg-[var(--Surface-Colors-Accent-Elevation-2,#70FFF7)] hover:shadow-[0_2px_0_0_var(--Surface-Colors-Surface-Accent-3,#00B3B3),0_4px_8px_0_var(--Surface-Colors-Surface-Accent-t1,rgba(0,255,240,0.20))] hover:text-black hover:cursor-pointer",
          "active:translate-y-[4px]",
          "disabled:translate-y-0 disabled:shadow-[0_4px_0_0_var(--Surface-Colors-Surface-Accent-3,#00B3B3),0_10px_8px_0_var(--Surface-Colors-Surface-Accent-t1,rgba(0,255,240,0.20))] disabled:text-black",
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
        sm: "h-9 rounded-[0.75rem] px-3",
        lg: "h-14 rounded-[1rem] px-8",
        icon: "h-10 w-10 rounded-xl",
      },
    },
    compoundVariants: [
      {
        variant: "default",
        size: "sm",
        className: [
          "rounded-[0.75rem] border border-[var(--Border-Border-dark,rgba(0,0,0,0.30))] bg-[var(--Primary-Primary,#00FFF0)] text-black cursor-pointer",
          "shadow-[0_2px_0_0_var(--Surface-Colors-Surface-Accent-3,#00B3B3),0_4px_4px_0_var(--Surface-Colors-Surface-Accent-t1,rgba(0,255,240,0.20))]",
          "hover:bg-[var(--Surface-Colors-Accent-Elevation-2,#70FFF7)] hover:shadow-[0_1px_0_0_var(--Surface-Colors-Surface-Accent-3,#00B3B3),0_2px_4px_0_var(--Surface-Colors-Surface-Accent-t1,rgba(0,255,240,0.20))] hover:text-black hover:cursor-pointer",
        ],
      },
    ],
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
