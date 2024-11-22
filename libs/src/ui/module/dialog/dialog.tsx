import React from 'react';
import { Portal } from '../../portal';
import { Button } from '@src/ui';
import './style.scss';

interface DialogProps {
  isOpen: boolean;
  hasClose?: boolean;
  onClose?: () => void;
  onConfirm?: () => void;
  onCancel?: () => void;
  title: string;
  content: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  className?: string;
}

/* 定義組件 */
/* 修改組件定義名稱 Component */
export const Dialog: React.FC<DialogProps> = ({
  isOpen,
  hasClose,
  onClose,
  onConfirm,
  onCancel,
  title,
  content,
  confirmText = '確認',
  cancelText = '取消',
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
                X
              </button>
            )}
            <h2 className="dialog-title">{title}</h2>
            <div className="dialog-body">{content}</div>
            <div className="dialog-footer">
              {onCancel && (
                <Button
                  onClick={onCancel}
                  variant="contained"
                  className="cancel-btn"
                >
                  {cancelText}
                </Button>
              )}
              {onConfirm && (
                <Button
                  onClick={onConfirm}
                  variant="contained"
                  themeColor="error"
                >
                  {confirmText}
                </Button>
              )}
            </div>
          </div>
        </div>
      )}
    </Portal>
  );
};
export default Dialog;
