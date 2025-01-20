import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./tooltip-CbgcAIJ-.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-BwpksUBq.js";import{T as B,B as l}from"./toast-hfGqEkE6.js";import"./checkbox-wrczPlMV.js";import"./progress-circle-5ZOi_8dX.js";import"./progress-line-BURSIgt3.js";import"./divider-ChKDBDeF.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./input-DCnn0I_9.js";import"./layout-ZjbFUAzr.js";import"./menu-DgFwVb6m.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-Code_Ef5.js";import"./textarea-CO8Z8fZG.js";import{T as m}from"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{g as c}from"./string-BqrfsRv8.js";import{k as x,l as g,m as P,n as N,f as h,p as E}from"./warning-tri-Y1-2BlEi.js";import{r as C}from"./index-RYns6xqu.js";import{R as O}from"./index-sbqOYYIm.js";import"./online-EmbACc0H.js";import"./notification-NM2mg_B2.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const D=()=>{const[i,t]=C.useState([]);C.useEffect(()=>{if(i.length===0)return;const n=[...i].sort((A,R)=>A.createdAt-R.createdAt)[0],r=setTimeout(()=>{n.duration!==0&&o(n.id)},n.duration);return()=>clearTimeout(r)},[i]);const a=C.useCallback(s=>{const n=Date.now();return t(r=>[...r,{...s,id:n,createdAt:n,themeColor:s.themeColor||"primary",prefix:s.prefix||null,title:s.title,content:s.content,duration:s.duration}]),n},[]),o=C.useCallback(s=>{t(n=>n.filter(r=>r.id!==s))},[]),d=C.useCallback(()=>i.length===0?null:O.createPortal(e.jsx("div",{className:"ded-toast-container",children:i.map(s=>e.jsx(B,{...s,onClose:()=>o(s.id)},s.id))}),document.body),[i,o]);return{addToast:a,ToastContainer:d}},ce={title:"Component/Toast",component:B,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},title:{description:"標題",table:{category:"PROPS"}},content:{description:"內容",table:{category:"PROPS"}},action:{description:"操作",table:{category:"PROPS"}},prefix:{description:"前綴",options:["SvgInfoCircle","SvgSuccessCircle","SvgWarningTri","SvgErrorCircle"],mapping:{SvgInfoCircle:e.jsx(x,{}),SvgSuccessCircle:e.jsx(g,{}),SvgWarningTri:e.jsx(P,{}),SvgErrorCircle:e.jsx(N,{})},table:{category:"PROPS"}},duration:{description:"持續時間",control:{type:"range",step:100,min:0,max:5e3},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Notification Title ",content:"Content",action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"}),prefix:e.jsx(g,{width:18,height:18}),duration:500,className:""},parameters:{docs:{title:"Toast",description:{component:"通知訊息組件的呈現及說明。"},source:{transform(i,t){const{args:a}=t;return`
<Toast themeColor=${a.themeColor} title=${a.title} content=${a.content} prefix=${a.prefix} />
`}}}}},v={name:"預設項目",args:{action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"})},render(i){const{themeColor:t,title:a,content:o,action:d,prefix:s,onClose:n=()=>({}),className:r}=i;return e.jsxs("div",{className:`ded-toast 
        ${c("ded-toast",`border-${t}`)} 
        ${r}`,children:[e.jsx(l,{variant:"text",onClick:n,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:n})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:`ded-toast-header-message 
          ${c("ded-toast-header-message",t||"primary")}
        `,children:[s,e.jsx(m,{level:5,themeColor:t,children:a})]}),d&&e.jsx("div",{className:"ded-toast-header-action",children:d})]}),e.jsx("p",{className:"ded-description",children:o})]})}},p={name:"通知訊息類型",args:{action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"})},render(i){const{title:t,content:a,action:o,prefix:d,onClose:s=()=>({}),className:n}=i;return e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:`ded-toast 
        ${c("ded-toast","border-success")} 
        ${n}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-success",children:[e.jsx(g,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"success",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast 
            ${c("ded-toast","border-warning")}  
            ${n}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-warning",children:[e.jsx(P,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"warning",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast
            ${c("ded-toast","border-error")}  
            ${n}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-error",children:[e.jsx(N,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"error",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast
            ${c("ded-toast","border-info")}
            ${n}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-info",children:[e.jsx(x,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"info",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]}),e.jsxs("div",{className:`ded-toast
            ${c("ded-toast","border-neutral")}
            ${n}`,children:[e.jsx(l,{variant:"text",onClick:s,themeColor:"neutral",className:"ded-close-button",children:e.jsx(h,{width:18,height:18,onClick:s})}),e.jsxs("div",{className:"ded-toast-header",children:[e.jsxs("div",{className:"ded-toast-header-message ded-toast-header-message-neutral",children:[e.jsx(E,{width:18,height:18}),e.jsx(m,{level:5,themeColor:"info",children:t})]}),o&&e.jsx("div",{className:"ded-toast-header-action",children:o})]}),e.jsx("p",{className:"ded-description",children:a})]})]})}},u={name:"互動模式",args:{themeColor:"success",onClose:()=>window.alert("close"),title:"Notification title ",content:"Content",action:e.jsx("div",{onClick:()=>window.alert("action"),children:"Action"}),prefix:e.jsx(x,{width:18,height:18}),duration:1e3,className:""},render:function(t){const{addToast:a,ToastContainer:o}=D(),d=()=>{a({themeColor:(t==null?void 0:t.themeColor)||"success",title:(t==null?void 0:t.title)||"Title",content:(t==null?void 0:t.content)||"Content",action:(t==null?void 0:t.action)||e.jsx("div",{children:"Action"}),prefix:(t==null?void 0:t.prefix)||e.jsx(N,{width:18,height:18}),duration:t==null?void 0:t.duration})};return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:d,variant:"filled",children:"Open Dialog"}),e.jsx(o,{})]})}};var j,w,f;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
          <SvgClose width={18} height={18} onClick={onClose} />
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
}`,...(f=(w=v.parameters)==null?void 0:w.docs)==null?void 0:f.source}}};var T,b,S;p.parameters={...p.parameters,docs:{...(T=p.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-success">
              <SvgSuccessCircle width={18} height={18} />
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
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-warning">
              <SvgWarningTri width={18} height={18} />
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
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-error">
              <SvgErrorCircle width={18} height={18} />
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
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-info">
              <SvgInfoCircle width={18} height={18} />
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
            <SvgClose width={18} height={18} onClick={onClose} />
          </Button>
          <div className={\`ded-toast-header\`}>
            <div className="ded-toast-header-message ded-toast-header-message-neutral">
              <SvgDisableCircle width={18} height={18} />
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
}`,...(S=(b=p.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var k,$,y;u.parameters={...u.parameters,docs:{...(k=u.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '互動模式',
  args: {
    themeColor: 'success',
    onClose: () => window.alert('close'),
    title: 'Notification title ',
    content: 'Content',
    action: <div onClick={() => window.alert('action')}>Action</div>,
    prefix: <SvgInfoCircle width={18} height={18} />,
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
        prefix: args?.prefix || <SvgErrorCircle width={18} height={18} />,
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
}`,...(y=($=u.parameters)==null?void 0:$.docs)==null?void 0:y.source}}};const me=["Default","Type","Demo"];export{v as Default,u as Demo,p as Type,me as __namedExportsOrder,ce as default};
