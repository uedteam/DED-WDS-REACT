import{j as t}from"./jsx-runtime-DEdD30eg.js";import{S as e}from"./status-indicator-BDww4a8h.js";import{j as o,k as n,l as s,m as l,n as m,o as c}from"./warning-tri-DTbCof3x.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const j={title:"Component/Status-Indicator",component:e,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},variant:{description:"樣式變體",control:{type:"select",options:["filled","text"]},table:{category:"PROPS"}},prefix:{description:"前綴元素",options:["None","SvgInfoCircle","SvgSuccessCircle","SvgWarningCircle","SvgErrorCircle","SvgQuestionCircle","SvgDisableCircle"],mapping:{None:null,SvgInfoCircle:t.jsx(o,{width:20,height:20}),SvgSuccessCircle:t.jsx(n,{width:20,height:20}),SvgWarningCircle:t.jsx(s,{width:20,height:20}),SvgErrorCircle:t.jsx(l,{width:20,height:20}),SvgQuestionCircle:t.jsx(m,{width:20,height:20}),SvgDisableCircle:t.jsx(c,{width:20,height:20})},control:{type:"select"},table:{category:"PROPS"}},children:{description:"內容",table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"success",variant:"filled",children:"Success",prefix:"None",size:"medium",className:""},parameters:{docs:{title:"StatusIndicator",description:{component:"狀態指示組件的呈現及說明。"}}}},i={name:"預設項目",args:{},render(r){return t.jsx(e,{...r,children:r.children})}},a={name:"主題色彩",args:{},render(r){return t.jsxs("div",{style:{width:"600px",display:"flex",gap:"10px",flexWrap:"wrap"},children:[t.jsx(e,{...r,variant:"filled",themeColor:"info",children:"Information"}),t.jsx(e,{...r,variant:"filled",themeColor:"success",children:"Success"}),t.jsx(e,{...r,variant:"filled",themeColor:"warning",children:"Warning"}),t.jsx(e,{...r,variant:"filled",themeColor:"error",children:"Error"}),t.jsx(e,{...r,variant:"filled",themeColor:"neutral",children:"Disable"}),t.jsxs(e,{...r,variant:"text",themeColor:"info",children:["Information"," "]}),t.jsx(e,{...r,variant:"text",themeColor:"success",children:"Success"}),t.jsx(e,{...r,variant:"text",themeColor:"warning",children:"Warning"}),t.jsx(e,{...r,variant:"text",themeColor:"error",children:"Error"}),t.jsx(e,{...r,variant:"text",themeColor:"neutral",children:"Disable"}),t.jsx(e,{...r,variant:"filled",themeColor:"info",prefix:t.jsx(o,{width:20,height:20}),children:"Information"}),t.jsx(e,{...r,variant:"filled",themeColor:"success",prefix:t.jsx(n,{width:20,height:20}),children:"Success"}),t.jsx(e,{...r,variant:"filled",themeColor:"warning",prefix:t.jsx(s,{width:20,height:20}),children:"Warning"}),t.jsx(e,{...r,variant:"filled",themeColor:"error",prefix:t.jsx(l,{width:20,height:20}),children:"Error"}),t.jsx(e,{...r,variant:"filled",themeColor:"neutral",prefix:t.jsx(c,{width:20,height:20}),children:"Disable"}),t.jsx(e,{...r,variant:"text",themeColor:"info",prefix:t.jsx(o,{width:20,height:20}),children:"Information"}),t.jsx(e,{...r,variant:"text",themeColor:"success",prefix:t.jsx(n,{width:20,height:20}),children:"Success"}),t.jsx(e,{...r,variant:"text",themeColor:"warning",prefix:t.jsx(s,{width:20,height:20}),children:"Warning"}),t.jsx(e,{...r,variant:"text",themeColor:"error",prefix:t.jsx(l,{width:20,height:20}),children:"Error"}),t.jsx(e,{...r,variant:"text",themeColor:"neutral",prefix:t.jsx(c,{width:20,height:20}),children:"Disable"})]})}};var d,h,u;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <StatusIndicator {...args}>{args.children}</StatusIndicator>;
  }
}`,...(u=(h=i.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};var g,S,x;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
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
        <StatusIndicator {...args} variant="filled" themeColor="info" prefix={<SvgInfoCircle width={20} height={20} />}>
          Information
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="success" prefix={<SvgSuccessCircle width={20} height={20} />}>
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="warning" prefix={<SvgWarningTri width={20} height={20} />}>
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="error" prefix={<SvgErrorCircle width={20} height={20} />}>
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="filled" themeColor="neutral" prefix={<SvgDisableCircle width={20} height={20} />}>
          Disable
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="info" prefix={<SvgInfoCircle width={20} height={20} />}>
          Information
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="success" prefix={<SvgSuccessCircle width={20} height={20} />}>
          Success
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="warning" prefix={<SvgWarningTri width={20} height={20} />}>
          Warning
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="error" prefix={<SvgErrorCircle width={20} height={20} />}>
          Error
        </StatusIndicator>
        <StatusIndicator {...args} variant="text" themeColor="neutral" prefix={<SvgDisableCircle width={20} height={20} />}>
          Disable
        </StatusIndicator>
      </div>;
  }
}`,...(x=(S=a.parameters)==null?void 0:S.docs)==null?void 0:x.source}}};const w=["Default","Theme"];export{i as Default,a as Theme,w as __namedExportsOrder,j as default};
