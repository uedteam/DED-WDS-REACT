import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  isDot?: boolean;
  value?: number;
  limit?: number;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  isDot,
  value,
  limit,
  className = '',
}) => {
  return (
    <div className="ded-badge__container">
      {children}
      <span className="ded-badge__content">
        {!isDot ? 'computedValue' : ''}
      </span>
    </div>
  );
};
export default Badge;
