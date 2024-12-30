import{j as s}from"./jsx-runtime-DEdD30eg.js";import{a}from"./pagination-BcWBc1p5.js";import"./index-RYns6xqu.js";import"./disable-circle-np6-bHDN.js";import"./string-BqrfsRv8.js";import"./logout-Cs4pFqLv.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-BeC0CIbY.js";import"./toast-DIhnouBr.js";import"./title-JGunjryD.js";import"./index-sbqOYYIm.js";import"./checkbox-BBF5yrDs.js";import"./check-BnJBHFpS.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./divider-ChKDBDeF.js";import"./image-CZs88QCg.js";import"./input-DoUPnDdK.js";import"./radio-CMOPLxLt.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./menu-Burl5-s8.js";import"./status-indicator-BDww4a8h.js";import"./layout-DbUmifqy.js";import"./tag-zODciKoh.js";import"./notification-NM2mg_B2.js";const H={title:"Component/Avatar",component:a,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select",options:["circle","square"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},status:{description:"狀態",control:{type:"select",options:["none","online","idle","busy","offline"]},table:{category:"PROPS"}},isShowInfo:{description:"是否顯示資訊",table:{category:"PROPS"}},src:{description:"圖片連結",table:{category:"PROPS"}},alt:{description:"圖片描述",table:{category:"PROPS"}},userName:{description:"使用者名稱",table:{category:"PROPS"}},caption:{description:"使用者描述",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},parameters:{docs:{title:"Avatar",description:{component:"個人頭像組件的呈現及說明。"}}},args:{shape:"circle",size:"large",status:"none",isShowInfo:!0,src:"https://storage.googleapis.com/ded-wds-bucket/monkey.png",alt:"無圖顯示",userName:"Name",caption:"Caption",className:""}},t={name:"預設項目",args:{},render(e){return s.jsx(a,{...e})}},r={name:"頭像形狀",args:{},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="square" status="idle" />
        `}}},render(e){return s.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png",size:"large",shape:"circle",status:"online"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/tigger.png",size:"large",shape:"square",status:"idle"})]})}},o={name:"頭像狀態",args:{shape:"circle",size:"large",src:"https://picsum.photos/320/240"},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="circle" status="idle" />
<Avatar {...args} size="large" shape="circle" status="busy" />
<Avatar {...args} size="large" shape="circle" status="offline" />
        `}}},render(e){return s.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/fox.png",shape:"circle"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/lion.png",shape:"circle",status:"online"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/koala.png",shape:"circle",status:"idle"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/dog.png",shape:"circle",status:"busy"}),s.jsx(a,{...e,src:"https://storage.googleapis.com/ded-wds-bucket/pig.png",shape:"circle",status:"offline"})]})}};var i,c,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var l,g,n;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(n=(g=r.parameters)==null?void 0:g.docs)==null?void 0:n.source}}};var d,m,u;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(u=(m=o.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};const J=["Default","AvatarShape","AvatarStatus"];export{r as AvatarShape,o as AvatarStatus,t as Default,J as __namedExportsOrder,H as default};
