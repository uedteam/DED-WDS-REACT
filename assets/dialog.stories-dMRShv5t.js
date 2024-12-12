import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as v}from"./title-DcI8vfAA.js";import{B as l}from"./button-Ddeo_FLO.js";import"./checkbox-DDlz9EWX.js";import"./input-C0MiGvba.js";import"./textarea-jggigcCy.js";import"./toggle-CBTqwJHK.js";import"./radio-C3rPQ8Ai.js";import{D as g}from"./stepper-BrDppo-a.js";import"./breadcrumb-BUHvKToT.js";import"./progress-circle-B8_-B84j.js";import"./progress-line-BcO7QhX8.js";import"./styled-7_Fd9YFd.js";import"./menu-BfpC7pJY.js";import"./image-CZs88QCg.js";import{u as x}from"./toast-CB_i8VjC.js";import"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import{C as N}from"./warning-DPjiZ-Sx.js";import"./lodash-CcdATr5u.js";import"./offline-Ddz6ifNG.js";const z={title:"Component/Dialog",component:g,tags:["autodocs"],argTypes:{isOpen:{description:"是否開啟",table:{category:"PROPS"}},hasClose:{description:"是否有關閉按鈕",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},header:{description:"標題",table:{category:"SLOTS"}},content:{description:"內容",table:{category:"SLOTS"}},footer:{description:"附註",table:{category:"SLOTS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{isOpen:!1,hasClose:!1,className:""},parameters:{docs:{title:"Dialog",description:{component:"彈窗組件的呈現及說明。"},source:{transform(t,n){const{args:o}=n;return`
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
        variant="filled"
        className="cancel-btn"
      >
        Cancel
      </Button>
      <Button onClick={handleOK} variant="filled">
        OK
      </Button>
    </>
  }
/>`}}}}},j=t=>{const{isOpen:n,header:o,content:c,openDialog:s,closeDialog:a}=x({isOpen:(t==null?void 0:t.isOpen)||!1,header:e.jsx(v,{level:3,children:"Title"}),content:e.jsx("p",{children:"Content"})}),d=()=>{window.alert("ok"),a()},O=()=>{window.alert("cancel"),a()};return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:s,variant:"filled",children:"Open Dialog"}),e.jsx(g,{isOpen:n,hasClose:(t==null?void 0:t.hasClose)||!1,onClose:a,header:o,content:c,footer:e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:O,variant:"filled",className:"cancel-btn",children:"Cancel"}),e.jsx(l,{onClick:d,variant:"filled",children:"OK"})]})})]})},i={name:"預設項目",args:{isOpen:!0,hasClose:!1,header:"Title",content:"Content",onClose:()=>window.alert("close")},render(t){const{hasClose:n,header:o,content:c,onClose:s,className:a}=t;return e.jsxs("div",{className:`dialog-content ${a}`,onClick:d=>d.stopPropagation(),children:[s&&n&&e.jsx("button",{className:"dialog-close-btn",onClick:s,children:e.jsx(N,{width:20,height:20})}),e.jsx("div",{className:"dialog-header",children:o}),e.jsx("div",{className:"dialog-body",children:c}),e.jsxs("div",{className:"dialog-footer",children:[e.jsx(l,{onClick:()=>window.alert("cancel"),variant:"filled",className:"cancel-btn",children:"Cancel"}),e.jsx(l,{onClick:()=>window.alert("ok"),variant:"filled",children:"OK"})]})]})}},r={name:"互動模式",args:{},render(t){return e.jsx(j,{...t})}};var m,p,h;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
          <Button onClick={() => window.alert('cancel')} variant="filled" className="cancel-btn">
            Cancel
          </Button>
          <Button onClick={() => window.alert('ok')} variant="filled">
            OK
          </Button>
        </div>
      </div>;
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var C,u,f;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '互動模式',
  args: {},
  render(args) {
    return <DemoWithHook {...args} />;
  }
}`,...(f=(u=r.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const A=["Default","Demo"];export{i as Default,r as Demo,A as __namedExportsOrder,z as default};
