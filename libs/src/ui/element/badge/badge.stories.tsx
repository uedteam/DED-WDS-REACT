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
          'neutral',
          'primary',
          'secondary',
          'success',
          'warning',
          'error',
          'info',
        ],
      },
      table: {
        category: 'PROPS',
      },
    },
    type: {
      description: '是否顯示圓點',
      control: {
        type: 'select',
        options: ['dot', 'number'],
      },
      table: {
        category: 'PROPS',
      },
    },
    value: {
      description: '徽章數值',
      table: {
        category: 'PROPS',
      },
    },
    limit: {
      description: '限制數值',
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
  parameters: {
    docs: {
      title: '徽章',
      description: {
        component: '徽章組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  name: '預設項目',
  args: {
    themeColor: 'error',
    type: 'number',
    value: 100,
    limit: 99,
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

export const Type: Story = {
  name: '類型選擇',
  args: {
    themeColor: 'error',
    value: 100,
    limit: 99,
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '32px' }}>
        <Badge {...args} type="dot">
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} type="number">
          <NotificationIcon width={26} height={26} />
        </Badge>
      </div>
    );
  },
};

export const Max: Story = {
  name: '最大值設定',
  args: {
    themeColor: 'error',
    type: 'number',
    limit: 99,
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '32px' }}>
        <Badge {...args} value={99}>
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} value={100}>
          <NotificationIcon width={26} height={26} />
        </Badge>
      </div>
    );
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {
    themeColor: 'error',
    type: 'number',
    value: 100,
    limit: 99,
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
          <Badge {...args} type="dot" themeColor="neutral">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="primary">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="secondary">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="info">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="success">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="warning">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="error">
            <NotificationIcon width={26} height={26} />
          </Badge>
        </div>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px' }}>
          <Badge {...args} themeColor="neutral">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} themeColor="primary">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} themeColor="secondary">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} themeColor="info">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} themeColor="success">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} themeColor="warning">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} themeColor="error">
            <NotificationIcon width={26} height={26} />
          </Badge>
        </div>
      </div>
    );
  },
};
