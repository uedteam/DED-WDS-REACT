import{j as r}from"./jsx-runtime-DEdD30eg.js";import{D as i}from"./divider-B2XNFVFD.js";import"./index-RYns6xqu.js";const T={title:"Component/Divider",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["none","primary","secondary","tertiary","success","warning","error","info"],table:{category:"PROPS"}},width:{description:"線條寬度",control:{type:"select"},options:["xsmall","small","medium","large","xlarge"],table:{category:"PROPS"}},type:{description:"線條樣式",control:{type:"select"},options:["solid","dashed","dotted"],table:{category:"PROPS"}},direction:{description:"線條方向",control:{type:"select"},options:["horizontal","vertical"],table:{category:"PROPS"}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},children:{description:"分隔線內容",table:{category:"SLOTS"}}},args:{themeColor:"none",width:"xsmall",type:"solid",direction:"horizontal",align:"center",className:"",children:"Divider"},parameters:{docs:{title:"分隔線",description:{component:"分隔線的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return r.jsx(i,{...e})}},a={name:"文字對齊",args:{width:"small",type:"solid",direction:"horizontal",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,align:"start",children:"Start"}),r.jsx(i,{...e,align:"center",children:"Center"}),r.jsx(i,{...e,align:"end",children:"End"})]})}},s={name:"線條粗細",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,width:"xsmall",children:"xsmall(1px)"}),r.jsx(i,{...e,width:"small",children:"small(2px)"}),r.jsx(i,{...e,width:"medium",children:"medium(4px)"}),r.jsx(i,{...e,width:"large",children:"large(6px)"}),r.jsx(i,{...e,width:"xlarge",children:"xlarge(8px)"})]})}},d={name:"線條類型",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,type:"solid",children:"Solid"}),r.jsx(i,{...e,type:"dotted",children:"Dotted"}),r.jsx(i,{...e,type:"dashed",children:"Dashed"})]})}},o={name:"線條方向",args:{width:"small",type:"solid",direction:"vertical",className:""},render(e){return r.jsxs("div",{style:{display:"flex",height:"100px"},children:[r.jsx(i,{...e,align:"start",children:"Start"}),r.jsx(i,{...e,align:"center",children:"Center"}),r.jsx(i,{...e,align:"end",children:"End"})]})}},n={name:"線條顏色",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,themeColor:"primary",children:"Primary"}),r.jsx(i,{...e,themeColor:"secondary",children:"Secondary"}),r.jsx(i,{...e,themeColor:"tertiary",children:"Tertiary"}),r.jsx(i,{...e,themeColor:"info",children:"Info"}),r.jsx(i,{...e,themeColor:"success",children:"Success"}),r.jsx(i,{...e,themeColor:"warning",children:"Warning"}),r.jsx(i,{...e,themeColor:"error",children:"Error"})]})}};var l,c,m;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Divider {...args} />;
  }
}`,...(m=(c=t.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,h,g;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(h=a.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var v,x,D;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(D=(x=s.parameters)==null?void 0:x.docs)==null?void 0:D.source}}};var y,u,j;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(j=(u=d.parameters)==null?void 0:u.docs)==null?void 0:j.source}}};var w,S,C;o.parameters={...o.parameters,docs:{...(w=o.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(C=(S=o.parameters)==null?void 0:S.docs)==null?void 0:C.source}}};var P,f,N;n.parameters={...n.parameters,docs:{...(P=n.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '線條顏色',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: ''
  },
  render(args) {
    return <div>
        <Divider {...args} themeColor="primary">
          Primary
        </Divider>
        <Divider {...args} themeColor="secondary">
          Secondary
        </Divider>
        <Divider {...args} themeColor="tertiary">
          Tertiary
        </Divider>
        <Divider {...args} themeColor="info">
          Info
        </Divider>
        <Divider {...args} themeColor="success">
          Success
        </Divider>
        <Divider {...args} themeColor="warning">
          Warning
        </Divider>
        <Divider {...args} themeColor="error">
          Error
        </Divider>
      </div>;
  }
}`,...(N=(f=n.parameters)==null?void 0:f.docs)==null?void 0:N.source}}};const b=["Default","Align","Type","Width","Direction","ThemeColor"];export{a as Align,t as Default,o as Direction,n as ThemeColor,s as Type,d as Width,b as __namedExportsOrder,T as default};
