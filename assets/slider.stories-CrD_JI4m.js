import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-CD8xfGAz.js";import{S as i}from"./styled-D2W0Iq1I.js";import"./checkbox-gHzG2Us7.js";import"./textarea-CO8Z8fZG.js";import"./toggle-BVqMcImG.js";import"./radio-BhGOQQ7m.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./image-CZs88QCg.js";import"./status-indicator-DcO8m1Ar.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./disable-circle-Qt9C8lli.js";import"./index-sbqOYYIm.js";import"./string-bv4IUxbB.js";import"./offline-Ddz6ifNG.js";import"./check-BnJBHFpS.js";const N={title:"Component/Slider",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},max:{description:"最大值",table:{category:"PROPS"}},min:{description:"最小值",table:{category:"PROPS"}},label:{description:"顯示單位",table:{category:"PROPS"}},step:{description:"步進值",table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"值改變事件",action:"onChange",table:{category:"EVENTS"}}},parameters:{docs:{title:"Slider",description:{component:"滑桿組件的呈現及說明。"}}},args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",isDisabled:!1,onChange:d("onChange"),className:""}},o={name:"預設項目",args:{},render(e){return r.jsx(i,{...e})}},t={name:"主題色彩",args:{min:0,max:100,step:1,initValue:10,label:"%"},parameters:{docs:{source:{code:`
<Slider {...args} initValue={40} themeColor="primary" />
<Slider {...args} initValue={50} themeColor="secondary" />
<Slider {...args} initValue={60} themeColor="neutral" />
<Slider {...args} initValue={70} themeColor="info" />
<Slider {...args} initValue={80} themeColor="success" />
<Slider {...args} initValue={90} themeColor="warning" />
<Slider {...args} initValue={100} themeColor="error" />
`}}},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,initValue:40,themeColor:"primary"}),r.jsx(i,{...e,initValue:50,themeColor:"secondary"}),r.jsx(i,{...e,initValue:60,themeColor:"neutral"}),r.jsx(i,{...e,initValue:70,themeColor:"info"}),r.jsx(i,{...e,initValue:80,themeColor:"success"}),r.jsx(i,{...e,initValue:90,themeColor:"warning"}),r.jsx(i,{...e,initValue:100,themeColor:"error"})]})}};var a,l,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
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
<Slider {...args} initValue={60} themeColor="neutral" />
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
        <Slider {...args} initValue={60} themeColor="neutral" />
        <Slider {...args} initValue={70} themeColor="info" />
        <Slider {...args} initValue={80} themeColor="success" />
        <Slider {...args} initValue={90} themeColor="warning" />
        <Slider {...args} initValue={100} themeColor="error" />
      </div>;
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};const _=["Default","ThemeColor"];export{o as Default,t as ThemeColor,_ as __namedExportsOrder,N as default};
