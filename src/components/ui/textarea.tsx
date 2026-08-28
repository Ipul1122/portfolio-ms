import React from 'react';
import { cn } from './button';

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'flex min-h-[120px] w-full rounded-2xl border border-[#E2DDD5] bg-[#FDFBF7] p-4 text-sm text-[#1E1E1E] ring-offset-[#FDFBF7] placeholder:text-[#6E6A67]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E3E]/30 focus-visible:border-[#C25E3E] disabled:cursor-not-allowed disabled:opacity-50 transition-all resize-none',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';
