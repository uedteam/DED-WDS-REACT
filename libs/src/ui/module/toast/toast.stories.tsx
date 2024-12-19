import { Meta, StoryObj } from '@storybook/react';
import { Toast, Button, StatusIndicator } from '@src/ui';
import { StoryContext } from 'storybook/internal/types';
import { getCombinedClassName } from '@src/utils/string';
import {
  CloseIcon,
  InfoCircleIcon,
  SuccessCircleIcon,
  WarningTriIcon,
  ErrorCircleIcon,
  QuestionCircleIcon,
} from '@src/assets';
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
          'neutral',
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
      options: [
        'InfoCircleIcon',
        'SuccessCircleIcon',
        'WarningTriIcon',
        'ErrorCircleIcon',
      ],
      mapping: {
        InfoCircleIcon: <InfoCircleIcon />,
        SuccessCircleIcon: <SuccessCircleIcon />,
        WarningTriIcon: <WarningTriIcon />,
        ErrorCircleIcon: <ErrorCircleIcon />,
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
    prefix: <SuccessCircleIcon width={20} height={20} />,
    duration: 500,
    className: '',
  },
  parameters: {
    docs: {
      title: 'Toast',
      description: {
        component: '通知訊息組件的呈現及說明。',
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

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    const {
      themeColor,
      title,
      content,
      prefix,
      onClose = () => ({}),
      className,
    } = args;
    return (
      <div
        className={`ded-toast 
        ${getCombinedClassName('ded-toast', `border-${themeColor}`)} 
        ${className}`}
      >
        <Button
          variant="text"
          onClick={onClose}
          themeColor="neutral"
          className="ded-close-button"
        >
          <CloseIcon width={20} height={20} onClick={onClose} />
        </Button>
        <div className="ded-message">
          <StatusIndicator
            variant="text"
            themeColor={themeColor}
            prefix={prefix}
          >
            Title
          </StatusIndicator>
        </div>
        <p className="ded-description">{content}</p>
      </div>
    );
  },
};

export const Type: Story = {
  name: '通知訊息類型',
  args: {},
  render(args) {
    const { title, content, prefix, onClose = () => ({}), className } = args;
    return (
      <>
        <div
          className={`ded-toast 
        ${getCombinedClassName('ded-toast', `border-success`)} 
        ${className}`}
        >
          <Button
            variant="text"
            onClick={onClose}
            themeColor="neutral"
            className="ded-close-button"
          >
            <CloseIcon width={20} height={20} onClick={onClose} />
          </Button>
          <div className="ded-message">
            <StatusIndicator
              variant="text"
              themeColor="success"
              prefix={<SuccessCircleIcon width={20} height={20} />}
            >
              Title
            </StatusIndicator>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div
          className={`ded-toast 
            ${getCombinedClassName('ded-toast', `border-warning`)}  
            ${className}`}
        >
          <Button
            variant="text"
            onClick={onClose}
            themeColor="neutral"
            className="ded-close-button"
          >
            <CloseIcon width={20} height={20} onClick={onClose} />
          </Button>
          <div className="ded-message">
            <StatusIndicator
              variant="text"
              themeColor="warning"
              prefix={<WarningTriIcon width={20} height={20} />}
            >
              Title
            </StatusIndicator>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div
          className={`ded-toast
            ${getCombinedClassName('ded-toast', `border-error`)}  
            ${className}`}
        >
          <Button
            variant="text"
            onClick={onClose}
            themeColor="neutral"
            className="ded-close-button"
          >
            <CloseIcon width={20} height={20} onClick={onClose} />
          </Button>
          <div className="ded-message">
            <StatusIndicator
              variant="text"
              themeColor="error"
              prefix={<ErrorCircleIcon width={20} height={20} />}
            >
              Title
            </StatusIndicator>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div
          className={`ded-toast
            ${getCombinedClassName('ded-toast', `border-info`)}
            ${className}`}
        >
          <Button
            variant="text"
            onClick={onClose}
            themeColor="neutral"
            className="ded-close-button"
          >
            <CloseIcon width={20} height={20} onClick={onClose} />
          </Button>
          <div className="ded-message">
            <StatusIndicator
              variant="text"
              themeColor="info"
              prefix={<InfoCircleIcon width={20} height={20} />}
            >
              Title
            </StatusIndicator>
          </div>
          <p className="ded-description">{content}</p>
        </div>
      </>
    );
  },
};

export const Demo: Story = {
  name: '互動模式',
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Title',
    content: 'Content',
    prefix: <SuccessCircleIcon width={20} height={20} />,
    duration: 1000,
    className: '',
  },
  render: function Render(args) {
    const { addToast, ToastContainer } = useToast();

    const handleShowToast = () => {
      addToast({
        themeColor: args?.themeColor || 'success',
        title: args?.title || 'Title',
        content: args?.content || 'Content',
        prefix: args?.prefix || <ErrorCircleIcon width={20} height={20} />,
        duration: args?.duration,
      });
    };

    return (
      <>
        <Button onClick={handleShowToast} variant="filled">
          Open Dialog
        </Button>
        <ToastContainer />
      </>
    );
  },
};
