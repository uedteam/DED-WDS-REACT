import{j as t}from"./jsx-runtime-DEdD30eg.js";import{a as g}from"./chunk-454WOBUV-CM0pFb8Z.js";import{r as a}from"./index-RYns6xqu.js";import{P,g as V}from"./breadcrumb-DrXwihe_.js";import{a as j}from"./toast-C2I02jxk.js";import"./title-C0o4P0Zd.js";import"./checkbox-Dx9j1Oee.js";import{I as C}from"./input-CsvIf6m6.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./radio-CMOPLxLt.js";import{L as O}from"./side-nav-B1mb2oWN.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./menu-DYIHftZB.js";import"./image-BUf_2wZ-.js";import"./status-indicator-BDww4a8h.js";import"./badge-vsbKzH_B.js";import"./layout-DbUmifqy.js";import"./v4-CQkTLCs1.js";import"./index-sbqOYYIm.js";import"./disable-circle-Qt9C8lli.js";import"./string-BqrfsRv8.js";import"./check-BnJBHFpS.js";import"./logout-Cs4pFqLv.js";import"./notification-NM2mg_B2.js";const s=({label:e="",className:y="",..._})=>{const[l,i]=a.useState(!1),r=a.useRef(null),{childrenSize:b,position:N}=j(r),[w,v]=a.useState(""),x=()=>{i(o=>!o)},h=o=>{v(o),i(!1)},d=o=>{var p;r.current&&!r.current.contains(o.target)&&!((p=document.getElementById("portal-root"))!=null&&p.contains(o.target))&&i(!1),o.stopPropagation()};return a.useEffect(()=>(document.addEventListener("mousedown",d),()=>{document.removeEventListener("mousedown",d)}),[]),t.jsxs(t.Fragment,{children:[e&&t.jsx("label",{className:"ded-input-label",children:e}),t.jsx("div",{id:"dropdownRef",className:"ded-dropdown",ref:r,onClick:x,children:t.jsx(C,{initValue:w,isOpen:l,type:"text",className:"ded-dropdown-input"})}),t.jsx(P,{children:l&&t.jsx("div",{style:V(N,b,"bottom","8px",!0),className:`ded-tooltip ${y}`,children:t.jsx(O,{..._,hasOutline:!0,onSelect:h})})})]})};try{s.displayName="Dropdown",s.__docgenInfo={description:"",displayName:"Dropdown",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"ItemProps[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{dropdown.displayName="dropdown",dropdown.__docgenInfo={description:"",displayName:"dropdown",props:{label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"ItemProps[]"}},onSelect:{defaultValue:null,description:"",name:"onSelect",required:!1,type:{name:"((value: string) => void)"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const c=e=>`dropdown-${e}`;try{c.displayName="getSizeClass",c.__docgenInfo={description:"",displayName:"getSizeClass",props:{}}}catch{}const S=[{content:{label:"Option1",value:"option1"}},{content:{label:"Option2",value:"option2"}},{content:{label:"Option3",value:"option3"}}],oe={title:"Component/Dropdown",component:s,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"},required:!0},label:{description:"標籤",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onSelect:{description:"選擇事件",table:{category:"EVENTS"}}},args:{dataSource:S,label:"Label",className:"",onSelect:g("onClick")},parameters:{docs:{title:"Dropdown",description:{component:"下拉選單組件的呈現及說明。"}}}},n={name:"預設項目",args:{dataSource:S,label:"Label",className:"",onSelect:g("onClick")},render(e){return t.jsx(s,{...e})}};var m,u,f;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(u=n.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const re=["Default"];export{n as Default,re as __namedExportsOrder,oe as default};
