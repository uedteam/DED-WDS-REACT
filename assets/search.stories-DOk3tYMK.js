import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-B6FjmO7v.js";import"./toast-BEzfIbOE.js";import"./checkbox-gHzG2Us7.js";import"./input-Cqvs4Uxt.js";import"./textarea-CO8Z8fZG.js";import"./toggle-B_GFje5b.js";import"./radio-BhGOQQ7m.js";import{d as o}from"./styled-n7UHJW-h.js";import"./breadcrumb-b1HMjbI-.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-DboPxrNc.js";import"./image-CZs88QCg.js";import"./status-indicator-C0euK5S5.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./disable-circle-Qt9C8lli.js";import"./string-ECkTvc_B.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const A={title:"Component/Search",component:o,tags:["autodocs"],argTypes:{size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",table:{category:"EVENTS"}},onChange:{description:"改變事件",table:{category:"EVENTS"}}},args:{size:"medium",isDisabled:!1,className:"",onClick:a("onClick"),onChange:a("onChange")},parameters:{docs:{title:"搜尋",description:{component:"搜尋組件的呈現及說明。"}}}},s={name:"預設項目",args:{},render(e){return r.jsx(o,{...e})}},t={name:"搜尋尺寸",args:{},render(e){return r.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"10px"},children:[r.jsx(o,{...e,size:"small"}),r.jsx(o,{...e,size:"medium"}),r.jsx(o,{...e,size:"large"})]})}};var i,m,n;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Search {...args} />;
  }
}`,...(n=(m=s.parameters)==null?void 0:m.docs)==null?void 0:n.source}}};var p,c,l;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const B=["Default","Size"];export{s as Default,t as Size,B as __namedExportsOrder,A as default};
