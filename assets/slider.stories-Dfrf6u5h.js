import{j as s}from"./jsx-runtime-DEdD30eg.js";import{a as S}from"./chunk-454WOBUV-CM0pFb8Z.js";import{b as t}from"./pagination-BcWBc1p5.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-BeC0CIbY.js";import"./toast-DIhnouBr.js";import"./checkbox-BBF5yrDs.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./divider-ChKDBDeF.js";import"./image-CZs88QCg.js";import"./input-DoUPnDdK.js";import"./radio-CMOPLxLt.js";import"./textarea-CO8Z8fZG.js";import"./title-JGunjryD.js";import"./toggle-Ck5Sa1oo.js";import"./menu-Burl5-s8.js";import"./status-indicator-BDww4a8h.js";import"./layout-DbUmifqy.js";import"./tag-zODciKoh.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./disable-circle-np6-bHDN.js";import"./string-BqrfsRv8.js";import"./logout-Cs4pFqLv.js";import"./notification-NM2mg_B2.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";const K={title:"Component/Slider",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},max:{description:"最大值",table:{category:"PROPS"}},min:{description:"最小值",table:{category:"PROPS"}},label:{description:"顯示單位",table:{category:"PROPS"}},step:{description:"步進值",table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},isShowRange:{description:"是否顯示範圍",table:{category:"PROPS"}},isShowCurrValue:{description:"是否顯示目前值",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"值改變事件",action:"onChange",table:{category:"EVENTS"}}},parameters:{docs:{title:"Slider",description:{component:"滑桿組件的呈現及說明。"}}},args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",isShowRange:!0,isShowCurrValue:!0,isDisabled:!1,onChange:S("onChange"),className:""}},e={name:"預設項目",args:{},render(r){return s.jsx(t,{...r})}},a={name:"顯示目前值",args:{isShowRange:!1},render(r){return s.jsx(t,{...r,isShowCurrValue:!0})}},o={name:"顯示範圍",args:{isShowCurrValue:!1},render(r){return s.jsx(t,{...r,isShowRange:!0})}};var n,i,p;e.parameters={...e.parameters,docs:{...(n=e.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Slider {...args} />;
  }
}`,...(p=(i=e.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '顯示目前值',
  args: {
    isShowRange: false
  },
  render(args) {
    return <Slider {...args} isShowCurrValue />;
  }
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var d,g,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '顯示範圍',
  args: {
    isShowCurrValue: false
  },
  render(args) {
    return <Slider {...args} isShowRange />;
  }
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const L=["Default","Current","Range"];export{a as Current,e as Default,o as Range,L as __namedExportsOrder,K as default};
