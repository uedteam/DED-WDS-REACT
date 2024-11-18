import React, { useEffect, useState, useRef } from 'react';
import { Avatar } from '@src/ui/element/avatar';
import { List, Button } from '@src/ui';
import { splitArray } from '@src/utils';
import { ItemProps } from '../list/item';
import Portal from '@src/ui/portal';
import { getTargetPosition } from '@src/utils/position';
import { usePosition } from '@src/hooks/usePosition';
import { AccountIcon } from '@src/assets';
import { useClickOutside } from '@src/hooks';

/**
 * AvatarGroupProps 介面定義了 Avatar 群組的屬性。
 *
 * @param {{ userName: string; src: string }[]} dataSource - Avatar 的使用者陣列。
 * @property {'xsmall' | 'small' | 'medium' | 'large'} [size] - Avatar 的大小，可選值為 'xsmall'、'small'、'medium'、'large'。
 * @param {number} limit - Avatar 顯示的最大數量。
 * @param {string} [className] - 自訂的 CSS 類名。
 */
export interface AvatarGroupProps {
  dataSource: { userName: string; src: string }[];
  size?: 'xsmall' | 'small' | 'medium' | 'large';
  limit: number;
  className?: string;
}

/**
 * AvatarGroup 組件
 *
 * @param {AvatarGroupProps} props - AvatarGroup 的屬性
 * @param {User[]} [props.dataSource] - 資料來源
 * @param {number} [props.limit] - 顯示的用戶數量限制
 * @param {string} [props.className] - 額外的 CSS 類名
 *
 * @returns {JSX.Element} AvatarGroup 組件
 *
 * @throws {Error} 當 limit 小於 1 時拋出錯誤
 *
 */
export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  dataSource,
  size = 'large',
  limit = 1,
  className = '',
}: AvatarGroupProps): JSX.Element => {
  const restCount = dataSource.length - limit;
  const result = splitArray(dataSource, limit);

  const [menu, setMenu] = React.useState<ItemProps[]>([]);

  const [isVisible, setIsVisible] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const { childrenSize, position } = usePosition(avatarRef);

  useClickOutside(menuRef, () => setIsVisible(false));

  if (limit < 1) {
    throw new Error('Limit must be at least 1');
  }

  useEffect(() => {
    return setMenu(
      result.restList.map((user) => {
        return {
          prefix: (
            <Avatar
              size={size}
              shape="circle"
              userName={user.userName}
              src={user.imgSrc || ''}
            />
          ),
          content: {
            prefix: <AccountIcon />,
            label: user.userName,
            value: user.userName,
            href: '',
          },
        };
      })
    );
  }, []);

  return (
    <>
      <div className="ded-avatar-group">
        {result.currList.map((user, index) => {
          const { userName, status, src } = user;
          return (
            <Avatar
              key={index}
              shape="circle"
              size={size}
              userName={userName}
              status={status}
              src={src || ''}
            />
          );
        })}

        {result.restList.map((user, index) => {
          // eslint-disable-next-line array-callback-return
          if (index !== 0) return;
          return (
            <div
              ref={avatarRef}
              key={index}
              className="ded-avatar-group-container"
            >
              <Button
                variant="text"
                size="large"
                onClick={() => setIsVisible((prev) => !prev)}
              >
                <Avatar
                  shape="circle"
                  size={size}
                  userName={`+${restCount}`}
                ></Avatar>
              </Button>
            </div>
          );
        })}
      </div>
      <Portal>
        {isVisible && (
          <div
            ref={menuRef}
            style={getTargetPosition(
              position,
              childrenSize,
              'right-top',
              '6px'
            )}
            className={`ded-dropdown-menu ${className}`}
          >
            <List dataSource={menu} isMenu />
          </div>
        )}
      </Portal>
    </>
  );
};
export default AvatarGroup;
