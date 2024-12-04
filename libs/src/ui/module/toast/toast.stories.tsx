import { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@src/ui';
import { Button } from '@src/ui';
import { StoryContext } from 'storybook/internal/types';
import { CloseIcon, CheckIcon, InfoIcon, WarningIcon } from '@src/assets';
import { useToast } from '@src/hooks';

export default {
  title: 'Component/Toast',
  component: Toast,
  tags: ['autodocs'],
  argTypes: {
    themeColor: {
      description: '主題顏色',
      control: {
        type: 'select',
        options: [
          'primary',
          'secondary',
          'tertiary',
          'info',
          'success',
          'warning',
          'error',
        ],
      },
      table: {
        category: 'PROPS',
      },
    },
    title: {
      description: '標題',
      table: {
        category: 'PROPS',
      },
    },
    content: {
      description: '內容',
      table: {
        category: 'PROPS',
      },
    },
    prefix: {
      description: '前綴',
      options: ['CheckIcon', 'CloseIcon', 'InfoIcon', 'WarningIcon'],
      mapping: {
        CheckIcon: <CheckIcon />,
        CloseIcon: <CloseIcon />,
        InfoIcon: <InfoIcon />,
        WarningIcon: <WarningIcon />,
      },
      table: {
        category: 'PROPS',
      },
    },
    duration: {
      description: '持續時間',
      control: {
        type: 'range',
        step: 100,
        min: 0,
        max: 5000,
      },
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
    onClose: {
      description: '關閉事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Title',
    content: 'Content',
    prefix: <CheckIcon />,
    duration: 500,
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
<Toast themeColor=${args.themeColor} title=${args.title} content=${args.content} prefix=${args.prefix} />
`;
        },
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Toast>;

const DemoWithHook = (args: Story['args']) => {
  const { addToast, ToastContainer } = useToast();

  const handleShowToast = () => {
    addToast({
      themeColor: args?.themeColor || 'success',
      title: args?.title || 'Title',
      content: args?.content || 'Content',
      prefix: args?.prefix || <CheckIcon />,
      duration: args?.duration,
    });
  };

  return (
    <>
      <Button onClick={handleShowToast} variant="contained">
        Open Dialog
      </Button>
      <ToastContainer />
    </>
  );
};

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    const { themeColor, title, content, prefix, onClose, className } = args;
    return (
      <div className={`ded-toast ded-toast-border-${themeColor} ${className}`}>
        <button className="ded-close-button">
          <CloseIcon width={20} height={20} onClick={onClose} />
        </button>
        <div className="ded-message">
          {prefix && (
            <div className={`ded-icon-wrapper ded-toast-${themeColor}`}>
              {prefix}
            </div>
          )}
          <span>{title}</span>
        </div>
        <p className="ded-description">{content}</p>
      </div>
    );
  },
};

export const Type: Story = {
  name: 'Toast 類型',
  args: {},
  render(args) {
    const { title, content, prefix, onClose, className } = args;
    return (
      <>
        <div className={`ded-toast ded-toast-border-success ${className}`}>
          <button className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </button>
          <div className="ded-message">
            {prefix && (
              <div className={`ded-icon-wrapper ded-toast-success`}>
                {prefix}
              </div>
            )}
            <span>{title}</span>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={`ded-toast ded-toast-border-warning ${className}`}>
          <button className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </button>
          <div className="ded-message">
            {prefix && (
              <div className={`ded-icon-wrapper ded-toast-warning`}>
                <WarningIcon />
              </div>
            )}
            <span>{title}</span>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={`ded-toast ded-toast-border-error ${className}`}>
          <button className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </button>
          <div className="ded-message">
            {prefix && (
              <div className={`ded-icon-wrapper ded-toast-error`}>
                <CloseIcon />
              </div>
            )}
            <span>{title}</span>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={`ded-toast ded-toast-border-info ${className}`}>
          <button className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </button>
          <div className="ded-message">
            {prefix && (
              <div className={`ded-icon-wrapper ded-toast-info`}>
                <InfoIcon />
              </div>
            )}
            <span>{title}</span>
          </div>
          <p className="ded-description">{content}</p>
        </div>
      </>
    );
  },
};

export const Demo: Story = {
  name: '點擊顯示',
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Title',
    content: 'Content',
    prefix: <CheckIcon></CheckIcon>,
    duration: 1000,
    className: '',
  },
  render(args) {
    return <DemoWithHook {...args} />;
  },
};
