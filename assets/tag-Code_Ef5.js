import{j as a}from"./jsx-runtime-DEdD30eg.js";import{f as m}from"./warning-tri-Y1-2BlEi.js";import"./index-RYns6xqu.js";const r=e=>`ded-tag-${e}-disabled`,s=(e,l)=>`ded-tag-${e} ded-tag-${e}-${l}`;try{r.displayName="getDisableClass",r.__docgenInfo={description:"根據按鈕的變體返回禁用類。",displayName:"getDisableClass",props:{}}}catch{}try{s.displayName="getThemeClass",s.__docgenInfo={description:"根據按鈕的變體和主題顏色返回按鈕的主題類。",displayName:"getThemeClass",props:{}}}catch{}const n=({themeColor:e="primary",variable:l="filled",label:t,href:i="",prefix:u,closable:o=!0,isDisabled:d=!1,className:c="",onClose:p=()=>({})})=>a.jsxs("div",{className:`ded-tag 
        ${d?r(l):s(l,e)} 
        ${c}`,children:[i?a.jsxs("a",{href:i,className:"ded-tag-text",children:[u&&a.jsx("span",{className:"ded-tag-icon",children:u}),t]}):a.jsxs("div",{className:"ded-tag-text",children:[u&&a.jsx("span",{className:"ded-tag-icon",children:u}),t]}),o&&a.jsx(m,{onClick:p,className:`ded-tag-close 
            ${d?"ded-tag-close-disabled":""}`})]});try{n.displayName="Tag",n.__docgenInfo={description:"標籤元件",displayName:"Tag",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},variable:{defaultValue:{value:"filled"},description:"",name:"variable",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"ghost"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"() => ({})"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{tag.displayName="tag",tag.__docgenInfo={description:"標籤元件",displayName:"tag",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},variable:{defaultValue:{value:"filled"},description:"",name:"variable",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"ghost"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"() => ({})"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}export{n as T};