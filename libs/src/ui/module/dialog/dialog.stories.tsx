import { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '@src/ui';
import { useDialog } from '@src/hooks';
import { Button, Title } from '@src/ui';
import { StoryContext } from 'storybook/internal/types';

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
  args: {
    isOpen: false,
    hasClose: false,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Dialog',
      description: {
        component: 'Dialog 的呈現及說明。',
      },
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;

          return `
const { isOpen, title, content, openDialog, closeDialog } = useDialog({
    isOpen: ${args?.isOpen || false},
    title: <Title level={3}>Title</Title>,
    content: <p>Content</p>,
  });

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
      <Button onClick={openDialog} variant="contained">
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        hasClose={args?.hasClose || false}
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
  )`;
        },
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Dialog>;

const DefaultWithHook = (args: Story['args']) => {
  const { isOpen, title, content, openDialog, closeDialog } = useDialog({
    isOpen: args?.isOpen || false,
    title: <Title level={3}>Title</Title>,
    content: <p>Content</p>,
  });

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
      <Button onClick={openDialog} variant="contained">
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        hasClose={args?.hasClose || false}
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
