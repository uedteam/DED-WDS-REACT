import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./title-CD8xfGAz.js";import{T as k,B as c}from"./toast-BCSkyyzO.js";import"./checkbox-gHzG2Us7.js";import"./input-CWNwe6XW.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./radio-BhGOQQ7m.js";import"./pagination-BVNkrMwB.js";import"./breadcrumb-CbxXhCqK.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-O0NYzkKu.js";import"./image-CZs88QCg.js";import{S as m}from"./status-indicator-BDww4a8h.js";import{g as h}from"./string-BqrfsRv8.js";import{c as y,d as g,W as B,E as N,C}from"./disable-circle-Qt9C8lli.js";import{r as l}from"./index-RYns6xqu.js";import{R}from"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./navigate-arrow-6VIhmLdI.js";const O=()=>{const[r,t]=l.useState([]);l.useEffect(()=>{if(r.length===0)return;const a=[...r].sort((P,E)=>P.createdAt-E.createdAt)[0],d=setTimeout(()=>{a.duration!==0&&i(a.id)},a.duration);return()=>clearTimeout(d)},[r]);const o=l.useCallback(n=>{const a=Date.now();return t(d=>[...d,{...n,id:a,createdAt:a,themeColor:n.themeColor||"primary",prefix:n.prefix||null,title:n.title,content:n.content,duration:n.duration}]),a},[]),i=l.useCallback(n=>{t(a=>a.filter(d=>d.id!==n))},[]),s=l.useCallback(()=>r.length===0?null:R.createPortal(e.jsx("div",{className:"ded-toast-container",children:r.map(n=>e.jsx(k,{...n,onClose:()=>i(n.id)},n.id))}),document.body),[r,i]);return{addToast:o,ToastContainer:s}},oe={title:"Component/Toast",component:k,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},prefix:{description:"前綴",options:["InfoCircleIcon","SuccessCircleIcon","WarningTriIcon","ErrorCircleIcon"],mapping:{InfoCircleIcon:e.jsx(y,{}),SuccessCircleIcon:e.jsx(g,{}),WarningTriIcon:e.jsx(B,{}),ErrorCircleIcon:e.jsx(N,{})},table:{category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",step:100,min:0,max:5e3},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:e.jsx(g,{width:20,height:20}),duration:500,className:""},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"},source:{transform(r,t){const{args:o}=t;return`
<Toast themeColor=${o.themeColor} title=${o.title} content=${o.content} prefix=${o.prefix} />
`}}}}},p={name:"預設項目",args:{},render(r){const{themeColor:t,title:o,content:i,prefix:s,onClose:n=()=>({}),className:a}=r;return e.jsxs("div",{className:`ded-toast 
        ${h("ded-toast",`border-${t}`)} 
        ${a}`,children:[e.jsx(c,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(C,{width:20,height:20,onClick:n})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:t,prefix:s,children:"Title"})}),e.jsx("p",{className:"ded-description",children:i})]})}},u={name:"通知訊息類型",args:{},render(r){const{title:t,content:o,prefix:i,onClose:s=()=>({}),className:n}=r;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`ded-toast 
        ${h("ded-toast","border-success")} 
        ${n}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(C,{width:20,height:20,onClick:s})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:"success",prefix:e.jsx(g,{width:20,height:20}),children:"Title"})}),e.jsx("p",{className:"ded-description",children:o})]}),e.jsxs("div",{className:`ded-toast 
            ${h("ded-toast","border-warning")}  
            ${n}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(C,{width:20,height:20,onClick:s})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:"warning",prefix:e.jsx(B,{width:20,height:20}),children:"Title"})}),e.jsx("p",{className:"ded-description",children:o})]}),e.jsxs("div",{className:`ded-toast
            ${h("ded-toast","border-error")}  
            ${n}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(C,{width:20,height:20,onClick:s})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:"error",prefix:e.jsx(N,{width:20,height:20}),children:"Title"})}),e.jsx("p",{className:"ded-description",children:o})]}),e.jsxs("div",{className:`ded-toast
            ${h("ded-toast","border-info")}
            ${n}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(C,{width:20,height:20,onClick:s})}),e.jsx("div",{className:"ded-message",children:e.jsx(m,{variant:"text",themeColor:"info",prefix:e.jsx(y,{width:20,height:20}),children:"Title"})}),e.jsx("p",{className:"ded-description",children:o})]})]})}},x={name:"互動模式",args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Title",content:"Content",prefix:e.jsx(g,{width:20,height:20}),duration:1e3,className:""},render:function(t){const{addToast:o,ToastContainer:i}=O(),s=()=>{o({themeColor:(t==null?void 0:t.themeColor)||"success",title:(t==null?void 0:t.title)||"Title",content:(t==null?void 0:t.content)||"Content",prefix:(t==null?void 0:t.prefix)||e.jsx(N,{width:20,height:20}),duration:t==null?void 0:t.duration})};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:s,variant:"filled",children:"Open Dialog"}),e.jsx(i,{})]})}};var f,v,j;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
    return <div className={\`ded-toast 
        \${getCombinedClassName('ded-toast', \`border-\${themeColor}\`)} 
        \${className}\`}>
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
}`,...(j=(v=p.parameters)==null?void 0:v.docs)==null?void 0:j.source}}};var T,I,w;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
        <div className={\`ded-toast 
        \${getCombinedClassName('ded-toast', \`border-success\`)} 
        \${className}\`}>
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

        <div className={\`ded-toast 
            \${getCombinedClassName('ded-toast', \`border-warning\`)}  
            \${className}\`}>
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

        <div className={\`ded-toast
            \${getCombinedClassName('ded-toast', \`border-error\`)}  
            \${className}\`}>
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

        <div className={\`ded-toast
            \${getCombinedClassName('ded-toast', \`border-info\`)}
            \${className}\`}>
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
}`,...(w=(I=u.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var b,S,$;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...($=(S=x.parameters)==null?void 0:S.docs)==null?void 0:$.source}}};const se=["Default","Type","Demo"];export{p as Default,x as Demo,u as Type,se as __namedExportsOrder,oe as default};
