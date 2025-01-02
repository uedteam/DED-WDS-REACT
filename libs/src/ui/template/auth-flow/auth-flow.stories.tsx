import { Meta, StoryObj } from '@storybook/react';
import { AuthFLow } from './auth-flow';
import { Grid } from '@src/ui/section/grid/grid';
import { Row } from '@src/ui/section/grid/row';
import { Column } from '@src/ui/section/grid/column';
import { Button } from '@src/ui/element/button';
import { Input } from '@src/ui/element/input';
import { Title } from '@src/ui/element/title';
import { Checkbox } from '@src/ui/element/checkbox';
import loginBgColor from '@src/assets/login-bg-color.png';
import authBgImg from '@src/assets/auth-bg.png';
import {
  SvgAccount,
  SvgLock,
  SvgGoogle,
  SvgFacebook,
  SvgMail,
} from '@src/assets';

export default {
  title: 'Template/AuthFlow',
  component: AuthFLow,
  tags: ['autodocs'],
  argTypes: {
    form: {
      description: '表單',
      table: {
        category: 'SLOTS',
      },
    },
    externalLinks: {
      description: '外部連結',
      table: {
        category: 'SLOTS',
      },
    },
    signUp: {
      description: '註冊',
      table: {
        category: 'SLOTS',
      },
    },
    bgColorSrc: {
      description: '背景顏色',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    bgImgSrc: {
      description: '背景圖片',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    title: {
      description: '標題',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    description: {
      description: '描述',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
    className: {
      description: '客製化樣式',
      control: {
        type: 'text',
      },
      table: {
        category: 'PROPS',
      },
    },
  },
  parameters: {
    docs: {
      title: '驗證流程',
      description: {
        component: '驗證流程的呈現及說明。',
      },
    },
  },
} as Meta;
type Story = StoryObj<typeof AuthFLow>;

export const Default: Story = {
  name: '登入',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Welcome Back',
    description: `Today is a new day. It's your day. You shape it. Sign in to start managing your projects.`,
    form: (
      <div>
        <Grid fluid>
          <Row>
            <Column md={12}>
              <Input
                type="text"
                prefix={<SvgMail />}
                initValue=""
                label="Email"
                placeholder="Email"
                className="mb-3"
              />
            </Column>

            <Column md={12}>
              <Input
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password"
                placeholder="Password"
                className="mb-3"
              />
            </Column>

            <Column md={6}>
              <Button
                onClick={() => ({})}
                className="link-button"
                variant="text"
              >
                Forgot Password?
              </Button>
            </Column>

            <Column md={6} align="end">
              <Checkbox
                initValue={[]}
                dataSource={[
                  { label: 'Remember me', value: '1', isDisabled: false },
                ]}
              ></Checkbox>
            </Column>

            <Column md={12}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Login
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
    ),
    externalLinks: (
      <Grid fluid>
        <Row justify="center">
          <Column md={10}>
            <Button
              onClick={() => ({})}
              className="social-button"
              variant="filled"
              width="fluid"
              prefix={<SvgGoogle />}
            >
              Sign in with Google
            </Button>
          </Column>

          <Column md={10}>
            <Button
              onClick={() => ({})}
              className="social-button"
              variant="filled"
              width="fluid"
              prefix={<SvgFacebook />}
            >
              Sign in with Facebook
            </Button>
          </Column>
        </Row>
      </Grid>
    ),
    signUp: (
      <Grid fluid>
        <Row>
          <Column md={12} align="center">
            <span>Don't have an account?</span>
            <Button onClick={() => ({})} className="link-button" variant="text">
              Sign up
            </Button>
          </Column>
        </Row>
      </Grid>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};

export const SignUp: Story = {
  name: '註冊',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Sign Up',
    form: (
      <>
        <Grid fluid>
          <Row>
            <Column md={6}>
              <Input
                type="text"
                prefix={<SvgAccount />}
                initValue=""
                label="First Name"
                placeholder="type first name"
                className="mb-3"
              />
            </Column>

            <Column md={6}>
              <Input
                type="text"
                prefix={<SvgAccount />}
                initValue=""
                label="Last Name"
                placeholder="type last name"
                className="mb-3"
              />
            </Column>

            <Column md={12}>
              <Input
                type="text"
                prefix={<SvgMail />}
                initValue=""
                label="Email"
                placeholder="type email"
                className="mb-3"
              />
            </Column>

            <Column md={12}>
              <Input
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password"
                placeholder="type password"
                className="mb-3"
              />
            </Column>

            <Column md={12}>
              <Input
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password Confirm"
                placeholder="type password"
                className="mb-3"
              />
            </Column>

            <Column md={12}>
              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                }}
              >
                <Checkbox
                  initValue={[]}
                  dataSource={[{ label: '', value: '1', isDisabled: false }]}
                ></Checkbox>
                <span style={{ marginRight: '8px' }}>I agree to all the</span>
                <Button
                  onClick={() => ({})}
                  className="link-button"
                  variant="text"
                >
                  Terms
                </Button>
                <span style={{ marginInline: '8px' }}>and</span>
                <Button
                  onClick={() => ({})}
                  className="link-button"
                  variant="text"
                >
                  Privacy Policies
                </Button>
              </div>
            </Column>
          </Row>
        </Grid>

        <Grid fluid>
          <Row justify="flex-end">
            <Column md={6}>
              <Button onClick={() => ({})} variant="soft" width="fluid">
                Back
              </Button>
            </Column>

            <Column md={6}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Sign Up
              </Button>
            </Column>
          </Row>
        </Grid>
      </>
    ),
    externalLinks: (
      <Grid fluid>
        <Row justify="center">
          <Column md={10}>
            <Button
              onClick={() => ({})}
              className="social-button"
              variant="filled"
              width="fluid"
              prefix={<SvgGoogle />}
            >
              Sign in with Google
            </Button>
          </Column>

          <Column md={10}>
            <Button
              onClick={() => ({})}
              className="social-button"
              variant="filled"
              width="fluid"
              prefix={<SvgFacebook />}
            >
              Sign in with Facebook
            </Button>
          </Column>
        </Row>
      </Grid>
    ),
    signUp: (
      <Grid fluid>
        <Row>
          <Column md={12} align="center">
            <span>Don't have an account?</span>
            <Button onClick={() => ({})} variant="text">
              Sign up
            </Button>
          </Column>
        </Row>
      </Grid>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};

export const Forgot: Story = {
  name: '忘記密碼',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Forgot Your Password?',
    description: 'Type in your registered email address to reset password',
    form: (
      <div className="ded-login-content-form">
        <Grid fluid>
          <Row justify="flex-end">
            <Column md={12}>
              <Input
                type="text"
                prefix={<SvgMail />}
                initValue=""
                label="Email Address"
                placeholder="type email"
                hint={{ description: 'Description', error: '' }}
                className="mb-3"
              />
            </Column>

            <Column sm={12}>
              <Button
                onClick={() => ({})}
                width="fluid"
                variant="filled"
                prefix={<SvgMail />}
              >
                Submit
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};

export const Verify: Story = {
  name: '驗證代碼',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Verify Code',
    description: 'An authentication code has been sent to your email.',
    form: (
      <div className="ded-login-content-form">
        <Grid fluid>
          <Row justify="flex-end">
            <Column md={12}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <Title level={3}>A-</Title>
                <Input
                  type="text"
                  initValue=""
                  className="mb-3"
                  placeholder=""
                />
                <Input
                  type="password"
                  initValue=""
                  className="mb-3"
                  placeholder=""
                />
                <Input
                  type="password"
                  initValue=""
                  className="mb-3"
                  placeholder=""
                />
                <Input
                  type="password"
                  initValue=""
                  className="mb-3"
                  placeholder=""
                />
                <Input
                  type="password"
                  initValue=""
                  className="mb-3"
                  placeholder=""
                />

                <Input
                  type="password"
                  initValue=""
                  className="mb-3"
                  placeholder=""
                />
              </div>
            </Column>

            <Column sm={6}>
              <Button onClick={() => ({})} variant="soft" width="fluid">
                Resend
              </Button>
            </Column>
            <Column sm={6}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Verify
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};

export const Password: Story = {
  name: '設定密碼',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Set a Password',
    description: 'Please set a new password for your account.',
    form: (
      <div className="ded-login-content-form">
        <Grid fluid>
          <Row justify="flex-end">
            <Column md={12}>
              <Input
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password"
                placeholder="type password"
                className="mb-3"
              />
            </Column>

            <Column md={12}>
              <Input
                type="password"
                prefix={<SvgLock />}
                initValue=""
                label="Password Confirm"
                placeholder="type password"
                className="mb-3"
              />
            </Column>

            <Column sm={6}>
              <Button onClick={() => ({})} variant="soft" width="fluid">
                Reset
              </Button>
            </Column>

            <Column sm={6}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Confirm
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
    ),
  },
  render(args) {
    return <AuthFLow {...args} />;
  },
};
