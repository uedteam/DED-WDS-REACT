import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as m}from"./title-JGunjryD.js";import{T as S,B as c}from"./toast-DVPkjaw7.js";import"./checkbox-Dx9j1Oee.js";import"./input-jRS6gElY.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./radio-CMOPLxLt.js";import"./navbar-RLR3jSqs.js";import"./breadcrumb-BWo1kqJh.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./menu-LnftMpru.js";import"./image-CZs88QCg.js";import"./status-indicator-BDww4a8h.js";import"./badge-vsbKzH_B.js";import{g as l}from"./string-BqrfsRv8.js";import{c as N,d as x,W as B,E as g,C as h,D as E}from"./disable-circle-Qt9C8lli.js";import{r as C}from"./index-RYns6xqu.js";import{R as D}from"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./navigate-arrow-6VIhmLdI.js";import"./notification-NM2mg_B2.js";const R=()=>{const[i,t]=C.useState([]);C.useEffect(()=>{if(i.length===0)return;const s=[...i].sort((P,A)=>P.createdAt-A.createdAt)[0],r=setTimeout(()=>{s.duration!==0&&o(s.id)},s.duration);return()=>clearTimeout(r)},[i]);const a=C.useCallback(n=>{const s=Date.now();return t(r=>[...r,{...n,id:s,createdAt:s,themeColor:n.themeColor||"primary",prefix:n.prefix||null,title:n.title,content:n.content,duration:n.duration}]),s},[]),o=C.useCallback(n=>{t(s=>s.filter(r=>r.id!==n))},[]),d=C.useCallback(()=>i.length===0?null:D.createPortal(e.jsx("div",{className:"ded-toast-container",children:i.map(n=>e.jsx(S,{...n,onClose:()=>o(n.id)},n.id))}),document.body),[i,o]);return{addToast:a,ToastContainer:d}},ae={title:"Component/Toast",component:S,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},prefix:{description:"前綴",options:["InfoCircleIcon","SuccessCircleIcon","WarningTriIcon","ErrorCircleIcon"],mapping:{InfoCircleIcon:e.jsx(N,{}),SuccessCircleIcon:e.jsx(x,{}),WarningTriIcon:e.jsx(B,{}),ErrorCircleIcon:e.jsx(g,{})},table:{category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",step:100,min:0,max:5e3},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Notification Title ",content:"Content",action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"}),prefix:e.jsx(x,{width:18,height:18}),duration:500,className:""},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"},source:{transform(i,t){const{args:a}=t;return`
<Toast themeColor=${a.themeColor} title=${a.title} content=${a.content} prefix=${a.prefix} />
`}}}}},p={name:"預設項目",args:{action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"})},render(i){const{themeColor:t,title:a,content:o,action:d,prefix:n,onClose:s=()=>({}),className:r}=i;return e.jsxs("div",{className:`ded-toast 
        ${l("ded-toast",`border-${t}`)} 
        ${r}`,children:[e.jsx(c,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:`ded-toast-header-message 
          ${l("ded-toast-header-message",t||"primary")}
        `,children:[n,e.jsx(m,{level:5,themeColor:t,children:a})]}),d&&e.jsx("div",{className:"ded-toast-header-action",children:d})]}),e.jsx("p",{className:"ded-description",children:o})]})}},u={name:"通知訊息類型",args:{action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"})},render(i){const{title:t,content:a,action:o,prefix:d,onClose:n=()=>({}),className:s}=i;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`ded-toast 
        ${l("ded-toast","border-success")} 
        ${s}`,children:[e.jsx(c,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-success",children:[e.jsx(x,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"success",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast 
            ${l("ded-toast","border-warning")}  
            ${s}`,children:[e.jsx(c,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-warning",children:[e.jsx(B,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"warning",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast
            ${l("ded-toast","border-error")}  
            ${s}`,children:[e.jsx(c,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-error",children:[e.jsx(g,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"error",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast
            ${l("ded-toast","border-info")}
            ${s}`,children:[e.jsx(c,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-info",children:[e.jsx(N,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"info",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast
            ${l("ded-toast","border-neutral")}
            ${s}`,children:[e.jsx(c,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-neutral",children:[e.jsx(E,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"info",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]})]})}},v={name:"互動模式",args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Notification title ",content:"Content",action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"}),prefix:e.jsx(N,{width:18,height:18}),duration:1e3,className:""},render:function(t){const{addToast:a,ToastContainer:o}=R(),d=()=>{a({themeColor:(t==null?void 0:t.themeColor)||"success",title:(t==null?void 0:t.title)||"Title",content:(t==null?void 0:t.content)||"Content",action:(t==null?void 0:t.action)||e.jsx("div",{children:"Action"}),prefix:(t==null?void 0:t.prefix)||e.jsx(g,{width:18,height:18}),duration:t==null?void 0:t.duration})};return e.jsxs(e.Fragment,{children:[e.jsx(c,{onClick:d,variant:"filled",children:"Open Dialog"}),e.jsx(o,{})]})}};var j,w,f;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
          <div className={\`ded-toast-header-message 
          \${getCombinedClassName('ded-toast-header-message', themeColor || 'primary')}
        \`}>
            {prefix}
            <Title level={5} themeColor={themeColor}>
              {title}
            </Title>
          </div>
          {action && <div className="ded-toast-header-action">{action}</div>}
        </div>
        <p className="ded-description">{content}</p>
      </div>;
  }
}`,...(f=(w=p.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var T,b,k;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
            <div className="ded-toast-header-message ded-toast-header-message-success">
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
            <div className="ded-toast-header-message ded-toast-header-message-warning">
              <WarningTriIcon width={18} height={18} />
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
            <div className="ded-toast-header-message ded-toast-header-message-error">
              <ErrorCircleIcon width={18} height={18} />
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
            <div className="ded-toast-header-message ded-toast-header-message-info">
              <InfoCircleIcon width={18} height={18} />
              <Title level={5} themeColor="info">
                {title}
              </Title>
            </div>
            {action && <div className="ded-toast-header-action">{action}</div>}
          </div>

          <p className="ded-description">{content}</p>
        </div>

        <div className={\`ded-toast
            \${getCombinedClassName('ded-toast', \`border-neutral\`)}
            \${className}\`}>
          <Button variant="text" onClick={onClose} themeColor="neutral" className="ded-close-button">
            <CloseIcon width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-neutral">
              <DisableCircleIcon width={18} height={18} />
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
}`,...(k=(b=u.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var I,$,y;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: '互動模式',
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Notification title ',
    content: 'Content',
    action: <div onClick={() => window.alert('action')}>Action</div>,
    prefix: <InfoCircleIcon width={18} height={18} />,
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
}`,...(y=($=v.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};const ie=["Default","Type","Demo"];export{p as Default,v as Demo,u as Type,ie as __namedExportsOrder,ae as default};
