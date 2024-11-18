import{j as o}from"./jsx-runtime-CkxqCPlQ.js";import{a as d}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{R as r}from"./radio-DTBF53n7.js";import"./index-DJO9vBfz.js";import"./check-CIei_J1J.js";const p=[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],x={title:"Component/Radio",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},initValue:{description:"預設值",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},onChange:{description:"選擇選項後的事件",action:"onChange",table:{category:"EVENTS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"primary",dataSource:p,initValue:"option1",direction:"row",className:"",onChange:d("onChange")},parameters:{docs:{title:"Radio Button",description:{component:"Radio Button 組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return o.jsx(r,{...e})}},a={name:"主題色彩",args:{dataSource:p,initValue:"option1"},render(e){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(r,{...e,themeColor:"primary"}),o.jsx(r,{...e,themeColor:"secondary"}),o.jsx(r,{...e,themeColor:"tertiary"}),o.jsx(r,{...e,themeColor:"info"}),o.jsx(r,{...e,themeColor:"success"}),o.jsx(r,{...e,themeColor:"warning"}),o.jsx(r,{...e,themeColor:"error"})]})}};var n,i,s;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Radio {...args} />;
  }
}`,...(s=(i=t.parameters)==null?void 0:i.docs)==null?void 0:s.source}}};var c,l,m;a.parameters={...a.parameters,docs:{...(c=a.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    dataSource: options,
    initValue: 'option1'
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Radio {...args} themeColor="primary" />
        <Radio {...args} themeColor="secondary" />
        <Radio {...args} themeColor="tertiary" />
        <Radio {...args} themeColor="info" />
        <Radio {...args} themeColor="success" />
        <Radio {...args} themeColor="warning" />
        <Radio {...args} themeColor="error" />
      </div>;
  }
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const R=["Default","Theme"];export{t as Default,a as Theme,R as __namedExportsOrder,x as default};
