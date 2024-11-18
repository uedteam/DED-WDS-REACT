import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{a as h}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{C as r}from"./checkbox-C5iBvt2s.js";import"./index-DJO9vBfz.js";import"./check-CIei_J1J.js";const C=[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],b={title:"Component/Checkbox",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","tertiary","success","warning","error","info"],control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"},required:!0},initValue:{description:"選中的項目",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選中選項改變時的回調函數",action:"onChange",table:{category:"EVENTS"}}},args:{themeColor:"primary",dataSource:C,initValue:["option1","option3"],direction:"row",className:"",onChange:e=>h("onChange")(e)},parameters:{docs:{title:"Checkbox",description:{component:"Checkbox 組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return o.jsx(r,{...e})}},a={name:"主題色彩",args:{dataSource:C,initValue:["option1"],className:"",onChange:e=>h("onChange")(e)},parameters:{docs:{source:{code:`
<Checkbox {...args} themeColor="primary" />
<Checkbox {...args} themeColor="secondary" />
<Checkbox {...args} themeColor="tertiary" />
<Checkbox {...args} themeColor="info" />
<Checkbox {...args} themeColor="success" />
<Checkbox {...args} themeColor="warning" />
<Checkbox {...args} themeColor="error" />
        `}}},render(e){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(r,{...e,themeColor:"primary"}),o.jsx(r,{...e,themeColor:"secondary"}),o.jsx(r,{...e,themeColor:"tertiary"}),o.jsx(r,{...e,themeColor:"info"}),o.jsx(r,{...e,themeColor:"success"}),o.jsx(r,{...e,themeColor:"warning"}),o.jsx(r,{...e,themeColor:"error"})]})}};var s,n,c;t.parameters={...t.parameters,docs:{...(s=t.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Checkbox {...args} />;
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,m;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    dataSource: options,
    initValue: ['option1'],
    className: '',
    onChange: e => action('onChange')(e)
  },
  parameters: {
    docs: {
      source: {
        code: \`
<Checkbox {...args} themeColor="primary" />
<Checkbox {...args} themeColor="secondary" />
<Checkbox {...args} themeColor="tertiary" />
<Checkbox {...args} themeColor="info" />
<Checkbox {...args} themeColor="success" />
<Checkbox {...args} themeColor="warning" />
<Checkbox {...args} themeColor="error" />
        \`
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <Checkbox {...args} themeColor="primary" />
        <Checkbox {...args} themeColor="secondary" />
        <Checkbox {...args} themeColor="tertiary" />
        <Checkbox {...args} themeColor="info" />
        <Checkbox {...args} themeColor="success" />
        <Checkbox {...args} themeColor="warning" />
        <Checkbox {...args} themeColor="error" />
      </div>;
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const y=["Default","Theme"];export{t as Default,a as Theme,y as __namedExportsOrder,b as default};
