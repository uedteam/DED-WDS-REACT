import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import{e as o}from"./tooltip-fQFxuJKL.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-BFQrIIyJ.js";import"./toast-BvpkVSjc.js";import"./checkbox-wrczPlMV.js";import"./progress-circle-xnhIhzfk.js";import"./progress-line-DsOpskWp.js";import"./divider-ChKDBDeF.js";import"./grid-D9dEAlnk.js";import"./image-BUf_2wZ-.js";import"./input-CJsjmN5Q.js";import"./layout-ZjbFUAzr.js";import"./menu-ClbAJXuK.js";import"./radio-CMOPLxLt.js";import"./status-indicator-CulQZKO6.js";import"./tag-Code_Ef5.js";import"./textarea-CO8Z8fZG.js";import"./title-Cw6Qriwq.js";import"./toggle-Ck5Sa1oo.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./warning-tri-Y1-2BlEi.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./notification-NM2mg_B2.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const I={title:"Component/Search",component:o,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",isDisabled:!1,className:"",onClick:a("onClick"),onChange:a("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(r){return e.jsx(o,{...r})}},s={name:"搜尋尺寸",args:{},render(r){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[e.jsx(o,{...r,size:"small"}),e.jsx(o,{...r,size:"medium"}),e.jsx(o,{...r,size:"large"})]})}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=s.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const J=["Default","Size"];export{t as Default,s as Size,J as __namedExportsOrder,I as default};
