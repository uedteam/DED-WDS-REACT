import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./title-B6FjmO7v.js";import{T as b,B as c}from"./toast-pTIqXw8I.js";import"./checkbox-gHzG2Us7.js";import"./input-47lKdKbE.js";import"./textarea-CO8Z8fZG.js";import"./toggle-B_GFje5b.js";import"./radio-BhGOQQ7m.js";import"./styled-IOKniPMJ.js";import"./breadcrumb-C8k9_Tpo.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-3Z-Smywu.js";import"./image-CZs88QCg.js";import{S as m}from"./status-indicator-C0euK5S5.js";import{c as y,d as x,W as B,E as N,C as h}from"./disable-circle-Qt9C8lli.js";import{r as d}from"./index-RYns6xqu.js";import{R as E}from"./index-sbqOYYIm.js";import"./lodash-CcdATr5u.js";import"./string-ECkTvc_B.js";import"./check-BnJBHFpS.js";import"./offline-Ddz6ifNG.js";const R=()=>{const[r,t]=d.useState([]);d.useEffect(()=>{if(r.length===0)return;const i=[...r].sort(($,P)=>$.createdAt-P.createdAt)[0],l=setTimeout(()=>{i.duration!==0&&a(i.id)},i.duration);return()=>clearTimeout(l)},[r]);const o=d.useCallback(n=>{const i=Date.now();return t(l=>[...l,{...n,id:i,createdAt:i,themeColor:n.themeColor||"primary",prefix:n.prefix||null,title:n.title,content:n.content,duration:n.duration}]),i},[]),a=d.useCallback(n=>{t(i=>i.filter(l=>l.id!==n))},[]),s=d.useCallback(()=>r.length===0?null:E.createPortal(e.jsx("div",{className:"ded-toast-container",children:r.map(n=>e.jsx(b,{...n,onClose:()=>a(n.id)},n.id))}),document.body),[r,a]);return{addToast:o,ToastContainer:s}},oe={title:"Component/Toast",component:b,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},prefix:{description:"前綴",options:["InfoCircleIcon","SuccessCircleIcon","WarningTriIcon","ErrorCircleIcon"],mapping:{InfoCircleIcon:e.jsx(y,{}),SuccessCircleIcon:e.jsx(x,{}),WarningTriIcon:e.jsx(B,{}),ErrorCircleIcon:e.jsx(N,{})},table:{category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",step:100,min:0,max:5e3},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:e.jsx(x,{width:20,height:20}),duration:500,className:""},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"},source:{transform(r,t){const{args:o}=t;return`
<Toast themeColor=${o.themeColor} title=${o.title} content=${o.content} prefix=${o.prefix} />
`}}}}},p={name:"預設項目",args:{},render(r){const{themeColor:t,title:o,content:a,prefix:s,onClose:n=()=>({}),className:i}=r;return e.jsxs("div",{className:`ded-toast ${i}`,children:[e.jsx(c,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:20,height:20,onClick:n})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:t,prefix:s,children:"Title"})}),e.jsx("p",{className:"ded-description",children:a})]})}},u={name:"通知訊息類型",args:{},render(r){const{title:t,content:o,prefix:a,onClose:s=()=>({}),className:n}=r;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`ded-toast ${n}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:20,height:20,onClick:s})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:"success",prefix:e.jsx(x,{width:20,height:20}),children:"Title"})}),e.jsx("p",{className:"ded-description",children:o})]}),e.jsxs("div",{className:`ded-toast ${n}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:20,height:20,onClick:s})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:"warning",prefix:e.jsx(B,{width:20,height:20}),children:"Title"})}),e.jsx("p",{className:"ded-description",children:o})]}),e.jsxs("div",{className:`ded-toast ${n}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:20,height:20,onClick:s})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:"error",prefix:e.jsx(N,{width:20,height:20}),children:"Title"})}),e.jsx("p",{className:"ded-description",children:o})]}),e.jsxs("div",{className:`ded-toast ${n}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:20,height:20,onClick:s})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:"info",prefix:e.jsx(y,{width:20,height:20}),children:"Title"})}),e.jsx("p",{className:"ded-description",children:o})]})]})}},C={name:"互動模式",args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:e.jsx(x,{width:20,height:20}),duration:1e3,className:""},render:function(t){const{addToast:o,ToastContainer:a}=R(),s=()=>{o({themeColor:(t==null?void 0:t.themeColor)||"success",title:(t==null?void 0:t.title)||"Title",content:(t==null?void 0:t.content)||"Content",prefix:(t==null?void 0:t.prefix)||e.jsx(N,{width:20,height:20}),duration:t==null?void 0:t.duration})};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:s,variant:"filled",children:"Open Dialog"}),e.jsx(a,{})]})}};var g,v,f;p.parameters={...p.parameters,docs:{...(g=p.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    const {
      themeColor,
      title,
      content,
      prefix,
      onClose = () => ({}),
      className
    } = args;
    return <div className={\`ded-toast \${className}\`}>
        <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
          <CloseIcon width={20} height={20} onClick={onClose} />
        </Button>
        <div className="ded-message">
          <StatusIndicator variant="text" themeColor={themeColor} prefix={prefix}>
            Title
          </StatusIndicator>
        </div>
        <p className="ded-description">{content}</p>
      </div>;
  }
}`,...(f=(v=p.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var j,T,I;u.parameters={...u.parameters,docs:{...(j=u.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '通知訊息類型',
  args: {},
  render(args) {
    const {
      title,
      content,
      prefix,
      onClose = () => ({}),
      className
    } = args;
    return <>
        <div className={\`ded-toast \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </Button>
          <div className="ded-message">
            <StatusIndicator variant="text" themeColor="success" prefix={<SuccessCircleIcon width={20} height={20} />}>
              Title
            </StatusIndicator>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </Button>
          <div className="ded-message">
            <StatusIndicator variant="text" themeColor="warning" prefix={<WarningTriIcon width={20} height={20} />}>
              Title
            </StatusIndicator>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </Button>
          <div className="ded-message">
            <StatusIndicator variant="text" themeColor="error" prefix={<ErrorCircleIcon width={20} height={20} />}>
              Title
            </StatusIndicator>
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <CloseIcon width={20} height={20} onClick={onClose} />
          </Button>
          <div className="ded-message">
            <StatusIndicator variant="text" themeColor="info" prefix={<InfoCircleIcon width={20} height={20} />}>
              Title
            </StatusIndicator>
          </div>
          <p className="ded-description">{content}</p>
        </div>
      </>;
  }
}`,...(I=(T=u.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var w,S,k;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '互動模式',
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Title',
    content: 'Content',
    prefix: <SuccessCircleIcon width={20} height={20} />,
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
        prefix: args?.prefix || <ErrorCircleIcon width={20} height={20} />,
        duration: args?.duration
      });
    };
    return <>
        <Button onClick={handleShowToast} variant="filled">
          Open Dialog
        </Button>
        <ToastContainer />
      </>;
  }
}`,...(k=(S=C.parameters)==null?void 0:S.docs)==null?void 0:k.source}}};const se=["Default","Type","Demo"];export{p as Default,C as Demo,u as Type,se as __namedExportsOrder,oe as default};
