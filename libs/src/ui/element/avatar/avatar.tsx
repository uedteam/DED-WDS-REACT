import React from 'react';
import { IdleIcon, OnlineIcon, BusyIcon, OfflineIcon } from '@src/assets';
import { getSizeClass, getStatusClass, getShapeClass } from './styled';
import { getAbbrFullName } from '@src/utils';

const getStatusIcon = (size: string, status: string) => {
  const sizeClass = getSizeClass('ded-avatar-icon', size);
  const statusClass = getStatusClass('ded-avatar-icon', status);

  const statusIcons: {
    [key: string]: React.FunctionComponent<
      React.SVGProps<SVGSVGElement> & { title?: string | undefined }
    >;
  } = {
    online: OnlineIcon,
    idle: IdleIcon,
    busy: BusyIcon,
    offline: OfflineIcon,
  };
  const StatusIcon = statusIcons[status];

  return StatusIcon ? (
    <StatusIcon className={`ded-avatar-icon ${sizeClass} ${statusClass}`} />
  ) : null;
};

export interface AvatarProps {
  userName: string;
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  shape?: 'circle' | 'square';
  status?: 'none' | 'online' | 'busy' | 'idle' | 'offline';
  imgSrc?: string;
  alt?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  userName = 'default',
  size = 'medium',
  shape = 'circle',
  status = 'none',
  alt = '無圖顯示',
  imgSrc = '',
  className = '',
}) => {
  return (
    <div
      className={`ded-avatar-container 
        ${getSizeClass('ded-avatar-container', size)} ${className}`}
    >
      <div className={`ded-avatar ${getShapeClass('ded-avatar', shape)}`}>
        {imgSrc ? (
          <img className="ded-avatar-pic" src={imgSrc} alt={alt} />
        ) : (
          <span className={`ded-avatar-text ${getSizeClass('ded-text', size)}`}>
            {getAbbrFullName(userName, 2)}
          </span>
        )}
      </div>
      {status === 'online' && getStatusIcon(size, 'online')}
      {status === 'idle' && getStatusIcon(size, 'idle')}
      {status === 'busy' && getStatusIcon(size, 'busy')}
      {status === 'offline' && getStatusIcon(size, 'offline')}
    </div>
  );
};
export default Avatar;
