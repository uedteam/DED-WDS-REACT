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
    src: 'https://picsum.photos/320/240',
  },
  {
    userName: 'JohnWu',
    shape: 'circle',
    size: 'medium',
    src: 'https://picsum.photos/320/340',
  },
];

export default {
  title: 'Component/Avatar-Group',
  component: AvatarGroup,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    limit: {
      description: '限制顯示數量',
      control: {
        type: 'number',
        min: 1,
      },
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      table: {
        category: 'PROPS',
      },
    },
  },
  args: {
    dataSource: users,
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
