import{j as r}from"./jsx-runtime-DEdD30eg.js";import{D as i}from"./divider-BycvzGtY.js";import"./index-RYns6xqu.js";import"./string-ECkTvc_B.js";const O={title:"Component/Divider",component:i,tags:["autodocs"],argTypes:{width:{description:"線條寬度",control:{type:"select"},options:["1px","2px","3px","4px","5px"],table:{category:"PROPS"}},type:{description:"線條樣式",control:{type:"select"},options:["solid","dashed","dotted"],table:{category:"PROPS"}},direction:{description:"線條方向",control:{type:"select"},options:["horizontal","vertical"],table:{category:"PROPS"}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},children:{description:"分隔線內容",table:{category:"SLOTS"}}},args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:"",children:"Divider"},parameters:{docs:{title:"分隔線",description:{component:"分隔線組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return r.jsx(i,{...e})}},d={name:"文字對齊",args:{width:"1px",type:"solid",direction:"horizontal",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,align:"start",children:"Start"}),r.jsx(i,{...e,align:"center",children:"Center"}),r.jsx(i,{...e,align:"end",children:"End"})]})}},s={name:"線條粗細",args:{width:"1px",type:"solid",direction:"horizontal",align:"center",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,width:"1px",children:"1px"}),r.jsx(i,{...e,width:"2px",children:"2px"}),r.jsx(i,{...e,width:"3px",children:"3px"}),r.jsx(i,{...e,width:"4px",children:"4px"}),r.jsx(i,{...e,width:"5px",children:"5px"})]})}},a={name:"線條類型",args:{width:"1px",type:"solid",direction:"horizontal",align:"center",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,type:"solid",children:"Solid"}),r.jsx(i,{...e,type:"dotted",children:"Dotted"}),r.jsx(i,{...e,type:"dashed",children:"Dashed"})]})}},n={name:"線條方向",args:{width:"1px",type:"solid",direction:"vertical",className:""},render(e){return r.jsxs("div",{style:{display:"flex",height:"100px"},children:[r.jsx(i,{...e,align:"start",children:"Start"}),r.jsx(i,{...e,align:"center",children:"Center"}),r.jsx(i,{...e,align:"end",children:"End"})]})}};var o,c,l;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Divider {...args} />;
  }
}`,...(l=(c=t.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};var p,x,h;d.parameters={...d.parameters,docs:{...(p=d.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '文字對齊',
  args: {
    width: '1px',
    type: 'solid',
    direction: 'horizontal',
    className: ''
  },
  render(args) {
    return <div>
        <Divider {...args} align="start">
          Start
        </Divider>
        <Divider {...args} align="center">
          Center
        </Divider>
        <Divider {...args} align="end">
          End
        </Divider>
      </div>;
  }
}`,...(h=(x=d.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var g,m,v;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '線條粗細',
  args: {
    width: '1px',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: ''
  },
  render(args) {
    return <div>
        <Divider {...args} width="1px">
          1px
        </Divider>
        <Divider {...args} width="2px">
          2px
        </Divider>
        <Divider {...args} width="3px">
          3px
        </Divider>
        <Divider {...args} width="4px">
          4px
        </Divider>
        <Divider {...args} width="5px">
          5px
        </Divider>
      </div>;
  }
}`,...(v=(m=s.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var D,y,u;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '線條類型',
  args: {
    width: '1px',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: ''
  },
  render(args) {
    return <div>
        <Divider {...args} type="solid">
          Solid
        </Divider>
        <Divider {...args} type="dotted">
          Dotted
        </Divider>
        <Divider {...args} type="dashed">
          Dashed
        </Divider>
      </div>;
  }
}`,...(u=(y=a.parameters)==null?void 0:y.docs)==null?void 0:u.source}}};var j,w,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '線條方向',
  args: {
    width: '1px',
    type: 'solid',
    direction: 'vertical',
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      height: '100px'
    }}>
        <Divider {...args} align="start">
          Start
        </Divider>
        <Divider {...args} align="center">
          Center
        </Divider>
        <Divider {...args} align="end">
          End
        </Divider>
      </div>;
  }
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const b=["Default","Align","Type","Width","Direction"];export{d as Align,t as Default,n as Direction,s as Type,a as Width,b as __namedExportsOrder,O as default};
