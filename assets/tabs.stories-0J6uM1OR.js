import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as I}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r as _}from"./index-RYns6xqu.js";import"./title-DjADW0si.js";import{B as A}from"./button-Dsxg2YTC.js";import"./checkbox-BbQOm0KL.js";import"./input-BvJ6s79F.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import"./stepper-wRoqOJLb.js";import"./breadcrumb-DICHy6aG.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-B-J-4BxZ.js";import"./image-BUf_2wZ-.js";import"./toast-Z_BAYy8G.js";import{c as C}from"./warning-DPjiZ-Sx.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const f=(e,a)=>a==="card"?`ded-tab-${a}-${e}`:`ded-tab-${e}`,v=(e,a)=>a==="card"?`ded-tab-${a}-${e}-active`:`ded-tab-${e}-active`;try{f.displayName="getThemeClass",f.__docgenInfo={description:"根據主題顏色和類型獲取對應的樣式類別。",displayName:"getThemeClass",props:{}}}catch{}try{v.displayName="getActiveClass",v.__docgenInfo={description:"根據主題顏色和類型返回活動類名。",displayName:"getActiveClass",props:{}}}catch{}const y=({themeColor:e="primary",type:a="default",title:u="",prefix:i="",isActive:p,isDisabled:s=!1,className:m="",onClick:l})=>t.jsxs(A,{className:`ded-tab ${p?v(e,a):""} ${s?"ded-tab-disable":m||f(e,a)}`,variant:"text",onClick:l,children:[i&&t.jsx("span",{className:"ded-icon",children:i}),t.jsx("span",{children:u})]});try{y.displayName="TabItem",y.__docgenInfo={description:"TabItem 組件代表標籤組中的單個標籤項目。",displayName:"TabItem",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"card"'}]}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},isActive:{defaultValue:null,description:"",name:"isActive",required:!0,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"(event: MouseEvent<HTMLButtonElement, MouseEvent>) => void"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const n=({themeColor:e="primary",dataSource:a,activeIndex:u=0,type:i="default",prefix:p="",isDisabled:s=!1,className:m="",onClick:l})=>{const[b,g]=_.useState(0),T=(o,r)=>{g(r),o.currentTarget.blur(),l&&l(o)};return _.useEffect(()=>{g(u||0)},[u]),t.jsxs("div",{className:`ded-tabs-container ${m}`,children:[t.jsx("div",{className:"ded-tabs",children:a.map((o,r)=>t.jsx(y,{title:o.title,themeColor:e,type:i,prefix:p,isDisabled:s,isActive:r===b,onClick:h=>T(h,r)},r))}),t.jsx("div",{className:`ded-tab-content ${s&&"ded-tab-disable"}`,children:a[b].content})]})};try{n.displayName="Tabs",n.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"Tabs",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{ title: string; content: string; }[]"}},activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"card"'}]}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}try{tabs.displayName="tabs",tabs.__docgenInfo={description:"渲染帶有相關內容的標籤組。",displayName:"tabs",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{ title: string; content: string; }[]"}},activeIndex:{defaultValue:{value:"0"},description:"",name:"activeIndex",required:!1,type:{name:"number"}},type:{defaultValue:{value:"default"},description:"",name:"type",required:!1,type:{name:"enum",value:[{value:'"default"'},{value:'"card"'}]}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"((event: MouseEvent<HTMLButtonElement, MouseEvent>) => void)"}}}}}catch{}const P=[{title:"Tab 1",content:"Content 1"},{title:"Tab 2",content:"Content 2"},{title:"Tab 3",content:"Content 3"}],ae={title:"Component/Tabs",component:n,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},activeIndex:{description:"活動頁籤索引",control:{type:"number",min:0,max:2},table:{category:"PROPS"}},type:{description:"頁籤樣式",control:{type:"select",options:["default","card"]},table:{category:"PROPS"}},prefix:{description:"前綴元素",options:["none","ArrowDownIcon"],mapping:{none:null,ArrowDownIcon:t.jsx(C,{})},table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{description:"點擊事件",action:"clicked",table:{category:"EVENTS"}}},args:{themeColor:"primary",dataSource:P,activeIndex:0,type:"default",prefix:t.jsx(C,{}),isDisabled:!1,className:"",onClick:I("onClick")},parameters:{docs:{title:"頁籤",description:{component:"頁籤組件的呈現及說明。"}}}},d={name:"預設項目",args:{},render(e){return t.jsx(n,{...e})}},c={name:"卡片式頁籤",args:{type:"card",activeIndex:1},render(e){return t.jsx(n,{...e})}};var E,x,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(D=(x=d.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var N,V,q;c.parameters={...c.parameters,docs:{...(N=c.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '卡片式頁籤',
  args: {
    type: 'card',
    activeIndex: 1
  },
  render(args) {
    return <Tabs {...args} />;
  }
}`,...(q=(V=c.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};const te=["Default","PrimaryWithCard"];export{d as Default,c as PrimaryWithCard,te as __namedExportsOrder,ae as default};
