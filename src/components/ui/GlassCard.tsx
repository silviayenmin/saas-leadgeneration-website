import React from 'react';
import { GlassCardProps } from '../../types';
import { cn } from '../../utils/helpers';
import './ui.css';

export interface ExtendedGlassCardProps extends GlassCardProps, Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  'data-aos'?: string;
  'data-aos-duration'?: string | number;
  'data-aos-delay'?: string | number;
  'data-aos-easing'?: string;
}

export const GlassCard: React.FC<ExtendedGlassCardProps> = ({
  children,
  className = '',
  hoverEffect = true,
  glow = false,
  padding = 'md',
  style,
  ...props
}) => {
  return (
    <div
      style={style}
      className={cn(
        'ui-glass-card',
        `ui-glass-card--padding-${padding}`,
        hoverEffect ? 'hover-lift' : '',
        glow ? 'ui-glass-card--glow' : '',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
