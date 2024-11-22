import{j as r}from"./jsx-runtime-DEdD30eg.js";import{L as s}from"./progress-line-D93K9tkg.js";import"./index-RYns6xqu.js";import"./styled-7_Fd9YFd.js";const y={title:"Component/Progress-Line",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]}},label:{description:"進度指示標籤"},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1}},className:{description:"客製化樣式"}},args:{themeColor:"primary",label:"Label",percent:65,strokeWidth:10,className:""},parameters:{docs:{title:"長條進度指示",description:{component:"長條進度指示組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(s,{...e})}},t={name:"顯示標籤",args:{},render(e){return r.jsx(s,{...e,label:"Label"})}},n={name:"主題色彩",args:{},parameters:{docs:{source:{code:`
<LineProgress {...args} percent={40} themeColor="primary" />
<LineProgress {...args} percent={50} themeColor="secondary" />
<LineProgress {...args} percent={60} themeColor="tertiary" />
<LineProgress {...args} percent={70} themeColor="info" />
<LineProgress {...args} percent={80} themeColor="success" />
<LineProgress {...args} percent={90} themeColor="warning" />
<LineProgress {...args} percent={100} themeColor="error" />
`}}},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[r.jsx(s,{...e,percent:40,themeColor:"primary"}),r.jsx(s,{...e,percent:50,themeColor:"secondary"}),r.jsx(s,{...e,percent:60,themeColor:"tertiary"}),r.jsx(s,{...e,percent:70,themeColor:"info"}),r.jsx(s,{...e,percent:80,themeColor:"success"}),r.jsx(s,{...e,percent:90,themeColor:"warning"}),r.jsx(s,{...e,percent:100,themeColor:"error"})]})}};var a,c,i;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <LineProgress {...args} />;
  }
}`,...(i=(c=o.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var p,m,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '顯示標籤',
  args: {},
  render(args) {
    return <LineProgress {...args} label="Label" />;
  }
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var g,d,h;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<LineProgress {...args} percent={40} themeColor="primary" />
<LineProgress {...args} percent={50} themeColor="secondary" />
<LineProgress {...args} percent={60} themeColor="tertiary" />
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
        <LineProgress {...args} percent={40} themeColor="primary" />
        <LineProgress {...args} percent={50} themeColor="secondary" />
        <LineProgress {...args} percent={60} themeColor="tertiary" />
        <LineProgress {...args} percent={70} themeColor="info" />
        <LineProgress {...args} percent={80} themeColor="success" />
        <LineProgress {...args} percent={90} themeColor="warning" />
        <LineProgress {...args} percent={100} themeColor="error" />
      </div>;
  }
}`,...(h=(d=n.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const x=["Default","Label","Theme"];export{o as Default,t as Label,n as Theme,x as __namedExportsOrder,y as default};
