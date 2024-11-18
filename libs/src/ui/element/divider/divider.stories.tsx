import { Meta, StoryObj } from '@storybook/react';
import { Divider } from './divider';

export default {
  title: 'Component/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      control: {
        type: 'select',
      },
      options: [
        'primary',
        'secondary',
        'tertiary',
        'success',
        'warning',
        'error',
        'info',
      ],
      table: {
        category: 'PROPS',
      },
    },
    width: {
      description: '線條寬度',
      control: {
        type: 'select',
      },
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'],
      table: {
        category: 'PROPS',
      },
    },
    type: {
      description: '線條樣式',
      control: {
        type: 'select',
      },
      options: ['solid', 'dashed', 'dotted'],
      table: {
        category: 'PROPS',
      },
    },
    direction: {
      description: '線條方向',
      control: {
        type: 'select',
      },
      options: ['horizontal', 'vertical'],
      table: {
        category: 'PROPS',
      },
    },
    align: {
      description: '文字位置',
      control: {
        type: 'select',
      },
      options: ['start', 'center', 'end'],
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    children: {
      description: '分隔線內容',
      table: {
        category: 'SLOTS',
      },
    },
  },
  args: {
    themeColor: 'primary',
    width: 'xsmall',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: '',
    children: '分隔線',
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
  args: {},
  render(args) {
    return <Divider {...args} />;
  },
};

export const Align: Story = {
  name: '文字對齊',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    className: '',
    children: '分隔線',
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

export const Type: Story = {
  name: '線條粗細',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
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
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: '',
    children: '分隔線',
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

export const Direction: Story = {
  name: '線條方向',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'vertical',
    className: '',
    children: '分隔線',
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
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: '',
    children: '分隔線',
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
