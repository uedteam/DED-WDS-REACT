import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as t}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-4ftnBFsc.js";import"./toast-BDmi8d-n.js";import"./checkbox-Dx9j1Oee.js";import"./input-Wz6-Kkce.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Co0kfaDY.js";import"./radio-CMOPLxLt.js";import{e as o}from"./pagination-BfL1yUOW.js";import"./breadcrumb-CZHunVWp.js";import"./progress-circle-BjLPNahV.js";import"./progress-line-DkImR0lX.js";import"./styled-7_Fd9YFd.js";import"./menu-DZIJquFJ.js";import"./image-BUf_2wZ-.js";import"./status-indicator-BREqtsMD.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./disable-circle-Qt9C8lli.js";import"./string-BqrfsRv8.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./navigate-arrow-6VIhmLdI.js";const w={title:"Component/Search",component:o,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",isDisabled:!1,className:"",onClick:t("onClick"),onChange:t("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(e){return r.jsx(o,{...e})}},a={name:"搜尋尺寸",args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(o,{...e,size:"small"}),r.jsx(o,{...e,size:"medium"}),r.jsx(o,{...e,size:"large"})]})}};var i,m,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  }
}`,...(n=(m=s.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var p,c,l;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '搜尋尺寸',
  args: {},
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '10px'
    }}>
        <Search {...args} size="small" />
        <Search {...args} size="medium" />
        <Search {...args} size="large" />
      </div>;
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const A=["Default","Size"];export{s as Default,a as Size,A as __namedExportsOrder,w as default};
