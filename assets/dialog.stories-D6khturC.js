import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as v}from"./title-BwTyIEWm.js";import{B as s}from"./button-Wp42ARu5.js";import"./checkbox-BU0yiDWA.js";import"./input-f_kNHQcd.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{D as f}from"./toast-Cjb0i4f_.js";import"./breadcrumb-B2x62wCK.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-Dr_9Ev5q.js";import"./image-CZs88QCg.js";import"./index-RYns6xqu.js";import{u as N}from"./useDialog-D987K1Gx.js";import{C as x}from"./auo-DdAfQkMS.js";import"./lodash-CcdATr5u.js";import"./arrow_down-DA-sWbvp.js";import"./offline-Ddz6ifNG.js";import"./index-sbqOYYIm.js";const A={title:"Component/Dialog",component:f,tags:["autodocs"],argTypes:{isOpen:{description:"是否開啟",table:{category:"PROPS"}},hasClose:{description:"是否有關閉按鈕",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},title:{description:"標題",table:{category:"SLOTS"}},content:{description:"內容",table:{category:"SLOTS"}},footer:{description:"底部",table:{category:"SLOTS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{isOpen:!1,hasClose:!1,className:""},parameters:{docs:{title:"Dialog",description:{component:"Dialog 的呈現及說明。"},source:{transform(t,n){const{args:o}=n;return`
<Dialog
  isOpen=${(o==null?void 0:o.isOpen)||!1}
  hasClose=${(o==null?void 0:o.hasClose)||!1}
  onClose={closeDialog}
  title="${o==null?void 0:o.title}"
  content="${o==null?void 0:o.content}"
  footer={
    <>
      <Button
        onClick={handleCancel}
        variant="contained"
        className="cancel-btn"
      >
        Cancel
      </Button>
      <Button onClick={handleOK} variant="contained">
        OK
      </Button>
    </>
  }
/>`}}}}},j=t=>{const{isOpen:n,title:o,content:r,openDialog:i,closeDialog:a}=N({isOpen:(t==null?void 0:t.isOpen)||!1,title:e.jsx(v,{level:3,children:"Title"}),content:e.jsx("p",{children:"Content"})}),d=()=>{window.alert("ok"),a()},O=()=>{window.alert("cancel"),a()};return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:i,variant:"contained",children:"Open Dialog"}),e.jsx(f,{isOpen:n,hasClose:(t==null?void 0:t.hasClose)||!1,onClose:a,title:o,content:r,footer:e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:O,variant:"contained",className:"cancel-btn",children:"Cancel"}),e.jsx(s,{onClick:d,variant:"contained",children:"OK"})]})})]})},l={name:"預設項目",args:{isOpen:!0,hasClose:!1,title:"Title",content:"Content",onClose:()=>window.alert("close")},render(t){const{hasClose:n,title:o,content:r,onClose:i,className:a}=t;return e.jsxs("div",{className:`dialog-content ${a}`,onClick:d=>d.stopPropagation(),children:[i&&n&&e.jsx("button",{className:"dialog-close-btn",onClick:i,children:e.jsx(x,{width:20,height:20})}),e.jsx("div",{className:"dialog-header",children:o}),e.jsx("div",{className:"dialog-body",children:r}),e.jsxs("div",{className:"dialog-footer",children:[e.jsx(s,{onClick:()=>window.alert("cancel"),variant:"contained",className:"cancel-btn",children:"Cancel"}),e.jsx(s,{onClick:()=>window.alert("ok"),variant:"contained",children:"OK"})]})]})}},c={name:"Demo",args:{className:""},render(t){return e.jsx(j,{...t})}};var m,p,C;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    isOpen: true,
    hasClose: false,
    title: 'Title',
    content: 'Content',
    onClose: () => window.alert('close')
  },
  render(args) {
    const {
      hasClose,
      title,
      content,
      onClose,
      className
    } = args;
    return <div className={\`dialog-content \${className}\`} onClick={e => e.stopPropagation()}>
        {onClose && hasClose && <button className="dialog-close-btn" onClick={onClose}>
            <CloseIcon width={20} height={20} />
          </button>}
        <div className="dialog-header">{title}</div>
        <div className="dialog-body">{content}</div>
        <div className="dialog-footer">
          <Button onClick={() => window.alert('cancel')} variant="contained" className="cancel-btn">
            Cancel
          </Button>
          <Button onClick={() => window.alert('ok')} variant="contained">
            OK
          </Button>
        </div>
      </div>;
  }
}`,...(C=(p=l.parameters)==null?void 0:p.docs)==null?void 0:C.source}}};var h,u,g;c.parameters={...c.parameters,docs:{...(h=c.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: 'Demo',
  args: {
    className: ''
  },
  render(args) {
    return <DemoWithHook {...args} />;
  }
}`,...(g=(u=c.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const G=["Default","Demo"];export{l as Default,c as Demo,G as __namedExportsOrder,A as default};
