import { Meta, StoryObj } from '@storybook/react';
import Avatar from './avatar';

export default {
  title: 'Component/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    userName: {
      description: '沒有設定頭像時，所顯示的登入者名稱',
    },
    status: {
      description: '登入者目前狀態',
      control: {
        type: 'select',
        options: ['none', 'online', 'idle', 'busy', 'offline'],
      },
    },
    size: {
      description: '頭像尺寸',
      control: {
        type: 'select',
        options: ['xsmall', 'small', 'medium', 'large'],
      },
    },
    shape: {
      description: '頭像形狀',
      control: {
        type: 'select',
        options: ['circle', 'square'],
      },
    },
    imgSrc: {
      description: '頭像圖片連結',
    },
    alt: {
      description: '頭像圖片描述',
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: 'Avatar',
      description: {
        component: '個人頭像的呈現及說明。',
      },
    },
  },
  args: {
    userName: 'default',
    status: 'none',
    size: 'medium',
    shape: 'circle',
    imgSrc: '',
    alt: '無圖顯示',
    className: '',
  },
} as Meta;
type Story = StoryObj<typeof Avatar>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  },
};

export const AvatarShape: Story = {
  name: '頭像形狀',
  args: {
    userName: 'Kevin',
    imgSrc: 'https://picsum.photos/320/240',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="square" status="idle" />
        `,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '32px', alignItems: 'flex-end' }}>
        <Avatar {...args} size="large" shape="circle" status="online" />
        <Avatar {...args} size="large" shape="square" status="idle" />
      </div>
    );
  },
};

export const AvatarStatus: Story = {
  name: '頭像狀態',
  args: {
    userName: 'Kevin',
    imgSrc: 'https://picsum.photos/320/240',
    className: '',
  },
  parameters: {
    docs: {
      source: {
        code: `
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="circle" status="idle" />
<Avatar {...args} size="large" shape="circle" status="busy" />
<Avatar {...args} size="large" shape="circle" status="offline" />
        `,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-end' }}>
        <Avatar {...args} size="large" shape="circle" status="online" />
        <Avatar {...args} size="large" shape="circle" status="idle" />
        <Avatar {...args} size="large" shape="circle" status="busy" />
        <Avatar {...args} size="large" shape="circle" status="offline" />
      </div>
    );
  },
};
