import{j as s}from"./jsx-runtime-DEdD30eg.js";import{a as S}from"./chunk-454WOBUV-CM0pFb8Z.js";import{b as t}from"./tooltip-DAbv8qdb.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-CjMUm_Kh.js";import"./toast-CLZ2ghKy.js";import"./checkbox-wrczPlMV.js";import"./progress-circle-xnhIhzfk.js";import"./progress-line-DsOpskWp.js";import"./divider-ChKDBDeF.js";import"./grid-D9dEAlnk.js";import"./image-CZs88QCg.js";import"./input-CipjVc3A.js";import"./layout-ZjbFUAzr.js";import"./menu-DAvbBviu.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-Code_Ef5.js";import"./textarea-CO8Z8fZG.js";import"./title-Cw6Qriwq.js";import"./toggle-Ck5Sa1oo.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./warning-tri-Y1-2BlEi.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./notification-NM2mg_B2.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const M={title:"Component/Slider",component:t,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},max:{description:"最大值",table:{category:"PROPS"}},min:{description:"最小值",table:{category:"PROPS"}},label:{description:"顯示單位",table:{category:"PROPS"}},step:{description:"步進值",table:{category:"PROPS"}},initValue:{description:"初始值",table:{category:"PROPS"}},isShowRange:{description:"是否顯示範圍",table:{category:"PROPS"}},isShowCurrValue:{description:"是否顯示目前值",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"值改變事件",action:"onChange",table:{category:"EVENTS"}}},parameters:{docs:{title:"Slider",description:{component:"滑桿組件的呈現及說明。"}}},args:{themeColor:"primary",min:-100,max:100,step:1,initValue:0,label:"℃",isShowRange:!0,isShowCurrValue:!0,isDisabled:!1,onChange:S("onChange"),className:""}},e={name:"預設項目",args:{},render(r){return s.jsx(t,{...r})}},a={name:"顯示目前值",args:{isShowRange:!1},render(r){return s.jsx(t,{...r,isShowCurrValue:!0})}},o={name:"顯示範圍",args:{isShowCurrValue:!1},render(r){return s.jsx(t,{...r,isShowRange:!0})}};var i,n,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Slider {...args} />;
  }
}`,...(p=(n=e.parameters)==null?void 0:n.docs)==null?void 0:p.source}}};var m,c,l;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const Q=["Default","Current","Range"];export{a as Current,e as Default,o as Range,Q as __namedExportsOrder,M as default};
