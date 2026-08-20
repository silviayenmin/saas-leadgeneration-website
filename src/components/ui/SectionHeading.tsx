import React from 'react';
import { SectionHeadingProps } from '../../types';
import { cn } from '../../utils/helpers';
import { Badge } from './Badge';
import './ui.css';

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  className = '',
}) => {
  return (
    <div className={cn('ui-section-heading', `ui-section-heading--${align}`, className)}>
      {badge && (
        <div className="ui-section-heading__badge">
          <Badge variant="primary">{badge}</Badge>
        </div>
      )}
      <h2 className="ui-section-heading__title">{title}</h2>
      {subtitle && <p className="ui-section-heading__subtitle">{subtitle}</p>}
    </div>
  );
};
