import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-JGunjryD.js";import"./toast-CmXXeNzu.js";import"./checkbox-Dx9j1Oee.js";import"./input-D7RBjL62.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./radio-CMOPLxLt.js";import{e as o}from"./side-nav-CJyveVm4.js";import"./breadcrumb-CBoOAU01.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./menu-D0Gwih_D.js";import"./image-CZs88QCg.js";import"./status-indicator-CulQZKO6.js";import"./badge-vsbKzH_B.js";import"./layout-DbUmifqy.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./disable-circle-Qt9C8lli.js";import"./string-BqrfsRv8.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./logout-Cs4pFqLv.js";import"./notification-NM2mg_B2.js";const B={title:"Component/Search",component:o,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",isDisabled:!1,className:"",onClick:a("onClick"),onChange:a("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return r.jsx(o,{...e})}},s={name:"搜尋尺寸",args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(o,{...e,size:"small"}),r.jsx(o,{...e,size:"medium"}),r.jsx(o,{...e,size:"large"})]})}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var n,c,l;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const F=["Default","Size"];export{t as Default,s as Size,F as __namedExportsOrder,B as default};
