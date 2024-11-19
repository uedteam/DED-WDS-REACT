import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{a as u}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{I as t}from"./input-CTcMjmgF.js";import{S as a}from"./account_circle-w7SSgQwb.js";import"./index-DJO9vBfz.js";import{S as g,a as b,b as x}from"./visibility_off-DecKjkF2.js";import{S as P}from"./search-Kxlaxofw.js";import{S as m}from"./lock-b-y_be0k.js";import"./lodash-BawsgTSI.js";import"./usePosition-CCkH-I2k.js";const w={title:"Component/Input",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]},table:{category:"PROPS"}},placeholder:{description:"輸入提示",control:{type:"text"},table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close","Lock"],mapping:{None:null,Account:e.jsx(a,{}),Search:e.jsx(P,{}),Visibility:e.jsx(g,{}),VisibilityOff:e.jsx(b,{}),Close:e.jsx(x,{}),Lock:e.jsx(m,{})},table:{category:"PROPS"}},size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"changed",table:{category:"EVENTS"}}},parameters:{docs:{title:"輸入框",description:{component:"輸入框組件的呈現及說明。"}}},args:{label:"Label",type:"text",placeholder:"Placeholder...",prefix:e.jsx(a,{}),size:"medium",initValue:"",hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",onChange:r=>u("changed")(r)}},o={name:"預設項目",args:{},render(r){return e.jsx(t,{...r})}},s={name:"輸入框狀態",args:{prefix:e.jsx(a,{}),placeholder:"Placeholder..."},parameters:{docs:{source:{code:`
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<LockIcon />} />
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
`}}},render(r){return e.jsxs("div",{children:[e.jsx(t,{...r,label:"Account"}),e.jsx(t,{...r,label:"Password",type:"password",prefix:e.jsx(m,{})}),e.jsx(t,{...r,label:"Account",hint:{error:"Error message",description:""}}),e.jsx(t,{...r,label:"Account",hint:{error:"",description:"Prompt message"}})]})}};var i,n,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Input {...args} />;
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,l,d;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    prefix: <AccountIcon />,
    placeholder: 'Placeholder...'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<LockIcon />} />
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
\`
      }
    }
  },
  render(args) {
    return <div>
        <Input {...args} label="Account" />
        <Input {...args} label="Password" type={'password'} prefix={<LockIcon />} />
        <Input {...args} label="Account" hint={{
        error: 'Error message',
        description: ''
      }} />
        <Input {...args} label="Account" hint={{
        error: '',
        description: 'Prompt message'
      }} />
      </div>;
  }
}`,...(d=(l=s.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const V=["Default","InputWithStatus"];export{o as Default,s as InputWithStatus,V as __namedExportsOrder,w as default};
