import { ReactNode } from 'react';

interface ColumnProps {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  align?: 'start' | 'center' | 'end';
  // justify?: 'start' | 'center' | 'end';
  children: ReactNode;
}

export const Column: React.FC<ColumnProps> = ({
  xs,
  sm,
  md,
  lg,
  xl,
  align = 'start',
  // justify = 'start',
  children,
}) => {
  const getColClass = () => {
    const classes = [];
    if (xs) classes.push(`col-xs-${xs}`);
    if (sm) classes.push(`col-sm-${sm}`);
    if (md) classes.push(`col-md-${md}`);
    if (lg) classes.push(`col-lg-${lg}`);
    if (xl) classes.push(`col-xl-${xl}`);
    return classes.join(' ');
  };

  return (
    <div style={{ textAlign: align }} className={getColClass()}>
      {children}
    </div>
  );
};

export default Column;
