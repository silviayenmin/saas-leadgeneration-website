import React from 'react';
import { BadgeProps } from '../../types';
import { cn } from '../../utils/helpers';
import './ui.css';

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'primary',
  className = '',
  icon,
}) => {
  return (
    <span className={cn('ui-badge', `ui-badge--${variant}`, className)}>
      {icon && <span className="ui-badge__icon">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};
