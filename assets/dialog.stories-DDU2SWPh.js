import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./index-RYns6xqu.js";import{B as s,u as v}from"./toast-Bo4Irzar.js";import"./index-sbqOYYIm.js";import{T as y}from"./title-C0o4P0Zd.js";import"./checkbox-Dx9j1Oee.js";import"./input-CueOdQnq.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./radio-CMOPLxLt.js";import{D as g}from"./side-nav-BqDNOP6T.js";import"./breadcrumb-ByLCAha8.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./menu-BkHlZ5yp.js";import"./image-BUf_2wZ-.js";import"./status-indicator-BDww4a8h.js";import"./badge-vsbKzH_B.js";import"./layout-DbUmifqy.js";import{G as x,R as w,C as l}from"./grid-C0v7SZy_.js";import{C as O}from"./disable-circle-Qt9C8lli.js";import"./string-BqrfsRv8.js";import"./check-BnJBHFpS.js";import"./logout-Cs4pFqLv.js";import"./notification-NM2mg_B2.js";const U={title:"Component/Dialog",component:g,tags:["autodocs"],argTypes:{isOpen:{description:"是否開啟",table:{category:"PROPS"}},hasClose:{description:"是否有關閉按鈕",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},header:{description:"標題",table:{category:"SLOTS"}},content:{description:"內容",table:{category:"SLOTS"}},footer:{description:"附註",table:{category:"SLOTS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}}},args:{isOpen:!1,hasClose:!0,className:""},parameters:{docs:{title:"Dialog",description:{component:"彈窗組件的呈現及說明。"},source:{transform(o,i){const{args:t}=i;return`
<Dialog
  isOpen=${(t==null?void 0:t.isOpen)||!1}
  hasClose=${(t==null?void 0:t.hasClose)||!1}
  onClose={closeDialog}
  title="${t==null?void 0:t.title}"
  content="${t==null?void 0:t.content}"
  footer={
    <Grid fluid>
      <Row>
        <Column sm={4}>
          <Button
            onClick={() => window.alert('ok')}
            variant="filled"
            width="fluid"
          >
            OK
          </Button>
        </Column>
        <Column sm={4}>
          <Button
            onClick={() => window.alert('cancel')}
            themeColor="primary"
            variant="soft"
            width="fluid"
          >
            Cancel
          </Button>
        </Column>
      </Row>
    </Grid>
  }
/>`}}}}},b=o=>{const{isOpen:i,header:t,content:d,openDialog:n,closeDialog:m}=v({isOpen:(o==null?void 0:o.isOpen)||!1,header:e.jsx(y,{themeColor:"primary",level:2,children:"Title"}),content:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"})});return e.jsxs(e.Fragment,{children:[e.jsx(s,{onClick:n,variant:"filled",children:"Open Dialog"}),e.jsx(g,{isOpen:i,hasClose:(o==null?void 0:o.hasClose)||!1,onClose:m,header:t,content:d,footer:e.jsx(x,{fluid:!0,children:e.jsxs(w,{children:[e.jsx(l,{sm:4,children:e.jsx(s,{onClick:()=>window.alert("ok"),variant:"filled",width:"fluid",children:"OK"})}),e.jsx(l,{sm:4,children:e.jsx(s,{onClick:()=>window.alert("cancel"),themeColor:"primary",variant:"soft",width:"fluid",children:"Cancel"})})]})})})]})},r={name:"預設項目",args:{isOpen:!0,hasClose:!0,header:e.jsx(y,{themeColor:"primary",level:2,children:"Title"}),content:e.jsx("p",{children:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard"}),onClose:()=>window.alert("close")},render(o){const{hasClose:i,header:t,content:d,onClose:n,className:m}=o;return e.jsxs("div",{className:`dialog-content ${m}`,onClick:j=>j.stopPropagation(),children:[n&&i&&e.jsx("button",{className:"dialog-close-btn",onClick:n,children:e.jsx(O,{width:20,height:20})}),e.jsx("div",{className:"dialog-header",children:t}),e.jsx("div",{className:"dialog-body",children:d}),e.jsx("div",{className:"dialog-footer",children:e.jsx(x,{fluid:!0,children:e.jsxs(w,{children:[e.jsx(l,{sm:4,children:e.jsx(s,{onClick:()=>window.alert("ok"),variant:"filled",width:"fluid",children:"OK"})}),e.jsx(l,{sm:4,children:e.jsx(s,{onClick:()=>window.alert("cancel"),themeColor:"primary",variant:"soft",width:"fluid",children:"Cancel"})})]})})})]})}},a={name:"互動模式",args:{},render(o){return e.jsx(b,{...o})}};var c,p,u;r.parameters={...r.parameters,docs:{...(c=r.parameters)==null?void 0:c.docs,source:{originalSource:`{
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
          <Grid fluid>
            <Row>
              <Column sm={4}>
                <Button onClick={() => window.alert('ok')} variant="filled" width="fluid">
                  OK
                </Button>
              </Column>
              <Column sm={4}>
                <Button onClick={() => window.alert('cancel')} themeColor="primary" variant="soft" width="fluid">
                  Cancel
                </Button>
              </Column>
            </Row>
          </Grid>
        </div>
      </div>;
  }
}`,...(u=(p=r.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};var h,C,f;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '互動模式',
  args: {},
  render(args) {
    return <DemoWithHook {...args} />;
  }
}`,...(f=(C=a.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const X=["Default","Demo"];export{r as Default,a as Demo,X as __namedExportsOrder,U as default};
