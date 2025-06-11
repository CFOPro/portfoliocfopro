import React from 'react';
import { cn } from '../../core/utils';

/**
 * Button component with CFOPro corporate styling
 * Supports both button and link functionality
 */
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: 'primary' | 'secondary' | 'outline';
  /** Size variant */
  size?: 'sm' | 'md' | 'lg';
  /** Button content */
  children: React.ReactNode;
  /** If provided, renders as a link instead of button */
  href?: string;
  /** Whether the link should open in a new tab */
  isExternal?: boolean;
}

const BUTTON_VARIANTS = {
  primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500',
  secondary: 'bg-secondary-300 text-neutral-900 hover:bg-secondary-400 focus:ring-secondary-500',
  outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500',
} as const;

const BUTTON_SIZES = {
  sm: 'px-4 py-2 text-sm rounded-md',
  md: 'px-6 py-3 text-base rounded-lg',
  lg: 'px-8 py-4 text-lg rounded-lg',
} as const;

const BASE_CLASSES = 'inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  href,
  isExternal = false,
  className,
  ...props
}) => {
  const classes = cn(
    BASE_CLASSES,
    BUTTON_VARIANTS[variant],
    BUTTON_SIZES[size],
    className
  );

  // Render as link if href is provided
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        role="button"
      >
        {children}
      </a>
    );
  }

  // Render as button
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
