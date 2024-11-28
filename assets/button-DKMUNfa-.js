import{j as u}from"./jsx-runtime-DEdD30eg.js";import{g as t}from"./input-BzeWqZWL.js";const i=(e,l)=>`ded-button-${e} ded-button-${e}-${l}`,n=e=>{if(e==="contained")return"ded-button-container-disable";if(e==="outlined")return"ded-button-outline-disable";if(e==="text")return"ded-button-text-disable"};try{i.displayName="getThemeClass",i.__docgenInfo={description:"根據按鈕的變體和主題顏色返回按鈕的主題類。",displayName:"getThemeClass",props:{}}}catch{}try{n.displayName="getDisableClass",n.__docgenInfo={description:"根據按鈕的變體返回禁用類。",displayName:"getDisableClass",props:{}}}catch{}const o=({variant:e,themeColor:l="primary",isDisabled:m=!1,prefix:r,suffix:d,size:a="medium",width:c="fit",className:p="",children:s,onClick:f})=>u.jsxs("button",{className:`ded-button 
        ${c==="fit"?"ded-button-fit":"ded-button-fluid"}
        ${t("ded-component",a)}
        ${m?n(e):i(e,l)} ${p}`,onClick:f,children:[r&&u.jsx("div",{className:t("ded-icon",a),children:r}),s&&u.jsx("div",{className:t("ded-text",a),children:s}),d&&u.jsx("div",{className:t("ded-icon",a),children:d})]});try{o.displayName="Button",o.__docgenInfo={description:"按鈕元件",displayName:"Button",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},width:{defaultValue:{value:"fit"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"fluid"'},{value:'"fit"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}try{button.displayName="button",button.__docgenInfo={description:"按鈕元件",displayName:"button",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"contained"'},{value:'"outlined"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},width:{defaultValue:{value:"fit"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"fluid"'},{value:'"fit"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}export{o as B};