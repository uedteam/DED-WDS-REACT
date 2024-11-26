import { Meta, StoryObj } from '@storybook/react';
import Badge from './badge';

export default {
  title: 'Component/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    isDot: {
      description: '是否顯示圓點',
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
/* 設定組件類型 */
type Story = StoryObj<typeof Badge>;

export const Primary: Story = {
  name: '預設項目',
  args: {
    className: '',
  },
  render(args) {
    return <Badge {...args} />;
  },
};
