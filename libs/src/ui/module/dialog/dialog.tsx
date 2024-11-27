import React from 'react';
import { Portal } from '../../portal';
import './style.scss';
import { CloseIcon } from '@src/assets';

interface DialogProps {
  isOpen: boolean;
  hasClose?: boolean;
  onClose?: () => void;
  title?: React.ReactNode;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
}

/* 定義組件 */
/* 修改組件定義名稱 Component */
export const Dialog: React.FC<DialogProps> = ({
  isOpen = false,
  hasClose = false,
  onClose,
  title = 'Title',
  content = 'Content',
  footer,
  className = '',
}) => {
  return (
    <Portal>
      {isOpen && (
        <div className={`dialog-overlay ${className}`} onClick={onClose}>
          <div
            className={`dialog-content ${className}`}
            onClick={(e) => e.stopPropagation()}
          >
            {onClose && hasClose && (
              <button className="dialog-close-btn" onClick={onClose}>
                <CloseIcon width={20} height={20} />
              </button>
            )}
            <div className="dialog-header">{title}</div>
            <div className="dialog-body">{content}</div>
            <div className="dialog-footer">{footer}</div>
          </div>
        </div>
      )}
    </Portal>
  );
};
export default Dialog;
