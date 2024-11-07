import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import {
  AccountIcon,
  SearchIcon,
  VisibilityIcon,
  VisibilityOffIcon,
  CloseIcon,
  LockIcon,
} from '@src/assets';

export default {
  title: 'Component/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    size: {
      description: '輸入框尺寸',
      control: {
        type: 'select',
        options: ['small', 'medium', 'large'],
      },
    },
    isDisabled: {
      description: '是否禁用',
    },
    prefix: {
      description: '前置元素',
      options: [
        'None',
        'Account',
        'Search',
        'Visibility',
        'VisibilityOff',
        'Close',
        'Lock',
      ],
      mapping: {
        None: null,
        Account: <AccountIcon />,
        Search: <SearchIcon />,
        Visibility: <VisibilityIcon />,
        VisibilityOff: <VisibilityOffIcon />,
        Close: <CloseIcon />,
        Lock: <LockIcon />,
      },
    },
    label: {
      description: '標題',
    },
    type: {
      description: '輸入類型',
      control: {
        type: 'select',
        options: ['text', 'password', 'number', 'email'],
      },
    },
    placeholder: {
      description: '輸入提示',
      control: {
        type: 'text',
      },
    },
    hint: {
      description: '提示訊息',
    },
    initValue: {
      description: '初始值',
    },
    onChange: {
      description: '輸入事件',
      action: 'changed',
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: '輸入框',
      description: {
        component: '輸入框組件的呈現及說明。',
      },
    },
  },
  args: {
    size: 'medium',
    isDisabled: false,
    label: '帳號',
    type: 'text',
    placeholder: '請輸入帳號...',
    prefix: <AccountIcon />,
    hint: { error: '', description: '描述提示信息' },
    initValue: '',
    className: '',
    onChange: (e: string) => action('changed')(e),
  },
} as Meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return <Input {...args} />;
  },
};

export const InputWithStatus: Story = {
  name: '輸入框狀態',
  args: {
    prefix: <AccountIcon />,
    placeholder: '請輸入帳號 ...',
  },
  parameters: {
    docs: {
      source: {
        code: `
<Input {...args} label="帳號" />
<Input {...args} label="密碼" type={'password'} prefix={<LockIcon />} />
<Input {...args} label="帳號" hint={{ error: '錯誤訊息', description: '' }} />
<Input {...args} label="帳號" hint={{ error: '', description: '描述' }} />
`,
      },
    },
  },
  render(args) {
    return (
      <div>
        <Input {...args} label="帳號" />
        <Input {...args} label="密碼" type={'password'} prefix={<LockIcon />} />
        <Input
          {...args}
          label="帳號"
          hint={{ error: '錯誤訊息', description: '' }}
        />
        <Input
          {...args}
          label="帳號"
          hint={{ error: '', description: '描述' }}
        />
      </div>
    );
  },
};
