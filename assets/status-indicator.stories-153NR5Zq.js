import{j as t}from"./jsx-runtime-DEdD30eg.js";import{S as e}from"./status-indicator-BREqtsMD.js";import{c as o,d as n,W as s,E as c,Q as f,D as l}from"./disable-circle-Qt9C8lli.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const j={title:"Component/Status-Indicator",component:e,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},variant:{description:"樣式變體",control:{type:"select",options:["filled","text"]},table:{category:"PROPS"}},prefix:{description:"前綴元素",options:["None","InfoCircleIcon","SuccessCircleIcon","WarningCircleIcon","ErrorCircleIcon","QuestionCircleIcon","DisableCircleIcon"],mapping:{None:null,InfoCircleIcon:t.jsx(o,{width:20,height:20}),SuccessCircleIcon:t.jsx(n,{width:20,height:20}),WarningCircleIcon:t.jsx(s,{width:20,height:20}),ErrorCircleIcon:t.jsx(c,{width:20,height:20}),QuestionCircleIcon:t.jsx(f,{width:20,height:20}),DisableCircleIcon:t.jsx(l,{width:20,height:20})},control:{type:"select"},table:{category:"PROPS"}},children:{description:"內容",table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"success",variant:"filled",children:"Success",prefix:"None",size:"medium",className:""},parameters:{docs:{title:"StatusIndicator",description:{component:"狀態指示組件的呈現及說明。"}}}},i={name:"預設項目",args:{},render(r){return t.jsx(e,{...r,children:r.children})}},a={name:"主題色彩",args:{},render(r){return t.jsxs("div",{style:{width:"600px",display:"flex",gap:"10px",flexWrap:"wrap"},children:[t.jsx(e,{...r,variant:"filled",themeColor:"info",children:"Information"}),t.jsx(e,{...r,variant:"filled",themeColor:"success",children:"Success"}),t.jsx(e,{...r,variant:"filled",themeColor:"warning",children:"Warning"}),t.jsx(e,{...r,variant:"filled",themeColor:"error",children:"Error"}),t.jsx(e,{...r,variant:"filled",themeColor:"neutral",children:"Disable"}),t.jsxs(e,{...r,variant:"text",themeColor:"info",children:["Information"," "]}),t.jsx(e,{...r,variant:"text",themeColor:"success",children:"Success"}),t.jsx(e,{...r,variant:"text",themeColor:"warning",children:"Warning"}),t.jsx(e,{...r,variant:"text",themeColor:"error",children:"Error"}),t.jsx(e,{...r,variant:"text",themeColor:"neutral",children:"Disable"}),t.jsx(e,{...r,variant:"filled",themeColor:"info",prefix:t.jsx(o,{width:20,height:20}),children:"Information"}),t.jsx(e,{...r,variant:"filled",themeColor:"success",prefix:t.jsx(n,{width:20,height:20}),children:"Success"}),t.jsx(e,{...r,variant:"filled",themeColor:"warning",prefix:t.jsx(s,{width:20,height:20}),children:"Warning"}),t.jsx(e,{...r,variant:"filled",themeColor:"error",prefix:t.jsx(c,{width:20,height:20}),children:"Error"}),t.jsx(e,{...r,variant:"filled",themeColor:"neutral",prefix:t.jsx(l,{width:20,height:20}),children:"Disable"}),t.jsx(e,{...r,variant:"text",themeColor:"info",prefix:t.jsx(o,{width:20,height:20}),children:"Information"}),t.jsx(e,{...r,variant:"text",themeColor:"success",prefix:t.jsx(n,{width:20,height:20}),children:"Success"}),t.jsx(e,{...r,variant:"text",themeColor:"warning",prefix:t.jsx(s,{width:20,height:20}),children:"Warning"}),t.jsx(e,{...r,variant:"text",themeColor:"error",prefix:t.jsx(c,{width:20,height:20}),children:"Error"}),t.jsx(e,{...r,variant:"text",themeColor:"neutral",prefix:t.jsx(l,{width:20,height:20}),children:"Disable"})]})}};var d,h,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <StatusIndicator {...args}>{args.children}</StatusIndicator>;
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var x,m,I;a.parameters={...a.parameters,docs:{...(x=a.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  render(args) {
    return <div style={{
      width: '600px',
      display: 'flex',
      gap: '10px',
      flexWrap: 'wrap'
    }}>
        <StatusIndicator {...args} variant="filled" themeColor="info">
          Information
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="success">
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="warning">
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="error">
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="neutral">
          Disable
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="info">
          Information{' '}
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="success">
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="warning">
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="error">
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="neutral">
          Disable
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="info" prefix={<InfoCircleIcon width={20} height={20} />}>
          Information
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="success" prefix={<SuccessCircleIcon width={20} height={20} />}>
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="warning" prefix={<WarningTriIcon width={20} height={20} />}>
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="error" prefix={<ErrorCircleIcon width={20} height={20} />}>
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="neutral" prefix={<DisableCircleIcon width={20} height={20} />}>
          Disable
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="info" prefix={<InfoCircleIcon width={20} height={20} />}>
          Information
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="success" prefix={<SuccessCircleIcon width={20} height={20} />}>
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="warning" prefix={<WarningTriIcon width={20} height={20} />}>
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="error" prefix={<ErrorCircleIcon width={20} height={20} />}>
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="neutral" prefix={<DisableCircleIcon width={20} height={20} />}>
          Disable
        </StatusIndicator>
      </div>;
  }
}`,...(I=(m=a.parameters)==null?void 0:m.docs)==null?void 0:I.source}}};const w=["Default","Theme"];export{i as Default,a as Theme,w as __namedExportsOrder,j as default};
