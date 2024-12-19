// eslint-disable-next-line @typescript-eslint/no-unused-vars
import '@style/globals.scss';

import NxWelcome from './nx-welcome';
import { range } from 'lodash';
import { useState } from 'react';
// import { Switch } from 'ded-wds';
import { Radio, Input, Button, Tooltip } from '@src/ui';

export function App() {
  const [value, setValue] = useState('option3');

  const handleChange = (e: string) => {
    setValue(e);
    console.log(e);
  };

  return (
    <div>
      <div
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Tooltip content="提示內容" placement="right-top" showArrow>
          <Button variant="ghost" themeColor="neutral" onClick={() => ({})}>
            提示內容
          </Button>
        </Tooltip>

        <Tooltip content="提示內容" placement="bottom" showArrow>
          <Button variant="text" themeColor="neutral" onClick={() => ({})}>
            提示內容
          </Button>
        </Tooltip>
      </div>

      <div
        style={{
          display: 'flex',
          gap: '16px',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '20px',
        }}
      >
        <Tooltip content="提示內容" placement="top" showArrow>
          <Button variant="ghost" themeColor="neutral" onClick={() => ({})}>
            提示內容
          </Button>
        </Tooltip>

        <Tooltip content="提示內容" placement="left-bottom" showArrow>
          <Button variant="text" themeColor="neutral" onClick={() => ({})}>
            提示內容
          </Button>
        </Tooltip>
      </div>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '20px',
        }}
        className="container"
      >
        {/* {range(0, 10).map((i, index) => (
          <Button themeColor="primary" variant="filled">
            <Title level={3}>標題按鈕{index + 1}</Title>
          </Button>
        ))} */}
        {/* <Switch isChecked /> */}
        <div style={{ width: '300px', display: 'flex', flexWrap: 'wrap' }}>
          <Radio
            className=""
            direction="row"
            dataSource={[
              {
                label: '選項一',
                value: 'option1',
                isDisabled: false,
              },
              {
                label: '選項二',
                value: 'option2',
                isDisabled: false,
              },
              {
                label: '選項三',
                value: 'option3',
                isDisabled: false,
              },
              {
                label: '選項四',
                value: 'option4',
                isDisabled: false,
              },
              {
                label: '選項五',
                value: 'option5',
                isDisabled: false,
              },
              {
                label: '選項六',
                value: 'option6',
                isDisabled: false,
              },
              {
                label: '選項七選項七七七',
                value: 'option7777777777777777',
                isDisabled: false,
              },
              {
                label: '選項八',
                value: 'option8',
                isDisabled: false,
              },
              {
                label: '選項九',
                value: 'option9',
                isDisabled: false,
              },
              {
                label: '選項十選項十選項十選項十選項十選項十選項',
                value: 'option101010101010101010',
                isDisabled: false,
              },
            ]}
            themeColor="warning"
            initValue="option3"
          />
          {/* <Input value={value} /> */}
        </div>
      </div>

      <NxWelcome title="AUO-DED-WDS" />
    </div>
  );
}

export default App;
