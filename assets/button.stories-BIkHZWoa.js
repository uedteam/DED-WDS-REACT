import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-DcI8vfAA.js";import{B as n}from"./button-Ddeo_FLO.js";import"./checkbox-DDlz9EWX.js";import"./input-C0MiGvba.js";import"./textarea-jggigcCy.js";import"./toggle-CBTqwJHK.js";import"./radio-C3rPQ8Ai.js";import"./stepper-BrDppo-a.js";import"./breadcrumb-BUHvKToT.js";import"./progress-circle-B8_-B84j.js";import"./progress-line-BcO7QhX8.js";import"./styled-7_Fd9YFd.js";import"./menu-BfpC7pJY.js";import"./image-CZs88QCg.js";import"./toast-CB_i8VjC.js";import{A as l,S as d,V as p,a as h}from"./warning-DPjiZ-Sx.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const Q={title:"Component/Button",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["neutral","primary","secondary","info","success","warning","error"]},table:{category:"PROPS"}},variant:{description:"外觀樣式",control:{type:"select",options:["filled","ghost","text"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:t.jsx(l,{}),Search:t.jsx(d,{}),Visibility:t.jsx(p,{}),VisibilityOff:t.jsx(h,{})},table:{category:"PROPS"}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:t.jsx(l,{}),Search:t.jsx(d,{}),Visibility:t.jsx(p,{}),VisibilityOff:t.jsx(h,{})},table:{category:"PROPS"}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},width:{description:"按鈕寬度",control:{type:"select",options:["fit","fluid"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{control:{},description:"按鈕內容",options:["標題按鈕","客製化按鈕"],table:{category:"SLOTS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"},required:!0}},args:{themeColor:"neutral",variant:"filled",prefix:null,suffix:null,size:"medium",width:"fit",isDisabled:!1,className:"",children:"Button",onClick:u("onClick")},parameters:{docs:{title:"Button",description:{component:"按鈕組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(r){return t.jsx(n,{...r,children:r.children})}},i={name:"附加元素",args:{variant:"ghost",onClick:()=>u("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button {...args} prefix={<AccountIcon />}>${e.children}</Button>
<Button {...args} suffix={<SearchIcon />}>${e.children}</Button>
`}}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(n,{...r,prefix:t.jsx(l,{}),children:r.children}),t.jsx(n,{...r,suffix:t.jsx(d,{}),children:r.children})]})}},a={name:"外觀樣式",args:{variant:"ghost",suffix:null,onClick:()=>u("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button {...args} variant="filled">${e.children}</Button>
<Button {...args} variant="ghost">${e.children}</Button>
<Button {...args} variant="text">${e.children}</Button>
`}}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(n,{...r,variant:"filled",children:r.children}),t.jsx(n,{...r,variant:"ghost",children:r.children}),t.jsx(n,{...r,variant:"text",children:r.children})]})}},c={name:"主題色彩",args:{variant:"filled",prefix:t.jsx(l,{}),suffix:null,onClick:()=>u("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button { ...args } themeColor="primary">${e.children}</Button>
<Button { ...args } themeColor="secondary">${e.children}</Button>
<Button { ...args } themeColor="neutral">${e.children}</Button>
<Button { ...args } themeColor="info">${e.children}</Button>
<Button { ...args } themeColor="success">${e.children}</Button>
<Button { ...args } themeColor="warning">${e.children}</Button>
<Button { ...args } themeColor="error">${e.children}</Button>
`}}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(n,{...r,themeColor:"neutral",children:r.children}),t.jsx(n,{...r,themeColor:"primary",children:r.children}),t.jsx(n,{...r,themeColor:"secondary",children:r.children}),t.jsx(n,{...r,themeColor:"info",children:r.children}),t.jsx(n,{...r,themeColor:"success",children:r.children}),t.jsx(n,{...r,themeColor:"warning",children:r.children}),t.jsx(n,{...r,themeColor:"error",children:r.children})]})}};var m,g,x;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(x=(g=s.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,B,y;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '附加元素',
  args: {
    variant: 'ghost',
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Button {...args} prefix={<AccountIcon />}>\${args.children}</Button>
<Button {...args} suffix={<SearchIcon />}>\${args.children}</Button>
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Button {...args} prefix={<AccountIcon />}>
          {args.children}
        </Button>
        <Button {...args} suffix={<SearchIcon />}>
          {args.children}
        </Button>
      </div>;
  }
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var C,j,v;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '外觀樣式',
  args: {
    variant: 'ghost',
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Button {...args} variant="filled">\${args.children}</Button>
<Button {...args} variant="ghost">\${args.children}</Button>
<Button {...args} variant="text">\${args.children}</Button>
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Button {...args} variant="filled">
          {args.children}
        </Button>
        <Button {...args} variant="ghost">
          {args.children}
        </Button>
        <Button {...args} variant="text">
          {args.children}
        </Button>
      </div>;
  }
}`,...(v=(j=a.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var S,$,b;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    variant: 'filled',
    prefix: <AccountIcon />,
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Button { ...args } themeColor="primary">\${args.children}</Button>
<Button { ...args } themeColor="secondary">\${args.children}</Button>
<Button { ...args } themeColor="neutral">\${args.children}</Button>
<Button { ...args } themeColor="info">\${args.children}</Button>
<Button { ...args } themeColor="success">\${args.children}</Button>
<Button { ...args } themeColor="warning">\${args.children}</Button>
<Button { ...args } themeColor="error">\${args.children}</Button>
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Button {...args} themeColor="neutral">
          {args.children}
        </Button>
        <Button {...args} themeColor="primary">
          {args.children}
        </Button>
        <Button {...args} themeColor="secondary">
          {args.children}
        </Button>
        <Button {...args} themeColor="info">
          {args.children}
        </Button>
        <Button {...args} themeColor="success">
          {args.children}
        </Button>
        <Button {...args} themeColor="warning">
          {args.children}
        </Button>
        <Button {...args} themeColor="error">
          {args.children}
        </Button>
      </div>;
  }
}`,...(b=($=c.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const U=["Default","Additional","Shape","Theme"];export{i as Additional,s as Default,a as Shape,c as Theme,U as __namedExportsOrder,Q as default};
