import React, { useRef } from 'react';
import { cn } from './button';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'outline' | 'terracotta' | 'clay';
  bounceOnHover?: boolean;
}

export const Badge: React.FC<BadgeProps> = ({
  className,
  variant = 'default',
  bounceOnHover = true,
  children,
  ...props
}) => {
  const badgeRef = useRef<HTMLDivElement | null>(null);

  const handleMouseEnter = () => {
    if (!bounceOnHover || !badgeRef.current || !window.anime) return;

    window.anime({
      targets: badgeRef.current,
      translateY: [0, -6, 0],
      scale: [1, 1.05, 1],
      duration: 500,
      easing: 'easeOutElastic(1, .6)',
    });
  };

  const baseStyles =
    'inline-flex items-center rounded-full border px-3.5 py-1.5 text-xs font-mono font-medium transition-colors select-none cursor-default';

  const variants = {
    default:
      'border-transparent bg-[#1E1E1E] text-[#FDFBF7] shadow-sm',
    secondary:
      'border-[#E2DDD5] bg-[#F4F0EA] text-[#1E1E1E] hover:bg-[#E2DDD5]',
    outline:
      'border-[#E2DDD5] text-[#1E1E1E] bg-transparent hover:border-[#C25E3E]',
    terracotta:
      'border-[#C25E3E]/30 bg-[#C25E3E]/10 text-[#C25E3E] hover:bg-[#C25E3E]/20',
    clay:
      'border-[#8B5E3C]/30 bg-[#8B5E3C]/10 text-[#8B5E3C] hover:bg-[#8B5E3C]/20',
  };

  return (
    <div
      ref={badgeRef}
      onMouseEnter={handleMouseEnter}
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </div>
  );
};
