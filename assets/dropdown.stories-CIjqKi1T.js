import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as v}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r as a}from"./index-RYns6xqu.js";import{P as h,g as V}from"./breadcrumb-DereJZat.js";import{a as j}from"./toast-D1eZVrBe.js";import"./title-BPnjcUZo.js";import"./checkbox-gHzG2Us7.js";import{I as C}from"./input-CP6ykSnO.js";import"./textarea-CO8Z8fZG.js";import"./toggle-BVqMcImG.js";import"./radio-BhGOQQ7m.js";import{L as I}from"./stepper-O_BItCtc.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-Citl8FfN.js";import"./image-BUf_2wZ-.js";import"./status-indicator-DcO8m1Ar.js";import"./v4-CQkTLCs1.js";import"./index-sbqOYYIm.js";import"./disable-circle-Qt9C8lli.js";import"./string-bv4IUxbB.js";import"./lodash-CcdATr5u.js";import"./check-BnJBHFpS.js";import"./offline-Ddz6ifNG.js";const s=({label:e="",className:g="",..._})=>{const[l,i]=a.useState(!1),r=a.useRef(null),{childrenSize:y,position:S}=j(r),[w,N]=a.useState(""),b=()=>{i(o=>!o)},x=o=>{N(o),i(!1)},d=o=>{var p;r.current&&!r.current.contains(o.target)&&!((p=document.getElementById("portal-root"))!=null&&p.contains(o.target))&&i(!1),o.stopPropagation()};return a.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}),[]),t.jsxs(t.Fragment,{children:[e&&t.jsx("label",{className:"ded-input-label",children:e}),t.jsx("div",{id:"dropdownRef",className:"ded-dropdown",ref:r,onClick:b,children:t.jsx(C,{initValue:w,isOpen:l,type:"text",className:"ded-dropdown-input"})}),t.jsx(h,{children:l&&t.jsx("div",{style:V(S,y,"bottom","8px",!0),className:`ded-tooltip ${g}`,children:t.jsx(I,{..._,hasOutline:!0,onSelect:x})})})]})};try{s.displayName="Dropdown",s.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"ItemProps[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{dropdown.displayName="dropdown",dropdown.__docgenInfo={description:"",displayName:"dropdown",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"ItemProps[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const c=e=>`dropdown-${e}`;try{c.displayName="getSizeClass",c.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const te={title:"Component/Dropdown",component:s,tags:["autodocs"],argTypes:{label:{description:"標籤"},className:{description:"客製化樣式",control:{type:"text"}},onSelect:{description:"選擇事件"}},parameters:{docs:{title:"Dropdown",description:{component:"下拉選單組件的呈現及說明。"}}}},q=[{content:{label:"Option1",value:"option1"}},{content:{label:"Option2",value:"option2"}},{content:{label:"Option3",value:"option3"}}],n={name:"預設項目",args:{dataSource:q,label:"Label",className:"",onSelect:v("onClick")},render(e){return t.jsx(s,{...e})}};var m,u,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
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
