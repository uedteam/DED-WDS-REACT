import{j as r}from"./jsx-runtime-DEdD30eg.js";import{D as i}from"./divider-C3Nbyf0A.js";import"./index-RYns6xqu.js";const f={title:"Component/Divider",component:i,tags:["autodocs"],argTypes:{width:{description:"線條寬度",control:{type:"select"},options:["xsmall","small","medium","large","xlarge"],table:{category:"PROPS"}},type:{description:"線條樣式",control:{type:"select"},options:["solid","dashed","dotted"],table:{category:"PROPS"}},direction:{description:"線條方向",control:{type:"select"},options:["horizontal","vertical"],table:{category:"PROPS"}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},children:{description:"分隔線內容",table:{category:"SLOTS"}}},args:{themeColor:"none",width:"small",type:"solid",direction:"horizontal",align:"center",className:"",children:"Divider"},parameters:{docs:{title:"分隔線",description:{component:"分隔線組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return r.jsx(i,{...e})}},a={name:"文字對齊",args:{width:"small",type:"solid",direction:"horizontal",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,align:"start",children:"Start"}),r.jsx(i,{...e,align:"center",children:"Center"}),r.jsx(i,{...e,align:"end",children:"End"})]})}},s={name:"線條粗細",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,width:"xsmall",children:"xsmall(1px)"}),r.jsx(i,{...e,width:"small",children:"small(2px)"}),r.jsx(i,{...e,width:"medium",children:"medium(4px)"}),r.jsx(i,{...e,width:"large",children:"large(6px)"}),r.jsx(i,{...e,width:"xlarge",children:"xlarge(8px)"})]})}},d={name:"線條類型",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,type:"solid",children:"Solid"}),r.jsx(i,{...e,type:"dotted",children:"Dotted"}),r.jsx(i,{...e,type:"dashed",children:"Dashed"})]})}},n={name:"線條方向",args:{width:"small",type:"solid",direction:"vertical",className:""},render(e){return r.jsxs("div",{style:{display:"flex",height:"100px"},children:[r.jsx(i,{...e,align:"start",children:"Start"}),r.jsx(i,{...e,align:"center",children:"Center"}),r.jsx(i,{...e,align:"end",children:"End"})]})}};var l,o,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Divider {...args} />;
  }
}`,...(c=(o=t.parameters)==null?void 0:o.docs)==null?void 0:c.source}}};var m,p,g;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '文字對齊',
  args: {
    width: 'small',
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
}`,...(g=(p=a.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var h,v,x;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '線條粗細',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: ''
  },
  render(args) {
    return <div>
        <Divider {...args} width="xsmall">
          xsmall(1px)
        </Divider>
        <Divider {...args} width="small">
          small(2px)
        </Divider>
        <Divider {...args} width="medium">
          medium(4px)
        </Divider>
        <Divider {...args} width="large">
          large(6px)
        </Divider>
        <Divider {...args} width="xlarge">
          xlarge(8px)
        </Divider>
      </div>;
  }
}`,...(x=(v=s.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var D,u,y;d.parameters={...d.parameters,docs:{...(D=d.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '線條類型',
  args: {
    width: 'small',
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
}`,...(y=(u=d.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var j,w,S;n.parameters={...n.parameters,docs:{...(j=n.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '線條方向',
  args: {
    width: 'small',
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
}`,...(S=(w=n.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};const O=["Default","Align","Type","Width","Direction"];export{a as Align,t as Default,n as Direction,s as Type,d as Width,O as __namedExportsOrder,f as default};
