import { AccountIcon, HomeIcon } from '@src/assets';
import { Meta, StoryObj } from '@storybook/react';
import { ItemProps } from '@src/hooks/useMenu';
import Menu from './menu';

const menuData: ItemProps[] = [
  {
    title: 'Dashboard',
    icon: <HomeIcon width={24} height={24} />,
    path: '/dashboard',
  },
  {
    title: 'Settings',
    icon: <HomeIcon width={24} height={24} />,
    path: '/settings',
    children: [
      {
        title: 'Profile',
        icon: <AccountIcon width={24} height={24} />,
        path: '/settings/profile',
      },
      {
        title: 'Account',
        icon: <AccountIcon width={24} height={24} />,
        path: '/settings/account',
      },
    ],
  },
  {
    title: 'Help',
    icon: <HomeIcon width={24} height={24} />,
    path: '/help',
  },
];

export const Default: Story = {
  name: '預設項目',
  args: {
    dataSource: menuData,
    isCollapsed: false,
    width: '100%',
    className: '',
  },
  parameters: {
    docs: {
      title: '選單',
      description: {
        component: '選單的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Menu>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Menu {...args} />;
  },
};
