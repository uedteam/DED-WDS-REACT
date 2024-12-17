import{j as l}from"./jsx-runtime-DEdD30eg.js";import{T as r}from"./title-BPnjcUZo.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";const C={title:"Component/Title",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error","none"]},table:{category:"PROPS"}},level:{description:"標題等級",control:{type:"select",options:[0,1,2,3,4,5,6]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{description:"標題內容",table:{category:"SLOTS"}}},parameters:{docs:{title:"Title",description:{component:"標題組件的呈現及說明。"}}},args:{themeColor:"primary",level:1,className:"",children:"Title"}},i={name:"預設項目",args:{},render(e){return l.jsx(r,{...e,children:e.children})}},t={name:"標題大小",args:{},parameters:{docs:{source:{code:`
<Title level={1}>level 1: {args.children}</Title>
<Title level={2}>level 2: {args.children}</Title>
<Title level={3}>level 3: {args.children}</Title>
<Title level={4}>level 4: {args.children}</Title>
<Title level={5}>level 5: {args.children}</Title>
<Title level={6}>level 6: {args.children}</Title>
<Title level={0}>level 0: {args.children}</Title>
`}}},render(e){return l.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[l.jsxs(r,{level:1,children:["level 1: ",e.children]}),l.jsxs(r,{level:2,children:["level 2: ",e.children]}),l.jsxs(r,{level:3,children:["level 3: ",e.children]}),l.jsxs(r,{level:4,children:["level 4: ",e.children]}),l.jsxs(r,{level:5,children:["level 5: ",e.children]}),l.jsxs(r,{level:6,children:["level 6: ",e.children]}),l.jsxs(r,{level:0,children:["level 0: ",e.children]})]})}},n={name:"主題色彩",args:{level:3},parameters:{docs:{source:{code:`
<Title level={args.level} themeColor="primary">{args.children}</Title>
<Title level={args.level} themeColor="secondary">{args.children}</Title>
<Title level={args.level} themeColor="neutral">{args.children}</Title>
<Title level={args.level} themeColor="info">{args.children}</Title>
<Title level={args.level} themeColor="success">{args.children}</Title>
<Title level={args.level} themeColor="warning">{args.children}</Title>
<Title level={args.level} themeColor="error">{args.children}</Title>
`}}},render(e){return l.jsxs("div",{style:{display:"flex",gap:"8px"},children:[l.jsx(r,{level:e.level,themeColor:"primary",children:e.children}),l.jsx(r,{level:e.level,themeColor:"secondary",children:e.children}),l.jsx(r,{level:e.level,themeColor:"neutral",children:e.children}),l.jsx(r,{level:e.level,themeColor:"info",children:e.children}),l.jsx(r,{level:e.level,themeColor:"success",children:e.children}),l.jsx(r,{level:e.level,themeColor:"warning",children:e.children}),l.jsx(r,{level:e.level,themeColor:"error",children:e.children})]})}};var s,o,c;i.parameters={...i.parameters,docs:{...(s=i.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Title {...args}>{args.children}</Title>;
  }
}`,...(c=(o=i.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var a,d,v;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '標題大小',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<Title level={1}>level 1: {args.children}</Title>
<Title level={2}>level 2: {args.children}</Title>
<Title level={3}>level 3: {args.children}</Title>
<Title level={4}>level 4: {args.children}</Title>
<Title level={5}>level 5: {args.children}</Title>
<Title level={6}>level 6: {args.children}</Title>
<Title level={0}>level 0: {args.children}</Title>
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
        <Title level={1}>level 1: {args.children}</Title>
        <Title level={2}>level 2: {args.children}</Title>
        <Title level={3}>level 3: {args.children}</Title>
        <Title level={4}>level 4: {args.children}</Title>
        <Title level={5}>level 5: {args.children}</Title>
        <Title level={6}>level 6: {args.children}</Title>
        <Title level={0}>level 0: {args.children}</Title>
      </div>;
  }
}`,...(v=(d=t.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};var h,T,m;n.parameters={...n.parameters,docs:{...(h=n.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    level: 3
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Title level={args.level} themeColor="primary">{args.children}</Title>
<Title level={args.level} themeColor="secondary">{args.children}</Title>
<Title level={args.level} themeColor="neutral">{args.children}</Title>
<Title level={args.level} themeColor="info">{args.children}</Title>
<Title level={args.level} themeColor="success">{args.children}</Title>
<Title level={args.level} themeColor="warning">{args.children}</Title>
<Title level={args.level} themeColor="error">{args.children}</Title>
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Title level={args.level} themeColor="primary">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="secondary">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="neutral">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="info">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="success">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="warning">
          {args.children}
        </Title>
        <Title level={args.level} themeColor="error">
          {args.children}
        </Title>
      </div>;
  }
}`,...(m=(T=n.parameters)==null?void 0:T.docs)==null?void 0:m.source}}};const y=["Default","Size","Theme"];export{i as Default,t as Size,n as Theme,y as __namedExportsOrder,C as default};
