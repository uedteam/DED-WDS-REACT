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
        'None',
        'InfoCircleIcon',
        'SuccessCircleIcon',
        'WarningCircleIcon',
        'ErrorCircleIcon',
        'QuestionCircleIcon',
        'DisableCircleIcon',
      ],
      mapping: {
        None: null,
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
    themeColor: 'success',
    variant: 'filled',
    children: 'Success',
    prefix: 'None',
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
  args: {},
  render(args) {
    return <StatusIndicator {...args}>{args.children}</StatusIndicator>;
  },
};

export const Theme: Story = {
  name: '主題色彩',
  args: {},
  render(args) {
    return (
      <div
        style={{
          width: '600px',
          display: 'flex',
          gap: '10px',
          flexWrap: 'wrap',
        }}
      >
        <StatusIndicator {...args} variant="filled" themeColor="info">
          Information
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="success">
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="warning">
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="error">
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="neutral">
          Disable
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="info">
          Information{' '}
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="success">
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="warning">
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="error">
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="neutral">
          Disable
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="info"
          prefix={<InfoCircleIcon width={20} height={20} />}
        >
          Information
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="success"
          prefix={<SuccessCircleIcon width={20} height={20} />}
        >
          Success
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="warning"
          prefix={<WarningTriIcon width={20} height={20} />}
        >
          Warning
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="error"
          prefix={<ErrorCircleIcon width={20} height={20} />}
        >
          Error
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="filled"
          themeColor="neutral"
          prefix={<DisableCircleIcon width={20} height={20} />}
        >
          Disable
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="info"
          prefix={<InfoCircleIcon width={20} height={20} />}
        >
          Information
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="success"
          prefix={<SuccessCircleIcon width={20} height={20} />}
        >
          Success
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="warning"
          prefix={<WarningTriIcon width={20} height={20} />}
        >
          Warning
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="error"
          prefix={<ErrorCircleIcon width={20} height={20} />}
        >
          Error
        </StatusIndicator>
        <StatusIndicator
          {...args}
          variant="text"
          themeColor="neutral"
          prefix={<DisableCircleIcon width={20} height={20} />}
        >
          Disable
        </StatusIndicator>
      </div>
    );
  },
};
