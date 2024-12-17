import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as g}from"./title-BPnjcUZo.js";import{B as a,u as b}from"./toast-D1eZVrBe.js";import"./checkbox-gHzG2Us7.js";import"./input-CP6ykSnO.js";import"./textarea-CO8Z8fZG.js";import"./toggle-BVqMcImG.js";import"./radio-BhGOQQ7m.js";import{D as f}from"./stepper-C7cvACgg.js";import"./breadcrumb-DereJZat.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-Citl8FfN.js";import"./image-CZs88QCg.js";import"./status-indicator-DcO8m1Ar.js";import"./index-RYns6xqu.js";import"./index-sbqOYYIm.js";import{C as v}from"./disable-circle-Qt9C8lli.js";import"./lodash-CcdATr5u.js";import"./string-bv4IUxbB.js";import"./check-BnJBHFpS.js";import"./offline-Ddz6ifNG.js";const G={title:"Component/Dialog",component:f,tags:["autodocs"],argTypes:{isOpen:{description:"是否開啟",table:{category:"PROPS"}},hasClose:{description:"是否有關閉按鈕",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},header:{description:"標題",table:{category:"SLOTS"}},content:{description:"內容",table:{category:"SLOTS"}},footer:{description:"附註",table:{category:"SLOTS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{isOpen:!1,hasClose:!0,className:""},parameters:{docs:{title:"Dialog",description:{component:"彈窗組件的呈現及說明。"},source:{transform(o,s){const{args:t}=s;return`
<Dialog
  isOpen=${(t==null?void 0:t.isOpen)||!1}
  hasClose=${(t==null?void 0:t.hasClose)||!1}
  onClose={closeDialog}
  title="${t==null?void 0:t.title}"
  content="${t==null?void 0:t.content}"
  footer={
    <>
      <Button
        onClick={handleCancel}
        variant="filled"
        radius="md"
        className="cancel-btn"
      >
        Cancel
      </Button>
      <Button onClick={handleOK} variant="filled" radius="md">
        OK
      </Button>
    </>
  }
/>`}}}}},O=o=>{const{isOpen:s,header:t,content:d,openDialog:i,closeDialog:n}=b({isOpen:(o==null?void 0:o.isOpen)||!1,header:e.jsx(g,{themeColor:"primary",level:2,children:"Title"}),content:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"})}),c=()=>{window.alert("ok"),n()},x=()=>{window.alert("cancel"),n()};return e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:i,variant:"filled",radius:"md",children:"Open Dialog"}),e.jsx(f,{isOpen:s,hasClose:(o==null?void 0:o.hasClose)||!1,onClose:n,header:t,content:d,footer:e.jsxs(e.Fragment,{children:[e.jsx(a,{onClick:c,variant:"filled",radius:"md",children:"OK"}),e.jsx(a,{onClick:x,variant:"filled",radius:"md",className:"cancel-btn",children:"Cancel"})]})})]})},r={name:"預設項目",args:{isOpen:!0,hasClose:!0,header:e.jsx(g,{themeColor:"primary",level:2,children:"Title"}),content:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"}),onClose:()=>window.alert("close")},render(o){const{hasClose:s,header:t,content:d,onClose:i,className:n}=o;return e.jsxs("div",{className:`dialog-content ${n}`,onClick:c=>c.stopPropagation(),children:[i&&s&&e.jsx("button",{className:"dialog-close-btn",onClick:i,children:e.jsx(v,{width:20,height:20})}),e.jsx("div",{className:"dialog-header",children:t}),e.jsx("div",{className:"dialog-body",children:d}),e.jsxs("div",{className:"dialog-footer",children:[e.jsx(a,{onClick:()=>window.alert("ok"),variant:"filled",radius:"md",children:"OK"}),e.jsx(a,{onClick:()=>window.alert("cancel"),variant:"filled",radius:"md",className:"cancel-btn",children:"Cancel"})]})]})}},l={name:"互動模式",args:{},render(o){return e.jsx(O,{...o})}};var m,p,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    isOpen: true,
    hasClose: true,
    header: <Title themeColor="primary" level={2}>
        Title
      </Title>,
    content: <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard
      </p>,
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
          <Button onClick={() => window.alert('ok')} variant="filled" radius="md">
            OK
          </Button>
          <Button onClick={() => window.alert('cancel')} variant="filled" radius="md" className="cancel-btn">
            Cancel
          </Button>
        </div>
      </div>;
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,C,y;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '互動模式',
  args: {},
  render(args) {
    return <DemoWithHook {...args} />;
  }
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const J=["Default","Demo"];export{r as Default,l as Demo,J as __namedExportsOrder,G as default};
