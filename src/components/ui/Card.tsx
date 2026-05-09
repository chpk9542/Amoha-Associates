import { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  className?: string;
  children: ReactNode;
}

export function Card({ className, children }: CardProps) {
  return (
    <div className={cn("glass-card p-6", className)}>
      {children}
    </div>
  );
}
