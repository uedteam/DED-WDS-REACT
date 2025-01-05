import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import{L as a}from"./pagination-8C3RK4Ir.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-Dz0C5Qy_.js";import"./toast-NVykQKlx.js";import"./checkbox-CzjkG4_c.js";import"./progress-circle-DFbAcoo_.js";import"./progress-line-D0Av-zq9.js";import"./divider-ChKDBDeF.js";import"./image-CZs88QCg.js";import"./input-B8g9yR0n.js";import"./radio-CMOPLxLt.js";import"./textarea-CO8Z8fZG.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./menu-Bo8YyCpz.js";import"./status-indicator-BDww4a8h.js";import"./layout-ZjbFUAzr.js";import"./tag-C0k5YPMD.js";import"./grid-D9dEAlnk.js";import{b as s}from"./warning-tri-DTbCof3x.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./notification-NM2mg_B2.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-CMP3yJkT.js";const d=[{content:{label:"Option1",value:"option1",prefix:r.jsx(s,{})}},{content:{label:"Option2",value:"option2",href:"#",prefix:r.jsx(s,{})}},{content:{label:"Option3",value:"option3",href:"#",prefix:r.jsx(s,{})}}],I={title:"Component/List",component:a,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},hasOutline:{description:"是否有外框",control:{type:"boolean"},table:{category:"PROPS"}},hasDivider:{description:"是否有分隔線",table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:d,hasOutline:!1,hasDivider:!1,className:"",onSelect:u("onSelect")},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},t={name:"預設項目",args:{},parameters:{docs:{source:{code:`
<List {...args} />`}}},render(o){return r.jsx(a,{...o})}},e={name:"選單樣式",args:{},parameters:{docs:{source:{code:`
<List {...args} hasOutline />`}}},render(o){return r.jsx(a,{...o,hasOutline:!0})}};var n,i,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<List {...args} />\`
      }
    }
  },
  render(args) {
    return <List {...args} />;
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,l;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '選單樣式',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<List {...args} hasOutline />\`
      }
    }
  },
  render(args) {
    return <List {...args} hasOutline />;
  }
}`,...(l=(m=e.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const J=["Default","Menu"];export{t as Default,e as Menu,J as __namedExportsOrder,I as default};
