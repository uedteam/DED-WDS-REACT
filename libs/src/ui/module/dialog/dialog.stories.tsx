import { Meta, StoryObj } from '@storybook/react';
import { Dialog } from '@src/ui';
import { useDialog } from '@src/hooks';
import { Button, Title } from '@src/ui';
import { StoryContext } from 'storybook/internal/types';
import { CloseIcon } from '@src/assets';

export default {
  title: 'Component/Dialog',
  component: Dialog,
  tags: ['autodocs'],
  argTypes: {
    isOpen: {
      description: '是否開啟',
      table: {
        category: 'PROPS',
      },
    },
    hasClose: {
      description: '是否有關閉按鈕',
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      table: {
        category: 'PROPS',
      },
    },
    header: {
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
      description: '附註',
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
        component: '彈窗組件的呈現及說明。',
      },
      source: {
        transform(code: string, storyContext: StoryContext) {
          const { args } = storyContext;

          return `
<Dialog
  isOpen=${args?.isOpen || false}
  hasClose=${args?.hasClose || false}
  onClose={closeDialog}
  title="${args?.title}"
  content="${args?.content}"
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
/>`;
        },
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Dialog>;

const DemoWithHook = (args: Story['args']) => {
  const { isOpen, header, content, openDialog, closeDialog } = useDialog({
    isOpen: args?.isOpen || false,
    header: <Title level={3}>Title</Title>,
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
        header={header}
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
    isOpen: true,
    hasClose: false,
    header: 'Title',
    content: 'Content',
    onClose: () => window.alert('close'),
  },
  render(args) {
    const { hasClose, header, content, onClose, className } = args;
    return (
      <div
        className={`dialog-content ${className}`}
        onClick={(e) => e.stopPropagation()}
      >
        {onClose && hasClose && (
          <button className="dialog-close-btn" onClick={onClose}>
            <CloseIcon width={20} height={20} />
          </button>
        )}
        <div className="dialog-header">{header}</div>
        <div className="dialog-body">{content}</div>
        <div className="dialog-footer">
          <Button
            onClick={() => window.alert('cancel')}
            variant="contained"
            className="cancel-btn"
          >
            Cancel
          </Button>
          <Button onClick={() => window.alert('ok')} variant="contained">
            OK
          </Button>
        </div>
      </div>
    );
  },
};

export const Demo: Story = {
  name: '互動模式',
  args: {},
  render(args) {
    return <DemoWithHook {...args} />;
  },
};
