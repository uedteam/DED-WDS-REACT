import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{C as s}from"./progress-circle-D0LDKTfe.js";import"./index-DJO9vBfz.js";import"./styled-7_Fd9YFd.js";const x={title:"Component/Progress-Circle",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},table:{category:"PROPS"}},label:{description:"進度指示標籤",table:{category:"PROPS"}},percent:{description:"進度",control:{type:"range",min:0,max:100,step:1},table:{category:"PROPS"}},size:{description:"直徑",control:{type:"range",min:24,max:200,step:1},table:{category:"PROPS"}},strokeWidth:{description:"線條寬度",control:{type:"range",min:1,max:20,step:1},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"primary",label:"Label",percent:65,size:100,strokeWidth:10,className:""},parameters:{docs:{title:"圓形進度指示",description:{component:"圓形進度指示組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(s,{...e})}},t={name:"顯示標籤",args:{},parameters:{docs:{source:{code:`
<CircleProgress {...args} label="測試" size={70} />
<CircleProgress {...args} label="測試" size={100} />
`}}},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(s,{...e,label:"測試",size:70}),r.jsx(s,{...e,label:"測試",size:100})]})}},a={name:"主題色彩",args:{},parameters:{docs:{source:{code:`
<CircleProgress {...args} percent={40} themeColor="primary" />
<CircleProgress {...args} percent={50} themeColor="secondary" />
<CircleProgress {...args} percent={60} themeColor="tertiary" />
<CircleProgress {...args} percent={70} themeColor="info" />
<CircleProgress {...args} percent={80} themeColor="success" />
<CircleProgress {...args} percent={90} themeColor="warning" />
<CircleProgress {...args} percent={100} themeColor="error" />
`}}},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(s,{...e,percent:40,themeColor:"primary"}),r.jsx(s,{...e,percent:50,themeColor:"secondary"}),r.jsx(s,{...e,percent:60,themeColor:"tertiary"}),r.jsx(s,{...e,percent:70,themeColor:"info"}),r.jsx(s,{...e,percent:80,themeColor:"success"}),r.jsx(s,{...e,percent:90,themeColor:"warning"}),r.jsx(s,{...e,percent:100,themeColor:"error"})]})}};var c,l,n;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <CircleProgress {...args} />;
  }
}`,...(n=(l=o.parameters)==null?void 0:l.docs)==null?void 0:n.source}}};var i,p,g;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '顯示標籤',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<CircleProgress {...args} label="測試" size={70} />
<CircleProgress {...args} label="測試" size={100} />
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <CircleProgress {...args} label="測試" size={70} />
        <CircleProgress {...args} label="測試" size={100} />
      </div>;
  }
}`,...(g=(p=t.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,C,d;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<CircleProgress {...args} percent={40} themeColor="primary" />
<CircleProgress {...args} percent={50} themeColor="secondary" />
<CircleProgress {...args} percent={60} themeColor="tertiary" />
<CircleProgress {...args} percent={70} themeColor="info" />
<CircleProgress {...args} percent={80} themeColor="success" />
<CircleProgress {...args} percent={90} themeColor="warning" />
<CircleProgress {...args} percent={100} themeColor="error" />
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <CircleProgress {...args} percent={40} themeColor="primary" />
        <CircleProgress {...args} percent={50} themeColor="secondary" />
        <CircleProgress {...args} percent={60} themeColor="tertiary" />
        <CircleProgress {...args} percent={70} themeColor="info" />
        <CircleProgress {...args} percent={80} themeColor="success" />
        <CircleProgress {...args} percent={90} themeColor="warning" />
        <CircleProgress {...args} percent={100} themeColor="error" />
      </div>;
  }
}`,...(d=(C=a.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};const b=["Default","Label","Theme"];export{o as Default,t as Label,a as Theme,b as __namedExportsOrder,x as default};
