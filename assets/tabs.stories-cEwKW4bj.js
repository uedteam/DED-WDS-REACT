import{j as t}from"./jsx-runtime-CkxqCPlQ.js";import{a as h}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{r as b}from"./index-DJO9vBfz.js";import"./title-ExmiU3Le.js";import{B as S}from"./button-mxF14Ue2.js";import"./checkbox-C5iBvt2s.js";import"./input-CTcMjmgF.js";import"./textarea-Cm7apI7i.js";import"./toggle-DMe-1TR9.js";import"./radio-DTBF53n7.js";import"./card-CHQIDuBO.js";import"./breadcrumb-B-3FAsN7.js";import"./avatar-CUlbHiRI.js";import"./progress-circle-D0LDKTfe.js";import"./progress-line-BVFq94bo.js";import"./styled-7_Fd9YFd.js";import"./menu-BeueVbLB.js";import"./lodash-BawsgTSI.js";import"./check-CIei_J1J.js";import"./usePosition-CCkH-I2k.js";import"./visibility_off-DecKjkF2.js";import"./account_circle-w7SSgQwb.js";import"./index-URyNLXnw.js";import"./offline-BimsrpRK.js";import"./arrow_down-DXGyryNM.js";const m=(e,a)=>a==="card"?`ded-tab-${a}-${e}`:`ded-tab-${e}`,y=(e,a)=>a==="card"?`ded-tab-${a}-${e}-active`:`ded-tab-${e}-active`;try{m.displayName="getThemeClass",m.__docgenInfo={description:"根據主題顏色和類型獲取對應的樣式類別。",displayName:"getThemeClass",props:{}}}catch{}try{y.displayName="getActiveClass",y.__docgenInfo={description:"根據主題顏色和類型返回活動類名。",displayName:"getActiveClass",props:{}}}catch{}const V=({themeColor:e="primary",type:a="default",title:s="",isActive:d,isDisabled:i=!1,className:p,onClick:u})=>t.jsx(S,{className:`ded-tab ${d?y(e,a):""} ${i?"ded-tab-disable":p||m(e,a)}`,variant:"text",onClick:u,children:s}),n=({themeColor:e="primary",dataSource:a,activeIndex:s=0,type:d="default",isDisabled:i=!1,className:p="",onClick:u})=>{const[v,f]=b.useState(0),T=(o,r)=>{f(r),o.currentTarget.blur(),u&&u(o)};return b.useEffect(()=>{f(s||0)},[s]),t.jsxs("div",{className:`ded-tabs-container ${p}`,children:[t.jsx("div",{className:"ded-tabs",children:a.map((o,r)=>t.jsx(V,{title:o.title,themeColor:e,type:d,isDisabled:i,isActive:r===v,onClick:N=>T(N,r)},r))}),t.jsx("div",{className:`ded-tab-content ${i&&"ded-tab-disable"}`,children:a[v].content})]})};try{n.displayName="Tabs",n.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"Tabs",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{ title: string; content: string; }[]"}},activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"card"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"tabs",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{ title: string; content: string; }[]"}},activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"card"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const q=[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],ae={title:"Component/Tabs",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2},table:{category:"PROPS"}},type:{description:"頁籤樣式",control:{type:"select",options:["default","card"]},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"}}},args:{themeColor:"primary",dataSource:q,activeIndex:0,type:"default",isDisabled:!1,className:"",onClick:h("onClick")},parameters:{docs:{title:"頁籤",description:{component:"頁籤組件的呈現及說明。"}}}},l={name:"預設項目",args:{},render(e){return t.jsx(n,{...e})}},c={name:"卡片式頁籤",args:{type:"card",activeIndex:1},render(e){return t.jsx(n,{...e})}};var g,_,C;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(C=(_=l.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var E,D,x;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '卡片式頁籤',
  args: {
    type: 'card',
    activeIndex: 1
  },
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(x=(D=c.parameters)==null?void 0:D.docs)==null?void 0:x.source}}};const te=["Default","PrimaryWithCard"];export{l as Default,c as PrimaryWithCard,te as __namedExportsOrder,ae as default};