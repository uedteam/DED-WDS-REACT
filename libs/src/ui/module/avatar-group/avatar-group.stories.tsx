import { Meta, StoryObj } from '@storybook/react';
import AvatarGroup from './avatar-group';
import { AvatarProps } from '@src/ui/element/avatar';

const users: AvatarProps[] = [
  {
    userName: 'eason',
    shape: 'circle',
    size: 'medium',
  },
  {
    userName: 'KevinYang',
    shape: 'circle',
    size: 'medium',
  },
  {
    userName: 'AmosLee',
    shape: 'circle',
    size: 'medium',
    imgSrc: 'https://picsum.photos/320/240',
  },
  {
    userName: 'JohnWu',
    shape: 'circle',
    size: 'medium',
    imgSrc: 'https://picsum.photos/320/340',
  },
];

export default {
  title: 'Component/Avatar-Group',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
    },
    placement: {
      description: '頭像群組的排列位置',
      control: {
        type: 'select',
        options: [
          'top-left',
          'top',
          'top-right',
          'right-top',
          'right',
          'right-bottom',
          'bottom-right',
          'bottom',
          'bottom-left',
          'left-bottom',
          'left',
          'left-top',
        ],
      },
    },
    limit: {
      description: '限制顯示數量',
      control: {
        type: 'number',
        min: 1,
      },
    },
    className: {
      description: '客製化樣式',
    },
  },
  args: {
    dataSource: users,
    placement: 'right-top',
    limit: 1,
    className: '',
  },
  parameters: {
    docs: {
      title: '個人頭像群組',
      description: {
        component: '個人頭像群組的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof AvatarGroup>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <AvatarGroup {...args} />;
  },
};
