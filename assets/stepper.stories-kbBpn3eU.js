import{j as t}from"./jsx-runtime-DEdD30eg.js";import"./title-BwTyIEWm.js";import{B as p}from"./button-DUOlbcAA.js";import"./checkbox-BbQOm0KL.js";import"./input-BWkpi1yj.js";import"./textarea-jggigcCy.js";import"./toggle-CEWviFwF.js";import"./radio-wVtPZKvI.js";import{d as c}from"./stepper-DDXHrB_h.js";import"./breadcrumb-BjVYaTeR.js";import"./progress-circle-DxITm_MT.js";import"./progress-line-BS6M-A1S.js";import"./styled-7_Fd9YFd.js";import"./menu-BAUrcos8.js";import"./image-CZs88QCg.js";import"./toast-4l9AxWm1.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./warning-DPjiZ-Sx.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const{useArgs:D}=__STORYBOOK_MODULE_PREVIEW_API__,r=[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],L={title:"Component/Stepper",component:c,tags:["autodocs"],argTypes:{steps:{description:"步驟列表"},currentStep:{description:"當前步驟（從 0 開始）",control:{type:"number",min:0,max:r.length-1}},direction:{description:"方向",control:{type:"select",options:["horizontal","vertical"]}},className:{description:"客製化樣式"}},args:{steps:r,currentStep:1,className:""},parameters:{docs:{title:"Stepper",description:{component:"步驟導航組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render:function(e){return t.jsx(c,{...e,steps:e.steps||[],currentStep:e.currentStep??0})}},i={name:"橫向互動模式",args:{className:""},render:function(e){const[{currentStep:n},s]=D();return t.jsxs(t.Fragment,{children:[t.jsx(c,{...e,steps:e.steps||[],currentStep:e.currentStep??0,direction:"horizontal"}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",marginTop:"16px"},children:[t.jsx(p,{onClick:()=>{s({currentStep:Math.max(0,(n||0)-1)})},variant:"contained",isDisabled:n<=0,children:"Previous"}),t.jsx(p,{onClick:()=>{s({currentStep:Math.min(((r==null?void 0:r.length)||0)-1,(n||0)+1)})},variant:"contained",isDisabled:n>=r.length-1,children:"Next"})]})]})}},a={name:"直向互動模式",args:{},render:function(e){const[{currentStep:n},s]=D();return t.jsxs(t.Fragment,{children:[t.jsx(c,{...e,steps:e.steps||[],currentStep:e.currentStep??0,direction:"vertical"}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",marginTop:"16px"},children:[t.jsx(p,{onClick:()=>{s({currentStep:Math.max(0,(n||0)-1)})},variant:"contained",isDisabled:n<=0,children:"Previous"}),t.jsx(p,{onClick:()=>{s({currentStep:Math.min(((r==null?void 0:r.length)||0)-1,(n||0)+1)})},variant:"contained",isDisabled:n>=r.length-1,children:"Next"})]})]})}};var d,l,m;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render: function Render(args) {
    return <Stepper {...args} steps={args.steps || []} currentStep={args.currentStep ?? 0} />;
  }
}`,...(m=(l=o.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var S,g,x;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '橫向互動模式',
  args: {
    className: ''
  },
  render: function Render(args) {
    const [{
      currentStep
    }, updateArgs] = useArgs();
    return <>
        <Stepper {...args} steps={args.steps || []} currentStep={args.currentStep ?? 0} direction="horizontal" />
        <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '8px',
        marginTop: '16px'
      }}>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.max(0, (currentStep || 0) - 1)
          });
        }} variant="contained" isDisabled={currentStep <= 0}>
            Previous
          </Button>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.min((steps?.length || 0) - 1, (currentStep || 0) + 1)
          });
        }} variant="contained" isDisabled={currentStep >= steps.length - 1}>
            Next
          </Button>
        </div>
      </>;
  }
}`,...(x=(g=i.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var h,f,v;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '直向互動模式',
  args: {},
  render: function Render(args) {
    const [{
      currentStep
    }, updateArgs] = useArgs();
    return <>
        <Stepper {...args} steps={args.steps || []} currentStep={args.currentStep ?? 0} direction="vertical" />
        <div style={{
        display: 'flex',
        justifyContent: 'flex-start',
        gap: '8px',
        marginTop: '16px'
      }}>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.max(0, (currentStep || 0) - 1)
          });
        }} variant="contained" isDisabled={currentStep <= 0}>
            Previous
          </Button>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.min((steps?.length || 0) - 1, (currentStep || 0) + 1)
          });
        }} variant="contained" isDisabled={currentStep >= steps.length - 1}>
            Next
          </Button>
        </div>
      </>;
  }
}`,...(v=(f=a.parameters)==null?void 0:f.docs)==null?void 0:v.source}}};const U=["Default","HorizontalDemo","VerticalDemo"];export{o as Default,i as HorizontalDemo,a as VerticalDemo,U as __namedExportsOrder,L as default};
