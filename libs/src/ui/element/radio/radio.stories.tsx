import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Radio } from './radio';

const options = [
  { label: '選項一', value: 'option1' },
  { label: '選項二', value: 'option2' },
  { label: '選項三', value: 'option3' },
];

export default {
  title: 'Component/Radio',
  component: Radio,
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
    dataSource: {
      description: '資料來源',
    },
    direction: {
      description: '排列方向',
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
    },
    initValue: {
      description: '預設值',
    },
    onChange: {
      description: '選擇選項後的事件',
      action: 'onChange',
    },
    className: {
      description: '客製化樣式',
    },
  },
  args: {
    themeColor: 'primary',
    dataSource: options,
    direction: 'row',
    initValue: 'option1',
    className: '',
    onChange: action('onChange'),
  },
  parameters: {
    docs: {
      title: 'Radio Button',
      description: {
        component: 'Radio Button 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Radio {...args} />;
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {
    dataSource: options,
    initValue: 'option1',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        <Radio {...args} themeColor="primary" />
        <Radio {...args} themeColor="secondary" />
        <Radio {...args} themeColor="tertiary" />
        <Radio {...args} themeColor="info" />
        <Radio {...args} themeColor="success" />
        <Radio {...args} themeColor="warning" />
        <Radio {...args} themeColor="error" />
      </div>
    );
  },
};
