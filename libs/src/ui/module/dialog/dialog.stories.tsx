import { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '@src/ui';
import { useDialog } from '@src/hooks';
import { Button, Title } from '@src/ui';

export default {
  title: 'Component/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: '是否開啟',
    },
    hasClose: {
      description: '是否有關閉按鈕',
    },
    title: {
      description: '標題',
      table: {
        category: 'SLOTS',
      },
    },
    content: {
      description: '內容',
      table: {
        category: 'SLOTS',
      },
    },
    footer: {
      description: '底部',
      table: {
        category: 'SLOTS',
      },
    },
    onClose: {
      description: '關閉事件',
      table: {
        category: 'EVENTS',
      },
    },
    className: {
      description: '客製化樣式',
    },
  },
  parameters: {
    docs: {
      title: 'Dialog',
      description: {
        component: 'Dialog 的呈現及說明。',
      },
      source: {
        code: `<Dialog
  isOpen={isOpen}
  onClose={closeDialog}
  title={title}
  content={content}
  footer={
    <>
      <Button
        onClick={handleCancel}
        variant="contained"
        className="cancel-btn"
      >
        Cancel
      </Button>
      <Button
        onClick={handleOK}
        variant="contained"
      >
        OK
      </Button>
    </>
  }
/>`,
      },
    },
  },
  args: {
    isOpen: false,
    hasClose: false,
    className: '',
  },
} as Meta;
type Story = StoryObj<typeof Dialog>;

const DefaultWithHook = (args: Story['args']) => {
  const { isOpen, title, content, openDialog, closeDialog } = useDialog();

  const handleOK = () => {
    window.alert('ok');
    closeDialog();
  };

  const handleCancel = () => {
    window.alert('cancel');
    closeDialog();
  };

  return (
    <>
      <Button
        onClick={() => {
          openDialog(<Title level={3}>Title</Title>, <p>Content</p>);
        }}
        variant="contained"
      >
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        onClose={closeDialog}
        title={title}
        content={content}
        footer={
          <>
            <Button
              onClick={handleCancel}
              variant="contained"
              className="cancel-btn"
            >
              Cancel
            </Button>
            <Button onClick={handleOK} variant="contained">
              OK
            </Button>
          </>
        }
      />
    </>
  );
};

export const Default: Story = {
  name: '預設項目',
  args: {
    className: '',
  },
  render(args) {
    return <DefaultWithHook {...args} />;
  },
};
