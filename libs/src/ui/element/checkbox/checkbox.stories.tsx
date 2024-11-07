import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';

const options = [
  { label: '選項一', value: 'option1' },
  { label: '選項二', value: 'option2' },
  { label: '選項三', value: 'option3' },
];

const options = [
  { label: '選項一', value: 'option1' },
  { label: '選項二', value: 'option2' },
  { label: '選項三', value: 'option3' },
];

export default {
  title: 'Component/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      options: [
        'none',
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ],
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
      description: '選中的項目',
    },
    className: {
      description: '客製化樣式',
    },
    onChange: {
      description: '選中選項改變時的回調函數',
      action: 'onChange',
    },
  },
  args: {
    themeColor: 'primary',
    dataSource: options,
    direction: 'row',
    initValue: ['option1'],
    className: '',
    onChange: (e: string[]) => action('onChange')(e),
  },
  parameters: {
    docs: {
      title: 'Checkbox',
      description: {
        component: 'Checkbox 組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Checkbox {...args} />;
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {
    dataSource: options,
    initValue: ['option1'],
    onChange: (e) => action('onChange')(e),
    className: '',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Checkbox {...args} themeColor="primary" />
<Checkbox {...args} themeColor="secondary" />
<Checkbox {...args} themeColor="tertiary" />
<Checkbox {...args} themeColor="info" />
<Checkbox {...args} themeColor="success" />
<Checkbox {...args} themeColor="warning" />
<Checkbox {...args} themeColor="error" />
        `,
      },
    },
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Checkbox {...args} themeColor="primary" />
        <Checkbox {...args} themeColor="secondary" />
        <Checkbox {...args} themeColor="tertiary" />
        <Checkbox {...args} themeColor="info" />
        <Checkbox {...args} themeColor="success" />
        <Checkbox {...args} themeColor="warning" />
        <Checkbox {...args} themeColor="error" />
      </div>
    );
  },
};
