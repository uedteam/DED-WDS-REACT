import { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '@src/ui';

export default {
  title: 'Component/Accordion',
  component: Accordion,
  tags: ['autodocs'],
  argTypes: {
    dataSource: {
      description: '資料來源',
      table: {
        category: 'PROPS',
      },
    },
    isOpenAll: {
      description: '是否全部展開',
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
      title: 'Accordion',
      description: {
        component: 'Accordion 的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Accordion>;

const qaList = [
  {
    id: '1',
    label: 'Q1. 什麼是 React？',
    detail: 'React 是一個用於構建用戶界面的 JavaScript 函數庫。',
  },
  {
    id: '2',
    label: 'Q2. React 的特點有哪些？',
    detail: 'React 的特點有：組件化、單向數據流、虛擬 DOM。',
  },
  {
    id: '3',
    label: 'Q3. React 的生態系統有哪些？',
    detail: 'React 的生態系統有：React Router、Redux、Axios。',
  },
  {
    id: '4',
    label: 'Q4. React 的優點有哪些？',
    detail: 'React 的優點有：組件化、單向數據流、虛擬 DOM。',
  },
];

export const Default: Story = {
  name: '預設項目',
  args: {
    dataSource: qaList,
    isOpenAll: false,
    className: '',
  },
  render(args) {
    return <Accordion {...args} />;
  },
};
