import{j as r}from"./jsx-runtime-DEdD30eg.js";import{L as s}from"./progress-line-DHphvmbz.js";import"./index-RYns6xqu.js";import"./styled-7_Fd9YFd.js";const y={title:"Component/Progress-Line",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},label:{description:"進度指示標籤",table:{category:"PROPS"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},table:{category:"PROPS"}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"primary",label:"Label",percent:65,strokeWidth:10,className:""},parameters:{docs:{title:"Line Progress",description:{component:"長條進度指示組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(s,{...e})}},t={name:"顯示標籤",args:{},render(e){return r.jsx(s,{...e,label:"Label"})}},n={name:"主題色彩",args:{},parameters:{docs:{source:{code:`
<LineProgress {...args} percent={60} themeColor="neutral" />
<LineProgress {...args} percent={40} themeColor="primary" />
<LineProgress {...args} percent={50} themeColor="secondary" />
<LineProgress {...args} percent={70} themeColor="info" />
<LineProgress {...args} percent={80} themeColor="success" />
<LineProgress {...args} percent={90} themeColor="warning" />
<LineProgress {...args} percent={100} themeColor="error" />
`}}},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(s,{...e,percent:60,themeColor:"neutral"}),r.jsx(s,{...e,percent:40,themeColor:"primary"}),r.jsx(s,{...e,percent:50,themeColor:"secondary"}),r.jsx(s,{...e,percent:70,themeColor:"info"}),r.jsx(s,{...e,percent:80,themeColor:"success"}),r.jsx(s,{...e,percent:90,themeColor:"warning"}),r.jsx(s,{...e,percent:100,themeColor:"error"})]})}};var a,c,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <LineProgress {...args} />;
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,l,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '顯示標籤',
  args: {},
  render(args) {
    return <LineProgress {...args} label="Label" />;
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var g,d,P;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<LineProgress {...args} percent={60} themeColor="neutral" />
<LineProgress {...args} percent={40} themeColor="primary" />
<LineProgress {...args} percent={50} themeColor="secondary" />
<LineProgress {...args} percent={70} themeColor="info" />
<LineProgress {...args} percent={80} themeColor="success" />
<LineProgress {...args} percent={90} themeColor="warning" />
<LineProgress {...args} percent={100} themeColor="error" />
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <LineProgress {...args} percent={60} themeColor="neutral" />
        <LineProgress {...args} percent={40} themeColor="primary" />
        <LineProgress {...args} percent={50} themeColor="secondary" />
        <LineProgress {...args} percent={70} themeColor="info" />
        <LineProgress {...args} percent={80} themeColor="success" />
        <LineProgress {...args} percent={90} themeColor="warning" />
        <LineProgress {...args} percent={100} themeColor="error" />
      </div>;
  }
}`,...(P=(d=n.parameters)==null?void 0:d.docs)==null?void 0:P.source}}};const x=["Default","Label","Theme"];export{o as Default,t as Label,n as Theme,x as __namedExportsOrder,y as default};
