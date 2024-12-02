import React, { useEffect } from 'react';

interface BadgeProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  type: 'dot' | 'number';
  children: React.ReactNode;
  value?: number;
  limit?: number;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  themeColor,
  children,
  type,
  value = 0,
  limit = 0,
  className = '',
}) => {
  const [msgCount, setMsgCount] = React.useState<number>(value || 0);

  useEffect(() => {
    if (value && limit && value > limit) {
      setMsgCount(limit);
      return;
    }
    return setMsgCount(value || 0);
  }, [value, limit]);

  return (
    <div className={`ded-badge__container ${className}`}>
      {children}
      <div
        className={`ded-badge__content ded-badge__position-top-right ded-badge-color-${themeColor} ${
          type === 'dot' ? 'ded-badge__content-isDot' : ''
        }`}
      >
        {type === 'number' && (
          <>
            <span>{msgCount}</span>
            {value > limit && <span>+</span>}
          </>
        )}
      </div>
    </div>
  );
};
export default Badge;
