import{j as a}from"./jsx-runtime-CkxqCPlQ.js";import{a as h}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import"./title-ExmiU3Le.js";import{B as v}from"./button-B0Y5b3Br.js";import"./checkbox-C5iBvt2s.js";import"./input-CTcMjmgF.js";import"./textarea-Cm7apI7i.js";import"./toggle-DMe-1TR9.js";import"./radio-DTBF53n7.js";import"./card-DXs-X6wU.js";import"./breadcrumb-B-3FAsN7.js";import"./avatar-oi_T3493.js";import"./progress-circle-D0LDKTfe.js";import"./progress-line-BVFq94bo.js";import"./styled-7_Fd9YFd.js";import"./menu-BeueVbLB.js";import"./index-DJO9vBfz.js";import{b as T,S as _,a as x}from"./visibility_off-DecKjkF2.js";import{S as N}from"./account_circle-w7SSgQwb.js";import{S}from"./search-Kxlaxofw.js";import"./lodash-BawsgTSI.js";import"./check-CIei_J1J.js";import"./usePosition-CCkH-I2k.js";import"./index-URyNLXnw.js";import"./offline-BimsrpRK.js";import"./arrow_down-DXGyryNM.js";const t=e=>`tag-${e}-disabled`,i=(e,s)=>`ded-tag-${e} ded-tag-${e}-${s}`;try{t.displayName="getDisableClass",t.__docgenInfo={description:"根據按鈕的變體返回禁用類。",displayName:"getDisableClass",props:{}}}catch{}try{i.displayName="getThemeClass",i.__docgenInfo={description:"根據按鈕的變體和主題顏色返回按鈕的主題類。",displayName:"getThemeClass",props:{}}}catch{}const r=({themeColor:e="primary",label:s,prefix:n,closable:b=!0,isDisabled:c=!1,className:f,onClose:C=()=>({})})=>a.jsxs("div",{className:`ded-tag ${f} ${c?t("outlined"):i("contained",e)}`,children:[n&&a.jsx("div",{className:"ded-tag-icon",children:n}),a.jsx("span",{className:"ded-tag-text",children:s}),b&&a.jsx(v,{variant:"text",onClick:C,children:a.jsx(T,{className:`ded-tag-close ${c?"ded-tag-close-disabled":""}`})})]});try{r.displayName="Tag",r.__docgenInfo={description:"",displayName:"Tag",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"() => ({})"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{tag.displayName="tag",tag.__docgenInfo={description:"",displayName:"tag",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"() => ({})"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const Y={title:"Component/Tag",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","tertiary","success","warning","error","info"],control:{type:"select"},table:{category:"PROPS"}},label:{description:"標籤文字",table:{category:"PROPS"}},prefix:{description:"圖示",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:a.jsx(N,{}),Search:a.jsx(S,{}),Visibility:a.jsx(_,{}),VisibilityOff:a.jsx(x,{})},table:{category:"PROPS"}},closable:{description:"是否可關閉",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",action:"closed",table:{category:"EVENTS"}}},args:{themeColor:"primary",label:"Tag",prefix:"None",closable:!0,isDisabled:!1,className:"",onClose:h("closed")},parameters:{docs:{title:"標籤",description:{component:"標籤的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return a.jsx(r,{...e})}},l={name:"主題色彩",args:{},parameters:{docs:{source:{code:`
<Tag {...args} themeColor="primary" label="primary" />
<Tag {...args} themeColor="secondary" label="secondary" />
<Tag {...args} themeColor="tertiary" label="tertiary" />
<Tag {...args} themeColor="info" label="info" />
<Tag {...args} themeColor="success" label="success" />
<Tag {...args} themeColor="warning" label="warning" />
<Tag {...args} themeColor="error" label="error" />
`}}},render(e){return a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx(r,{...e,themeColor:"primary",label:"Primary"}),a.jsx(r,{...e,themeColor:"secondary",label:"Secondary"}),a.jsx(r,{...e,themeColor:"tertiary",label:"Tertiary"}),a.jsx(r,{...e,themeColor:"info",label:"Info"}),a.jsx(r,{...e,themeColor:"success",label:"Success"}),a.jsx(r,{...e,themeColor:"warning",label:"Warning"}),a.jsx(r,{...e,themeColor:"error",label:"Error"})]})}};var m,u,d;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Tag {...args} />;
  }
}`,...(d=(u=o.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};var p,g,y;l.parameters={...l.parameters,docs:{...(p=l.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
<Tag {...args} themeColor="primary" label="primary" />
<Tag {...args} themeColor="secondary" label="secondary" />
<Tag {...args} themeColor="tertiary" label="tertiary" />
<Tag {...args} themeColor="info" label="info" />
<Tag {...args} themeColor="success" label="success" />
<Tag {...args} themeColor="warning" label="warning" />
<Tag {...args} themeColor="error" label="error" />
\`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Tag {...args} themeColor="primary" label="Primary" />
        <Tag {...args} themeColor="secondary" label="Secondary" />
        <Tag {...args} themeColor="tertiary" label="Tertiary" />
        <Tag {...args} themeColor="info" label="Info" />
        <Tag {...args} themeColor="success" label="Success" />
        <Tag {...args} themeColor="warning" label="Warning" />
        <Tag {...args} themeColor="error" label="Error" />
      </div>;
  }
}`,...(y=(g=l.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};const Z=["Default","ThemeColor"];export{o as Default,l as ThemeColor,Z as __namedExportsOrder,Y as default};
