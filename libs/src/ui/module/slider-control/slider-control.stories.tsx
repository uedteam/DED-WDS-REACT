import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { SliderControl } from '../../module/slider-control';
import { SvgPlus, SvgMinus } from '@src/assets';

export default {
  title: 'Component/Slider-Control',
  component: SliderControl,
  tags: ['autodocs'],
  argTypes: {
    min: {
      description: '最小值',
      table: {
        category: 'PROPS',
      },
    },
    max: {
      description: '最大值',
      table: {
        category: 'PROPS',
      },
    },
    step: {
      description: '步進值',
      table: {
        category: 'PROPS',
      },
    },
    initValue: {
      description: '初始值',
      table: {
        category: 'PROPS',
      },
    },
    label: {
      description: '單位',
      table: {
        category: 'PROPS',
      },
    },
    isDisabled: {
      description: '是否禁用',
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '前置元素',
      options: ['None', 'Increase', 'Decrease'],
      mapping: {
        None: null,
        Increase: <SvgPlus width={32} height={32} />,
        Decrease: <SvgMinus width={32} height={32} />,
      },
      table: {
        category: 'PROPS',
      },
    },
    suffix: {
      description: '後置元素',
      options: ['None', 'Increase', 'Decrease'],
      mapping: {
        None: null,
        Increase: <SvgPlus width={32} height={32} />,
        Decrease: <SvgMinus width={32} height={32} />,
      },
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
    onClick: {
      description: '點擊事件',
      action: 'onClick',
      table: {
        category: 'EVENTS',
      },
    },
    onChange: {
      description: '變更事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  parameters: {
    docs: {
      title: 'Slider Control',
      description: {
        component: '按鈕滑桿輸入的呈現及說明。',
      },
    },
  },
  args: {
    min: -100,
    max: 100,
    step: 1,
    initValue: 50,
    label: '℃',
    prefix: 'Decrease',
    suffix: 'Increase',
    isDisabled: false,
    className: '',
    onClick: action('onClick'),
    onChange: action('onChange'),
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
