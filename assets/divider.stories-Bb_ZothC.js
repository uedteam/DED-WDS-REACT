import{j as r}from"./jsx-runtime-CkxqCPlQ.js";import{D as i}from"./divider-UhV-TImW.js";import"./index-DJO9vBfz.js";const R={title:"Component/Divider",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select"},options:["primary","secondary","tertiary","success","warning","error","info"],table:{category:"PROPS"}},width:{description:"線條寬度",control:{type:"select"},options:["xsmall","small","medium","large","xlarge"],table:{category:"PROPS"}},type:{description:"線條樣式",control:{type:"select"},options:["solid","dashed","dotted"],table:{category:"PROPS"}},direction:{description:"線條方向",control:{type:"select"},options:["horizontal","vertical"],table:{category:"PROPS"}},align:{description:"文字位置",control:{type:"select"},options:["start","center","end"],table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},children:{description:"分隔線內容",table:{category:"SLOTS"}}},args:{themeColor:"primary",width:"xsmall",type:"solid",direction:"horizontal",align:"center",className:"",children:"分隔線"},parameters:{docs:{title:"分隔線",description:{component:"分隔線的呈現及說明。"}}}},s={name:"預設項目",args:{},render(e){return r.jsx(i,{...e})}},t={name:"文字對齊",args:{width:"small",type:"solid",direction:"horizontal",className:"",children:"分隔線"},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,align:"start"}),r.jsx(i,{...e,align:"center"}),r.jsx(i,{...e,align:"end"})]})}},a={name:"線條粗細",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:""},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,width:"xsmall",children:"xsmall(1px)"}),r.jsx(i,{...e,width:"small",children:"small(2px)"}),r.jsx(i,{...e,width:"medium",children:"medium(4px)"}),r.jsx(i,{...e,width:"large",children:"large(6px)"}),r.jsx(i,{...e,width:"xlarge",children:"xlarge(8px)"})]})}},o={name:"線條類型",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:"",children:"分隔線"},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e,type:"solid"}),r.jsx(i,{...e,type:"dotted"}),r.jsx(i,{...e,type:"dashed"})]})}},d={name:"線條方向",args:{width:"small",type:"solid",direction:"vertical",className:"",children:"分隔線"},render(e){return r.jsxs("div",{style:{display:"flex",height:"100px"},children:[r.jsx(i,{...e,align:"start"}),r.jsx(i,{...e,align:"center"}),r.jsx(i,{...e,align:"end"})]})}},l={name:"線條顏色",args:{width:"small",type:"solid",direction:"horizontal",align:"center",className:"",children:"分隔線"},render(e){return r.jsxs("div",{children:[r.jsx(i,{...e}),r.jsx(i,{...e,themeColor:"primary"}),r.jsx(i,{...e,themeColor:"secondary"}),r.jsx(i,{...e,themeColor:"tertiary"}),r.jsx(i,{...e,themeColor:"info"}),r.jsx(i,{...e,themeColor:"success"}),r.jsx(i,{...e,themeColor:"warning"}),r.jsx(i,{...e,themeColor:"error"})]})}};var n,c,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Divider {...args} />;
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var p,h,g;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '文字對齊',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    className: '',
    children: '分隔線'
  },
  render(args) {
    return <div>
        <Divider {...args} align="start" />
        <Divider {...args} align="center" />
        <Divider {...args} align="end" />
      </div>;
  }
}`,...(g=(h=t.parameters)==null?void 0:h.docs)==null?void 0:g.source}}};var x,v,y;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
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
}`,...(y=(v=a.parameters)==null?void 0:v.docs)==null?void 0:y.source}}};var u,D,j;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '線條類型',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: '',
    children: '分隔線'
  },
  render(args) {
    return <div>
        <Divider {...args} type="solid" />
        <Divider {...args} type="dotted" />
        <Divider {...args} type="dashed" />
      </div>;
  }
}`,...(j=(D=o.parameters)==null?void 0:D.docs)==null?void 0:j.source}}};var w,C,S;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '線條方向',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'vertical',
    className: '',
    children: '分隔線'
  },
  render(args) {
    return <div style={{
      display: 'flex',
      height: '100px'
    }}>
        <Divider {...args} align="start" />
        <Divider {...args} align="center" />
        <Divider {...args} align="end" />
      </div>;
  }
}`,...(S=(C=d.parameters)==null?void 0:C.docs)==null?void 0:S.source}}};var N,P,f;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '線條顏色',
  args: {
    width: 'small',
    type: 'solid',
    direction: 'horizontal',
    align: 'center',
    className: '',
    children: '分隔線'
  },
  render(args) {
    return <div>
        <Divider {...args} />
        <Divider {...args} themeColor="primary" />
        <Divider {...args} themeColor="secondary" />
        <Divider {...args} themeColor="tertiary" />
        <Divider {...args} themeColor="info" />
        <Divider {...args} themeColor="success" />
        <Divider {...args} themeColor="warning" />
        <Divider {...args} themeColor="error" />
      </div>;
  }
}`,...(f=(P=l.parameters)==null?void 0:P.docs)==null?void 0:f.source}}};const T=["Default","Align","Type","Width","Direction","ThemeColor"];export{t as Align,s as Default,d as Direction,l as ThemeColor,a as Type,o as Width,T as __namedExportsOrder,R as default};
