import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as h}from"./title-CD8xfGAz.js";import{T as $,B as l}from"./toast-Cf76PChB.js";import"./checkbox-Dx9j1Oee.js";import"./input-DgRKury_.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./radio-CMOPLxLt.js";import"./pagination-Buf0f03P.js";import"./breadcrumb-D2ntUWZ-.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-HIpPoV0X.js";import"./image-BUf_2wZ-.js";import"./status-indicator-BDww4a8h.js";import{g as C}from"./string-BqrfsRv8.js";import{c as P,d,W as A,E as S,C as u}from"./disable-circle-Qt9C8lli.js";import{r as m}from"./index-RYns6xqu.js";import{R as E}from"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./navigate-arrow-6VIhmLdI.js";const R=()=>{const[a,t]=m.useState([]);m.useEffect(()=>{if(a.length===0)return;const o=[...a].sort((y,B)=>y.createdAt-B.createdAt)[0],c=setTimeout(()=>{o.duration!==0&&s(o.id)},o.duration);return()=>clearTimeout(c)},[a]);const i=m.useCallback(n=>{const o=Date.now();return t(c=>[...c,{...n,id:o,createdAt:o,themeColor:n.themeColor||"primary",prefix:n.prefix||null,title:n.title,content:n.content,duration:n.duration}]),o},[]),s=m.useCallback(n=>{t(o=>o.filter(c=>c.id!==n))},[]),r=m.useCallback(()=>a.length===0?null:E.createPortal(e.jsx("div",{className:"ded-toast-container",children:a.map(n=>e.jsx($,{...n,onClose:()=>s(n.id)},n.id))}),document.body),[a,s]);return{addToast:i,ToastContainer:r}},oe={title:"Component/Toast",component:$,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},prefix:{description:"前綴",options:["InfoCircleIcon","SuccessCircleIcon","WarningTriIcon","ErrorCircleIcon"],mapping:{InfoCircleIcon:e.jsx(P,{}),SuccessCircleIcon:e.jsx(d,{}),WarningTriIcon:e.jsx(A,{}),ErrorCircleIcon:e.jsx(S,{})},table:{category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",step:100,min:0,max:5e3},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Notification Title ",content:"Content",action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"}),prefix:e.jsx(d,{width:18,height:18}),duration:500,className:""},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"},source:{transform(a,t){const{args:i}=t;return`
<Toast themeColor=${i.themeColor} title=${i.title} content=${i.content} prefix=${i.prefix} />
`}}}}},p={name:"預設項目",args:{action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"})},render(a){const{themeColor:t,title:i,content:s,action:r,prefix:n,onClose:o=()=>({}),className:c}=a;return e.jsxs("div",{className:`ded-toast 
        ${C("ded-toast",`border-${t}`)} 
        ${c}`,children:[e.jsx(l,{variant:"text",onClick:o,themeColor:"neutral",className:"ded-close-button",children:e.jsx(u,{width:18,height:18,onClick:o})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message",children:[e.jsx(d,{width:18,height:18}),e.jsx(h,{level:5,themeColor:t,children:i})]}),r&&e.jsx("div",{className:"ded-toast-header-action",children:r})]}),e.jsx("p",{className:"ded-description",children:s})]})}},v={name:"通知訊息類型",args:{action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"})},render(a){const{title:t,content:i,action:s,prefix:r,onClose:n=()=>({}),className:o}=a;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`ded-toast 
        ${C("ded-toast","border-success")} 
        ${o}`,children:[e.jsx(l,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(u,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message",children:[e.jsx(d,{width:18,height:18}),e.jsx(h,{level:5,themeColor:"success",children:t})]}),s&&e.jsx("div",{className:"ded-toast-header-action",children:s})]}),e.jsx("p",{className:"ded-description",children:i})]}),e.jsxs("div",{className:`ded-toast 
            ${C("ded-toast","border-warning")}  
            ${o}`,children:[e.jsx(l,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(u,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message",children:[e.jsx(d,{width:18,height:18}),e.jsx(h,{level:5,themeColor:"warning",children:t})]}),s&&e.jsx("div",{className:"ded-toast-header-action",children:s})]}),e.jsx("p",{className:"ded-description",children:i})]}),e.jsxs("div",{className:`ded-toast
            ${C("ded-toast","border-error")}  
            ${o}`,children:[e.jsx(l,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(u,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message",children:[e.jsx(d,{width:18,height:18}),e.jsx(h,{level:5,themeColor:"error",children:t})]}),s&&e.jsx("div",{className:"ded-toast-header-action",children:s})]}),e.jsx("p",{className:"ded-description",children:i})]}),e.jsxs("div",{className:`ded-toast
            ${C("ded-toast","border-info")}
            ${o}`,children:[e.jsx(l,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(u,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message",children:[e.jsx(d,{width:18,height:18}),e.jsx(h,{level:5,themeColor:"info",children:t})]}),s&&e.jsx("div",{className:"ded-toast-header-action",children:s})]}),e.jsx("p",{className:"ded-description",children:i})]})]})}},x={name:"互動模式",args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Notification title ",content:"Content",action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"}),prefix:e.jsx(d,{width:18,height:18}),duration:1e3,className:""},render:function(t){const{addToast:i,ToastContainer:s}=R(),r=()=>{i({themeColor:(t==null?void 0:t.themeColor)||"success",title:(t==null?void 0:t.title)||"Title",content:(t==null?void 0:t.content)||"Content",action:(t==null?void 0:t.action)||e.jsx("div",{children:"Action"}),prefix:(t==null?void 0:t.prefix)||e.jsx(S,{width:18,height:18}),duration:t==null?void 0:t.duration})};return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:r,variant:"filled",children:"Open Dialog"}),e.jsx(s,{})]})}};var N,j,g;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    action: <div onClick={() => window.alert('action')}>Action</div>
  },
  render(args) {
    const {
      themeColor,
      title,
      content,
      action,
      prefix,
      onClose = () => ({}),
      className
    } = args;
    return <div className={\`ded-toast 
        \${getCombinedClassName('ded-toast', \`border-\${themeColor}\`)} 
        \${className}\`}>
        <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
          <CloseIcon width={18} height={18} onClick={onClose} />
        </Button>

        <div className={\`ded-toast-header\`}>
          <div className="ded-toast-header-message">
            <SuccessCircleIcon width={18} height={18} />
            <Title level={5} themeColor={themeColor}>
              {title}
            </Title>
          </div>
          {action && <div className="ded-toast-header-action">{action}</div>}
        </div>
        <p className="ded-description">{content}</p>
      </div>;
  }
}`,...(g=(j=p.parameters)==null?void 0:j.docs)==null?void 0:g.source}}};var w,f,T;v.parameters={...v.parameters,docs:{...(w=v.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '通知訊息類型',
  args: {
    action: <div onClick={() => window.alert('action')}>Action</div>
  },
  render(args) {
    const {
      title,
      content,
      action,
      prefix,
      onClose = () => ({}),
      className
    } = args;
    return <>
        <div className={\`ded-toast 
        \${getCombinedClassName('ded-toast', \`border-success\`)} 
        \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <CloseIcon width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message">
              <SuccessCircleIcon width={18} height={18} />
              <Title level={5} themeColor="success">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast 
            \${getCombinedClassName('ded-toast', \`border-warning\`)}  
            \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <CloseIcon width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message">
              <SuccessCircleIcon width={18} height={18} />
              <Title level={5} themeColor="warning">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast
            \${getCombinedClassName('ded-toast', \`border-error\`)}  
            \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <CloseIcon width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message">
              <SuccessCircleIcon width={18} height={18} />
              <Title level={5} themeColor="error">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>
          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast
            \${getCombinedClassName('ded-toast', \`border-info\`)}
            \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <CloseIcon width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message">
              <SuccessCircleIcon width={18} height={18} />
              <Title level={5} themeColor="info">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>

          <p className="ded-description">{content}</p>
        </div>
      </>;
  }
}`,...(T=(f=v.parameters)==null?void 0:f.docs)==null?void 0:T.source}}};var b,k,I;x.parameters={...x.parameters,docs:{...(b=x.parameters)==null?void 0:b.docs,source:{originalSource:`{
  name: '互動模式',
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Notification title ',
    content: 'Content',
    action: <div onClick={() => window.alert('action')}>Action</div>,
    prefix: <SuccessCircleIcon width={18} height={18} />,
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
        action: args?.action || <div>Action</div>,
        prefix: args?.prefix || <ErrorCircleIcon width={18} height={18} />,
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
}`,...(I=(k=x.parameters)==null?void 0:k.docs)==null?void 0:I.source}}};const se=["Default","Type","Demo"];export{p as Default,x as Demo,v as Type,se as __namedExportsOrder,oe as default};
