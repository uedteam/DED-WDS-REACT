import{r as d}from"./index-RYns6xqu.js";import{j as u}from"./jsx-runtime-DEdD30eg.js";import{C as N}from"./disable-circle-Qt9C8lli.js";import{S as q}from"./status-indicator-C0euK5S5.js";import{g as i}from"./string-ECkTvc_B.js";const f=(e,a)=>`ded-button-${e} ded-button-${e}-${a}`,_=e=>{if(e==="filled")return"ded-button-filled-disabled";if(e==="ghost")return"ded-button-ghost-disabled";if(e==="text")return"ded-button-text-disabled"};try{f.displayName="getThemeClass",f.__docgenInfo={description:"根據按鈕的變體和主題顏色返回按鈕的主題類。",displayName:"getThemeClass",props:{}}}catch{}try{_.displayName="getDisableClass",_.__docgenInfo={description:"根據按鈕的變體返回禁用類。",displayName:"getDisableClass",props:{}}}catch{}const v=({variant:e,themeColor:a="primary",isDisabled:n=!1,prefix:l,suffix:r,size:t="medium",width:s="fit",borderWidth:p,radius:m,className:c="",children:o,onClick:b})=>u.jsxs("button",{className:`ded-button 
        ${o?s==="fit"?"ded-button-fit":"ded-button-fluid":""}
        ${i("ded-component",t)}
        ${n?i("ded-button",`${e}-disabled`):f(e,a)} 
        ${i("ded-button-border-width",p||"")}
        ${i("ded-button-radius",m||"")}
        ${o?"":"ded-button-only-icon"}
        ${c}`,onClick:y=>{y.currentTarget.blur(),b(y)},children:[l&&u.jsx("div",{className:i("ded-icon",t),children:l}),o&&u.jsx("div",{className:i("ded-text",t),children:o}),r&&u.jsx("div",{className:i("ded-icon",t),children:r})]});try{v.displayName="Button",v.__docgenInfo={description:"按鈕元件",displayName:"Button",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"filled"'},{value:'"ghost"'},{value:'"soft"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},width:{defaultValue:{value:"fit"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"fluid"'},{value:'"fit"'}]}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1px"'},{value:'"2px"'},{value:'"3px"'},{value:'"4px"'},{value:'"5px"'}]}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"2px"'},{value:'"4px"'},{value:'"8px"'},{value:'"12px"'},{value:'"16px"'},{value:'"32px"'},{value:'"full"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}try{button.displayName="button",button.__docgenInfo={description:"按鈕元件",displayName:"button",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},variant:{defaultValue:null,description:"",name:"variant",required:!0,type:{name:"enum",value:[{value:'"text"'},{value:'"filled"'},{value:'"ghost"'},{value:'"soft"'}]}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},suffix:{defaultValue:null,description:"",name:"suffix",required:!1,type:{name:"ReactNode"}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},width:{defaultValue:{value:"fit"},description:"",name:"width",required:!1,type:{name:"enum",value:[{value:'"fluid"'},{value:'"fit"'}]}},borderWidth:{defaultValue:null,description:"",name:"borderWidth",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"1px"'},{value:'"2px"'},{value:'"3px"'},{value:'"4px"'},{value:'"5px"'}]}},radius:{defaultValue:null,description:"",name:"radius",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"2px"'},{value:'"4px"'},{value:'"8px"'},{value:'"12px"'},{value:'"16px"'},{value:'"32px"'},{value:'"full"'}]}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!0,type:{name:"MouseEventHandler<HTMLButtonElement>"}}}}}catch{}const g=e=>{const[a,n]=d.useState({width:0,height:0}),[l,r]=d.useState({top:0,left:0});return d.useEffect(()=>{const t=()=>{n({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),r({top:e.current?e.current.getBoundingClientRect().top:0,left:e.current?e.current.getBoundingClientRect().left:0})};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}},[e]),{childrenSize:a,position:l}};try{g.displayName="usePosition",g.__docgenInfo={description:"自訂 Hook，用於計算 DOM 元素的大小和位置。",displayName:"usePosition",props:{}}}catch{}const x=({isOpen:e,header:a,content:n,onOpen:l,onClose:r})=>{const[t,s]=d.useState({isOpen:e,header:a,content:n}),p=d.useCallback(()=>{s({isOpen:!0,header:a,content:n}),l&&l()},[n,a]),m=d.useCallback(()=>{s(c=>({...c,isOpen:!1})),r&&r()},[]);return{...t,openDialog:p,closeDialog:m}};try{x.displayName="useDialog",x.__docgenInfo={description:"",displayName:"useDialog",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},header:{defaultValue:null,description:"",name:"header",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const C=e=>e==="small"?"input-group-small":e==="large"?"input-group-large":"input-group-medium";try{C.displayName="getSizeClass",C.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const h=({themeColor:e="primary",onClose:a=()=>({}),title:n="Title",content:l="Content",prefix:r="",duration:t=1e3,className:s=""})=>u.jsxs("div",{className:`ded-toast ${s}`,children:[u.jsx(v,{variant:"text",onClick:a,themeColor:"neutral",className:"ded-close-button",children:u.jsx(N,{width:20,height:20,onClick:a})}),u.jsx("div",{className:"ded-message",children:u.jsx(q,{variant:"text",themeColor:e,prefix:r,children:"Title"})}),u.jsx("p",{className:"ded-description",children:l})]});try{h.displayName="Toast",h.__docgenInfo={description:"",displayName:"Toast",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},onClose:{defaultValue:{value:"() => ({})"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:{value:"Title"},description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:{value:"Content"},description:"",name:"content",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},duration:{defaultValue:{value:"1000"},description:"",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{toast.displayName="toast",toast.__docgenInfo={description:"",displayName:"toast",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},onClose:{defaultValue:{value:"() => ({})"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:{value:"Title"},description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:{value:"Content"},description:"",name:"content",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},duration:{defaultValue:{value:"1000"},description:"",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{v as B,h as T,g as a,x as u};
