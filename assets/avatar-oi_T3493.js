import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DJO9vBfz.js";import{S as m,a as o,b as v,c as p}from"./offline-BimsrpRK.js";const i=(a,e)=>`${a}-${e}`,f=(a,e)=>`${a}-${e}`,y=(a,e)=>`${a}-${e}`,g=(a,e)=>{let l=0,t="";return a.split("").forEach(u=>{/^[A-Z]+$/.test(u)&&l<2&&(l++,t=t+u)}),l<2?a.slice(0,e).toUpperCase():t},n=(a,e)=>{const l=i("ded-avatar-icon",a),t=f("ded-avatar-icon",e),r={online:m,idle:o,busy:v,offline:p}[e];return r?s.jsx(r,{className:`ded-avatar-icon ${l} ${t}`}):null},d=({shape:a="circle",size:e="medium",status:l="none",src:t="",alt:u="無圖顯示",userName:r,className:c=""})=>s.jsxs("div",{className:`ded-avatar-container 
        ${i("ded-avatar-container",e)} ${c}`,children:[s.jsx("div",{className:`ded-avatar ${y("ded-avatar",a)}`,children:t?s.jsx("img",{className:"ded-avatar-pic",src:t,alt:u}):s.jsx("span",{className:`ded-avatar-text ${i("ded-text",e)}`,children:g(r,2)})}),l==="online"&&n(e,"online"),l==="idle"&&n(e,"idle"),l==="busy"&&n(e,"busy"),l==="offline"&&n(e,"offline")]});try{d.displayName="Avatar",d.__docgenInfo={description:"Avatar 組件",displayName:"Avatar",props:{shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xsmall"'}]}},status:{defaultValue:{value:"none"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"online"'},{value:'"busy"'},{value:'"idle"'},{value:'"offline"'}]}},alt:{defaultValue:{value:"無圖顯示"},description:"",name:"alt",required:!1,type:{name:"string"}},src:{defaultValue:{value:""},description:"",name:"src",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{avatar.displayName="avatar",avatar.__docgenInfo={description:"Avatar 組件",displayName:"avatar",props:{shape:{defaultValue:{value:"circle"},description:"",name:"shape",required:!1,type:{name:"enum",value:[{value:'"circle"'},{value:'"square"'}]}},size:{defaultValue:{value:"medium"},description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'},{value:'"xsmall"'}]}},status:{defaultValue:{value:"none"},description:"",name:"status",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"online"'},{value:'"busy"'},{value:'"idle"'},{value:'"offline"'}]}},alt:{defaultValue:{value:"無圖顯示"},description:"",name:"alt",required:!1,type:{name:"string"}},src:{defaultValue:{value:""},description:"",name:"src",required:!1,type:{name:"string"}},userName:{defaultValue:null,description:"",name:"userName",required:!0,type:{name:"string"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{d as A};
