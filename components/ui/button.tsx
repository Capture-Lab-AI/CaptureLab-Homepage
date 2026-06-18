import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium transition-[background-color,color,transform,box-shadow,border-color] duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        // Primary pill — deep ink on light surfaces.
        primary:
          "bg-ink text-bg shadow-sm hover:bg-ink-2 motion-safe:hover:-translate-y-px motion-safe:hover:shadow-md",
        // Inverted pill — light on deep-ink panels.
        invert:
          "bg-on-deep text-ink shadow-sm hover:bg-bg motion-safe:hover:-translate-y-px motion-safe:hover:shadow-md",
        // Hairline pill — quieter secondary on light surfaces.
        outline:
          "border border-[rgba(26,25,23,0.14)] bg-bg-elev text-ink hover:border-[rgba(26,25,23,0.34)] motion-safe:hover:-translate-y-px",
        // Text link with no chrome.
        ghost: "text-ink hover:text-accent",
      },
      size: {
        md: "h-10 px-5 text-[15px]",
        lg: "h-12 px-6 text-[15px]",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
Button.displayName = "Button";

export interface LinkButtonProps
  extends
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariants> {}

export const LinkButton = React.forwardRef<HTMLAnchorElement, LinkButtonProps>(
  ({ className, variant, size, ...props }, ref) => (
    <a
      ref={ref}
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  ),
);
LinkButton.displayName = "LinkButton";

/** Small pink status dot used inside pill CTAs (edra-inspired). */
export function CtaDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        "h-1.5 w-1.5 shrink-0 rounded-full bg-accent",
        "motion-safe:animate-pulse",
        className,
      )}
    />
  );
}

export { buttonVariants };
