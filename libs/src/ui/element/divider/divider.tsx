import React, { ReactNode } from 'react';

/**
 * 分隔線組件的屬性介面。
 *
 * @property {('none' | 'primary' | 'secondary' | 'tertiary' | 'success' | 'warning' | 'error' | 'info')} [themeColor] - 主題顏色。
 * @property {('solid' | 'dashed' | 'dotted')} [type] - 分隔線類型。
 * @property {('xsmall' | 'small' | 'medium' | 'large' | 'xlarge')} [width] - 分隔線寬度。
 * @property {('horizontal' | 'vertical')} [direction] - 分隔線方向。
 * @property {('start' | 'center' | 'end')} [align] - 分隔線對齊方式。
 * @property {string} [className] - 自訂樣式類別名稱。
 * @property {ReactNode} [children] - 子元素。
 */
export interface DividerProps {
  themeColor?:
    | 'none'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
  type?: 'solid' | 'dashed' | 'dotted';
  width?: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge';
  direction?: 'horizontal' | 'vertical';
  align?: 'start' | 'center' | 'end';
  className?: string;
  children?: ReactNode;
}

/**
 * 分隔線元件
 *
 * @param {DividerProps} props - 分隔線元件的屬性
 * @param {string} [props.themeColor='none'] - 主題顏色
 * @param {string} [props.direction='horizontal'] - 分隔線方向
 * @param {string} [props.width='small'] - 分隔線寬度
 * @param {string} [props.type='solid'] - 分隔線類型
 * @param {string} [props.align='center'] - 分隔線對齊方式
 * @param {string} [props.className=''] - 自訂樣式類別
 * @param {React.ReactNode} [props.children] - 子元素
 * @returns {JSX.Element} 分隔線元件
 */
export const Divider: React.FC<DividerProps> = (props: DividerProps) => {
  const {
    themeColor = 'none',
    direction = 'horizontal',
    width = 'small',
    type = 'solid',
    align = 'center',
    className = '',
    children,
  } = props;

  return (
    <div
      className={`divider divider-${direction} divider-width-${width} divider-${type} divider-${themeColor} divider-${align} ${className}`}
    >
      {children && <div className="divider-content">{children}</div>}
    </div>
  );
};
export default Divider;
