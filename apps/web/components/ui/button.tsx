import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-white hover:bg-primary/90',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-primary bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-foreground text-background hover:bg-foreground/80',
        gradient: 'gradient-secondary text-foreground hover:bg-foreground/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'dark:text-foreground text-foreground underline-offset-4 hover:underline',
        tertiary: 'bg-dark-900 text-sm font-medium hover:bg-dark-900/80 border-dark-500 border',
        subtle: 'bg-dark-500 hover:bg-dark-500/80',
      },
      radius: {
        default: 'rounded-full',
        sm: 'rounded-md',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 text-xs px-3 py-0.5',
        lg: 'h-11 px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      radius: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, radius, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, radius, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
