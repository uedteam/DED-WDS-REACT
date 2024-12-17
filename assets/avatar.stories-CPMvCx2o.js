import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a}from"./styled-CCJNXJjx.js";import"./index-RYns6xqu.js";import"./title-BPnjcUZo.js";import"./lodash-CcdATr5u.js";import"./toast-BEzfIbOE.js";import"./disable-circle-Qt9C8lli.js";import"./status-indicator-C0euK5S5.js";import"./string-ECkTvc_B.js";import"./checkbox-gHzG2Us7.js";import"./check-BnJBHFpS.js";import"./input-Cqvs4Uxt.js";import"./index-sbqOYYIm.js";import"./textarea-CO8Z8fZG.js";import"./toggle-B_GFje5b.js";import"./radio-BhGOQQ7m.js";import"./breadcrumb-b1HMjbI-.js";import"./offline-Ddz6ifNG.js";import"./progress-circle-ReGt0b-K.js";import"./styled-7_Fd9YFd.js";import"./progress-line-DHphvmbz.js";import"./menu-DboPxrNc.js";import"./image-BUf_2wZ-.js";const w={title:"Component/Avatar",component:a,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select",options:["circle","square"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["xsmall","small","medium","large"]},table:{category:"PROPS"}},status:{description:"狀態",control:{type:"select",options:["none","online","idle","busy","offline"]},table:{category:"PROPS"}},src:{description:"圖片連結",table:{category:"PROPS"}},alt:{description:"圖片描述",table:{category:"PROPS"}},userName:{description:"使用者名稱",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},parameters:{docs:{title:"Avatar",description:{component:"個人頭像組件的呈現及說明。"}}},args:{shape:"circle",size:"large",status:"none",src:"https://picsum.photos/200/300",alt:"無圖顯示",userName:"Kevin",className:""}},r={name:"預設項目",args:{},render(s){return e.jsx(a,{...s})}},t={name:"頭像形狀",args:{src:"https://picsum.photos/320/240"},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="square" status="idle" />
        `}}},render(s){return e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=1",size:"large",shape:"circle",status:"online"}),e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=2",size:"large",shape:"square",status:"idle"})]})}},o={name:"頭像狀態",args:{shape:"circle",size:"large",src:"https://picsum.photos/320/240"},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="circle" status="idle" />
<Avatar {...args} size="large" shape="circle" status="busy" />
<Avatar {...args} size="large" shape="circle" status="offline" />
        `}}},render(s){return e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=1",shape:"circle"}),e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=2",shape:"circle",status:"online"}),e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=3",shape:"circle",status:"idle"}),e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=4",shape:"circle",status:"busy"}),e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=5",shape:"circle",status:"offline"})]})}};var p,i,c;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(c=(i=r.parameters)==null?void 0:i.docs)==null?void 0:c.source}}};var l,n,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '頭像形狀',
  args: {
    src: 'https://picsum.photos/320/240'
  },
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
        <Avatar {...args} src="https://picsum.photos/200/300?random=1" size="large" shape="circle" status="online" />
        <Avatar {...args} src="https://picsum.photos/200/300?random=2" size="large" shape="square" status="idle" />
      </div>;
  }
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var u,d,h;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
        <Avatar {...args} src="https://picsum.photos/200/300?random=1" shape="circle" />
        <Avatar {...args} src="https://picsum.photos/200/300?random=2" shape="circle" status="online" />
        <Avatar {...args} src="https://picsum.photos/200/300?random=3" shape="circle" status="idle" />
        <Avatar {...args} src="https://picsum.photos/200/300?random=4" shape="circle" status="busy" />
        <Avatar {...args} src="https://picsum.photos/200/300?random=5" shape="circle" status="offline" />
      </div>;
  }
}`,...(h=(d=o.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const B=["Default","AvatarShape","AvatarStatus"];export{t as AvatarShape,o as AvatarStatus,r as Default,B as __namedExportsOrder,w as default};