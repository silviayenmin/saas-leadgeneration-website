import React from 'react';
import { ContainerProps } from '../../types';
import { cn } from '../../utils/helpers';
import './ui.css';

export const Container: React.FC<ContainerProps> = ({
  children,
  className = '',
  size = 'lg',
}) => {
  return (
    <div className={cn('ui-container', `ui-container--${size}`, className)}>
      {children}
    </div>
  );
};
