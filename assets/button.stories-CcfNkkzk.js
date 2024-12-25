import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-JGunjryD.js";import{B as n}from"./toast-DVPkjaw7.js";import"./checkbox-Dx9j1Oee.js";import"./input-jRS6gElY.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./radio-CMOPLxLt.js";import"./navbar-D599Tu5l.js";import"./breadcrumb-BWo1kqJh.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./menu-LnftMpru.js";import"./image-CZs88QCg.js";import"./status-indicator-BDww4a8h.js";import"./badge-vsbKzH_B.js";import{a as s,S as i,V as h,b as m}from"./disable-circle-Qt9C8lli.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./string-BqrfsRv8.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./navigate-arrow-6VIhmLdI.js";import"./notification-NM2mg_B2.js";const tr={title:"Component/Button",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},variant:{description:"外觀樣式",control:{type:"select",options:["filled","soft","ghost","text"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:t.jsx(s,{}),Search:t.jsx(i,{}),Visibility:t.jsx(h,{}),VisibilityOff:t.jsx(m,{})},table:{category:"PROPS"}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:t.jsx(s,{}),Search:t.jsx(i,{}),Visibility:t.jsx(h,{}),VisibilityOff:t.jsx(m,{})},table:{category:"PROPS"}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},width:{description:"按鈕寬度",control:{type:"select",options:["fit","fluid"]},table:{category:"PROPS"}},borderWidth:{description:"按鈕邊框寬度",control:{type:"select",options:["none","1px","2px","3px","4px","5px"]},table:{category:"PROPS"}},radius:{description:"按鈕圓角大小",control:{type:"select",options:["none","2px","4px","8px","12px","16px","32px","full"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{control:{},description:"按鈕內容",options:["標題按鈕","客製化按鈕"],table:{category:"SLOTS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"},required:!0}},args:{themeColor:"primary",variant:"filled",prefix:null,suffix:null,size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",children:"Button",onClick:a("onClick")},parameters:{docs:{title:"Button",description:{component:"按鈕組件的呈現及說明。"}}}},c={name:"預設項目",args:{},render(r){return t.jsx(n,{...r,children:r.children})}},l={name:"附加元素",args:{variant:"ghost",onClick:()=>a("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button {...args} prefix={<AccountIcon />}>${e.children}</Button>
<Button {...args} suffix={<SearchIcon />}>${e.children}</Button>
`}}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(n,{...r,prefix:t.jsx(s,{}),children:r.children}),t.jsx(n,{...r,suffix:t.jsx(i,{}),children:r.children})]})}},u={name:"外觀樣式",args:{variant:"ghost",suffix:null,onClick:()=>a("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button {...args} variant="filled">${e.children}</Button>
<Button {...args} variant="ghost">${e.children}</Button>
<Button {...args} variant="text">${e.children}</Button>
`}}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(n,{...r,variant:"filled",children:r.children}),t.jsx(n,{...r,variant:"ghost",children:r.children}),t.jsx(n,{...r,variant:"text",children:r.children})]})}},d={name:"主題色彩",args:{variant:"filled",prefix:t.jsx(s,{}),suffix:null,onClick:()=>a("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button { ...args } themeColor="primary">${e.children}</Button>
<Button { ...args } themeColor="secondary">${e.children}</Button>
<Button { ...args } themeColor="neutral">${e.children}</Button>
<Button { ...args } themeColor="info">${e.children}</Button>
<Button { ...args } themeColor="success">${e.children}</Button>
<Button { ...args } themeColor="warning">${e.children}</Button>
<Button { ...args } themeColor="error">${e.children}</Button>
`}}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(n,{...r,themeColor:"primary",children:r.children}),t.jsx(n,{...r,themeColor:"secondary",children:r.children}),t.jsx(n,{...r,themeColor:"neutral",children:r.children}),t.jsx(n,{...r,themeColor:"info",children:r.children}),t.jsx(n,{...r,themeColor:"success",children:r.children}),t.jsx(n,{...r,themeColor:"warning",children:r.children}),t.jsx(n,{...r,themeColor:"error",children:r.children})]})}},p={name:"尺寸",args:{variant:"ghost",onClick:()=>a("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(r,o){const{args:e}=o;return`
<Button {...args} prefix={<AccountIcon />}>${e.children}</Button>
<Button {...args} suffix={<SearchIcon />}>${e.children}</Button>
`}}}},render(r){return t.jsxs(t.Fragment,{children:[t.jsx(n,{...r,size:"large",prefix:t.jsx(s,{}),children:r.children}),t.jsx(n,{...r,size:"medium",suffix:t.jsx(i,{}),children:r.children}),t.jsx(n,{...r,size:"small",suffix:t.jsx(i,{}),children:r.children})]})}};var g,x,f;c.parameters={...c.parameters,docs:{...(g=c.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(f=(x=c.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var B,y,C;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(C=(y=l.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var S,j,v;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(v=(j=u.parameters)==null?void 0:j.docs)==null?void 0:v.source}}};var b,$,k;d.parameters={...d.parameters,docs:{...(b=d.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(k=($=d.parameters)==null?void 0:$.docs)==null?void 0:k.source}}};var P,I,O;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '尺寸',
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
    return <>
        <Button {...args} size="large" prefix={<AccountIcon />}>
          {args.children}
        </Button>
        <Button {...args} size="medium" suffix={<SearchIcon />}>
          {args.children}
        </Button>
        <Button {...args} size="small" suffix={<SearchIcon />}>
          {args.children}
        </Button>
      </>;
  }
}`,...(O=(I=p.parameters)==null?void 0:I.docs)==null?void 0:O.source}}};const er=["Default","Additional","Shape","Theme","Size"];export{l as Additional,c as Default,u as Shape,p as Size,d as Theme,er as __namedExportsOrder,tr as default};
