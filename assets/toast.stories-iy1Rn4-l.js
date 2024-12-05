import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./title-DjADW0si.js";import{B as P}from"./button-Dsxg2YTC.js";import"./checkbox-BbQOm0KL.js";import"./input-BvJ6s79F.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import"./stepper-DExQBrN-.js";import"./breadcrumb-DICHy6aG.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-B-J-4BxZ.js";import"./image-CZs88QCg.js";import{T as I}from"./toast-Z_BAYy8G.js";import{b as u,C as i,I as T,W as k}from"./warning-DPjiZ-Sx.js";import{r as l}from"./index-RYns6xqu.js";import{R as S}from"./index-sbqOYYIm.js";import"./lodash-CcdATr5u.js";import"./offline-Ddz6ifNG.js";const D=()=>{const[s,o]=l.useState([]);l.useEffect(()=>{if(s.length===0)return;const d=[...s].sort(($,y)=>$.createdAt-y.createdAt)[0],c=setTimeout(()=>{d.duration!==0&&a(d.id)},d.duration);return()=>clearTimeout(c)},[s]);const t=l.useCallback(n=>{const d=Date.now();return o(c=>[...c,{...n,id:d,createdAt:d,themeColor:n.themeColor||"primary",prefix:n.prefix||null,title:n.title,content:n.content,duration:n.duration}]),d},[]),a=l.useCallback(n=>{o(d=>d.filter(c=>c.id!==n))},[]),r=l.useCallback(()=>s.length===0?null:S.createPortal(e.jsx("div",{className:"ded-toast-container",children:s.map(n=>e.jsx(I,{...n,onClose:()=>a(n.id)},n.id))}),document.body),[s,a]);return{addToast:t,ToastContainer:r}},ee={title:"Component/Toast",component:I,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","info","success","warning","error"]},table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},prefix:{description:"前綴",options:["CheckIcon","CloseIcon","InfoIcon","WarningIcon"],mapping:{CheckIcon:e.jsx(u,{}),CloseIcon:e.jsx(i,{}),InfoIcon:e.jsx(T,{}),WarningIcon:e.jsx(k,{})},table:{category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",step:100,min:0,max:5e3},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:e.jsx(u,{}),duration:500,className:""},parameters:{docs:{title:"Dialog",description:{component:"Dialog 的呈現及說明。"},source:{transform(s,o){const{args:t}=o;return`
<Toast themeColor=${t.themeColor} title=${t.title} content=${t.content} prefix=${t.prefix} />
`}}}}},O=s=>{const{addToast:o,ToastContainer:t}=D(),a=()=>{o({themeColor:(s==null?void 0:s.themeColor)||"success",title:(s==null?void 0:s.title)||"Title",content:(s==null?void 0:s.content)||"Content",prefix:(s==null?void 0:s.prefix)||e.jsx(u,{}),duration:s==null?void 0:s.duration})};return e.jsxs(e.Fragment,{children:[e.jsx(P,{onClick:a,variant:"contained",children:"Open Dialog"}),e.jsx(t,{})]})},m={name:"預設項目",args:{},render(s){const{themeColor:o,title:t,content:a,prefix:r,onClose:n,className:d}=s;return e.jsxs("div",{className:`ded-toast ded-toast-border-${o} ${d}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:n})}),e.jsxs("div",{className:"ded-message",children:[r&&e.jsx("div",{className:`ded-icon-wrapper ded-toast-${o}`,children:r}),e.jsx("span",{children:t})]}),e.jsx("p",{className:"ded-description",children:a})]})}},p={name:"Toast 類型",args:{},render(s){const{title:o,content:t,prefix:a,onClose:r,className:n}=s;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`ded-toast ded-toast-border-success ${n}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:r})}),e.jsxs("div",{className:"ded-message",children:[a&&e.jsx("div",{className:"ded-icon-wrapper ded-toast-success",children:a}),e.jsx("span",{children:o})]}),e.jsx("p",{className:"ded-description",children:t})]}),e.jsxs("div",{className:`ded-toast ded-toast-border-warning ${n}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:r})}),e.jsxs("div",{className:"ded-message",children:[a&&e.jsx("div",{className:"ded-icon-wrapper ded-toast-warning",children:e.jsx(k,{})}),e.jsx("span",{children:o})]}),e.jsx("p",{className:"ded-description",children:t})]}),e.jsxs("div",{className:`ded-toast ded-toast-border-error ${n}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:r})}),e.jsxs("div",{className:"ded-message",children:[a&&e.jsx("div",{className:"ded-icon-wrapper ded-toast-error",children:e.jsx(i,{})}),e.jsx("span",{children:o})]}),e.jsx("p",{className:"ded-description",children:t})]}),e.jsxs("div",{className:`ded-toast ded-toast-border-info ${n}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:r})}),e.jsxs("div",{className:"ded-message",children:[a&&e.jsx("div",{className:"ded-icon-wrapper ded-toast-info",children:e.jsx(T,{})}),e.jsx("span",{children:o})]}),e.jsx("p",{className:"ded-description",children:t})]})]})}},h={name:"點擊顯示",args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:e.jsx(u,{}),duration:1e3,className:""},render(s){return e.jsx(O,{...s})}};var x,N,C;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(C=(N=m.parameters)==null?void 0:N.docs)==null?void 0:C.source}}};var j,v,b;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: 'Toast 類型',
  args: {},
  render(args) {
    const {
      title,
      content,
      prefix,
      onClose,
      className
    } = args;
    return <>
        <div className={\`ded-toast ded-toast-border-success \${className}\`}>
          <button className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </button>
          <div className="ded-message">
            {prefix && <div className={\`ded-icon-wrapper ded-toast-success\`}>
                {prefix}
              </div>}
            <span>{title}</span>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast ded-toast-border-warning \${className}\`}>
          <button className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </button>
          <div className="ded-message">
            {prefix && <div className={\`ded-icon-wrapper ded-toast-warning\`}>
                <WarningIcon />
              </div>}
            <span>{title}</span>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast ded-toast-border-error \${className}\`}>
          <button className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </button>
          <div className="ded-message">
            {prefix && <div className={\`ded-icon-wrapper ded-toast-error\`}>
                <CloseIcon />
              </div>}
            <span>{title}</span>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast ded-toast-border-info \${className}\`}>
          <button className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </button>
          <div className="ded-message">
            {prefix && <div className={\`ded-icon-wrapper ded-toast-info\`}>
                <InfoIcon />
              </div>}
            <span>{title}</span>
          </div>
          <p className="ded-description">{content}</p>
        </div>
      </>;
  }
}`,...(b=(v=p.parameters)==null?void 0:v.docs)==null?void 0:b.source}}};var f,g,w;h.parameters={...h.parameters,docs:{...(f=h.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: '點擊顯示',
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
}`,...(w=(g=h.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const se=["Default","Type","Demo"];export{m as Default,h as Demo,p as Type,se as __namedExportsOrder,ee as default};
