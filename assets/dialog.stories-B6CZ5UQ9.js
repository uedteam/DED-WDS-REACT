import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as v}from"./title-BwTyIEWm.js";import{B as s}from"./button-DUOlbcAA.js";import"./checkbox-BbQOm0KL.js";import"./input-BWkpi1yj.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{D as f}from"./stepper-DDXHrB_h.js";import"./breadcrumb-BjVYaTeR.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-BAUrcos8.js";import"./image-CZs88QCg.js";import{u as x}from"./toast-4l9AxWm1.js";import"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import{C as N}from"./warning-DPjiZ-Sx.js";import"./lodash-CcdATr5u.js";import"./offline-Ddz6ifNG.js";const z={title:"Component/Dialog",component:f,tags:["autodocs"],argTypes:{isOpen:{description:"是否開啟",table:{category:"PROPS"}},hasClose:{description:"是否有關閉按鈕",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},title:{description:"標題",table:{category:"SLOTS"}},content:{description:"內容",table:{category:"SLOTS"}},footer:{description:"附註",table:{category:"SLOTS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{isOpen:!1,hasClose:!1,className:""},parameters:{docs:{title:"Dialog",description:{component:"彈窗組件的呈現及說明。"},source:{transform(n,t){const{args:o}=t;return`
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
/>`}}}}},j=n=>{const{isOpen:t,header:o,content:c,openDialog:i,closeDialog:a}=x({isOpen:(n==null?void 0:n.isOpen)||!1,header:e.jsx(v,{level:3,children:"Title"}),content:e.jsx("p",{children:"Content"})}),d=()=>{window.alert("ok"),a()},O=()=>{window.alert("cancel"),a()};return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:i,variant:"contained",children:"Open Dialog"}),e.jsx(f,{isOpen:t,hasClose:(n==null?void 0:n.hasClose)||!1,onClose:a,header:o,content:c,footer:e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:O,variant:"contained",className:"cancel-btn",children:"Cancel"}),e.jsx(s,{onClick:d,variant:"contained",children:"OK"})]})})]})},l={name:"預設項目",args:{isOpen:!0,hasClose:!1,header:"Title",content:"Content",onClose:()=>window.alert("close")},render(n){const{hasClose:t,header:o,content:c,onClose:i,className:a}=n;return e.jsxs("div",{className:`dialog-content ${a}`,onClick:d=>d.stopPropagation(),children:[i&&t&&e.jsx("button",{className:"dialog-close-btn",onClick:i,children:e.jsx(N,{width:20,height:20})}),e.jsx("div",{className:"dialog-header",children:o}),e.jsx("div",{className:"dialog-body",children:c}),e.jsxs("div",{className:"dialog-footer",children:[e.jsx(s,{onClick:()=>window.alert("cancel"),variant:"contained",className:"cancel-btn",children:"Cancel"}),e.jsx(s,{onClick:()=>window.alert("ok"),variant:"contained",children:"OK"})]})]})}},r={name:"互動模式",args:{},render(n){return e.jsx(j,{...n})}};var m,p,h;l.parameters={...l.parameters,docs:{...(m=l.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    isOpen: true,
    hasClose: false,
    header: 'Title',
    content: 'Content',
    onClose: () => window.alert('close')
  },
  render(args) {
    const {
      hasClose,
      header,
      content,
      onClose,
      className
    } = args;
    return <div className={\`dialog-content \${className}\`} onClick={e => e.stopPropagation()}>
        {onClose && hasClose && <button className="dialog-close-btn" onClick={onClose}>
            <CloseIcon width={20} height={20} />
          </button>}
        <div className="dialog-header">{header}</div>
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
}`,...(h=(p=l.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var C,u,g;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '互動模式',
  args: {},
  render(args) {
    return <DemoWithHook {...args} />;
  }
}`,...(g=(u=r.parameters)==null?void 0:u.docs)==null?void 0:g.source}}};const A=["Default","Demo"];export{l as Default,r as Demo,A as __namedExportsOrder,z as default};
