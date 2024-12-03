import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./title-BwTyIEWm.js";import{B as N}from"./button-Wp42ARu5.js";import"./checkbox-BU0yiDWA.js";import"./input-f_kNHQcd.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{d as h}from"./toast-BD3i6BfY.js";import"./breadcrumb-B2x62wCK.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-Dr_9Ev5q.js";import"./image-CZs88QCg.js";import{b as x,C as T}from"./auo-DdAfQkMS.js";import{r as b}from"./index-RYns6xqu.js";import"./useDialog-D987K1Gx.js";import"./lodash-CcdATr5u.js";import"./arrow_down-DA-sWbvp.js";import"./offline-Ddz6ifNG.js";import"./index-sbqOYYIm.js";const j=()=>{const[e,n]=b.useState([]);return{toasts:e,addToast:o=>{n([...e,{...o,id:Date.now().toString()}])},removeToast:o=>{n(e.filter(c=>c.id!==o))}}},J={title:"Component/Toast",component:h,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","info","success","warning","error"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},type:{description:"類型",table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},prefix:{description:"前綴",options:["CheckIcon"],mapping:{CheckIcon:t.jsx(x,{})},table:{category:"PROPS"}},duration:{description:"持續時間",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"primary",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:"",duration:500,className:""},parameters:{docs:{title:"Dialog",description:{component:"Dialog 的呈現及說明。"},source:{transform(e,n){const{args:r}=n;return`
<Toast themeColor=${r.themeColor} title=${r.title} content=${r.content} prefix=${r.prefix} />
`}}}}},y=e=>{const{toasts:n,addToast:r,removeToast:s}=j();return t.jsxs(t.Fragment,{children:[t.jsx(N,{onClick:()=>r({title:(e==null?void 0:e.title)??"Title",content:(e==null?void 0:e.content)??"Content"}),variant:"contained",children:"Open Dialog"}),n.map(o=>t.jsx(h,{themeColor:e==null?void 0:e.themeColor,title:o.title,content:o.content,prefix:e==null?void 0:e.prefix,duration:e==null?void 0:e.duration,onClose:()=>s(o.id)},o.id))]})},i={name:"預設項目",args:{},render(e){const{themeColor:n,title:r,content:s,prefix:o,onClose:c,className:f}=e;return t.jsxs("div",{className:`ded-toast ded-toast-border-${n} ${f}`,children:[t.jsx("button",{className:"ded-close-button",children:t.jsx(T,{width:20,height:20,onClick:c})}),t.jsxs("div",{className:"ded-message",children:[o&&t.jsx("div",{className:`ded-icon-wrapper ded-toast-${n}`,children:o}),t.jsx("span",{children:r})]}),t.jsx("p",{className:"ded-description",children:s})]})}},a={name:"Demo",args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:t.jsx(x,{}),duration:1e3,className:""},render(e){return t.jsx(y,{...e})}};var d,l,m;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(m=(l=i.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,C;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: 'Demo',
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Title',
    content: 'Content',
    prefix: <CheckIcon></CheckIcon>,
    duration: 1000,
    className: ''
  },
  render(args) {
    return <DemoWithHook {...args} />;
  }
}`,...(C=(u=a.parameters)==null?void 0:u.docs)==null?void 0:C.source}}};const K=["Default","Demo"];export{i as Default,a as Demo,K as __namedExportsOrder,J as default};
