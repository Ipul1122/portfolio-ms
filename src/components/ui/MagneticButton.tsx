import React from 'react';
import { useMagneticEffect } from '../../hooks/useMagneticEffect';

interface MagneticButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  className?: string;
  onClick?: (e: React.MouseEvent) => void;
  magneticStrength?: number;
}

export const MagneticButton: React.FC<MagneticButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  className = '',
  onClick,
  magneticStrength = 0.35,
  ...props
}) => {
  const ref = useMagneticEffect<HTMLAnchorElement & HTMLButtonElement>({
    strength: magneticStrength,
  });

  const baseStyles =
    'relative inline-flex items-center justify-center font-medium transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-accent/40 group overflow-hidden select-none cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase gap-2',
    md: 'px-6 py-3 text-sm tracking-wide gap-2.5',
    lg: 'px-8 py-4 text-base tracking-wide gap-3',
  };

  const variantStyles = {
    primary:
      'bg-text-primary text-[#FDFBF7] shadow-warm-md hover:bg-accent hover:shadow-warm-lg active:scale-95 border border-text-primary/10',
    secondary:
      'bg-background-secondary text-text-primary hover:bg-accent/15 hover:text-accent border border-border active:scale-95',
    outline:
      'bg-transparent text-text-primary border border-text-primary/20 hover:border-accent hover:text-accent hover:bg-accent/5 active:scale-95',
    ghost:
      'bg-transparent text-text-muted hover:text-accent hover:bg-background-secondary/60 active:scale-95',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  if (href) {
    return (
      <a
        ref={ref as React.RefObject<HTMLAnchorElement>}
        href={href}
        target={target}
        rel={rel}
        className={combinedClasses}
        onClick={onClick as any}
      >
        <span className="relative z-10 flex items-center gap-2">{children}</span>
        <span className="absolute inset-0 -z-0 bg-gradient-to-r from-accent to-accent-clay opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </a>
    );
  }

  return (
    <button
      ref={ref as React.RefObject<HTMLButtonElement>}
      type={props.type || 'button'}
      className={combinedClasses}
      onClick={onClick}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
      <span className="absolute inset-0 -z-0 bg-gradient-to-r from-accent to-accent-clay opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
    </button>
  );
};
