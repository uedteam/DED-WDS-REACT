import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as m}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{I as t}from"./input-DCnn0I_9.js";import{b as o,c as g,d as b,e as P,f as x,g as u}from"./warning-tri-Y1-2BlEi.js";import"./index-RYns6xqu.js";import"./title-BdHUK5iL.js";import"./string-BqrfsRv8.js";import"./toast-hfGqEkE6.js";import"./index-sbqOYYIm.js";const R={title:"Component/Input",component:t,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},type:{description:"輸入類型",control:{type:"select",options:["text","password","number","email"]},table:{category:"PROPS"}},hasClear:{description:"是否顯示清除按鈕",table:{category:"PROPS"}},placeholder:{description:"輸入提示",control:{type:"text"},table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},maxLimit:{description:"最長輸入限制",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff","Close","Lock"],mapping:{None:null,Account:e.jsx(o,{}),Search:e.jsx(g,{}),Visibility:e.jsx(b,{}),VisibilityOff:e.jsx(P,{}),Close:e.jsx(x,{}),Lock:e.jsx(u,{})},table:{category:"PROPS"}},size:{description:"輸入框尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},isOpen:{description:"是否使用選單並開啟",table:{disable:!0}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"changed",table:{category:"EVENTS"}}},parameters:{docs:{title:"Input",description:{component:"輸入框組件的呈現及說明。"}}},args:{label:"Label",type:"text",hasClear:!0,placeholder:"Placeholder...",prefix:e.jsx(o,{}),size:"medium",initValue:"",maxLimit:void 0,hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",onChange:r=>m("changed")(r)}},s={name:"預設項目",args:{},render(r){return e.jsx(t,{...r})}},a={name:"輸入框狀態",args:{prefix:e.jsx(o,{}),placeholder:"Placeholder..."},parameters:{docs:{source:{code:`
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
`}}},render(r){return e.jsxs("div",{children:[e.jsx(t,{...r,label:"Account"}),e.jsx(t,{...r,label:"Password",type:"password",prefix:e.jsx(u,{})}),e.jsx(t,{...r,label:"Account",hint:{error:"Error message",description:""}}),e.jsx(t,{...r,label:"Account",hint:{error:"",description:"Prompt message"}})]})}};var i,n,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Input {...args} />;
  }
}`,...(c=(n=s.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var p,l,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    prefix: <SvgAccount />,
    placeholder: 'Placeholder...'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Input {...args} label="Account" />
<Input {...args} label="Password" type={'password'} prefix={<Lock />} />
<Input {...args} label="Account" hint={{ error: 'Error message', description: '' }} />
<Input {...args} label="Account" hint={{ error: '', description: 'Prompt message' }} />
\`
      }
    }
  },
  render(args) {
    return <div>
        <Input {...args} label="Account" />
        <Input {...args} label="Password" type={'password'} prefix={<SvgLock />} />
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
}`,...(d=(l=a.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};const w=["Default","InputWithStatus"];export{s as Default,a as InputWithStatus,w as __namedExportsOrder,R as default};
