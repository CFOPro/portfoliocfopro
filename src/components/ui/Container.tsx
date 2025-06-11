import React from 'react';
import { cn } from '../../core/utils';

/**
 * Container component for consistent page layout and responsive design
 * Provides max-width constraints and horizontal padding
 */
interface ContainerProps {
  /** Container content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Container size variant */
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

const CONTAINER_SIZES = {
  sm: 'max-w-3xl',
  md: 'max-w-5xl',
  lg: 'max-w-7xl',
  xl: 'max-w-screen-2xl',
  full: 'max-w-full',
} as const;

const BASE_CLASSES = 'mx-auto px-4 sm:px-6 lg:px-8';

export const Container: React.FC<ContainerProps> = ({
  children,
  className,
  size = 'lg',
}) => {
  const classes = cn(
    BASE_CLASSES,
    CONTAINER_SIZES[size],
    className
  );

  return (
    <div className={classes}>
      {children}
    </div>
  );
};
