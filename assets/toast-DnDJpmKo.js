import{r as o}from"./index-RYns6xqu.js";import{j as a}from"./jsx-runtime-DEdD30eg.js";import{C as y}from"./warning-CMZEnU_O.js";const u=e=>{const[t,r]=o.useState({width:0,height:0}),[s,n]=o.useState({top:0,left:0});return o.useEffect(()=>{const i=()=>{r({width:e.current?e.current.offsetWidth:0,height:e.current?e.current.offsetHeight:0}),n({top:e.current?e.current.getBoundingClientRect().top:0,left:e.current?e.current.getBoundingClientRect().left:0})};return i(),window.addEventListener("resize",i),()=>{window.removeEventListener("resize",i)}},[e]),{childrenSize:t,position:s}};try{u.displayName="usePosition",u.__docgenInfo={description:"自訂 Hook，用於計算 DOM 元素的大小和位置。",displayName:"usePosition",props:{}}}catch{}const d=({isOpen:e,title:t,content:r,onOpen:s,onClose:n})=>{const[i,l]=o.useState({isOpen:e,title:t,content:r}),p=o.useCallback(()=>{l({isOpen:!0,title:t,content:r}),s&&s()},[r,t]),m=o.useCallback(()=>{l(f=>({...f,isOpen:!1})),n&&n()},[]);return{...i,openDialog:p,closeDialog:m}};try{d.displayName="useDialog",d.__docgenInfo={description:"",displayName:"useDialog",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},title:{defaultValue:null,description:"",name:"title",required:!0,type:{name:"ReactNode"}},content:{defaultValue:null,description:"",name:"content",required:!0,type:{name:"ReactNode"}},onOpen:{defaultValue:null,description:"",name:"onOpen",required:!1,type:{name:"(() => void)"}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const c=({themeColor:e="primary",onClose:t,title:r="Title",content:s="Content",prefix:n="",duration:i=1e3,className:l=""})=>a.jsxs("div",{className:`ded-toast ded-toast-border-${e} ${l}`,children:[a.jsx("button",{className:"ded-close-button",children:a.jsx(y,{width:20,height:20,onClick:t})}),a.jsxs("div",{className:"ded-message",children:[a.jsx("span",{className:`ded-icon-wrapper ded-toast-${e}`,children:n&&a.jsx("div",{children:n})}),a.jsx("span",{children:r})]}),a.jsx("p",{className:"ded-description",children:s})]});try{c.displayName="Toast",c.__docgenInfo={description:"",displayName:"Toast",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:{value:"Title"},description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:{value:"Content"},description:"",name:"content",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},duration:{defaultValue:{value:"1000"},description:"",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{toast.displayName="toast",toast.__docgenInfo={description:"",displayName:"toast",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},onClose:{defaultValue:null,description:"",name:"onClose",required:!1,type:{name:"(() => void)"}},title:{defaultValue:{value:"Title"},description:"",name:"title",required:!1,type:{name:"string"}},content:{defaultValue:{value:"Content"},description:"",name:"content",required:!1,type:{name:"string"}},prefix:{defaultValue:{value:""},description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},duration:{defaultValue:{value:"1000"},description:"",name:"duration",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{c as T,u as a,d as u};
