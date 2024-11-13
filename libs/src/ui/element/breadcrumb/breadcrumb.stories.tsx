import { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from './breadcrumb';

const linkList = [
  { label: '首頁', href: '/' },
  { label: '第一層', href: '/first' },
  { label: '第二層', href: 'https://tw.yahoo.com' },
  { label: '第三層', href: '/first/second/third' },
  { label: '第n層', href: '/first/second/third/n' },
  { label: '當前頁' },
];

export default {
  title: 'Component/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
  },
  args: {
    dataSource: linkList,
    className: '',
  },
  parameters: {
    docs: {
      title: '麵包屑',
      description: {
        component: '麵包屑組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Breadcrumb {...args} />;
  },
};
