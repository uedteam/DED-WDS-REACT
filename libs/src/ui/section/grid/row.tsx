import { ReactNode } from 'react';

export interface RowProps {
  children: ReactNode;
  hasGap?: boolean;
  justify?:
    | 'flex-start'
    | 'center'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  alignItems?: 'stretch' | 'center' | 'flex-start' | 'flex-end' | 'baseline';
  rowGap?: string;
}

export const Row: React.FC<RowProps> = ({
  children,
  hasGap = true,
  justify = 'flex-start',
  alignItems = 'stretch',
  rowGap = '16px',
}) => {
  return (
    <div
      className={`row ${hasGap ? '' : 'gap-0'}`}
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: justify,
        alignItems: alignItems,
        rowGap: rowGap,
      }}
    >
      {children}
    </div>
  );
};

export default Row;
