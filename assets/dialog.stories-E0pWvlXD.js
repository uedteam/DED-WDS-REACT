import{j as e}from"./jsx-runtime-DEdD30eg.js";import{T as C}from"./title-DjADW0si.js";import{B as l}from"./button-CZ9socs2.js";import"./checkbox-RCY9NRZS.js";import"./input-BZMFkDDL.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{D as p}from"./avatar-CZRMuJM3.js";import"./breadcrumb-DEhtghWx.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-BhwzE_Pi.js";import"./image-BUf_2wZ-.js";import"./index-RYns6xqu.js";import{u as D}from"./useDialog-Bg9wgsHg.js";import"./lodash-CcdATr5u.js";import"./auo-TMZ-BSoc.js";import"./check-BnJBHFpS.js";import"./offline-Ddz6ifNG.js";import"./index-sbqOYYIm.js";import"./arrow_down-DA-sWbvp.js";const q={title:"Component/Dialog",component:p,tags:["autodocs"],argTypes:{isOpen:{description:"是否開啟"},hasClose:{description:"是否有關閉按鈕"},title:{description:"標題",table:{category:"SLOTS"}},content:{description:"內容",table:{category:"SLOTS"}},footer:{description:"底部",table:{category:"SLOTS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}},className:{description:"客製化樣式"}},args:{isOpen:!1,hasClose:!1,className:""},parameters:{docs:{title:"Dialog",description:{component:"Dialog 的呈現及說明。"},source:{transform(o,i){const{args:t}=i;return`
const { isOpen, title, content, openDialog, closeDialog } = useDialog({
    isOpen: ${(t==null?void 0:t.isOpen)||!1},
    title: <Title level={3}>Title</Title>,
    content: <p>Content</p>,
  });

  const handleOK = () => {
    window.alert('ok');
    closeDialog();
  };

  const handleCancel = () => {
    window.alert('cancel');
    closeDialog();
  };

  return (
    <>
      <Button onClick={openDialog} variant="contained">
        Open Dialog
      </Button>
      <Dialog
        isOpen={isOpen}
        hasClose={args?.hasClose || false}
        onClose={closeDialog}
        title={title}
        content={content}
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
      />
    </>
  )`}}}}},h=o=>{const{isOpen:i,title:t,content:m,openDialog:d,closeDialog:a}=D({isOpen:(o==null?void 0:o.isOpen)||!1,title:e.jsx(C,{level:3,children:"Title"}),content:e.jsx("p",{children:"Content"})}),u=()=>{window.alert("ok"),a()},g=()=>{window.alert("cancel"),a()};return e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:d,variant:"contained",children:"Open Dialog"}),e.jsx(p,{isOpen:i,hasClose:(o==null?void 0:o.hasClose)||!1,onClose:a,title:t,content:m,footer:e.jsxs(e.Fragment,{children:[e.jsx(l,{onClick:g,variant:"contained",className:"cancel-btn",children:"Cancel"}),e.jsx(l,{onClick:u,variant:"contained",children:"OK"})]})})]})},n={name:"預設項目",args:{className:""},render(o){return e.jsx(h,{...o})}};var s,r,c;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    className: ''
  },
  render(args) {
    return <DefaultWithHook {...args} />;
  }
}`,...(c=(r=n.parameters)==null?void 0:r.docs)==null?void 0:c.source}}};const z=["Default"];export{n as Default,z as __namedExportsOrder,q as default};
