import React, { ReactNode } from 'react';
import { getCombinedClassName } from '@src/utils/string';

interface StatusIndicatorProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  variant: 'filled' | 'text';
  prefix: ReactNode;
  children?: string;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

export const StatusIndicator: React.FC<StatusIndicatorProps> = ({
  themeColor = 'primary',
  variant = 'text',
  prefix,
  children,
  className = '',
}) => {
  return (
    <div
      className={`status-indicator 
        ${getCombinedClassName(
          'status-indicator',
          `${variant}-${themeColor}`
        )}       
        ${className}
      `}
      role="status"
    >
      {variant === 'filled' ? (
        <span
          className={`status-indicator-dot 
        ${getCombinedClassName('status-indicator', themeColor)}
      `}
        ></span>
      ) : (
        <div style={{ lineHeight: '1' }}>{prefix}</div>
      )}
      {children && (
        <div
          className={`status-indicator-text 
            ${getCombinedClassName('status-indicator-text', variant)}`}
        >
          {children}
        </div>
      )}
    </div>
  );
};
export default StatusIndicator;
