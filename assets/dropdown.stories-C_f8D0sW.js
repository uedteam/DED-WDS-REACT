import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{r as a}from"./index-RYns6xqu.js";import{P as v,g as V}from"./breadcrumb-CT4pz3w0.js";import{a as j}from"./useDialog-D987K1Gx.js";import"./title-DjADW0si.js";import"./button-DKMUNfa-.js";import"./checkbox-RCY9NRZS.js";import{I as C}from"./input-BzeWqZWL.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{L as I}from"./accordion-BCQ0jFbk.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-zBjolxxR.js";import"./image-CZs88QCg.js";import"./auo-TMZ-BSoc.js";import{S as q}from"./arrow_down-DA-sWbvp.js";import"./index-sbqOYYIm.js";import"./lodash-CcdATr5u.js";import"./check-BnJBHFpS.js";import"./offline-Ddz6ifNG.js";const s=({label:t="",className:g="",..._})=>{const[l,i]=a.useState(!1),r=a.useRef(null),{childrenSize:y,position:S}=j(r),[w,N]=a.useState(""),x=()=>{i(o=>!o)},b=o=>{N(o),i(!1)},d=o=>{var p;r.current&&!r.current.contains(o.target)&&!((p=document.getElementById("portal-root"))!=null&&p.contains(o.target))&&i(!1),o.stopPropagation()};return a.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}),[]),e.jsxs(e.Fragment,{children:[t&&e.jsx("label",{className:"ded-input-label",children:t}),e.jsxs("div",{id:"dropdownRef",className:"ded-dropdown",ref:r,onClick:x,children:[e.jsx(C,{initValue:w,type:"text",className:"ded-dropdown-input"}),e.jsx(q,{width:20,height:20,className:l?"ded-dropdown-open":"ded-dropdown-close"})]}),e.jsx(v,{children:l&&e.jsx("div",{style:V(S,y,"bottom","8px",!0),className:`ded-tooltip ${g}`,children:e.jsx(I,{..._,hasOutline:!0,onSelect:b})})})]})};try{s.displayName="Dropdown",s.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"ItemProps[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{dropdown.displayName="dropdown",dropdown.__docgenInfo={description:"",displayName:"dropdown",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"ItemProps[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const c=t=>`dropdown-${t}`;try{c.displayName="getSizeClass",c.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const te={title:"Component/Dropdown",component:s,tags:["autodocs"],argTypes:{label:{description:"標籤"},className:{description:"客製化樣式",control:{type:"text"}},onSelect:{description:"選擇事件"}},parameters:{docs:{title:"搜尋",description:{component:"組件的呈現及說明。"}}}},D=[{content:{label:"選項一",value:"option1"}},{content:{label:"選項二",value:"option2"}},{content:{label:"選項三",value:"option3"}}],n={name:"搜尋輸入框",args:{dataSource:D,label:"Label",className:"",onSelect:h("onClick")},render(t){return e.jsx(s,{...t})}};var m,u,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    dataSource: options,
    label: 'Label',
    className: '',
    onSelect: action('onClick')
  },
  render(args) {
    return <Dropdown {...args} />;
  }
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const oe=["Default"];export{n as Default,oe as __namedExportsOrder,te as default};
