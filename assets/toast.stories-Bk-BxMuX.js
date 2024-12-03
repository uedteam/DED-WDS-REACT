import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./title-DjADW0si.js";import{B as g}from"./button-Wp42ARu5.js";import"./checkbox-BU0yiDWA.js";import"./input-f_kNHQcd.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{d as C}from"./toast-BPGNtN69.js";import"./breadcrumb-B2x62wCK.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-Dr_9Ev5q.js";import"./image-BUf_2wZ-.js";import{b as f,C as N}from"./auo-DdAfQkMS.js";import{r as b}from"./index-RYns6xqu.js";import"./useDialog-D987K1Gx.js";import"./lodash-CcdATr5u.js";import"./arrow_down-DA-sWbvp.js";import"./offline-Ddz6ifNG.js";import"./index-sbqOYYIm.js";const T=()=>{const[e,s]=b.useState([]);return{toasts:e,addToast:o=>{s([...e,{...o,id:Date.now().toString()}])},removeToast:o=>{s(e.filter(c=>c.id!==o))}}},J={title:"Component/Toast",component:C,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","info","success","warning","error"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},type:{description:"類型",table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},prefix:{description:"前綴",options:["CheckIcon"],mapping:{CheckIcon:t.jsx(f,{})},table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"primary",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:"",className:""},parameters:{docs:{title:"Dialog",description:{component:"Dialog 的呈現及說明。"},source:{transform(e,s){const{args:r}=s;return`
<Toast themeColor=${r.themeColor} title=${r.title} content=${r.content} prefix=${r.prefix} />
`}}}}},j=e=>{const{toasts:s,addToast:r,removeToast:n}=T();return t.jsxs(t.Fragment,{children:[t.jsx(g,{onClick:()=>r({title:(e==null?void 0:e.title)??"Title",content:(e==null?void 0:e.content)??"Content"}),variant:"contained",children:"Open Dialog"}),s.map(o=>t.jsx(C,{title:o.title,content:o.content,onClose:()=>n(o.id)},o.id))]})},a={name:"預設項目",args:{},render(e){const{themeColor:s,title:r,content:n,prefix:o,onClose:c,className:x}=e;return t.jsxs("div",{className:`ded-toast ded-toast-border-${s} ${x}`,children:[t.jsx("button",{className:"ded-close-button",children:t.jsx(N,{width:20,height:20,onClick:c})}),t.jsxs("div",{className:"ded-message",children:[o&&t.jsx("div",{className:`ded-icon-wrapper ded-toast-${s}`,children:o}),t.jsx("span",{children:r})]}),t.jsx("p",{className:"ded-description",children:n})]})}},i={name:"Demo",args:{className:""},render(e){return t.jsx(j,{...e})}};var d,m,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    const {
      themeColor,
      title,
      content,
      prefix,
      onClose,
      className
    } = args;
    return <div className={\`ded-toast ded-toast-border-\${themeColor} \${className}\`}>
        <button className="ded-close-button">
          <CloseIcon width={20} height={20} onClick={onClose} />
        </button>
        <div className="ded-message">
          {prefix && <div className={\`ded-icon-wrapper ded-toast-\${themeColor}\`}>
              {prefix}
            </div>}
          <span>{title}</span>
        </div>
        <p className="ded-description">{content}</p>
      </div>;
  }
}`,...(l=(m=a.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var p,u,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Demo',
  args: {
    className: ''
  },
  render(args) {
    return <DemoWithHook {...args} />;
  }
}`,...(h=(u=i.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};const K=["Default","Demo"];export{a as Default,i as Demo,K as __namedExportsOrder,J as default};
