import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as d}from"./chunk-454WOBUV-CM0pFb8Z.js";import{R as r}from"./radio-C3rPQ8Ai.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";const p=[{label:"Option1",value:"option1"},{label:"Option2",value:"option2"},{label:"Option3",value:"option3"}],y={title:"Component/Radio",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["neutral","primary","secondary","success","warning","error","info"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},initValue:{description:"預設值",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},onChange:{description:"選擇選項後的事件",action:"onChange",table:{category:"EVENTS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"neutral",dataSource:p,initValue:"option1",direction:"row",className:"",onChange:d("onChange")},parameters:{docs:{title:"Radio Button",description:{component:"單選按鈕組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(e){return o.jsx(r,{...e})}},a={name:"主題色彩",args:{dataSource:p,initValue:"option1"},render(e){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(r,{...e,themeColor:"neutral"}),o.jsx(r,{...e,themeColor:"primary"}),o.jsx(r,{...e,themeColor:"secondary"}),o.jsx(r,{...e,themeColor:"info"}),o.jsx(r,{...e,themeColor:"success"}),o.jsx(r,{...e,themeColor:"warning"}),o.jsx(r,{...e,themeColor:"error"})]})}};var n,s,i;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Radio {...args} />;
  }
}`,...(i=(s=t.parameters)==null?void 0:s.docs)==null?void 0:i.source}}};var l,c,m;a.parameters={...a.parameters,docs:{...(l=a.parameters)==null?void 0:l.docs,source:{originalSource:`{
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
        <Radio {...args} themeColor="neutral" />
        <Radio {...args} themeColor="primary" />
        <Radio {...args} themeColor="secondary" />
        <Radio {...args} themeColor="info" />
        <Radio {...args} themeColor="success" />
        <Radio {...args} themeColor="warning" />
        <Radio {...args} themeColor="error" />
      </div>;
  }
}`,...(m=(c=a.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const R=["Default","Theme"];export{t as Default,a as Theme,R as __namedExportsOrder,y as default};
