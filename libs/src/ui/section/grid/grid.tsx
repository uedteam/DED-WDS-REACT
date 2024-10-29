import { ReactNode } from 'react';
import { Row } from './row';
import { Column } from './column';

export interface GridProps {
  fluid?: boolean;
  gap?: string;
  direction?: 'row' | 'column';
  children: ReactNode;
  className?: string;
}

export interface GridComponent extends React.FC<GridProps> {
  Row: typeof Row;
  Column: typeof Column;
}

export const Grid: GridComponent = (props) => {
  const { fluid, direction = 'column', gap = '16px', children } = props;
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: direction,
        justifyContent: 'center',
        gap: gap,
      }}
      className={fluid ? 'container-fluid' : 'container'}
    >
      {children}
    </div>
  );
};

Grid.Row = Row;
Grid.Column = Column;

export default Grid;
