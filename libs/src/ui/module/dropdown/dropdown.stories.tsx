import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../dropdown';

export default {
  title: 'Component/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    label: {
      description: '標籤',
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
    onSelect: {
      description: '選擇事件',
    },
  },
  parameters: {
    docs: {
      title: '搜尋',
      description: {
        /* 組件描述 */
        component: '組件的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Dropdown>;

const options = [
  {
    content: {
      label: '選項一',
      value: 'option1',
      // href: '#',
    },
  },
  {
    content: {
      label: '選項二',
      value: 'option2',
      // href: '#',
    },
  },
  {
    content: {
      label: '選項三',
      value: 'option3',
      // href: '#',
    },
  },
];

export const Default: Story = {
  name: '搜尋輸入框',
  args: {
    dataSource: options,
    label: 'Label',
    className: '',
    onSelect: action('onClick'),
  },
  render(args) {
    return <Dropdown {...args} />;
  },
};
