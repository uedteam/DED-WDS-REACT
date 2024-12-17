import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import{I as t}from"./styled-BY8k0-uY.js";import{a,S as g,V as b,b as x,C as P,L as d}from"./disable-circle-Qt9C8lli.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./index-sbqOYYIm.js";import"./title-CD8xfGAz.js";import"./string-bv4IUxbB.js";import"./checkbox-gHzG2Us7.js";import"./check-BnJBHFpS.js";import"./textarea-CO8Z8fZG.js";import"./toggle-BVqMcImG.js";import"./radio-BhGOQQ7m.js";import"./offline-Ddz6ifNG.js";import"./progress-circle-ReGt0b-K.js";import"./styled-7_Fd9YFd.js";import"./progress-line-DHphvmbz.js";import"./image-BUf_2wZ-.js";import"./status-indicator-DcO8m1Ar.js";const T={title:"Component/Input",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]},table:{category:"PROPS"}},placeholder:{description:"輸入提示",control:{type:"text"},table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close","Lock"],mapping:{None:null,Account:e.jsx(a,{}),Search:e.jsx(g,{}),Visibility:e.jsx(b,{}),VisibilityOff:e.jsx(x,{}),Close:e.jsx(P,{}),Lock:e.jsx(d,{})},table:{category:"PROPS"}},size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},isOpen:{description:"是否使用選單並開啟",table:{disable:!0}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"changed",table:{category:"EVENTS"}}},parameters:{docs:{title:"Input",description:{component:"輸入框組件的呈現及說明。"}}},args:{label:"Label",type:"text",placeholder:"Placeholder...",prefix:e.jsx(a,{}),size:"medium",initValue:"",hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",onChange:r=>u("changed")(r)}},o={name:"預設項目",args:{},render(r){return e.jsx(t,{...r})}},s={name:"輸入框狀態",args:{prefix:e.jsx(a,{}),placeholder:"Placeholder..."},parameters:{docs:{source:{code:`
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<LockIcon />} />
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
`}}},render(r){return e.jsxs("div",{children:[e.jsx(t,{...r,label:"Account"}),e.jsx(t,{...r,label:"Password",type:"password",prefix:e.jsx(d,{})}),e.jsx(t,{...r,label:"Account",hint:{error:"Error message",description:""}}),e.jsx(t,{...r,label:"Account",hint:{error:"",description:"Prompt message"}})]})}};var i,n,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Input {...args} />;
  }
}`,...(c=(n=o.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,l,m;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(m=(l=s.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const W=["Default","InputWithStatus"];export{o as Default,s as InputWithStatus,W as __namedExportsOrder,T as default};
