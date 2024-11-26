import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./title-BhgMHOD0.js";import{B as l}from"./button-DaRa4qVq.js";import"./checkbox-RCY9NRZS.js";import"./input-DU8LjNuW.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{D as g}from"./avatar-Bb12VLS8.js";import"./breadcrumb-BsaxLK5_.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-CaQKrkF-.js";import"./image-BTC2SKJX.js";import{r as c}from"./index-RYns6xqu.js";import"./usePosition-CMmoxCjh.js";import"./lodash-CcdATr5u.js";import"./auo-TMZ-BSoc.js";import"./check-BnJBHFpS.js";import"./offline-Ddz6ifNG.js";import"./index-sbqOYYIm.js";import"./arrow_down-DA-sWbvp.js";const C=()=>{const[o,n]=c.useState({isOpen:!1,title:"",content:null}),i=c.useCallback((e,s)=>{n({isOpen:!0,title:e,content:s})},[]),r=c.useCallback(()=>{n(e=>({...e,isOpen:!1}))},[]);return{...o,openDialog:i,closeDialog:r}},q={title:"Component/Dialog",component:g,tags:["autodocs"],argTypes:{isOpen:{description:"是否開啟"},hasClose:{description:"是否有關閉按鈕"},title:{description:"標題",table:{category:"SLOTS"}},content:{description:"內容",table:{category:"SLOTS"}},footer:{description:"底部",table:{category:"SLOTS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}},className:{description:"客製化樣式"}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 的呈現及說明。"},source:{code:`<Dialog
  isOpen={isOpen}
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
      <Button
        onClick={handleOK}
        variant="contained"
      >
        OK
      </Button>
    </>
  }
/>`}}},args:{isOpen:!1,hasClose:!1,title:"Title",content:t.jsx("p",{children:"Content"}),className:""}},D=o=>{const{isOpen:n,content:i,openDialog:r,closeDialog:e}=C(),s=()=>{window.alert("ok"),e()},u=()=>{window.alert("cancel"),e()};return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>{r("Title",t.jsx("p",{children:"Content"}))},variant:"contained",children:"Open Dialog"}),t.jsx(g,{isOpen:n,onClose:e,title:t.jsx("div",{children:"123"}),content:i,footer:t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:u,variant:"contained",className:"cancel-btn",children:"Cancel"}),t.jsx(l,{onClick:s,variant:"contained",children:"OK"})]})})]})},a={name:"預設項目",args:{className:""},render(o){return t.jsx(D,{...o})}};var p,m,d;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    className: ''
  },
  render(args) {
    return <DefaultWithHook {...args} />;
  }
}`,...(d=(m=a.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const z=["Default"];export{a as Default,z as __namedExportsOrder,q as default};
