import React, { useRef, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: any[]) {
  return twMerge(clsx(inputs));
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'terracotta' | 'outline' | 'secondary' | 'ghost' | 'link';
  size?: 'default' | 'sm' | 'lg' | 'icon';
  magnetic?: boolean;
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'default',
      size = 'default',
      magnetic = false,
      href,
      target,
      rel,
      download,
      children,
      onClick,
      ...props
    },
    forwardedRef
  ) => {
    const internalRef = useRef<HTMLElement | null>(null);

    // Magnetic micro-interaction using Anime.js if available
    useEffect(() => {
      if (!magnetic || !internalRef.current) return;
      const el = internalRef.current;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - (rect.left + rect.width / 2)) * 0.35;
        const y = (e.clientY - (rect.top + rect.height / 2)) * 0.35;

        if (window.anime) {
          window.anime({
            targets: el,
            translateX: x,
            translateY: y,
            duration: 400,
            easing: 'easeOutQuad',
          });
        }
      };

      const handleMouseLeave = () => {
        if (window.anime) {
          window.anime({
            targets: el,
            translateX: 0,
            translateY: 0,
            duration: 600,
            easing: 'easeOutElastic(1, .5)',
          });
        }
      };

      el.addEventListener('mousemove', handleMouseMove);
      el.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        el.removeEventListener('mousemove', handleMouseMove);
        el.removeEventListener('mouseleave', handleMouseLeave);
      };
    }, [magnetic]);

    const baseStyles =
      'inline-flex items-center justify-center rounded-full text-sm font-medium transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C25E3E]/40 disabled:pointer-events-none disabled:opacity-50 select-none cursor-pointer';

    const variants = {
      default:
        'bg-[#1E1E1E] text-[#FDFBF7] hover:bg-[#C25E3E] shadow-sm hover:shadow-md active:scale-95',
      terracotta:
        'bg-[#C25E3E] text-[#FDFBF7] hover:bg-[#AB4D2F] shadow-sm hover:shadow-md active:scale-95',
      outline:
        'border border-[#E2DDD5] bg-transparent text-[#1E1E1E] hover:bg-[#F4F0EA] hover:border-[#C25E3E] hover:text-[#C25E3E] active:scale-95',
      secondary:
        'bg-[#F4F0EA] text-[#1E1E1E] hover:bg-[#E2DDD5] active:scale-95 border border-[#E2DDD5]',
      ghost:
        'hover:bg-[#F4F0EA] text-[#6E6A67] hover:text-[#1E1E1E] active:scale-95',
      link:
        'text-[#C25E3E] underline-offset-4 hover:underline p-0 h-auto',
    };

    const sizes = {
      default: 'h-10 px-5 py-2',
      sm: 'h-8 px-3 text-xs tracking-wider uppercase',
      lg: 'h-12 px-8 text-base',
      icon: 'h-10 w-10 p-0',
    };

    const combinedClassName = cn(
      baseStyles,
      variants[variant],
      sizes[size],
      className
    );

    if (href) {
      return (
        <a
          ref={(node) => {
            internalRef.current = node;
          }}
          href={href}
          target={target}
          rel={rel}
          download={download as any}
          className={combinedClassName}
          onClick={onClick as any}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        ref={(node) => {
          internalRef.current = node;
          if (typeof forwardedRef === 'function') {
            forwardedRef(node);
          } else if (forwardedRef) {
            forwardedRef.current = node;
          }
        }}
        className={combinedClassName}
        onClick={onClick}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
