import React from 'react';
import { cn } from './button';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex h-12 w-full rounded-2xl border border-[#E2DDD5] bg-[#FDFBF7] px-4 py-2 text-sm text-[#1E1E1E] ring-offset-[#FDFBF7] file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-[#6E6A67]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E3E]/30 focus-visible:border-[#C25E3E] disabled:cursor-not-allowed disabled:opacity-50 transition-all',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
