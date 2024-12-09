import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-DjADW0si.js";import"./button-DUOlbcAA.js";import"./checkbox-BbQOm0KL.js";import"./input-BWkpi1yj.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{S as i}from"./stepper-L0ihGmRm.js";import"./breadcrumb-BjVYaTeR.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-BAUrcos8.js";import"./image-CZs88QCg.js";import"./toast-4l9AxWm1.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./warning-DPjiZ-Sx.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const q={title:"Component/Slider",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},table:{category:"PROPS"}},max:{description:"最大值",table:{category:"PROPS"}},min:{description:"最小值",table:{category:"PROPS"}},label:{description:"顯示單位",table:{category:"PROPS"}},step:{description:"步進值",table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"值改變事件",action:"onChange",table:{category:"EVENTS"}}},parameters:{docs:{title:"Slider",description:{component:"滑桿組件的呈現及說明。"}}},args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",isDisabled:!1,onChange:d("onChange"),className:""}},o={name:"預設項目",args:{},render(e){return r.jsx(i,{...e})}},t={name:"主題色彩",args:{min:0,max:100,step:1,initValue:10,label:"%"},parameters:{docs:{source:{code:`
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
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const z=["Default","ThemeColor"];export{o as Default,t as ThemeColor,z as __namedExportsOrder,q as default};
