import { action } from '@storybook/addon-actions';
import { Meta, StoryObj } from '@storybook/react';
import Card from './card';
import { Title, Button } from '@src/ui';
import { SliderControl } from '../../module/slider-control';
import {
  SvgLock,
  SvgPlus,
  SvgMinus,
  SvgPower,
  SvgAir,
  SvgFan,
  SvgLight,
  SvgHumidity,
  SvgTemperature,
  SvgDoor,
} from '@src/assets';

export default {
  title: 'Component/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    width: {
      description: '卡片寬度',
      table: {
        category: 'PROPS',
      },
    },
    height: {
      description: '卡片高度',
      table: {
        category: 'PROPS',
      },
    },
    cardHeader: {
      description: '卡片標題',
      table: {
        category: 'SLOTS',
      },
    },
    children: {
      description: '卡片內容',
      table: {
        category: 'SLOTS',
      },
    },
    cardFooter: {
      description: '卡片底部',
      table: {
        category: 'SLOTS',
      },
    },
    hasHeaderDivider: {
      description: '是否有標題分隔線',
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
    onClick: {
      action: 'clicked',
      description: '點擊事件',
      table: {
        category: 'EVENTS',
      },
    },
  },
  parameters: {
    docs: {
      title: 'Card',
      description: {
        component: '卡片組件的呈現及說明。',
      },
    },
  },
  args: {
    width: '',
    height: '',
    cardHeader: '',
    hasHeaderDivider: false,
    children: '',
    cardFooter: '',
    className: '',
    onClick: action('onClick'),
  },
} as Meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  name: '預設項目',
  args: {},
  render(args) {
    return (
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'flex-end',
          gap: '16px',
          backgroundColor: '#E9E9E9',
          padding: '16px',
        }}
      >
        <Card
          {...args}
          cardHeader={
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
              }}
            >
              <Title className="ded-card-title" themeColor="primary">
                空調
              </Title>
              <Button onClick={() => ({})} variant="text">
                <div
                  style={{
                    display: 'flex',
                    padding: '8px',
                    borderRadius: '18px',
                    backgroundColor: '#4D4D4D',
                    color: '#ffffff',
                    width: '32px',
                    height: '32px',
                  }}
                >
                  {<SvgPower />}
                </div>
              </Button>
            </div>
          }
          cardFooter={
            <div style={{ display: 'flex', gap: '8px' }}>
              <Button
                onClick={() => ({})}
                className="ded-card-button ded-card-button-active"
                variant="filled"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <SvgAir fill="#ffffff" width={42} height={42} />
                  <div>冷氣</div>
                </div>
              </Button>
              <Button
                onClick={() => ({})}
                className="ded-card-button"
                variant="filled"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <SvgFan fill="#ffffff" width={42} height={42} />
                  <div>送風</div>
                </div>
              </Button>

              <div className="ded-card-button ded-card-button-empty"></div>

              <Button
                onClick={() => ({})}
                className="ded-card-button ded-card-button-active"
                variant="filled"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  自動
                </div>
              </Button>
              <Button
                onClick={() => ({})}
                className="ded-card-button"
                variant="filled"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  強
                </div>
              </Button>
              <Button
                onClick={() => ({})}
                className="ded-card-button"
                variant="filled"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  中
                </div>
              </Button>
              <Button
                onClick={() => ({})}
                className="ded-card-button"
                variant="filled"
                themeColor="warning"
              >
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  弱
                </div>
              </Button>
            </div>
          }
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              color: '#533bd4',
              gap: '8px',
            }}
          >
            <SliderControl
              initValue={0}
              themeColor="warning"
              label="℃"
              prefix={<SvgMinus fill="#fff" width={24} height={24} />}
              suffix={<SvgPlus fill="#fff" width={24} height={24} />}
            />
          </div>
        </Card>

        <Card {...args}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <SvgTemperature fill="#ffffff" width={80} height={80} />
            <Title className="ded-card-title">溫度 25 ℃</Title>
          </div>
        </Card>

        <Card {...args}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <SvgHumidity fill="#ffffff" width={66} height={66} />
            <Title className="ded-card-title">濕度 75 ℃</Title>
          </div>
        </Card>

        {[
          {
            label: '電控玻璃',
            status: '霧面',
            prefix: <SvgDoor fill="#ffffff" width={80} height={80} />,
          },
          {
            label: '門鎖',
            status: '已上鎖',
            prefix: <SvgLock fill="#ffffff" width={80} height={80} />,
          },
          {
            label: '照明群組',
            status: '0個開, 3個關',
            prefix: <SvgLight fill="#ffffff" width={80} height={80} />,
          },
        ].map((device) => (
          <Card
            {...args}
            cardHeader={
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                }}
              >
                <Title className="ded-card-title" themeColor="primary">
                  {device.label}
                </Title>
                <Button
                  onClick={() => ({})}
                  variant="text"
                  themeColor="primary"
                >
                  <div
                    style={{
                      display: 'flex',
                      padding: '8px',
                      borderRadius: '18px',
                      backgroundColor: '#ffffff',
                      color: '#4d4d4d',
                      width: '32px',
                      height: '32px',
                    }}
                  >
                    {<SvgPower />}
                  </div>
                </Button>
              </div>
            }
          >
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: '#533bd4',
                gap: '8px',
              }}
            >
              {device.prefix}
              <Title className="ded-card-feature">{device.status}</Title>
            </div>
          </Card>
        ))}
      </div>
    );
  },
};
