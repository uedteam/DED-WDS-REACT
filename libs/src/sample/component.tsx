import React from 'react';

/* 組件介面參數 props */
interface ButtonProps {
  // size?: 'small' | 'medium' | 'large';
  // isDisabled?: boolean;
  onClick?: () => void;
  className?: string;
}

/* 定義組件 */
/* 修改組件定義名稱 Component */
export const Component: React.FC<ButtonProps> = (props: ButtonProps) => {
  /* 解構組件參數 */
  const {
    onClick,
    // size,
    // isDisabled,
    className,
    ...rest
  } = props;

  /* 事件控制 */
  const handleClick = () => {
    console.log('click');
  };

  return (
    <button {...rest} onClick={handleClick}>
      搜尋
    </button>
  );
};
/* 修改匯出組件定義名稱 Component */
export default Component;
