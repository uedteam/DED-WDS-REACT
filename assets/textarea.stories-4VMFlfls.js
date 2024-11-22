import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{T as a}from"./textarea-oJIc-9w9.js";import"./index-RYns6xqu.js";const y={title:"Component/Textarea",component:a,tags:["autodocs"],argTypes:{label:{description:"標題",table:{category:"PROPS"}},placeholder:{description:"輸入提示",table:{category:"PROPS"}},limit:{description:"字數限制",table:{category:"PROPS"}},initValue:{description:"輸入值",table:{category:"PROPS"}},hint:{description:"提示訊息",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"輸入事件",action:"onChange",table:{category:"EVENTS"}}},args:{label:"Label",placeholder:"Placeholder...",limit:500,initValue:"Type something ...",hint:{error:"",description:"Prompt message"},isDisabled:!1,className:"",onChange:u("onChange")},parameters:{docs:{title:"文字輸入框",description:{component:"文字輸入框組件的呈現及說明。"}}}},n={name:"預設項目",args:{},render(e){return r.jsx(a,{...e})}},t={name:"字數限制",args:{label:"Label",limit:20,initValue:"Hello World",hint:{error:"",description:""}},render(e){return r.jsx(a,{...e})}},s={name:"輸入框狀態",args:{label:"Label",limit:10,placeholder:"placeholder ..."},parameters:{docs:{source:{code:`
<Textarea {...args} />
<Textarea {...args} hint={{ error: 'Error', description: '' }} />
<Textarea {...args} hint={{ error: '', description: 'Prompt message' }} />
`}}},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[r.jsx(a,{...e}),r.jsx(a,{...e,hint:{error:"Error",description:""}}),r.jsx(a,{...e,hint:{error:"",description:"Prompt message"}})]})}};var o,i,l;n.parameters={...n.parameters,docs:{...(o=n.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(l=(i=n.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};var c,p,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '字數限制',
  args: {
    label: 'Label',
    limit: 20,
    initValue: 'Hello World',
    hint: {
      error: '',
      description: ''
    }
  },
  render(args) {
    return <Textarea {...args} />;
  }
}`,...(d=(p=t.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var m,g,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '輸入框狀態',
  args: {
    label: 'Label',
    limit: 10,
    placeholder: 'placeholder ...'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Textarea {...args} />
<Textarea {...args} hint={{ error: 'Error', description: '' }} />
<Textarea {...args} hint={{ error: '', description: 'Prompt message' }} />
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Textarea {...args} />
        <Textarea {...args} hint={{
        error: 'Error',
        description: ''
      }} />
        <Textarea {...args} hint={{
        error: '',
        description: 'Prompt message'
      }} />
      </div>;
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};const S=["Default","Limit","TextareaStatus"];export{n as Default,t as Limit,s as TextareaStatus,S as __namedExportsOrder,y as default};
