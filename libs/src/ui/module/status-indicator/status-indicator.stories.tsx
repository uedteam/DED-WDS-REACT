import { Meta, StoryObj } from '@storybook/react';
import { StatusIndicator } from './status-indicator';
import {
  InfoCircleIcon,
  SuccessCircleIcon,
  WarningTriIcon,
  ErrorCircleIcon,
  QuestionCircleIcon,
  DisableCircleIcon,
} from '@src/assets';

export default {
  title: 'Component/Status-Indicator',
  component: StatusIndicator,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'neutral',
          'info',
          'success',
          'warning',
          'error',
        ],
      },
    },
    variant: {
      description: '樣式變體',
      control: {
        type: 'select',
        options: ['filled', 'text'],
      },
    },
    prefix: {
      description: '前綴元素',
      options: [
        'InfoCircleIcon',
        'SuccessCircleIcon',
        'WarningCircleIcon',
        'ErrorCircleIcon',
        'QuestionCircleIcon',
        'DisableCircleIcon',
      ],
      mapping: {
        InfoCircleIcon: <InfoCircleIcon width={20} height={20} />,
        SuccessCircleIcon: <SuccessCircleIcon width={20} height={20} />,
        WarningCircleIcon: <WarningTriIcon width={20} height={20} />,
        ErrorCircleIcon: <ErrorCircleIcon width={20} height={20} />,
        QuestionCircleIcon: <QuestionCircleIcon width={20} height={20} />,
        DisableCircleIcon: <DisableCircleIcon width={20} height={20} />,
      },
      control: {
        type: 'select',
      },
    },
    children: {
      description: '內容',
      control: {
        type: 'text',
      },
    },
    size: {
      description: '尺寸',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  args: {
    themeColor: 'primary',
    variant: 'text',
    children: '123',
    prefix: <InfoCircleIcon width={20} height={20} />,
    size: 'medium',
    className: '',
  },
  parameters: {
    docs: {
      title: 'StatusIndicator',
      description: {
        component: '狀態指示組件的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof StatusIndicator>;

export const Default: Story = {
  name: '預設項目',
  args: {
    className: '',
  },
  render(args) {
    return <StatusIndicator {...args}>{args.children}</StatusIndicator>;
  },
};
