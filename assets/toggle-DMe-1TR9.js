import{j as s}from"./jsx-runtime-CkxqCPlQ.js";import{r as c}from"./index-DJO9vBfz.js";const t=e=>`ded-toggle-${e}`,r=e=>e?"ded-toggle-on":"ded-toggle-off",o=e=>e?"ded-toggle-label-on":"ded-toggle-label-off",u=e=>e?"ded-toggle-thumb-on":"ded-toggle-thumb-off";try{t.displayName="getThemeClass",t.__docgenInfo={description:"取得主題類別。",displayName:"getThemeClass",props:{}}}catch{}try{r.displayName="getPositionClass",r.__docgenInfo={description:"根據傳入的狀態值，返回對應的位置類別。",displayName:"getPositionClass",props:{}}}catch{}try{o.displayName="getLabelPositionClass",o.__docgenInfo={description:"取得標籤位置的 CSS 類別。",displayName:"getLabelPositionClass",props:{}}}catch{}try{u.displayName="getThumbPositionClass",u.__docgenInfo={description:"取得滑桿位置的 CSS 類別。",displayName:"getThumbPositionClass",props:{}}}catch{}const p=({themeColor:e="primary",checkLabel:g="on",unCheckLabel:m="off",isChecked:l=!1,isDisabled:n=!1,className:f="",onChange:i})=>{const[a,d]=c.useState(l);return c.useEffect(()=>{d(l)},[l]),s.jsxs("div",{className:`ded-toggle ${t(e)} ${r(a)} ${f} ${n?"ded-toggle-disable":""}`,onClick:y=>{d(_=>!_),i&&i(!a)},children:[s.jsx("div",{className:`ded-toggle-thumb ${u(a)}`}),s.jsx("label",{className:`ded-toggle-label ${o(a)} ${n?"toggle-label-disable":""}`,children:a?g:m})]})};try{p.displayName="Toggle",p.__docgenInfo={description:"切換元件",displayName:"Toggle",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},checkLabel:{defaultValue:{value:"on"},description:"",name:"checkLabel",required:!1,type:{name:"string"}},unCheckLabel:{defaultValue:{value:"off"},description:"",name:"unCheckLabel",required:!1,type:{name:"string"}},isChecked:{defaultValue:{value:"false"},description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}}}catch{}try{toggle.displayName="toggle",toggle.__docgenInfo={description:"切換元件",displayName:"toggle",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},checkLabel:{defaultValue:{value:"on"},description:"",name:"checkLabel",required:!1,type:{name:"string"}},unCheckLabel:{defaultValue:{value:"off"},description:"",name:"unCheckLabel",required:!1,type:{name:"string"}},isChecked:{defaultValue:{value:"false"},description:"",name:"isChecked",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"((checked: boolean) => void)"}}}}}catch{}export{p as T};
