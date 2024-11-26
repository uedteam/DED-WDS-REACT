import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import"./title-BhgMHOD0.js";import"./button-BKIinu3y.js";import"./checkbox-BBuHs8A-.js";import"./input-DU8LjNuW.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{L as n}from"./avatar-B814xG44.js";import"./breadcrumb-BsaxLK5_.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-D9nrBq-4.js";import"./image-jQGlZ2RK.js";import{A as s}from"./auo-TMZ-BSoc.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./check-BnJBHFpS.js";import"./usePosition-CMmoxCjh.js";import"./offline-Ddz6ifNG.js";import"./index-sbqOYYIm.js";import"./arrow_down-DA-sWbvp.js";const l=[{content:{label:"Option1",value:"option1",prefix:e.jsx(s,{})}},{content:{label:"Option2",value:"option2",href:"#",prefix:e.jsx(s,{})}},{content:{label:"Option3",value:"option3",href:"#",prefix:e.jsx(s,{})}}],q={title:"Component/List",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},isMenu:{description:"是否為選單",control:{type:"boolean"},table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:l,isMenu:!1,className:"",onSelect:d("onSelect")},parameters:{docs:{title:"清單",description:{component:"清單的呈現及說明。"}}}},r={name:"預設項目",args:{},parameters:{docs:{source:{code:`
<List {...args} />`}}},render(o){return e.jsx(n,{...o})}},t={name:"選單樣式",args:{},parameters:{docs:{source:{code:`
<List {...args} isMenu />`}}},render(o){return e.jsx(n,{...o,isMenu:!0})}};var a,i,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,u;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '選單樣式',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<List {...args} isMenu />\`
      }
    }
  },
  render(args) {
    return <List {...args} isMenu />;
  }
}`,...(u=(m=t.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const w=["Default","Menu"];export{r as Default,t as Menu,w as __namedExportsOrder,q as default};
