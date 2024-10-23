import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './checkbox';
import { useState } from 'react';

export default {
  title: 'Design System/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      options: [
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
    className: {
      description: '客製化樣式',
    },
    options: {
      description: '選項',
    },
    direction: {
      description: '方向',
      control: {
        type: 'select',
        options: ['row', 'column'],
      },
    },
    initValue: {
      description: '選中的選項',
    },
    onChange: {
      description: '選中選項改變時的回調函數',
      action: 'onChange',
    },
  },
  args: {},
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

const options = [
  { label: '選項一', value: 'option1' },
  { label: '選項二', value: 'option2' },
  { label: '選項三', value: 'option3' },
];

const DefaultWithHooks = () => {
  const [value, setValue] = useState<string[]>(['option1']);

  const handleChange = (e: string[]) => {
    console.log(e);
    setValue(e);
  };

  return (
    <Checkbox options={options} initValue={value} onChange={handleChange} />
  );
};

export const Default: Story = {
  name: '預設項目',
  args: {
    options: options,
    initValue: [],
    onChange: (e) => action('onChange')(e),
    className: '',
  },
  render(args) {
    return <DefaultWithHooks />;
  },
};

const ThemeWithHooks = ({
  themeColor,
}: {
  themeColor:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'success'
    | 'warning'
    | 'error'
    | 'info';
}) => {
  const [value, setValue] = useState<string[]>(['option1']);

  return (
    <Checkbox
      themeColor={themeColor}
      options={options}
      initValue={value}
      onChange={setValue}
    />
  );
};

export const Theme: Story = {
  name: '主題色彩',
  args: {
    options: options,
    initValue: ['option1'],
    onChange: (e) => action('onChange')(e),
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <ThemeWithHooks themeColor="primary" />
        <ThemeWithHooks themeColor="secondary" />
        <ThemeWithHooks themeColor="tertiary" />
        <ThemeWithHooks themeColor="info" />
        <ThemeWithHooks themeColor="success" />
        <ThemeWithHooks themeColor="warning" />
        <ThemeWithHooks themeColor="error" />
      </div>
    );
  },
};
