import React, { useEffect, useState, useRef } from 'react';
import { Avatar, AvatarProps } from '@src/ui/element/avatar';
import { List, Button } from '@src/ui';
import { splitArray } from '@src/utils';
import { ItemProps } from '../list/item';
import Portal from '@src/ui/portal';
import { getTargetPosition } from '@src/utils/position';
import { usePosition } from '@src/hooks/usePosition';
import { AccountIcon } from '@src/assets';

/**
 * AvatarGroupProps 介面定義了 Avatar 群組的屬性。
 *
 * @param {AvatarProps[]} dataSource - Avatar 的使用者陣列。
 * @param {'top-left' | 'top' | 'top-right' | 'right-top' | 'right' | 'right-bottom' | 'bottom-right' | 'bottom' | 'bottom-left' | 'left-bottom' | 'left' | 'left-top'} placement - Avatar 群組的排列位置。
 * @param {number} limit - Avatar 顯示的最大數量。
 * @param {string} [className] - 自訂的 CSS 類名。
 */
export interface AvatarGroupProps {
  dataSource: AvatarProps[];
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
  limit: number;
  className?: string;
}

/**
 * AvatarGroup 組件
 *
 * @param {AvatarGroupProps} props - AvatarGroup 的屬性
 * @param {User[]} [props.dataSource] - 資料來源
 * @param {number} [props.limit] - 顯示的用戶數量限制
 * @param {string} [props.placement] - 下拉菜單的位置
 * @param {string} [props.className] - 額外的 CSS 類名
 *
 * @returns {JSX.Element} AvatarGroup 組件
 *
 * @throws {Error} 當 limit 小於 1 時拋出錯誤
 *
 */
export const AvatarGroup: React.FC<AvatarGroupProps> = ({
  dataSource = [],
  limit = 1,
  placement = 'right-top',
  className = '',
}: AvatarGroupProps): JSX.Element => {
  const restCount = dataSource.length - limit;
  const result = splitArray(dataSource, limit);

  const [menu, setMenu] = React.useState<ItemProps[]>([]);

  const [isVisible, setIsVisible] = useState(false);
  const avatarRef = useRef<HTMLDivElement>(null);
  const { childrenSize, position } = usePosition(avatarRef);

  if (limit < 1) {
    throw new Error('Limit must be at least 1');
  }

  useEffect(() => {
    return setMenu(
      result.restList.map((user) => {
        return {
          prefix: (
            <Avatar
              size="xsmall"
              shape="circle"
              userName={user.userName}
              imgSrc={user.imgSrc || ''}
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
          const { shape, size, userName, status, imgSrc } = user;
          return (
            <Avatar
              key={index}
              shape={shape}
              size={size}
              userName={userName}
              status={status}
              imgSrc={imgSrc || ''}
            />
          );
        })}

        {result.restList.map((user, index) => {
          // eslint-disable-next-line array-callback-return
          if (index !== 0) return;
          const { shape, size } = user;
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
                  shape={shape}
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
            style={getTargetPosition(position, childrenSize, placement, '6px')}
            className={`dropdown-menu ${className}`}
          >
            <List dataSource={menu} isMenu />
          </div>
        )}
      </Portal>
    </>
  );
};
export default AvatarGroup;
