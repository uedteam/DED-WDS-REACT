import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as h}from"./chunk-454WOBUV-CM0pFb8Z.js";import{C as r}from"./checkbox-DDlz9EWX.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./warning-DPjiZ-Sx.js";const C=[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],k={title:"Component/Checkbox",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["neutral","primary","secondary","success","warning","error","info"],control:{type:"select",options:["neutral","primary","secondary","success","warning","error","info"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"},required:!0},initValue:{description:"選中的項目",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選中選項改變時的回調函數",action:"onChange",table:{category:"EVENTS"}}},args:{themeColor:"neutral",dataSource:C,initValue:["option1","option3"],direction:"row",className:"",onChange:e=>h("onChange")(e)},parameters:{docs:{title:"Checkbox",description:{component:"複選框組件的呈現及說明。"}}}},a={name:"預設項目",args:{},render(e){return o.jsx(r,{...e})}},t={name:"主題色彩",args:{dataSource:C,initValue:["option1"],className:"",onChange:e=>h("onChange")(e)},parameters:{docs:{source:{code:`
<Checkbox {...args} themeColor="neutral" />
<Checkbox {...args} themeColor="primary" />
<Checkbox {...args} themeColor="secondary" />
<Checkbox {...args} themeColor="info" />
<Checkbox {...args} themeColor="success" />
<Checkbox {...args} themeColor="warning" />
<Checkbox {...args} themeColor="error" />
        `}}},render(e){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(r,{...e,themeColor:"neutral"}),o.jsx(r,{...e,themeColor:"primary"}),o.jsx(r,{...e,themeColor:"secondary"}),o.jsx(r,{...e,themeColor:"info"}),o.jsx(r,{...e,themeColor:"success"}),o.jsx(r,{...e,themeColor:"warning"}),o.jsx(r,{...e,themeColor:"error"})]})}};var s,n,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Checkbox {...args} />;
  }
}`,...(c=(n=a.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var i,l,m;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
<Checkbox {...args} themeColor="neutral" />
<Checkbox {...args} themeColor="primary" />
<Checkbox {...args} themeColor="secondary" />
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
        <Checkbox {...args} themeColor="neutral" />
        <Checkbox {...args} themeColor="primary" />
        <Checkbox {...args} themeColor="secondary" />
        <Checkbox {...args} themeColor="info" />
        <Checkbox {...args} themeColor="success" />
        <Checkbox {...args} themeColor="warning" />
        <Checkbox {...args} themeColor="error" />
      </div>;
  }
}`,...(m=(l=t.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const y=["Default","Theme"];export{a as Default,t as Theme,y as __namedExportsOrder,k as default};
