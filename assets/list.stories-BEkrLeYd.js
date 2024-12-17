import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-BPnjcUZo.js";import"./toast-D1eZVrBe.js";import"./checkbox-gHzG2Us7.js";import"./input-CP6ykSnO.js";import"./textarea-CO8Z8fZG.js";import"./toggle-BVqMcImG.js";import"./radio-BhGOQQ7m.js";import{L as a}from"./stepper-C7cvACgg.js";import"./breadcrumb-DereJZat.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-Citl8FfN.js";import"./image-CZs88QCg.js";import"./status-indicator-DcO8m1Ar.js";import{a as s}from"./disable-circle-Qt9C8lli.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./string-bv4IUxbB.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const d=[{content:{label:"Option1",value:"option1",prefix:r.jsx(s,{})}},{content:{label:"Option2",value:"option2",href:"#",prefix:r.jsx(s,{})}},{content:{label:"Option3",value:"option3",href:"#",prefix:r.jsx(s,{})}}],w={title:"Component/List",component:a,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},hasOutline:{description:"是否有外框",control:{type:"boolean"},table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:d,hasOutline:!1,className:"",onSelect:u("onSelect")},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},e={name:"預設項目",args:{},parameters:{docs:{source:{code:`
<List {...args} />`}}},render(o){return r.jsx(a,{...o})}},t={name:"選單樣式",args:{},parameters:{docs:{source:{code:`
<List {...args} hasOutline />`}}},render(o){return r.jsx(a,{...o,hasOutline:!0})}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
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
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,l;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const z=["Default","Menu"];export{e as Default,t as Menu,z as __namedExportsOrder,w as default};
