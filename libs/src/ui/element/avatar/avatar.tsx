import React from 'react';
import { IdleIcon, OnlineIcon, BusyIcon, OfflineIcon } from '@src/assets';
import { getSizeClass, getStatusClass, getShapeClass } from './styled';
import { getAbbrFullName } from '@src/utils';

/**
 * 根據給定的大小和狀態獲取對應的狀態圖標。
 *
 * @param {string} size - 圖標的大小。
 * @param {string} status - 用戶的狀態，可以是 'online'、'idle'、'busy' 或 'offline'。
 * @returns {React.FunctionComponent<React.SVGProps<SVGSVGElement>> | null} 對應狀態的圖標組件，如果狀態無效則返回 null。
 */
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

/**
 * AvatarProps 介面定義了 Avatar 元件的屬性。
 *
 * @property {'circle' | 'square'} [shape] - Avatar 的形狀，可選值為 'circle' 或 'square'。
 * @property {'xsmall' | 'small' | 'medium' | 'large'} [size] - Avatar 的大小，可選值為 'xsmall'、'small'、'medium'、'large'。
 * @property {'none' | 'online' | 'busy' | 'idle' | 'offline'} [status] - 使用者狀態，可選值為 'none'、'online'、'busy'、'idle'、'offline'。
 * @property {string} [src] - Avatar 圖片的來源 URL。
 * @property {string} [alt] - 圖片的替代文字。
 * @property {string} userName - 使用者名稱。
 * @property {string} [className] - 自訂的 CSS 類名。
 */
export interface AvatarProps {
  shape?: 'circle' | 'square';
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  status?: 'none' | 'online' | 'busy' | 'idle' | 'offline';
  alt?: string;
  src?: string;
  userName: string;
  className?: string;
}

/**
 * Avatar 組件
 *
 * @param {AvatarProps} props - Avatar 組件的屬性
 * @param {string} [props.shape='circle'] - Avatar 的形狀，預設為 'circle'
 * @param {string} [props.size='medium'] - Avatar 的大小，預設為 'medium'
 * @param {string} [props.status='none'] - 使用者狀態，預設為 'none'
 * @param {string} [props.src=''] - 圖片的來源 URL，預設為空字串
 * @param {string} [props.alt='無圖顯示'] - 圖片的替代文字，預設為 '無圖顯示'
 * @param {string} [props.userName=''] - 使用者名稱，預設為 ''
 * @param {string} [props.className=''] - 額外的 CSS 類名，預設為空字串
 * @returns {JSX.Element} Avatar 組件的 JSX 元素
 */
export const Avatar: React.FC<AvatarProps> = ({
  shape = 'circle',
  size = 'medium',
  status = 'none',
  src = '',
  alt = '無圖顯示',
  userName,
  className = '',
}) => {
  return (
    <div
      className={`ded-avatar-container 
        ${getSizeClass('ded-avatar-container', size)} ${className}`}
    >
      <div className={`ded-avatar ${getShapeClass('ded-avatar', shape)}`}>
        {src ? (
          <img className="ded-avatar-pic" src={src} alt={alt} />
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
