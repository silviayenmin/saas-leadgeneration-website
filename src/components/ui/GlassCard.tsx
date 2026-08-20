import React from 'react';
import { GlassCardProps } from '../../types';
import { cn } from '../../utils/helpers';
import './ui.css';

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  padding = 'md',
}) => {
  return (
    <div
      className={cn(
        'ui-glass-card',
        `ui-glass-card--padding-${padding}`,
        hoverEffect ? 'hover-lift' : '',
        glow ? 'ui-glass-card--glow' : '',
        className
      )}
    >
      {children}
    </div>
  );
};
