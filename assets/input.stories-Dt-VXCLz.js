import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{a as u}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{I as t}from"./input-CTcMjmgF.js";import{S as a}from"./account_circle-w7SSgQwb.js";import"./index-DJO9vBfz.js";import{S as g,a as b,b as x}from"./visibility_off-DecKjkF2.js";import{S}from"./search-Kxlaxofw.js";import{S as m}from"./lock-b-y_be0k.js";import"./lodash-BawsgTSI.js";import"./usePosition-CCkH-I2k.js";const C={title:"Component/Input",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]},table:{category:"PROPS"}},placeholder:{description:"輸入提示",control:{type:"text"},table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close","Lock"],mapping:{None:null,Account:e.jsx(a,{}),Search:e.jsx(S,{}),Visibility:e.jsx(g,{}),VisibilityOff:e.jsx(b,{}),Close:e.jsx(x,{}),Lock:e.jsx(m,{})},table:{category:"PROPS"}},size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"changed",table:{category:"EVENTS"}}},parameters:{docs:{title:"輸入框",description:{component:"輸入框組件的呈現及說明。"}}},args:{label:"Label",type:"text",placeholder:"Placeholder...",prefix:e.jsx(a,{}),size:"medium",initValue:"",hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",onChange:r=>u("changed")(r)}},s={name:"預設項目",args:{},render(r){return e.jsx(t,{...r})}},o={name:"輸入框狀態",args:{prefix:e.jsx(a,{}),placeholder:"請輸入帳號 ..."},parameters:{docs:{source:{code:`
<Input {...args} label="帳號" />
<Input {...args} label="密碼" type={'password'} prefix={<LockIcon />} />
<Input {...args} label="帳號" hint={{ error: '錯誤訊息', description: '' }} />
<Input {...args} label="帳號" hint={{ error: '', description: '描述' }} />
`}}},render(r){return e.jsxs("div",{children:[e.jsx(t,{...r,label:"帳號"}),e.jsx(t,{...r,label:"密碼",type:"password",prefix:e.jsx(m,{})}),e.jsx(t,{...r,label:"帳號",hint:{error:"錯誤訊息",description:""}}),e.jsx(t,{...r,label:"帳號",hint:{error:"",description:"描述"}})]})}};var i,n,p;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Input {...args} />;
  }
}`,...(p=(n=s.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    prefix: <AccountIcon />,
    placeholder: '請輸入帳號 ...'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Input {...args} label="帳號" />
<Input {...args} label="密碼" type={'password'} prefix={<LockIcon />} />
<Input {...args} label="帳號" hint={{ error: '錯誤訊息', description: '' }} />
<Input {...args} label="帳號" hint={{ error: '', description: '描述' }} />
\`
      }
    }
  },
  render(args) {
    return <div>
        <Input {...args} label="帳號" />
        <Input {...args} label="密碼" type={'password'} prefix={<LockIcon />} />
        <Input {...args} label="帳號" hint={{
        error: '錯誤訊息',
        description: ''
      }} />
        <Input {...args} label="帳號" hint={{
        error: '',
        description: '描述'
      }} />
      </div>;
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const L=["Default","InputWithStatus"];export{s as Default,o as InputWithStatus,L as __namedExportsOrder,C as default};
