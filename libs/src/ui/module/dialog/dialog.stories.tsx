import { Meta, StoryObj } from '@storybook/react';
import { Dialog } from './dialog';
import { useDialog } from '../../../hooks/useDialog';
import { Button } from '@src/ui';

export default {
  /* 定義組件路徑及匯入名稱: Element/Component */
  title: 'Component/Dialog',
  /* 設定對應的組件名稱: Component */
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      title: 'Dialog',
      description: {
        component: 'Dialog 的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Dialog>;

const DefaultWithHook = (args: Story['args']) => {
  const { isOpen, title, content, openDialog, closeDialog } = useDialog();

  const handleConfirm = () => {
    closeDialog();
  };

  const handleCancel = () => {
    closeDialog();
  };

  return (
    <>
      <Button
        onClick={() => {
          openDialog(
            '標題',
            <p>點擊「全部覆蓋」，即所有名稱相同的檔案皆以新檔案覆蓋</p>
          );
        }}
        variant="contained"
      >
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={closeDialog}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
        title={title}
        content={content}
        confirmText="確認删除"
        cancelText="取消"
      />
    </>
  );
};

export const Default: Story = {
  name: '搜尋輸入框',
  args: {
    className: '',
  },
  render(args) {
    return <DefaultWithHook {...args} />;
  },
};
