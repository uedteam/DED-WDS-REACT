import { Meta, StoryObj } from '@storybook/react';
import { Divider } from './divider';

export default {
  title: 'Component/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '分隔線主題顏色',
      control: {
        type: 'select',
      },
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
    },
    children: {
      description: '分隔線內容',
    },
    direction: {
      description: '分隔線方向',
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
    },
    width: {
      description: '分隔線寬度',
      control: {
        type: 'select',
      },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
    },
    type: {
      description: '分隔線樣式',
      control: {
        type: 'select',
      },
      options: ['solid', 'dashed', 'dotted'],
    },
    align: {
      description: '分隔線對齊方式',
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end'],
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      title: '分隔線',
      description: {
        component: '分隔線的呈現及說明。',
      },
    },
  },
} as Meta;
/* 設定組件類型 */
type Story = StoryObj<typeof Divider>;

export const Default: Story = {
  name: '預設項目',
  args: {
    children: '分隔線',
    direction: 'horizontal',
    width: 'small',
    type: 'solid',
    align: 'center',
    className: '',
  },
  render(args) {
    return <Divider {...args} />;
  },
};

export const Type: Story = {
  name: '線條粗細',
  args: {
    direction: 'horizontal',
    width: 'small',
    type: 'solid',
    align: 'center',
    className: '',
  },
  render(args) {
    return (
      <div>
        <Divider {...args} width="xsmall">
          xsmall(1px)
        </Divider>
        <Divider {...args} width="small">
          small(2px)
        </Divider>
        <Divider {...args} width="medium">
          medium(4px)
        </Divider>
        <Divider {...args} width="large">
          large(6px)
        </Divider>
        <Divider {...args} width="xlarge">
          xlarge(8px)
        </Divider>
      </div>
    );
  },
};

export const Width: Story = {
  name: '線條類型',
  args: {
    children: '分隔線',
    direction: 'horizontal',
    width: 'small',
    type: 'solid',
    align: 'center',
    className: '',
  },
  render(args) {
    return (
      <div>
        <Divider {...args} type="solid" />
        <Divider {...args} type="dotted" />
        <Divider {...args} type="dashed" />
      </div>
    );
  },
};

export const Align: Story = {
  name: '文字對齊',
  args: {
    children: '分隔線',
    direction: 'horizontal',
    width: 'small',
    type: 'solid',
    className: '',
  },
  render(args) {
    return (
      <div>
        <Divider {...args} align="start" />
        <Divider {...args} align="center" />
        <Divider {...args} align="end" />
      </div>
    );
  },
};

export const Direction: Story = {
  name: '線條方向',
  args: {
    children: '分隔線',
    direction: 'vertical',
    width: 'small',
    type: 'solid',
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', height: '100px' }}>
        <Divider {...args} align="start" />
        <Divider {...args} align="center" />
        <Divider {...args} align="end" />
      </div>
    );
  },
};

export const ThemeColor: Story = {
  name: '線條顏色',
  args: {
    children: '分隔線',
    direction: 'horizontal',
    width: 'small',
    type: 'solid',
    align: 'center',
    className: '',
  },
  render(args) {
    return (
      <div>
        <Divider {...args} />
        <Divider {...args} themeColor="primary" />
        <Divider {...args} themeColor="secondary" />
        <Divider {...args} themeColor="tertiary" />
        <Divider {...args} themeColor="info" />
        <Divider {...args} themeColor="success" />
        <Divider {...args} themeColor="warning" />
        <Divider {...args} themeColor="error" />
      </div>
    );
  },
};
