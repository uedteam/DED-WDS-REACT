import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{a as d}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import"./title-ExmiU3Le.js";import"./button-B0Y5b3Br.js";import"./checkbox-C5iBvt2s.js";import"./input-CTcMjmgF.js";import"./textarea-Cm7apI7i.js";import"./toggle-DMe-1TR9.js";import"./radio-DTBF53n7.js";import{S as i}from"./card-DXs-X6wU.js";import"./breadcrumb-B-3FAsN7.js";import"./avatar-oi_T3493.js";import"./progress-circle-D0LDKTfe.js";import"./progress-line-BVFq94bo.js";import"./styled-7_Fd9YFd.js";import"./menu-BeueVbLB.js";import"./index-DJO9vBfz.js";import"./lodash-BawsgTSI.js";import"./check-CIei_J1J.js";import"./usePosition-CCkH-I2k.js";import"./visibility_off-DecKjkF2.js";import"./account_circle-w7SSgQwb.js";import"./index-URyNLXnw.js";import"./offline-BimsrpRK.js";import"./arrow_down-DXGyryNM.js";const A={title:"Component/Slider",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},table:{category:"PROPS"}},max:{description:"最大值",table:{category:"PROPS"}},min:{description:"最小值",table:{category:"PROPS"}},label:{description:"顯示單位",table:{category:"PROPS"}},step:{description:"步進值",table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"值改變事件",action:"onChange",table:{category:"EVENTS"}}},parameters:{docs:{title:"滑桿",description:{component:"滑桿的呈現及說明。"}}},args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",isDisabled:!1,onChange:d("onChange"),className:""}},o={name:"預設項目",args:{},render(e){return r.jsx(i,{...e})}},t={name:"主題色彩",args:{min:0,max:100,step:1,initValue:10,label:"%"},parameters:{docs:{source:{code:`
<Slider {...args} initValue={40} themeColor="primary" />
<Slider {...args} initValue={50} themeColor="secondary" />
<Slider {...args} initValue={60} themeColor="tertiary" />
<Slider {...args} initValue={70} themeColor="info" />
<Slider {...args} initValue={80} themeColor="success" />
<Slider {...args} initValue={90} themeColor="warning" />
<Slider {...args} initValue={100} themeColor="error" />
`}}},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,initValue:40,themeColor:"primary"}),r.jsx(i,{...e,initValue:50,themeColor:"secondary"}),r.jsx(i,{...e,initValue:60,themeColor:"tertiary"}),r.jsx(i,{...e,initValue:70,themeColor:"info"}),r.jsx(i,{...e,initValue:80,themeColor:"success"}),r.jsx(i,{...e,initValue:90,themeColor:"warning"}),r.jsx(i,{...e,initValue:100,themeColor:"error"})]})}};var a,l,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Slider {...args} />;
  }
}`,...(s=(l=o.parameters)==null?void 0:l.docs)==null?void 0:s.source}}};var n,m,c;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    min: 0,
    max: 100,
    step: 1,
    initValue: 10,
    label: '%'
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Slider {...args} initValue={40} themeColor="primary" />
<Slider {...args} initValue={50} themeColor="secondary" />
<Slider {...args} initValue={60} themeColor="tertiary" />
<Slider {...args} initValue={70} themeColor="info" />
<Slider {...args} initValue={80} themeColor="success" />
<Slider {...args} initValue={90} themeColor="warning" />
<Slider {...args} initValue={100} themeColor="error" />
\`
      }
    }
  },
  render(args) {
    return <div>
        <Slider {...args} initValue={40} themeColor="primary" />
        <Slider {...args} initValue={50} themeColor="secondary" />
        <Slider {...args} initValue={60} themeColor="tertiary" />
        <Slider {...args} initValue={70} themeColor="info" />
        <Slider {...args} initValue={80} themeColor="success" />
        <Slider {...args} initValue={90} themeColor="warning" />
        <Slider {...args} initValue={100} themeColor="error" />
      </div>;
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const B=["Default","ThemeColor"];export{o as Default,t as ThemeColor,B as __namedExportsOrder,A as default};
