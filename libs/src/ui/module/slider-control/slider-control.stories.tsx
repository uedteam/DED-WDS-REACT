import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { SliderControl } from '@src/ui';
import { PlusIcon, MinusIcon } from '@src/assets';

export default {
  title: 'Component/Slider-Control',
  component: SliderControl,
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
    isDisabled: {
      description: '是否禁用',
    },
    min: {
      description: '最小值',
    },
    max: {
      description: '最大值',
    },
    step: {
      description: '步進值',
    },
    unit: {
      description: '單位',
    },
    prefix: {
      description: '前置元素',
      options: ['None', 'Increase', 'Decrease'],
      mapping: {
        None: null,
        Increase: <PlusIcon width={32} height={32} />,
        Decrease: <MinusIcon width={32} height={32} />,
      },
    },
    suffix: {
      description: '後置元素',
      options: ['None', 'Increase', 'Decrease'],
      mapping: {
        None: null,
        Increase: <PlusIcon width={32} height={32} />,
        Decrease: <MinusIcon width={32} height={32} />,
      },
    },
    initValue: {
      description: '初始值',
    },
    className: {
      description: '客製化樣式',
    },
    onChange: {
      description: '變更事件',
    },
    onClick: {
      description: '點擊事件',
      action: 'onClick',
    },
  },
  parameters: {
    docs: {
      title: '按鈕滑桿',
      description: {
        component: '按鈕滑桿輸入的呈現及說明。',
      },
    },
  },
  args: {
    themeColor: 'primary',
    prefix: 'Decrease',
    suffix: 'Increase',
    isDisabled: false,
    min: -100,
    max: 100,
    step: 1,
    unit: '℃',
    initValue: 50,
    className: '',
    onChange: action('onChange'),
    onClick: action('onClick'),
  },
} as Meta;
type Story = StoryObj<typeof SliderControl>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <SliderControl {...args} />;
  },
};

export const ThemeColor: Story = {
  name: '主題色彩',
  args: {
    prefix: 'Decrease',
    suffix: 'Increase',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
    initValue: 50,
    onClick: action('onClick'),
  },
  parameters: {
    docs: {
      source: {
        code: `
<SliderControl {...args} initValue={40} themeColor="primary" />
<SliderControl {...args} initValue={50} themeColor="secondary" />
<SliderControl {...args} initValue={60} themeColor="tertiary" />
<SliderControl {...args} initValue={70} themeColor="success" />
<SliderControl {...args} initValue={80} themeColor="info" />
<SliderControl {...args} initValue={90} themeColor="warning" />
<SliderControl {...args} initValue={100} themeColor="error" />
`,
      },
    },
  },
  render(args) {
    return (
      <div>
        <SliderControl {...args} initValue={40} themeColor="primary" />
        <SliderControl {...args} initValue={50} themeColor="secondary" />
        <SliderControl {...args} initValue={60} themeColor="tertiary" />
        <SliderControl {...args} initValue={70} themeColor="success" />
        <SliderControl {...args} initValue={80} themeColor="info" />
        <SliderControl {...args} initValue={90} themeColor="warning" />
        <SliderControl {...args} initValue={100} themeColor="error" />
      </div>
    );
  },
};
