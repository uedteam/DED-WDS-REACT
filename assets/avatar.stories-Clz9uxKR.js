import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{A as a}from"./avatar-oi_T3493.js";import"./index-DJO9vBfz.js";import"./offline-BimsrpRK.js";const y={title:"Component/Avatar",component:a,tags:["autodocs"],argTypes:{shape:{description:"形狀",control:{type:"select",options:["circle","square"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["xsmall","small","medium","large"]},table:{category:"PROPS"}},status:{description:"狀態",control:{type:"select",options:["none","online","idle","busy","offline"]},table:{category:"PROPS"}},src:{description:"圖片連結",table:{category:"PROPS"}},alt:{description:"圖片描述",table:{category:"PROPS"}},userName:{description:"使用者名稱",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},parameters:{docs:{title:"Avatar",description:{component:"個人頭像的呈現及說明。"}}},args:{shape:"circle",size:"large",status:"none",src:"https://picsum.photos/200/300",alt:"無圖顯示",userName:"Kevin",className:""}},r={name:"預設項目",args:{},render(s){return e.jsx(a,{...s})}},t={name:"頭像形狀",args:{src:"https://picsum.photos/320/240"},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="square" status="idle" />
        `}}},render(s){return e.jsxs("div",{style:{display:"flex",gap:"32px",alignItems:"flex-end"},children:[e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=1",size:"large",shape:"circle",status:"online"}),e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=2",size:"large",shape:"square",status:"idle"})]})}},c={name:"頭像狀態",args:{shape:"circle",size:"large",src:"https://picsum.photos/320/240"},parameters:{docs:{source:{code:`
        <Avatar {...args} size="large" shape="circle" status="online" />
<Avatar {...args} size="large" shape="circle" status="idle" />
<Avatar {...args} size="large" shape="circle" status="busy" />
<Avatar {...args} size="large" shape="circle" status="offline" />
        `}}},render(s){return e.jsxs("div",{style:{display:"flex",gap:"16px",alignItems:"flex-end"},children:[e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=1",shape:"circle",status:"online"}),e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=2",shape:"circle",status:"idle"}),e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=3",shape:"circle",status:"busy"}),e.jsx(a,{...s,src:"https://picsum.photos/200/300?random=4",shape:"circle",status:"offline"})]})}};var o,i,p;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Avatar {...args} />;
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var l,n,u;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
}`,...(u=(n=t.parameters)==null?void 0:n.docs)==null?void 0:u.source}}};var m,d,h;c.parameters={...c.parameters,docs:{...(m=c.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
      gap: '16px',
      alignItems: 'flex-end'
    }}>
        <Avatar {...args} src="https://picsum.photos/200/300?random=1" shape="circle" status="online" />
        <Avatar {...args} src="https://picsum.photos/200/300?random=2" shape="circle" status="idle" />
        <Avatar {...args} src="https://picsum.photos/200/300?random=3" shape="circle" status="busy" />
        <Avatar {...args} src="https://picsum.photos/200/300?random=4" shape="circle" status="offline" />
      </div>;
  }
}`,...(h=(d=c.parameters)==null?void 0:d.docs)==null?void 0:h.source}}};const f=["Default","AvatarShape","AvatarStatus"];export{t as AvatarShape,c as AvatarStatus,r as Default,f as __namedExportsOrder,y as default};
