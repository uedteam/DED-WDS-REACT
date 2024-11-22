import { Meta, StoryObj } from '@storybook/react';
import Image from './image';

export default {
  title: 'Component/Image',
  component: Image,
  tags: ['autodocs'],
  argTypes: {
    src: {
      description: '圖片來源',
      control: {
        type: 'text',
      },
    },
    alt: {
      description: '圖片說明',
      control: {
        type: 'text',
      },
    },
    ratio: {
      description: '圖片比例',
      control: {
        type: 'select',
        options: [11, 43, 54, 169],
      },
    },
    objectFit: {
      description: '圖片填滿方式',
      control: {
        type: 'select',
        options: ['cover', 'contain', 'fill', 'none'],
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    docs: {
      title: '圖片',
      description: {
        component: '圖片的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof Image>;

export const Default: Story = {
  name: '預設項目',
  args: {
    src: 'https://picsum.photos/300/300',
    alt: 'placeholder',
    ratio: 169,
    objectFit: 'contain',
    className: '',
  },
  render(args) {
    return <Image {...args} />;
  },
};

export const Ratio: Story = {
  name: '比例項目',
  args: {
    alt: 'placeholder',
    objectFit: 'contain',
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <Image {...args} src="https://picsum.photos/300/300" ratio={11} />
        <Image {...args} src="https://picsum.photos/300/300" ratio={43} />
        <Image {...args} src="https://picsum.photos/300/300" ratio={54} />
        <Image {...args} src="https://picsum.photos/300/300" ratio={169} />
      </div>
    );
  },
};

export const Fit: Story = {
  name: '比例項目',
  args: {
    alt: 'placeholder',
    ratio: 169,
    className: '',
  },
  render(args) {
    return (
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
        <Image {...args} src="https://picsum.photos/300/300" objectFit="none" />
        <Image
          {...args}
          src="https://picsum.photos/300/300"
          objectFit="contain"
        />
        <Image {...args} src="https://picsum.photos/300/300" objectFit="fill" />
        <Image
          {...args}
          src="https://picsum.photos/300/300"
          objectFit="cover"
        />
      </div>
    );
  },
};
