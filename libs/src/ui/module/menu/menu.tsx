import React, { useEffect, useRef } from 'react';
import { ArrowDownIcon } from '@src/assets';
import { useMenu } from '@src/hooks';
import { ItemProps } from '@src/hooks/useMenu';

export interface MenuItemProps {
  item: ItemProps;
  isCollapsed: boolean;
  color?: string;
}

const MenuItem: React.FC<MenuItemProps> = ({
  item = { title: '', icon: '' },
  isCollapsed = false,
  color = '#000000',
}: MenuItemProps) => {
  const { isOpen, setIsOpen, contentRef, maxHeight, hasChildren } = useMenu(
    item,
    isCollapsed
  );

  return (
    <li>
      <div className="ded-menu-item">
        <div
          style={{ color: color }}
          className="ded-menu-item-content"
          onClick={() => {
            if (item.path) {
              console.log('go to', item.path);
            }
          }}
        >
          <div className="ded-menu-item-content-icon">{item.icon}</div>
          <span
            className="ded-menu-item-content-title"
            style={{
              opacity: isCollapsed ? 0 : 1,
            }}
          >
            {item.title}
          </span>
        </div>

        {!isCollapsed && hasChildren && (
          <ArrowDownIcon
            width={24}
            height={24}
            fill={color}
            style={{
              transition: 'transform 0.3s',
              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
            }}
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          />
        )}
      </div>

      <ul
        ref={contentRef}
        className="ded-menu-subitem"
        style={{
          maxHeight: maxHeight,
        }}
      >
        {hasChildren &&
          item.children?.map((child, index) => (
            <MenuItem
              key={index}
              item={child}
              isCollapsed={isCollapsed}
              color={color}
            />
          ))}
      </ul>
    </li>
  );
};

export interface MenuProps {
  dataSource: ItemProps[];
  isCollapsed: boolean;
  width?: string;
  color?: string;
  className?: string;
}

export const Menu: React.FC<MenuProps> = ({
  dataSource = [],
  isCollapsed = false,
  width = '240px',
  color = '#000000',
}: MenuProps) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (menuRef.current) {
      menuRef.current.style.width = isCollapsed ? '60px' : width;
    }
  }, [isCollapsed, width]);

  return (
    <div className="ded-menu-container">
      <nav
        ref={menuRef}
        className="ded-nav"
        style={{
          width: isCollapsed ? '60px' : '100%',
        }}
      >
        <ul className="ded-nav-menu">
          {dataSource.map((item, index) => (
            <MenuItem
              key={index}
              item={item}
              isCollapsed={isCollapsed}
              color={color}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
