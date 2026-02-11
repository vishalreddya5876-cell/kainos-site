import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlowTextProps {
  children: ReactNode;
  className?: string;
  intensity?: 'normal' | 'strong';
  animate?: boolean;
}

export function GlowText({ 
  children, 
  className = '', 
  intensity = 'normal',
  animate = false
}: GlowTextProps) {
  return (
    <span 
      className={cn(
        intensity === 'strong' ? 'text-glow-red-strong' : 'text-glow-red',
        animate && 'animation-glow-pulse',
        className
      )}
    >
      {children}
    </span>
  );
}
