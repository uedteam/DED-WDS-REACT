import React, { useState, useRef } from 'react';
import Portal from '@src/ui/portal';
import { getTargetPosition } from '@src/utils/position';
import { getArrowPositionClass } from './styled';
import { usePosition } from '@src/hooks/usePosition';

/**
 * TooltipProps 介面定義了 Tooltip 元件的屬性。
 *
 * @interface TooltipProps
 * @property {React.ReactNode} children - Tooltip 的子元素。
 * @property {React.ReactNode} content - Tooltip 顯示的內容。
 * @property {boolean} [showArrow] - 是否顯示箭頭，預設為 false。
 * @property {'top-left' | 'top' | 'top-right' | 'right-top' | 'right' | 'right-bottom' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left-bottom' | 'left' | 'left-top'} placement - Tooltip 的顯示位置。
 * @property {string} [className] - 自訂的 CSS 類名。
 */
interface TooltipProps {
  children: React.ReactNode;
  content: React.ReactNode;
  showArrow?: boolean;
  placement:
    | 'top-left'
    | 'top'
    | 'top-right'
    | 'right-top'
    | 'right'
    | 'right-bottom'
    | 'bottom-right'
    | 'bottom'
    | 'bottom-left'
    | 'left-bottom'
    | 'left'
    | 'left-top';
  className?: string;
}

/**
 * Tooltip 元件
 *
 * @param {TooltipProps} props - Tooltip 的屬性
 * @param {React.ReactNode} props.children - 觸發 Tooltip 的子元素
 * @param {React.ReactNode} props.content - Tooltip 的內容
 * @param {string} props.placement - Tooltip 的位置
 * @param {boolean} props.showArrow - 是否顯示箭頭
 * @param {string} [props.className] - 自訂的 CSS 類別名稱
 *
 * @returns {JSX.Element} Tooltip 元件
 */
export const Tooltip: React.FC<TooltipProps> = ({
  children = '',
  content = '',
  placement = 'top',
  showArrow = false,
  className = '',
}: TooltipProps): JSX.Element => {
  const [isVisible, setIsVisible] = useState(false);
  const childrenRef = useRef<HTMLDivElement>(null);
  const { childrenSize, position } = usePosition(childrenRef);

  return (
    <>
      <div
        ref={childrenRef}
        onMouseOver={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="ded-tooltip-container"
      >
        {children}
      </div>
      <Portal>
        {isVisible && (
          <div
            style={getTargetPosition(position, childrenSize, placement, '6px')}
            className={`ded-tooltip ${className}`}
          >
            <div className="ded-tooltip-content">
              {content}
              {showArrow && (
                <div
                  className={`ded-tooltip-arrow ${getArrowPositionClass(
                    placement
                  )}`}
                >
                  <div className="ded-tooltip-arrow-shape" />
                </div>
              )}
            </div>
          </div>
        )}
      </Portal>
    </>
  );
};
export default Tooltip;
