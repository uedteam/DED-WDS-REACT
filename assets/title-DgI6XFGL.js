import{j as n}from"./jsx-runtime-DEdD30eg.js";import{l as i}from"./lodash-CcdATr5u.js";const a=e=>`ded-title-${e}`,u=e=>i.isEmpty(e)?`ded-title-level-${e}`:"";try{a.displayName="getThemeClass",a.__docgenInfo={description:"根據提供的主題顏色，返回標題的 CSS 類名。",displayName:"getThemeClass",props:{}}}catch{}try{u.displayName="getLevelClass",u.__docgenInfo={description:"根據提供的標題級別，返回標題的 CSS 類名。",displayName:"getLevelClass",props:{}}}catch{}const r=({themeColor:e="none",level:t=0,className:l="",children:s})=>n.jsx("div",{className:`ded-title ${l} ${e!=="none"&&a(e)} ${u(t)} ${l}`,children:s});try{r.displayName="Title",r.__docgenInfo={description:"Title 組件。",displayName:"Title",props:{themeColor:{defaultValue:{value:"none"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"none"'}]}},level:{defaultValue:{value:"0"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{title.displayName="title",title.__docgenInfo={description:"Title 組件。",displayName:"title",props:{themeColor:{defaultValue:{value:"none"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'},{value:'"none"'}]}},level:{defaultValue:{value:"0"},description:"",name:"level",required:!1,type:{name:"enum",value:[{value:"0"},{value:"1"},{value:"2"},{value:"3"},{value:"4"},{value:"5"},{value:"6"}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{r as T};
