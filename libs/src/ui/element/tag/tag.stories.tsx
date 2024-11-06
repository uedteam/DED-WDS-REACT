import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import { Tag } from './tag';
import {
  AccountIcon,
  SearchIcon,
  VisibilityIcon,
  VisibilityOffIcon,
} from '@src/assets';

export default {
  title: 'Component/Tag',
  component: Tag,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      description: '是否禁用',
    },
    icon: {
      description: '圖示',
      options: ['None', 'Account', 'Search', 'Visibility', 'VisibilityOff'],
      mapping: {
        None: null,
        Account: <AccountIcon />,
        Search: <SearchIcon />,
        Visibility: <VisibilityIcon />,
        VisibilityOff: <VisibilityOffIcon />,
      },
    },
    closable: {
      description: '是否可關閉',
    },
    closeIcon: {
      description: '關閉圖示',
    },
    className: {
      description: '客製化樣式',
    },
    onClose: {
      description: '關閉事件',
      action: 'closed',
    },
  },
  args: {
    isDisabled: false,
    icon: 'None',
    closable: true,
    closeIcon: null,
    className: '',
    onClose: action('closed'),
  },
  parameters: {
    docs: {
      title: '標籤',
      description: {
        component: '標籤的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Tag>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    const forMap = [111, 222, 333, 444, 555];
    return (
      <div style={{ display: 'flex', gap: '8px' }}>
        {forMap.map((item) => (
          <Tag {...args}>{item}</Tag>
        ))}
      </div>
    );
  },
};
