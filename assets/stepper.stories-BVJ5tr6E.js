import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./title-BPnjcUZo.js";import{B as a}from"./toast-BEzfIbOE.js";import"./checkbox-gHzG2Us7.js";import"./input-Cqvs4Uxt.js";import"./textarea-CO8Z8fZG.js";import"./toggle-B_GFje5b.js";import"./radio-BhGOQQ7m.js";import{f as c}from"./styled-Rb-jBBh0.js";import"./breadcrumb-b1HMjbI-.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-DboPxrNc.js";import"./image-BUf_2wZ-.js";import"./status-indicator-C0euK5S5.js";import"./index-RYns6xqu.js";import"./lodash-CcdATr5u.js";import"./disable-circle-Qt9C8lli.js";import"./string-ECkTvc_B.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const{useArgs:D}=__STORYBOOK_MODULE_PREVIEW_API__,r=[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],W={title:"Component/Stepper",component:c,tags:["autodocs"],argTypes:{steps:{description:"步驟列表"},currentStep:{description:"當前步驟（從 0 開始）",control:{type:"number",min:0,max:r.length-1}},direction:{description:"方向",control:{type:"select",options:["horizontal","vertical"]}},className:{description:"客製化樣式"}},args:{steps:r,currentStep:1,className:""},parameters:{docs:{title:"Stepper",description:{component:"步驟導航組件的呈現及說明。"}}}},i={name:"預設項目",args:{},render:function(t){return e.jsx(c,{...t,steps:t.steps||[],currentStep:t.currentStep??0})}},p={name:"橫向互動模式",args:{className:""},render:function(t){const[{currentStep:n},s]=D();return e.jsxs(e.Fragment,{children:[e.jsx(c,{...t,steps:t.steps||[],currentStep:t.currentStep??0,direction:"horizontal"}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",marginTop:"16px"},children:[e.jsx(a,{onClick:()=>{s({currentStep:Math.max(0,(n||0)-1)})},variant:"filled",isDisabled:n<=0,children:"Previous"}),e.jsx(a,{onClick:()=>{s({currentStep:Math.min(((r==null?void 0:r.length)||0)-1,(n||0)+1)})},variant:"filled",isDisabled:n>=r.length-1,children:"Next"})]})]})}},o={name:"直向互動模式",args:{},render:function(t){const[{currentStep:n},s]=D();return e.jsxs(e.Fragment,{children:[e.jsx(c,{...t,steps:t.steps||[],currentStep:t.currentStep??0,direction:"vertical"}),e.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",marginTop:"16px"},children:[e.jsx(a,{onClick:()=>{s({currentStep:Math.max(0,(n||0)-1)})},variant:"filled",isDisabled:n<=0,children:"Previous"}),e.jsx(a,{onClick:()=>{s({currentStep:Math.min(((r==null?void 0:r.length)||0)-1,(n||0)+1)})},variant:"filled",isDisabled:n>=r.length-1,children:"Next"})]})]})}};var u,d,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render: function Render(args) {
    return <Stepper {...args} steps={args.steps || []} currentStep={args.currentStep ?? 0} />;
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var S,g,x;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
        }} variant="filled" isDisabled={currentStep <= 0}>
            Previous
          </Button>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.min((steps?.length || 0) - 1, (currentStep || 0) + 1)
          });
        }} variant="filled" isDisabled={currentStep >= steps.length - 1}>
            Next
          </Button>
        </div>
      </>;
  }
}`,...(x=(g=p.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,h,v;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
        }} variant="filled" isDisabled={currentStep <= 0}>
            Previous
          </Button>
          <Button onClick={() => {
          updateArgs({
            currentStep: Math.min((steps?.length || 0) - 1, (currentStep || 0) + 1)
          });
        }} variant="filled" isDisabled={currentStep >= steps.length - 1}>
            Next
          </Button>
        </div>
      </>;
  }
}`,...(v=(h=o.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const Y=["Default","HorizontalDemo","VerticalDemo"];export{i as Default,p as HorizontalDemo,o as VerticalDemo,Y as __namedExportsOrder,W as default};
