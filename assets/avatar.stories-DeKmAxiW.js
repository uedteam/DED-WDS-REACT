import{j as s}from"./jsx-runtime-DEdD30eg.js";import{a}from"./pagination-C49yagpW.js";import"./index-RYns6xqu.js";import"./title-CD8xfGAz.js";import"./toast-Cf76PChB.js";import"./disable-circle-Qt9C8lli.js";import"./string-BqrfsRv8.js";import"./checkbox-Dx9j1Oee.js";import"./check-BnJBHFpS.js";import"./input-DgRKury_.js";import"./index-sbqOYYIm.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./radio-CMOPLxLt.js";import"./breadcrumb-D2ntUWZ-.js";import"./navigate-arrow-6VIhmLdI.js";import"./progress-circle-ReGt0b-K.js";import"./styled-7_Fd9YFd.js";import"./progress-line-DHphvmbz.js";import"./menu-HIpPoV0X.js";import"./image-CZs88QCg.js";import"./status-indicator-BDww4a8h.js";const T={title:"Component/Avatar",component:a,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select",options:["circle","square"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},status:{description:"狀態",control:{type:"select",options:["none","online","idle","busy","offline"]},table:{category:"PROPS"}},isShowInfo:{description:"是否顯示資訊",table:{category:"PROPS"}},src:{description:"圖片連結",table:{category:"PROPS"}},alt:{description:"圖片描述",table:{category:"PROPS"}},userName:{description:"使用者名稱",table:{category:"PROPS"}},caption:{description:"使用者描述",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},parameters:{docs:{title:"Avatar",description:{component:"個人頭像組件的呈現及說明。"}}},args:{shape:"circle",size:"large",status:"none",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/monkey.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""}},t={name:"預設項目",args:{},render(e){return s.jsx(a,{...e})}},r={name:"頭像形狀",args:{},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="square" status="idle" />
        `}}},render(e){return s.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png",size:"large",shape:"circle",status:"online"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/tigger.png",size:"large",shape:"square",status:"idle"})]})}},o={name:"頭像狀態",args:{shape:"circle",size:"large",src:"https://picsum.photos/320/240"},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="circle" status="idle" />
<Avatar {...args} size="large" shape="circle" status="busy" />
<Avatar {...args} size="large" shape="circle" status="offline" />
        `}}},render(e){return s.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png",shape:"circle"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/lion.png",shape:"circle",status:"online"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/koala.png",shape:"circle",status:"idle"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/dog.png",shape:"circle",status:"busy"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/pig.png",shape:"circle",status:"offline"})]})}};var c,i,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(p=(i=t.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,g,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '頭像形狀',
  args: {},
  parameters: {
    docs: {
      source: {
        code: \`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="square" status="idle" />
        \`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '32px',
      alignItems: 'flex-end'
    }}>
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/fox.png" size="large" shape="circle" status="online" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/tigger.png" size="large" shape="square" status="idle" />
      </div>;
  }
}`,...(n=(g=r.parameters)==null?void 0:g.docs)==null?void 0:n.source}}};var d,u,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '頭像狀態',
  args: {
    shape: 'circle',
    size: 'large',
    src: 'https://picsum.photos/320/240'
  },
  parameters: {
    docs: {
      source: {
        code: \`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="circle" status="idle" />
<Avatar {...args} size="large" shape="circle" status="busy" />
<Avatar {...args} size="large" shape="circle" status="offline" />
        \`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '32px',
      alignItems: 'flex-end'
    }}>
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/fox.png" shape="circle" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/lion.png" shape="circle" status="online" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/koala.png" shape="circle" status="idle" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/dog.png" shape="circle" status="busy" />
        <Avatar {...args} src="https://storage.googleapis.com/ded-wds-bucket/pig.png" shape="circle" status="offline" />
      </div>;
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};const B=["Default","AvatarShape","AvatarStatus"];export{r as AvatarShape,o as AvatarStatus,t as Default,B as __namedExportsOrder,T as default};
