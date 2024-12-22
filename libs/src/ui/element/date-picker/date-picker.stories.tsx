import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { DatePicker } from './date-picker';

export default {
  title: 'Component/DatePicker',
  component: DatePicker,
  tags: ['autodocs'],
  argTypes: {
    value: {
      description: '日期',
      table: {
        category: 'PROPS',
      },
    },
    placeholder: {
      description: '提示文字',
      table: {
        category: 'PROPS',
      },
    },
    range: {
      description: '日期區間',
      table: {
        category: 'PROPS',
      },
    },
    options: {
      description: '選項',
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
    onChange: {
      description: '日期更改事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    value: '',
    placeholder: 'Start Date',
    range: false,
    onChange: action('onChange'),
    options: {
      format: 'yyyy/mm/dd',
      autohide: true,
      todayHighlight: true,
    },
  },
  parameters: {
    docs: {
      title: '日期',
      description: {
        component: '日期組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof DatePicker>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <DatePicker {...args} />;
  },
};

export const Range: Story = {
  name: '日期區間',
  args: {
    options: {
      format: 'yyyy/mm/dd',
      autohide: true,
      todayHighlight: true,
    },
  },
  render(args) {
    return <DatePicker {...args} />;
  },
};
