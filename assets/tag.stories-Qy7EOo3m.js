import{j as a}from"./jsx-runtime-DEdD30eg.js";import{a as A}from"./chunk-454WOBUV-CM0pFb8Z.js";import{C as D,A as j,S as I,V as E,a as O}from"./warning-DPjiZ-Sx.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";const c=e=>`ded-tag-${e}-disabled`,u=(e,s)=>`ded-tag-${e} ded-tag-${e}-${s}`;try{c.displayName="getDisableClass",c.__docgenInfo={description:"根據按鈕的變體返回禁用類。",displayName:"getDisableClass",props:{}}}catch{}try{u.displayName="getThemeClass",u.__docgenInfo={description:"根據按鈕的變體和主題顏色返回按鈕的主題類。",displayName:"getThemeClass",props:{}}}catch{}const r=({themeColor:e="primary",variable:s="filled",label:d,href:m="",prefix:l,closable:S=!0,isDisabled:p=!1,className:P="",onClose:q=()=>({})})=>a.jsxs("div",{className:`ded-tag ${p?c(s):u(s,e)} ${P}`,children:[m?a.jsxs("a",{href:m,className:"ded-tag-text",children:[l&&a.jsx("div",{className:"ded-tag-icon",children:l}),d]}):a.jsxs("span",{className:"ded-tag-text",children:[l&&a.jsx("div",{className:"ded-tag-icon",children:l}),d]}),S&&a.jsx(D,{onClick:q,className:`ded-tag-close ${p?"ded-tag-close-disabled":""}`})]});try{r.displayName="Tag",r.__docgenInfo={description:"",displayName:"Tag",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},variable:{defaultValue:{value:"filled"},description:"",name:"variable",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"ghost"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"() => ({})"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}try{tag.displayName="tag",tag.__docgenInfo={description:"",displayName:"tag",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"neutral"'},{value:'"primary"'},{value:'"secondary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},variable:{defaultValue:{value:"filled"},description:"",name:"variable",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"ghost"'}]}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"string"}},href:{defaultValue:{value:""},description:"",name:"href",required:!1,type:{name:"string"}},prefix:{defaultValue:null,description:"",name:"prefix",required:!1,type:{name:"ReactNode"}},closable:{defaultValue:{value:"true"},description:"",name:"closable",required:!1,type:{name:"boolean"}},isDisabled:{defaultValue:{value:"false"},description:"",name:"isDisabled",required:!1,type:{name:"boolean"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}},onClose:{defaultValue:{value:"() => ({})"},description:"",name:"onClose",required:!1,type:{name:"(() => void)"}}}}}catch{}const F={title:"Component/Tag",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["neutral","primary","secondary","info","success","warning","error"],control:{type:"select"},table:{category:"PROPS"}},variable:{description:"變數",options:["filled","ghost"],control:{type:"select"},table:{category:"PROPS"}},label:{description:"標籤文字",table:{category:"PROPS"}},href:{description:"超連結",table:{category:"PROPS"}},prefix:{description:"圖示",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:a.jsx(j,{}),Search:a.jsx(I,{}),Visibility:a.jsx(E,{}),VisibilityOff:a.jsx(O,{})},table:{category:"PROPS"}},closable:{description:"是否可關閉",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",action:"closed",table:{category:"EVENTS"}}},args:{themeColor:"neutral",variable:"filled",label:"Tag",href:"",prefix:"None",closable:!0,isDisabled:!1,className:"",onClose:A("closed")},parameters:{docs:{title:"Tag",description:{component:"標籤組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return a.jsx(r,{...e})}},t={name:"附加元素",args:{},parameters:{docs:{source:{transform(e,s){return`
<Tag {...args} prefix={<AccountIcon></AccountIcon>} />
          `}}}},render(e){return a.jsx(r,{...e,prefix:a.jsx(j,{})})}},n={name:"外觀樣式",args:{},parameters:{docs:{source:{transform(e,s){return`
<Tag {...args} variable="filled" />
<Tag {...args} variable="ghost" />
`}}}},render(e){return a.jsxs("div",{style:{display:"flex",gap:"8px"},children:[a.jsx(r,{...e,variable:"filled",themeColor:"primary",label:"Primary"}),a.jsx(r,{...e,variable:"ghost",themeColor:"primary",label:"Primary"})]})}},i={name:"主題色彩",args:{},parameters:{docs:{source:{transform(e,s){return`
<Tag {...args} themeColor="neutral" />
<Tag {...args} themeColor="primary" />
<Tag {...args} themeColor="secondary" />
<Tag {...args} themeColor="info" />
<Tag {...args} themeColor="success" />
<Tag {...args} themeColor="warning" />
<Tag {...args} themeColor="error" />
`}}}},render(e){return a.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[a.jsx(r,{...e,themeColor:"neutral",label:"Neutral"}),a.jsx(r,{...e,themeColor:"primary",label:"Primary"}),a.jsx(r,{...e,themeColor:"secondary",label:"Secondary"}),a.jsx(r,{...e,themeColor:"info",label:"Info"}),a.jsx(r,{...e,themeColor:"success",label:"Success"}),a.jsx(r,{...e,themeColor:"warning",label:"Warning"}),a.jsx(r,{...e,themeColor:"error",label:"Error"})]})}};var g,f,y;o.parameters={...o.parameters,docs:{...(g=o.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Tag {...args} />;
  }
}`,...(y=(f=o.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var b,h,C;t.parameters={...t.parameters,docs:{...(b=t.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '附加元素',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Tag {...args} prefix={<AccountIcon></AccountIcon>} />
          \`;
        }
      }
    }
  },
  render(args) {
    return <Tag {...args} prefix={<AccountIcon></AccountIcon>} />;
  }
}`,...(C=(h=t.parameters)==null?void 0:h.docs)==null?void 0:C.source}}};var v,x,T;n.parameters={...n.parameters,docs:{...(v=n.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '外觀樣式',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Tag {...args} variable="filled" />
<Tag {...args} variable="ghost" />
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Tag {...args} variable="filled" themeColor="primary" label="Primary" />
        <Tag {...args} variable="ghost" themeColor="primary" label="Primary" />
      </div>;
  }
}`,...(T=(x=n.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var _,N,V;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Tag {...args} themeColor="neutral" />
<Tag {...args} themeColor="primary" />
<Tag {...args} themeColor="secondary" />
<Tag {...args} themeColor="info" />
<Tag {...args} themeColor="success" />
<Tag {...args} themeColor="warning" />
<Tag {...args} themeColor="error" />
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <Tag {...args} themeColor="neutral" label="Neutral" />
        <Tag {...args} themeColor="primary" label="Primary" />
        <Tag {...args} themeColor="secondary" label="Secondary" />
        <Tag {...args} themeColor="info" label="Info" />
        <Tag {...args} themeColor="success" label="Success" />
        <Tag {...args} themeColor="warning" label="Warning" />
        <Tag {...args} themeColor="error" label="Error" />
      </div>;
  }
}`,...(V=(N=i.parameters)==null?void 0:N.docs)==null?void 0:V.source}}};const k=["Default","Additional","Variable","ThemeColor"];export{t as Additional,o as Default,i as ThemeColor,n as Variable,k as __namedExportsOrder,F as default};
