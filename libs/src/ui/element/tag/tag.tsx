import React from 'react';
import { Button } from '@src/ui';
import { CloseIcon } from '@src/assets';
import { getDisableClass } from './styled';

interface TagProps {
  isDisabled?: boolean;
  icon?: React.ReactNode;
  closeIcon?: React.ReactNode;
  closable?: boolean;
  children: React.ReactNode;
  className?: string;
  onClose?: () => void;
}

export const Tag: React.FC<TagProps> = (props: TagProps) => {
  const {
    isDisabled,
    icon,
    closeIcon,
    closable,
    children,
    className,
    onClose,
  } = props;

  return (
    <div
      className={`ded-tag ${className} ${
        isDisabled ? getDisableClass('outlined') : ''
      }`}
    >
      {icon && <div className="ded-tag-icon">{icon}</div>}
      <span className="ded-tag-text">{children}</span>
      {closable && (
        <Button variant="text" onClick={onClose}>
          {closeIcon ? (
            closeIcon
          ) : (
            <CloseIcon
              className={`ded-tag-close ${
                isDisabled ? 'ded-tag-close-disabled' : ''
              }`}
            />
          )}
        </Button>
      )}
    </div>
  );
};
export default Tag;
