import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Checkbox, CheckboxProps } from './checkbox';
import { useState } from 'react';
import { Grid, Row, Column } from '@src/ui/section/grid';

export default {
  title: 'Component/Checkbox',
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

const DefaultWithHooks = (args: CheckboxProps) => {
  const [value, setValue] = useState<string[]>(['option1']);

  const handleChange = (e: string[]) => {
    console.log(e);
    setValue(e);
  };

  return (
    <>
      <Checkbox
        {...args}
        options={options}
        initValue={value}
        onChange={handleChange}
      />
      <div style={{ marginTop: '16px' }}>已選項目: [{value.join(', ')}]</div>
    </>
  );
};

export const Default: Story = {
  name: '預設項目',
  args: {
    options: options,
    initValue: [],
    onChange: (e) => action('onChange')(e),
    direction: 'row',
    className: '',
  },
  render(args) {
    return <DefaultWithHooks {...args} />;
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
      <Grid>
        <Row>
          <Column xs={12} md={4}>
            <ThemeWithHooks themeColor="primary" />
          </Column>
          <Column xs={12} md={4}>
            <ThemeWithHooks themeColor="secondary" />
          </Column>
          <Column xs={12} md={4}>
            <ThemeWithHooks themeColor="tertiary" />
          </Column>
          <Column xs={12} md={4}>
            <ThemeWithHooks themeColor="info" />
          </Column>
          <Column xs={12} md={4}>
            <ThemeWithHooks themeColor="success" />
          </Column>
          <Column xs={12} md={4}>
            <ThemeWithHooks themeColor="warning" />
          </Column>
          <Column xs={12} md={4}>
            <ThemeWithHooks themeColor="error" />
          </Column>
        </Row>
      </Grid>
    );
  },
};
