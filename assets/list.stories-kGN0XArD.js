import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-BXSGVt1-.js";import"./button-DfIRA5go.js";import"./checkbox-B_3nDFKe.js";import"./input-E65caAlU.js";import"./textarea-CO8Z8fZG.js";import"./toggle-BVqMcImG.js";import"./radio-BhGOQQ7m.js";import{L as n}from"./stepper-D83y0WKf.js";import"./breadcrumb-CRU4qe_R.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-3h4p8gNa.js";import"./image-CZs88QCg.js";import"./toast-BgQ9vZis.js";import{A as s}from"./warning-DPjiZ-Sx.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./string-bv4IUxbB.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const d=[{content:{label:"Option1",value:"option1",prefix:e.jsx(s,{})}},{content:{label:"Option2",value:"option2",href:"#",prefix:e.jsx(s,{})}},{content:{label:"Option3",value:"option3",href:"#",prefix:e.jsx(s,{})}}],q={title:"Component/List",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},hasOutline:{description:"是否有外框",control:{type:"boolean"},table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:d,hasOutline:!1,className:"",onSelect:u("onSelect")},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},r={name:"預設項目",args:{},parameters:{docs:{source:{code:`
<List {...args} />`}}},render(o){return e.jsx(n,{...o})}},t={name:"選單樣式",args:{},parameters:{docs:{source:{code:`
<List {...args} hasOutline />`}}},render(o){return e.jsx(n,{...o,hasOutline:!0})}};var a,i,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const w=["Default","Menu"];export{r as Default,t as Menu,w as __namedExportsOrder,q as default};
