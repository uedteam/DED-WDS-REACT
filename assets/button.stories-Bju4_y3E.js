import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-DjADW0si.js";import{B as n}from"./button-i0GVqVj8.js";import"./checkbox-BbQOm0KL.js";import"./input-BWkpi1yj.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import"./stepper-BpbN3HpY.js";import"./breadcrumb-KvgkV4vO.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-BAUrcos8.js";import"./image-CZs88QCg.js";import"./toast-4l9AxWm1.js";import{A as l,S as u,V as p,a as m}from"./warning-DPjiZ-Sx.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const Q={title:"Component/Button",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","info","success","warning","error"]},table:{category:"PROPS"}},variant:{description:"外觀樣式",control:{type:"select",options:["filled","ghost","text"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:t.jsx(l,{}),Search:t.jsx(u,{}),Visibility:t.jsx(p,{}),VisibilityOff:t.jsx(m,{})},table:{category:"PROPS"}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:t.jsx(l,{}),Search:t.jsx(u,{}),Visibility:t.jsx(p,{}),VisibilityOff:t.jsx(m,{})},table:{category:"PROPS"}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},width:{description:"按鈕寬度",control:{type:"select",options:["fit","fluid"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{control:{},description:"按鈕內容",options:["標題按鈕","客製化按鈕"],table:{category:"SLOTS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"},required:!0}},args:{themeColor:"primary",variant:"filled",prefix:null,suffix:null,size:"medium",width:"fit",isDisabled:!1,className:"",children:"Button",onClick:d("onClick")},parameters:{docs:{title:"Button",description:{component:"按鈕組件的呈現及說明。"}}}},i={name:"預設項目",args:{},render(r){return t.jsx(n,{...r,children:r.children})}},s={name:"附加元素",args:{variant:"ghost",onClick:()=>d("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button {...args} prefix={<AccountIcon />}>${e.children}</Button>
<Button {...args} suffix={<SearchIcon />}>${e.children}</Button>
`}}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(n,{...r,prefix:t.jsx(l,{}),children:r.children}),t.jsx(n,{...r,suffix:t.jsx(u,{}),children:r.children})]})}},a={name:"外觀樣式",args:{variant:"ghost",suffix:null,onClick:()=>d("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button {...args} variant="filled">${e.children}</Button>
<Button {...args} variant="ghost">${e.children}</Button>
<Button {...args} variant="text">${e.children}</Button>
`}}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(n,{...r,variant:"filled",children:r.children}),t.jsx(n,{...r,variant:"ghost",children:r.children}),t.jsx(n,{...r,variant:"text",children:r.children})]})}},c={name:"主題色彩",args:{variant:"filled",prefix:t.jsx(l,{}),suffix:null,onClick:()=>d("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button { ...args } themeColor="primary">${e.children}</Button>
<Button { ...args } themeColor="secondary">${e.children}</Button>
<Button { ...args } themeColor="tertiary">${e.children}</Button>
<Button { ...args } themeColor="info">${e.children}</Button>
<Button { ...args } themeColor="success">${e.children}</Button>
<Button { ...args } themeColor="warning">${e.children}</Button>
<Button { ...args } themeColor="error">${e.children}</Button>
`}}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(n,{...r,themeColor:"primary",children:r.children}),t.jsx(n,{...r,themeColor:"secondary",children:r.children}),t.jsx(n,{...r,themeColor:"tertiary",children:r.children}),t.jsx(n,{...r,themeColor:"info",children:r.children}),t.jsx(n,{...r,themeColor:"success",children:r.children}),t.jsx(n,{...r,themeColor:"warning",children:r.children}),t.jsx(n,{...r,themeColor:"error",children:r.children})]})}};var h,g,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,B,y;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(y=(B=s.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var C,j,v;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
<Button { ...args } themeColor="tertiary">\${args.children}</Button>
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
        <Button {...args} themeColor="primary">
          {args.children}
        </Button>
        <Button {...args} themeColor="secondary">
          {args.children}
        </Button>
        <Button {...args} themeColor="tertiary">
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
}`,...(b=($=c.parameters)==null?void 0:$.docs)==null?void 0:b.source}}};const U=["Default","Additional","Shape","Theme"];export{s as Additional,i as Default,a as Shape,c as Theme,U as __namedExportsOrder,Q as default};
