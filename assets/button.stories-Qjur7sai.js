import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-BPnjcUZo.js";import{B as n}from"./toast-D1eZVrBe.js";import"./checkbox-gHzG2Us7.js";import"./input-CP6ykSnO.js";import"./textarea-CO8Z8fZG.js";import"./toggle-BVqMcImG.js";import"./radio-BhGOQQ7m.js";import"./stepper-C7cvACgg.js";import"./breadcrumb-DereJZat.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-Citl8FfN.js";import"./image-CZs88QCg.js";import"./status-indicator-DcO8m1Ar.js";import{a as l,S as u,V as p,b as m}from"./disable-circle-Qt9C8lli.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./string-bv4IUxbB.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const X={title:"Component/Button",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},variant:{description:"外觀樣式",control:{type:"select",options:["filled","soft","ghost","text"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:r.jsx(l,{}),Search:r.jsx(u,{}),Visibility:r.jsx(p,{}),VisibilityOff:r.jsx(m,{})},table:{category:"PROPS"}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:r.jsx(l,{}),Search:r.jsx(u,{}),Visibility:r.jsx(p,{}),VisibilityOff:r.jsx(m,{})},table:{category:"PROPS"}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},width:{description:"按鈕寬度",control:{type:"select",options:["fit","fluid"]},table:{category:"PROPS"}},borderWidth:{description:"按鈕邊框寬度",control:{type:"select",options:["none","xs","sm","md","lg","xl"]},table:{category:"PROPS"}},radius:{description:"按鈕圓角大小",control:{type:"select",options:["none","xs","sm","md","lg","xl","full"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{control:{},description:"按鈕內容",options:["標題按鈕","客製化按鈕"],table:{category:"SLOTS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"},required:!0}},args:{themeColor:"primary",variant:"filled",prefix:null,suffix:null,size:"medium",width:"fit",borderWidth:"sm",radius:"sm",isDisabled:!1,className:"",children:"Button",onClick:d("onClick")},parameters:{docs:{title:"Button",description:{component:"按鈕組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(t){return r.jsx(n,{...t,children:t.children})}},i={name:"附加元素",args:{variant:"ghost",onClick:()=>d("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(t,o){const{args:e}=o;return`
<Button {...args} prefix={<AccountIcon />}>${e.children}</Button>
<Button {...args} suffix={<SearchIcon />}>${e.children}</Button>
`}}}},render(t){return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[r.jsx(n,{...t,prefix:r.jsx(l,{}),children:t.children}),r.jsx(n,{...t,suffix:r.jsx(u,{}),children:t.children})]})}},a={name:"外觀樣式",args:{variant:"ghost",suffix:null,onClick:()=>d("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(t,o){const{args:e}=o;return`
<Button {...args} variant="filled">${e.children}</Button>
<Button {...args} variant="ghost">${e.children}</Button>
<Button {...args} variant="text">${e.children}</Button>
`}}}},render(t){return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[r.jsx(n,{...t,variant:"filled",children:t.children}),r.jsx(n,{...t,variant:"ghost",children:t.children}),r.jsx(n,{...t,variant:"text",children:t.children})]})}},c={name:"主題色彩",args:{variant:"filled",prefix:r.jsx(l,{}),suffix:null,onClick:()=>d("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(t,o){const{args:e}=o;return`
<Button { ...args } themeColor="primary">${e.children}</Button>
<Button { ...args } themeColor="secondary">${e.children}</Button>
<Button { ...args } themeColor="neutral">${e.children}</Button>
<Button { ...args } themeColor="info">${e.children}</Button>
<Button { ...args } themeColor="success">${e.children}</Button>
<Button { ...args } themeColor="warning">${e.children}</Button>
<Button { ...args } themeColor="error">${e.children}</Button>
`}}}},render(t){return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[r.jsx(n,{...t,themeColor:"primary",children:t.children}),r.jsx(n,{...t,themeColor:"secondary",children:t.children}),r.jsx(n,{...t,themeColor:"neutral",children:t.children}),r.jsx(n,{...t,themeColor:"info",children:t.children}),r.jsx(n,{...t,themeColor:"success",children:t.children}),r.jsx(n,{...t,themeColor:"warning",children:t.children}),r.jsx(n,{...t,themeColor:"error",children:t.children})]})}};var h,g,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
}`,...(y=(B=i.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var C,S,j;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var v,b,$;c.parameters={...c.parameters,docs:{...(v=c.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
        <Button {...args} themeColor="primary">
          {args.children}
        </Button>
        <Button {...args} themeColor="secondary">
          {args.children}
        </Button>
        <Button {...args} themeColor="neutral">
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
}`,...($=(b=c.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};const Y=["Default","Additional","Shape","Theme"];export{i as Additional,s as Default,a as Shape,c as Theme,Y as __namedExportsOrder,X as default};
