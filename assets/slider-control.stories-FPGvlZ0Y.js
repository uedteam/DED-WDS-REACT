import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{a}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import"./title-ExmiU3Le.js";import"./button-B0Y5b3Br.js";import"./checkbox-C5iBvt2s.js";import"./input-CTcMjmgF.js";import"./textarea-Cm7apI7i.js";import"./toggle-DMe-1TR9.js";import"./radio-DTBF53n7.js";import{a as o}from"./card-DXs-X6wU.js";import"./breadcrumb-B-3FAsN7.js";import"./avatar-oi_T3493.js";import"./progress-circle-D0LDKTfe.js";import"./progress-line-BVFq94bo.js";import"./styled-7_Fd9YFd.js";import"./menu-BeueVbLB.js";import"./index-DJO9vBfz.js";import{S as n,a as l}from"./plus-BECr7-9E.js";import"./lodash-BawsgTSI.js";import"./check-CIei_J1J.js";import"./usePosition-CCkH-I2k.js";import"./visibility_off-DecKjkF2.js";import"./account_circle-w7SSgQwb.js";import"./index-URyNLXnw.js";import"./offline-BimsrpRK.js";import"./arrow_down-DXGyryNM.js";const B={title:"Component/Slider-Control",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},table:{category:"PROPS"}},min:{description:"最小值",table:{category:"PROPS"}},max:{description:"最大值",table:{category:"PROPS"}},step:{description:"步進值",table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},label:{description:"單位",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},prefix:{description:"前置元素",options:["None","Increase","Decrease"],mapping:{None:null,Increase:e.jsx(n,{width:32,height:32}),Decrease:e.jsx(l,{width:32,height:32})},table:{category:"PROPS"}},suffix:{description:"後置元素",options:["None","Increase","Decrease"],mapping:{None:null,Increase:e.jsx(n,{width:32,height:32}),Decrease:e.jsx(l,{width:32,height:32})},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",action:"onClick",table:{category:"EVENTS"}},onChange:{description:"變更事件",table:{category:"EVENTS"}}},parameters:{docs:{title:"按鈕滑桿",description:{component:"按鈕滑桿輸入的呈現及說明。"}}},args:{themeColor:"primary",min:-100,max:100,step:1,initValue:50,label:"℃",prefix:"Decrease",suffix:"Increase",isDisabled:!1,className:"",onClick:a("onClick"),onChange:a("onChange")}},t={name:"預設項目",args:{},render(r){return e.jsx(o,{...r})}},i={name:"主題色彩",args:{prefix:"Decrease",suffix:"Increase",min:0,max:100,step:1,label:"%",initValue:50,onClick:a("onClick"),onChange:a("onChange")},parameters:{docs:{source:{code:`
<SliderControl {...args} initValue={40} themeColor="primary" />
<SliderControl {...args} initValue={50} themeColor="secondary" />
<SliderControl {...args} initValue={60} themeColor="tertiary" />
<SliderControl {...args} initValue={70} themeColor="success" />
<SliderControl {...args} initValue={80} themeColor="info" />
<SliderControl {...args} initValue={90} themeColor="warning" />
<SliderControl {...args} initValue={100} themeColor="error" />
`}}},render(r){return e.jsxs("div",{children:[e.jsx(o,{...r,initValue:40,themeColor:"primary"}),e.jsx(o,{...r,initValue:50,themeColor:"secondary"}),e.jsx(o,{...r,initValue:60,themeColor:"tertiary"}),e.jsx(o,{...r,initValue:70,themeColor:"success"}),e.jsx(o,{...r,initValue:80,themeColor:"info"}),e.jsx(o,{...r,initValue:90,themeColor:"warning"}),e.jsx(o,{...r,initValue:100,themeColor:"error"})]})}};var s,m,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <SliderControl {...args} />;
  }
}`,...(c=(m=t.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var p,C,d;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    prefix: 'Decrease',
    suffix: 'Increase',
    min: 0,
    max: 100,
    step: 1,
    label: '%',
    initValue: 50,
    onClick: action('onClick'),
    onChange: action('onChange')
  },
  parameters: {
    docs: {
      source: {
        code: \`
<SliderControl {...args} initValue={40} themeColor="primary" />
<SliderControl {...args} initValue={50} themeColor="secondary" />
<SliderControl {...args} initValue={60} themeColor="tertiary" />
<SliderControl {...args} initValue={70} themeColor="success" />
<SliderControl {...args} initValue={80} themeColor="info" />
<SliderControl {...args} initValue={90} themeColor="warning" />
<SliderControl {...args} initValue={100} themeColor="error" />
\`
      }
    }
  },
  render(args) {
    return <div>
        <SliderControl {...args} initValue={40} themeColor="primary" />
        <SliderControl {...args} initValue={50} themeColor="secondary" />
        <SliderControl {...args} initValue={60} themeColor="tertiary" />
        <SliderControl {...args} initValue={70} themeColor="success" />
        <SliderControl {...args} initValue={80} themeColor="info" />
        <SliderControl {...args} initValue={90} themeColor="warning" />
        <SliderControl {...args} initValue={100} themeColor="error" />
      </div>;
  }
}`,...(d=(C=i.parameters)==null?void 0:C.docs)==null?void 0:d.source}}};const F=["Default","ThemeColor"];export{t as Default,i as ThemeColor,F as __namedExportsOrder,B as default};
