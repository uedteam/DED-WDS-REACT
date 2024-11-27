import{j as t}from"./jsx-runtime-DEdD30eg.js";import{T as D}from"./title-BwTyIEWm.js";import{B as l}from"./button-DaRa4qVq.js";import"./checkbox-RCY9NRZS.js";import"./input-DU8LjNuW.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{D as g}from"./avatar-COP49YBn.js";import"./breadcrumb-B4Mj-wYD.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-CaQKrkF-.js";import"./image-BUf_2wZ-.js";import{r as c}from"./index-RYns6xqu.js";import"./usePosition-CMmoxCjh.js";import"./lodash-CcdATr5u.js";import"./auo-TMZ-BSoc.js";import"./check-BnJBHFpS.js";import"./offline-Ddz6ifNG.js";import"./index-sbqOYYIm.js";import"./arrow_down-DA-sWbvp.js";const f=()=>{const[n,a]=c.useState({isOpen:!1,title:"",content:null}),s=c.useCallback((e,o)=>{a({isOpen:!0,title:e,content:o})},[]),i=c.useCallback(()=>{a(e=>({...e,isOpen:!1}))},[]);return{...n,openDialog:s,closeDialog:i}},A={title:"Component/Dialog",component:g,tags:["autodocs"],argTypes:{isOpen:{description:"是否開啟"},hasClose:{description:"是否有關閉按鈕"},title:{description:"標題",table:{category:"SLOTS"}},content:{description:"內容",table:{category:"SLOTS"}},footer:{description:"底部",table:{category:"SLOTS"}},onClose:{description:"關閉事件",table:{category:"EVENTS"}},className:{description:"客製化樣式"}},parameters:{docs:{title:"Dialog",description:{component:"Dialog 的呈現及說明。"},source:{code:`<Dialog
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
/>`}}},args:{isOpen:!1,hasClose:!1,className:""}},O=n=>{const{isOpen:a,title:s,content:i,openDialog:e,closeDialog:o}=f(),u=()=>{window.alert("ok"),o()},C=()=>{window.alert("cancel"),o()};return t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:()=>{e(t.jsx(D,{level:3,children:"Title"}),t.jsx("p",{children:"Content"}))},variant:"contained",children:"Open Dialog"}),t.jsx(g,{isOpen:a,onClose:o,title:s,content:i,footer:t.jsxs(t.Fragment,{children:[t.jsx(l,{onClick:C,variant:"contained",className:"cancel-btn",children:"Cancel"}),t.jsx(l,{onClick:u,variant:"contained",children:"OK"})]})})]})},r={name:"預設項目",args:{className:""},render(n){return t.jsx(O,{...n})}};var p,m,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    className: ''
  },
  render(args) {
    return <DefaultWithHook {...args} />;
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};const G=["Default"];export{r as Default,G as __namedExportsOrder,A as default};
