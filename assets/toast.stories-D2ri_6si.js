import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./title-DjADW0si.js";import{B as S}from"./button-DUOlbcAA.js";import"./checkbox-BbQOm0KL.js";import"./input-BWkpi1yj.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import"./stepper-L0ihGmRm.js";import"./breadcrumb-BjVYaTeR.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-BAUrcos8.js";import"./image-CZs88QCg.js";import{T}from"./toast-4l9AxWm1.js";import{b as u,C as i,I,W as k}from"./warning-DPjiZ-Sx.js";import{r as l}from"./index-RYns6xqu.js";import{R as P}from"./index-sbqOYYIm.js";import"./lodash-CcdATr5u.js";import"./offline-Ddz6ifNG.js";const R=()=>{const[a,t]=l.useState([]);l.useEffect(()=>{if(a.length===0)return;const r=[...a].sort(($,y)=>$.createdAt-y.createdAt)[0],c=setTimeout(()=>{r.duration!==0&&o(r.id)},r.duration);return()=>clearTimeout(c)},[a]);const n=l.useCallback(s=>{const r=Date.now();return t(c=>[...c,{...s,id:r,createdAt:r,themeColor:s.themeColor||"primary",prefix:s.prefix||null,title:s.title,content:s.content,duration:s.duration}]),r},[]),o=l.useCallback(s=>{t(r=>r.filter(c=>c.id!==s))},[]),d=l.useCallback(()=>a.length===0?null:P.createPortal(e.jsx("div",{className:"ded-toast-container",children:a.map(s=>e.jsx(T,{...s,onClose:()=>o(s.id)},s.id))}),document.body),[a,o]);return{addToast:n,ToastContainer:d}},Z={title:"Component/Toast",component:T,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","info","success","warning","error"]},table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},prefix:{description:"前綴",options:["CheckIcon","CloseIcon","InfoIcon","WarningIcon"],mapping:{CheckIcon:e.jsx(u,{}),CloseIcon:e.jsx(i,{}),InfoIcon:e.jsx(I,{}),WarningIcon:e.jsx(k,{})},table:{category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",step:100,min:0,max:5e3},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:e.jsx(u,{}),duration:500,className:""},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"},source:{transform(a,t){const{args:n}=t;return`
<Toast themeColor=${n.themeColor} title=${n.title} content=${n.content} prefix=${n.prefix} />
`}}}}},m={name:"預設項目",args:{},render(a){const{themeColor:t,title:n,content:o,prefix:d,onClose:s,className:r}=a;return e.jsxs("div",{className:`ded-toast ded-toast-border-${t} ${r}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:s})}),e.jsxs("div",{className:"ded-message",children:[d&&e.jsx("div",{className:`ded-icon-wrapper ded-toast-${t}`,children:d}),e.jsx("span",{children:n})]}),e.jsx("p",{className:"ded-description",children:o})]})}},p={name:"通知訊息類型",args:{},render(a){const{title:t,content:n,prefix:o,onClose:d,className:s}=a;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`ded-toast ded-toast-border-success ${s}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:d})}),e.jsxs("div",{className:"ded-message",children:[o&&e.jsx("div",{className:"ded-icon-wrapper ded-toast-success",children:o}),e.jsx("span",{children:t})]}),e.jsx("p",{className:"ded-description",children:n})]}),e.jsxs("div",{className:`ded-toast ded-toast-border-warning ${s}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:d})}),e.jsxs("div",{className:"ded-message",children:[o&&e.jsx("div",{className:"ded-icon-wrapper ded-toast-warning",children:e.jsx(k,{})}),e.jsx("span",{children:t})]}),e.jsx("p",{className:"ded-description",children:n})]}),e.jsxs("div",{className:`ded-toast ded-toast-border-error ${s}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:d})}),e.jsxs("div",{className:"ded-message",children:[o&&e.jsx("div",{className:"ded-icon-wrapper ded-toast-error",children:e.jsx(i,{})}),e.jsx("span",{children:t})]}),e.jsx("p",{className:"ded-description",children:n})]}),e.jsxs("div",{className:`ded-toast ded-toast-border-info ${s}`,children:[e.jsx("button",{className:"ded-close-button",children:e.jsx(i,{width:20,height:20,onClick:d})}),e.jsxs("div",{className:"ded-message",children:[o&&e.jsx("div",{className:"ded-icon-wrapper ded-toast-info",children:e.jsx(I,{})}),e.jsx("span",{children:t})]}),e.jsx("p",{className:"ded-description",children:n})]})]})}},h={name:"互動模式",args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:e.jsx(u,{}),duration:1e3,className:""},render:function(t){const{addToast:n,ToastContainer:o}=R(),d=()=>{n({themeColor:(t==null?void 0:t.themeColor)||"success",title:(t==null?void 0:t.title)||"Title",content:(t==null?void 0:t.content)||"Content",prefix:(t==null?void 0:t.prefix)||e.jsx(u,{}),duration:t==null?void 0:t.duration})};return e.jsxs(e.Fragment,{children:[e.jsx(S,{onClick:d,variant:"contained",children:"Open Dialog"}),e.jsx(o,{})]})}};var x,C,N;m.parameters={...m.parameters,docs:{...(x=m.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(N=(C=m.parameters)==null?void 0:C.docs)==null?void 0:N.source}}};var j,f,v;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '通知訊息類型',
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
}`,...(v=(f=p.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};var b,g,w;h.parameters={...h.parameters,docs:{...(b=h.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '互動模式',
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Title',
    content: 'Content',
    prefix: <CheckIcon></CheckIcon>,
    duration: 1000,
    className: ''
  },
  render: function Render(args) {
    const {
      addToast,
      ToastContainer
    } = useToast();
    const handleShowToast = () => {
      addToast({
        themeColor: args?.themeColor || 'success',
        title: args?.title || 'Title',
        content: args?.content || 'Content',
        prefix: args?.prefix || <CheckIcon />,
        duration: args?.duration
      });
    };
    return <>
        <Button onClick={handleShowToast} variant="contained">
          Open Dialog
        </Button>
        <ToastContainer />
      </>;
  }
}`,...(w=(g=h.parameters)==null?void 0:g.docs)==null?void 0:w.source}}};const ee=["Default","Type","Demo"];export{m as Default,h as Demo,p as Type,ee as __namedExportsOrder,Z as default};
