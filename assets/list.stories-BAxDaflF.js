import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-DjADW0si.js";import"./button-DUOlbcAA.js";import"./checkbox-BbQOm0KL.js";import"./input-BWkpi1yj.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{L as n}from"./stepper-FmjPsBKW.js";import"./breadcrumb-KvgkV4vO.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-BAUrcos8.js";import"./image-BUf_2wZ-.js";import"./toast-4l9AxWm1.js";import{A as s}from"./warning-DPjiZ-Sx.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const d=[{content:{label:"Option1",value:"option1",prefix:e.jsx(s,{})}},{content:{label:"Option2",value:"option2",href:"#",prefix:e.jsx(s,{})}},{content:{label:"Option3",value:"option3",href:"#",prefix:e.jsx(s,{})}}],k={title:"Component/List",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},hasOutline:{description:"是否有外框",control:{type:"boolean"},table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:d,hasOutline:!1,className:"",onSelect:u("onSelect")},parameters:{docs:{title:"List",description:{component:"清單組件的呈現及說明。"}}}},r={name:"預設項目",args:{},parameters:{docs:{source:{code:`
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
}`,...(l=(m=t.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};const q=["Default","Menu"];export{r as Default,t as Menu,q as __namedExportsOrder,k as default};
