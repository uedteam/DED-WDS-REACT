import React, { ReactNode } from 'react';
import { CloseIcon } from '@src/assets';
import { StatusIndicator } from '@src/ui/module/status-indicator';
import { Button } from '@src/ui/element/button';
import { Title } from '@src/ui/element/title';
import { getCombinedClassName } from '@src/utils/string';

export interface ToastProps {
  themeColor?:
    | 'primary'
    | 'secondary'
    | 'neutral'
    | 'info'
    | 'success'
    | 'warning'
    | 'error';
  onClose?: () => void;
  title?: string;
  content: string;
  prefix?: ReactNode;
  duration?: number;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({
  themeColor = 'primary',
  onClose = () => ({}),
  title = 'Title',
  content = 'Content',
  prefix = '',
  duration = 1000,
  className = '',
}) => {
  return (
    <div
      className={`ded-toast 
        ${getCombinedClassName('ded-toast', `border-${themeColor}`)} 
        ${className}`}
    >
      <Button
        variant="text"
        onClick={onClose}
        themeColor="neutral"
        className="ded-close-button"
      >
        <CloseIcon width={20} height={20} onClick={onClose} />
      </Button>
      <div className="ded-message">
        <StatusIndicator variant="text" themeColor={themeColor} prefix={prefix}>
          <Title>title</Title>
        </StatusIndicator>
      </div>
      <p className="ded-description">{content}</p>
    </div>
  );
};
export default Toast;
