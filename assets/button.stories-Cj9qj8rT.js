import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{a as c}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import"./title-ExmiU3Le.js";import{B as e}from"./button-B0Y5b3Br.js";import"./checkbox-C5iBvt2s.js";import"./input-CTcMjmgF.js";import"./textarea-Cm7apI7i.js";import"./toggle-DMe-1TR9.js";import"./radio-DTBF53n7.js";import"./card-DXs-X6wU.js";import"./breadcrumb-B-3FAsN7.js";import"./avatar-oi_T3493.js";import"./progress-circle-D0LDKTfe.js";import"./progress-line-BVFq94bo.js";import"./styled-7_Fd9YFd.js";import"./menu-BeueVbLB.js";import{S as s}from"./account_circle-w7SSgQwb.js";import"./index-DJO9vBfz.js";import{S as d,a as u}from"./visibility_off-DecKjkF2.js";import{S as l}from"./search-Kxlaxofw.js";import"./lodash-BawsgTSI.js";import"./check-CIei_J1J.js";import"./usePosition-CCkH-I2k.js";import"./index-URyNLXnw.js";import"./offline-BimsrpRK.js";import"./arrow_down-DXGyryNM.js";const X={title:"Component/Button",component:e,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{options:["primary","secondary","tertiary","success","warning","error","info"],type:"select"},table:{category:"PROPS"}},variant:{description:"按鈕樣式",control:{options:["contained","outlined","text"],type:"select"},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:t.jsx(s,{}),Search:t.jsx(l,{}),Visibility:t.jsx(d,{}),VisibilityOff:t.jsx(u,{})},table:{category:"PROPS"}},suffix:{description:"後置元素",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:t.jsx(s,{}),Search:t.jsx(l,{}),Visibility:t.jsx(d,{}),VisibilityOff:t.jsx(u,{})},table:{category:"PROPS"}},size:{description:"按鈕尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},width:{description:"按鈕寬度",control:{options:["fit","fluid"],type:"select"},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},children:{control:{},description:"按鈕內容",options:["標題按鈕","客製化按鈕"],table:{category:"SLOTS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"},required:!0}},args:{themeColor:"primary",variant:"contained",prefix:null,suffix:null,size:"medium",width:"fit",isDisabled:!1,className:"",children:"Button",onClick:c("onClick")},parameters:{docs:{title:"按鈕",description:{component:"按鈕組件的呈現及說明。"}}}},n={name:"預設項目",args:{},render(r){return t.jsx(e,{...r,children:r.children})}},o={name:"附加元素",args:{variant:"outlined",onClick:()=>c("onClick")("點擊事件"),className:""},parameters:{docs:{source:{code:`
<Button {...args} prefix={<AccountIcon />}>{args.children}</Button>
<Button {...args} suffix={<SearchIcon />}>{args.children}</Button>
`}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(e,{...r,prefix:t.jsx(s,{}),children:r.children}),t.jsx(e,{...r,suffix:t.jsx(l,{}),children:r.children})]})}},i={name:"按鈕樣式",args:{variant:"outlined",suffix:null,onClick:()=>c("onClick")("點擊事件"),className:""},parameters:{docs:{source:{code:`
<Button {...args} variant="contained">{args.children}</Button>
<Button {...args} variant="outlined">{args.children}</Button>
<Button {...args} variant="text">{args.children}</Button>
`}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(e,{...r,variant:"contained",children:r.children}),t.jsx(e,{...r,variant:"outlined",children:r.children}),t.jsx(e,{...r,variant:"text",children:r.children})]})}},a={name:"主題色彩",args:{variant:"outlined",prefix:t.jsx(s,{}),suffix:null,onClick:()=>c("onClick")("點擊事件"),className:""},parameters:{docs:{source:{code:`
<Button {...args} themeColor="primary">{args.children}</Button>
<Button {...args} themeColor="secondary">{args.children}</Button>
<Button {...args} themeColor="tertiary">{args.children}</Button>
<Button {...args} themeColor="info">{args.children}</Button>
<Button {...args} themeColor="success">{args.children}</Button>
<Button {...args} themeColor="warning">{args.children}</Button>
<Button {...args} themeColor="error">{args.children}</Button>
`}}},render(r){return t.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[t.jsx(e,{...r,themeColor:"primary",children:r.children}),t.jsx(e,{...r,themeColor:"secondary",children:r.children}),t.jsx(e,{...r,themeColor:"tertiary",children:r.children}),t.jsx(e,{...r,themeColor:"info",children:r.children}),t.jsx(e,{...r,themeColor:"success",children:r.children}),t.jsx(e,{...r,themeColor:"warning",children:r.children}),t.jsx(e,{...r,themeColor:"error",children:r.children})]})}};var p,m,h;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Button {...args}>{args.children}</Button>;
  }
}`,...(h=(m=n.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};var g,B,x;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '附加元素',
  args: {
    variant: 'outlined',
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Button {...args} prefix={<AccountIcon />}>{args.children}</Button>
<Button {...args} suffix={<SearchIcon />}>{args.children}</Button>
\`
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
}`,...(x=(B=o.parameters)==null?void 0:B.docs)==null?void 0:x.source}}};var f,y,C;i.parameters={...i.parameters,docs:{...(f=i.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '按鈕樣式',
  args: {
    variant: 'outlined',
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Button {...args} variant="contained">{args.children}</Button>
<Button {...args} variant="outlined">{args.children}</Button>
<Button {...args} variant="text">{args.children}</Button>
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Button {...args} variant="contained">
          {args.children}
        </Button>
        <Button {...args} variant="outlined">
          {args.children}
        </Button>
        <Button {...args} variant="text">
          {args.children}
        </Button>
      </div>;
  }
}`,...(C=(y=i.parameters)==null?void 0:y.docs)==null?void 0:C.source}}};var v,S,j;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    variant: 'outlined',
    prefix: <AccountIcon />,
    suffix: null,
    onClick: () => action('onClick')('點擊事件'),
    className: ''
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Button {...args} themeColor="primary">{args.children}</Button>
<Button {...args} themeColor="secondary">{args.children}</Button>
<Button {...args} themeColor="tertiary">{args.children}</Button>
<Button {...args} themeColor="info">{args.children}</Button>
<Button {...args} themeColor="success">{args.children}</Button>
<Button {...args} themeColor="warning">{args.children}</Button>
<Button {...args} themeColor="error">{args.children}</Button>
\`
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
}`,...(j=(S=a.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};const Y=["Default","Additional","Shape","Theme"];export{o as Additional,n as Default,i as Shape,a as Theme,Y as __namedExportsOrder,X as default};
