import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Input } from './input';
import { Grid } from '@src/ui/section/grid/grid';
import { Row } from '@src/ui/section/grid/row';
import { Column } from '@src/ui/section/grid/column';
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
    label: '',
    type: 'text',
    placeholder: '請輸入...',
    prefix: null,
    hint: { error: '', description: '' },
    initValue: '',
    className: '',
  },
} as Meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  name: '預設項目',
  args: {
    placeholder: '請輸入帳號 ...',
    onChange: (e) => action('onChange')(e),
  },
  render(args) {
    return (
      <Grid>
        <Row>
          <Column xs={12} sm={6} md={4} lg={3}>
            <Input {...args} />
          </Column>
        </Row>
      </Grid>
    );
  },
};

export const InputWithStatus: Story = {
  name: '輸入框狀態',
  args: {
    prefix: <AccountIcon />,
    placeholder: '請輸入帳號 ...',
  },
  render(args) {
    return (
      <Grid>
        <Row gap={8}>
          <Column xs={12} sm={6} md={4} lg={3}>
            <Input {...args} label="帳號" />
          </Column>
          <Column xs={12} sm={6} md={4} lg={3}>
            <Input
              {...args}
              label="密碼"
              type={'password'}
              prefix={<LockIcon />}
            />
          </Column>
          <Column xs={12} sm={6} md={4} lg={3}>
            <Input
              {...args}
              label="帳號"
              hint={{ error: 'Error Message', description: '' }}
            />
          </Column>
          <Column xs={12} sm={6} md={4} lg={3}>
            <Input
              {...args}
              label="帳號"
              hint={{ error: '', description: 'Something Description' }}
            />
          </Column>
        </Row>
      </Grid>
    );
  },
};
