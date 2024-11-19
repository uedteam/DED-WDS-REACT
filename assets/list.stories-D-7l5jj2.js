import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{a as l}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import"./title-ExmiU3Le.js";import"./button-B0Y5b3Br.js";import"./checkbox-C5iBvt2s.js";import"./input-CTcMjmgF.js";import"./textarea-Cm7apI7i.js";import"./toggle-DMe-1TR9.js";import"./radio-DTBF53n7.js";import{L as n}from"./card-DXs-X6wU.js";import"./breadcrumb-B-3FAsN7.js";import"./avatar-oi_T3493.js";import"./progress-circle-D0LDKTfe.js";import"./progress-line-BVFq94bo.js";import"./styled-7_Fd9YFd.js";import"./menu-BeueVbLB.js";import{S as s}from"./account_circle-w7SSgQwb.js";import"./index-DJO9vBfz.js";import"./lodash-BawsgTSI.js";import"./check-CIei_J1J.js";import"./usePosition-CCkH-I2k.js";import"./visibility_off-DecKjkF2.js";import"./index-URyNLXnw.js";import"./offline-BimsrpRK.js";import"./arrow_down-DXGyryNM.js";const u=[{content:{label:"Option1",value:"option1",prefix:e.jsx(s,{})}},{content:{label:"Option2",value:"option2",prefix:e.jsx(s,{})}},{content:{label:"Option3",value:"option3",prefix:e.jsx(s,{})}}],z={title:"Component/List",component:n,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},isMenu:{description:"是否為選單",control:{type:"boolean"},table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:u,isMenu:!1,className:"",onSelect:l("onSelect")},parameters:{docs:{title:"清單",description:{component:"清單的呈現及說明。"}}}},r={name:"預設項目",args:{},parameters:{docs:{source:{code:`
<List {...args} />`}}},render(o){return e.jsx("div",{style:{width:"200px"},children:e.jsx(n,{...o})})}},t={name:"選單樣式",args:{},parameters:{docs:{source:{code:`
<List {...args} isMenu />`}}},render(o){return e.jsx("div",{style:{width:"200px"},children:e.jsx(n,{...o,isMenu:!0})})}};var a,i,p;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
    return <div style={{
      width: '200px'
    }}>
        <List {...args} />
      </div>;
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var c,m,d;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
    return <div style={{
      width: '200px'
    }}>
        <List {...args} isMenu />
      </div>;
  }
}`,...(d=(m=t.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const B=["Default","Menu"];export{r as Default,t as Menu,B as __namedExportsOrder,z as default};
