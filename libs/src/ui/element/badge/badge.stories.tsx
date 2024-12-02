import { Meta, StoryObj } from '@storybook/react';
import Badge from './badge';
import { NotificationIcon } from '@src/assets';

export default {
  title: 'Component/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'success',
          'warning',
          'error',
          'info',
        ],
      },
    },
    type: {
      description: '是否顯示圓點',
      control: {
        type: 'select',
        options: ['dot', 'number'],
      },
    },
    value: {
      description: '徽章數值',
    },
    limit: {
      description: '限制數值',
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: '徽章',
      description: {
        component: '徽章的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: '預設項目',
  args: {
    themeColor: 'primary',
    type: 'number',
    limit: 999,
    value: 1000,
    className: '',
  },
  render(args) {
    return (
      <Badge {...args}>
        <NotificationIcon width={26} height={26} />
      </Badge>
    );
  },
};
