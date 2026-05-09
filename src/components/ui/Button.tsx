import React, { ButtonHTMLAttributes, ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'icon';
}

export function Button({ variant = 'primary', size = 'md', className, children, ...props }: ButtonProps) {
  const variants = {
    primary: 'premium-button premium-button-gold',
    secondary: 'premium-button bg-accent text-white hover:bg-slate-800',
    outline: 'premium-button premium-button-outline',
    ghost: 'premium-button text-luxury-white hover:bg-white/5',
  };

  const sizes = {
    sm: 'px-4 py-1.5 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
    icon: 'p-2',
  };

  return (
    <button
      className={cn(variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
