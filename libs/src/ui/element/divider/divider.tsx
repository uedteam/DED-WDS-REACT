import React, { ReactNode } from 'react';

interface DividerProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  children?: ReactNode;
  direction?: 'horizontal' | 'vertical';
  width?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  type?: 'solid' | 'dashed' | 'dotted';
  align?: 'start' | 'center' | 'end';
  className?: string;
}

export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const {
    themeColor,
    children,
    direction = 'horizontal',
    width = 'small',
    type = 'solid',
    align = 'center',
    className,
    ...rest
  } = props;

  return (
    <div
      {...rest}
      className={`divider divider-${direction} divider-width-${width} divider-${type} divider-${themeColor} divider-${align}`}
    >
      {children && (
        <div className="divider-content">
          <b>{children}</b>
        </div>
      )}
    </div>
  );
};
export default Divider;
