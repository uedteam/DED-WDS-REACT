import{j as r}from"./jsx-runtime-DEdD30eg.js";import{T as o}from"./toggle-Ck5Sa1oo.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const C={title:"Component/Toggle",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},checkLabel:{description:"開啟文字",table:{category:"PROPS"}},unCheckLabel:{description:"關閉文字",table:{category:"PROPS"}},isChecked:{description:"是否開啟",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"開關事件",action:"onChange",table:{category:"EVENTS"}}},args:{themeColor:"success",checkLabel:"on",unCheckLabel:"off",isChecked:!0,isDisabled:!1,className:""},parameters:{docs:{title:"Toggle",description:{component:"開關按鈕組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(e){return r.jsx(o,{...e})}},a={name:"主題色彩",args:{isChecked:!0},parameters:{docs:{source:{code:`
<Toggle {...args} themeColor="neutral" />
<Toggle {...args} themeColor="primary" />
<Toggle {...args} themeColor="secondary" />
<Toggle {...args} themeColor="info" />
<Toggle {...args} themeColor="success" />
<Toggle {...args} themeColor="warning" />
<Toggle {...args} themeColor="error" />
`}}},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(o,{...e,themeColor:"primary"}),r.jsx(o,{...e,themeColor:"secondary"}),r.jsx(o,{...e,themeColor:"neutral"}),r.jsx(o,{...e,themeColor:"info"}),r.jsx(o,{...e,themeColor:"success"}),r.jsx(o,{...e,themeColor:"warning"}),r.jsx(o,{...e,themeColor:"error"})]})}};var t,g,l;s.parameters={...s.parameters,docs:{...(t=s.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Toggle {...args} />;
  }
}`,...(l=(g=s.parameters)==null?void 0:g.docs)==null?void 0:l.source}}};var n,c,m;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    isChecked: true
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Toggle {...args} themeColor="neutral" />
<Toggle {...args} themeColor="primary" />
<Toggle {...args} themeColor="secondary" />
<Toggle {...args} themeColor="info" />
<Toggle {...args} themeColor="success" />
<Toggle {...args} themeColor="warning" />
<Toggle {...args} themeColor="error" />
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Toggle {...args} themeColor="primary" />
        <Toggle {...args} themeColor="secondary" />
        <Toggle {...args} themeColor="neutral" />
        <Toggle {...args} themeColor="info" />
        <Toggle {...args} themeColor="success" />
        <Toggle {...args} themeColor="warning" />
        <Toggle {...args} themeColor="error" />
      </div>;
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const u=["Default","Theme"];export{s as Default,a as Theme,u as __namedExportsOrder,C as default};
