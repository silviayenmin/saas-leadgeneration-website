import React from 'react';
import { Link } from 'react-router-dom';
import { ButtonProps } from '../../types';
import { cn, scrollToSection } from '../../utils/helpers';
import './ui.css';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  fullWidth = false,
  href,
  className = '',
  disabled,
  onClick,
  ...props
}) => {
  const classNames = cn(
    'ui-button',
    `ui-button--${variant}`,
    `ui-button--${size}`,
    fullWidth ? 'ui-button--full' : '',
    className
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="ui-button__icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="ui-button__icon">{icon}</span>}
    </>
  );

  // Smooth scroll handle if href starts with #
  if (href?.startsWith('#')) {
    const handleAnchorClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      scrollToSection(href);
      if (onClick) {
        (onClick as unknown as React.MouseEventHandler<HTMLAnchorElement>)(e);
      }
    };

    return (
      <a href={href} className={classNames} onClick={handleAnchorClick}>
        {content}
      </a>
    );
  }

  // Internal routing if href exists
  if (href) {
    return (
      <Link to={href} className={classNames}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classNames} disabled={disabled} onClick={onClick} {...props}>
      {content}
    </button>
  );
};
