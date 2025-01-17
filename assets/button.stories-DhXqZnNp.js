import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./pagination-DTnhWnFT.js";import"./badge-vsbKzH_B.js";import"./breadcrumb--fpt9mRh.js";import{B as o}from"./toast-D4KW26Pr.js";import"./checkbox-D-MAZBDN.js";import"./progress-circle-5ZOi_8dX.js";import"./progress-line-BURSIgt3.js";import"./divider-ChKDBDeF.js";import"./image-CZs88QCg.js";import"./input-_I_ivZF4.js";import"./radio-CMOPLxLt.js";import"./textarea-CO8Z8fZG.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./menu-rg9dOBvr.js";import"./status-indicator-BDww4a8h.js";import"./layout-ZjbFUAzr.js";import"./tag-C7LkoCGR.js";import"./grid-D9dEAlnk.js";import{b as c,c as u,d as p,e as m}from"./arrow-drop-down-Fqyji-Tj.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./notification-NM2mg_B2.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const et={title:"Component/Button",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},variant:{description:"外觀樣式",control:{type:"select",options:["filled","soft","ghost","text"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:r.jsx(c,{}),Search:r.jsx(u,{}),Visibility:r.jsx(p,{}),VisibilityOff:r.jsx(m,{})},table:{category:"PROPS"}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:r.jsx(c,{}),Search:r.jsx(u,{}),Visibility:r.jsx(p,{}),VisibilityOff:r.jsx(m,{})},table:{category:"PROPS"}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},width:{description:"按鈕寬度",control:{type:"select",options:["fit","fluid"]},table:{category:"PROPS"}},borderWidth:{description:"按鈕邊框寬度",control:{type:"select",options:["none","1px","2px","3px","4px","5px"]},table:{category:"PROPS"}},radius:{description:"按鈕圓角大小",control:{type:"select",options:["none","2px","4px","8px","12px","16px","32px","full"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{control:{},description:"按鈕內容",options:["標題按鈕","客製化按鈕"],table:{category:"SLOTS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"},required:!0}},args:{themeColor:"primary",variant:"filled",prefix:null,suffix:null,size:"medium",width:"fit",borderWidth:"1px",radius:"4px",isDisabled:!1,className:"",children:"Button",onClick:d("onClick")},parameters:{docs:{title:"Button",description:{component:"按鈕組件的呈現及說明。"}}}},i={name:"預設項目",args:{},render(t){return r.jsx(o,{...t,children:t.children})}},s={name:"附加元素",args:{variant:"ghost",onClick:()=>d("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(t,n){const{args:e}=n;return`
<Button {...args} prefix={<Account />}>${e.children}</Button>
<Button {...args} suffix={<Search />}>${e.children}</Button>
`}}}},render(t){return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[r.jsx(o,{...t,prefix:r.jsx(c,{}),children:t.children}),r.jsx(o,{...t,suffix:r.jsx(u,{}),children:t.children})]})}},a={name:"外觀樣式",args:{variant:"ghost",suffix:null,onClick:()=>d("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(t,n){const{args:e}=n;return`
<Button {...args} variant="filled">${e.children}</Button>
<Button {...args} variant="ghost">${e.children}</Button>
<Button {...args} variant="text">${e.children}</Button>
`}}}},render(t){return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[r.jsx(o,{...t,variant:"filled",children:t.children}),r.jsx(o,{...t,variant:"ghost",children:t.children}),r.jsx(o,{...t,variant:"text",children:t.children})]})}},l={name:"主題色彩",args:{variant:"filled",prefix:r.jsx(c,{}),suffix:null,onClick:()=>d("onClick")("點擊事件"),className:""},parameters:{docs:{source:{transform(t,n){const{args:e}=n;return`
<Button { ...args } themeColor="primary">${e.children}</Button>
<Button { ...args } themeColor="secondary">${e.children}</Button>
<Button { ...args } themeColor="neutral">${e.children}</Button>
<Button { ...args } themeColor="info">${e.children}</Button>
<Button { ...args } themeColor="success">${e.children}</Button>
<Button { ...args } themeColor="warning">${e.children}</Button>
<Button { ...args } themeColor="error">${e.children}</Button>
`}}}},render(t){return r.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[r.jsx(o,{...t,themeColor:"primary",children:t.children}),r.jsx(o,{...t,themeColor:"secondary",children:t.children}),r.jsx(o,{...t,themeColor:"neutral",children:t.children}),r.jsx(o,{...t,themeColor:"info",children:t.children}),r.jsx(o,{...t,themeColor:"success",children:t.children}),r.jsx(o,{...t,themeColor:"warning",children:t.children}),r.jsx(o,{...t,themeColor:"error",children:t.children})]})}};var h,g,x;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`{
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
<Button {...args} prefix={<Account />}>\${args.children}</Button>
<Button {...args} suffix={<Search />}>\${args.children}</Button>
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
        <Button {...args} prefix={<SvgAccount />}>
          {args.children}
        </Button>
        <Button {...args} suffix={<SvgSearch />}>
          {args.children}
        </Button>
      </div>;
  }
}`,...(y=(B=s.parameters)==null?void 0:B.docs)==null?void 0:y.source}}};var C,S,v;a.parameters={...a.parameters,docs:{...(C=a.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(v=(S=a.parameters)==null?void 0:S.docs)==null?void 0:v.source}}};var j,b,$;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    variant: 'filled',
    prefix: <SvgAccount />,
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
}`,...($=(b=l.parameters)==null?void 0:b.docs)==null?void 0:$.source}}};const ot=["Default","Additional","Shape","Theme"];export{s as Additional,i as Default,a as Shape,l as Theme,ot as __namedExportsOrder,et as default};
