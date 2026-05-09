import { InputHTMLAttributes, forwardRef } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  ({ className, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-hidden focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all",
          className
        )}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

export const Select = forwardRef<HTMLSelectElement, InputHTMLAttributes<HTMLSelectElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <select
        ref={ref}
        className={cn(
          "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-hidden focus:border-secondary/50 focus:ring-1 focus:ring-secondary/50 transition-all appearance-none",
          className
        )}
        {...props}
      >
        {children}
      </select>
    );
  }
);

Select.displayName = 'Select';
