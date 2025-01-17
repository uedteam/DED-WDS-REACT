import{j as t}from"./jsx-runtime-DEdD30eg.js";import{g as c}from"./pagination-DTnhWnFT.js";import"./badge-vsbKzH_B.js";import"./breadcrumb--fpt9mRh.js";import{B as a}from"./toast-D4KW26Pr.js";import"./checkbox-D-MAZBDN.js";import"./progress-circle-5ZOi_8dX.js";import"./progress-line-BURSIgt3.js";import"./divider-ChKDBDeF.js";import"./image-CZs88QCg.js";import"./input-_I_ivZF4.js";import"./radio-CMOPLxLt.js";import"./textarea-CO8Z8fZG.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import"./menu-rg9dOBvr.js";import"./status-indicator-BDww4a8h.js";import"./layout-ZjbFUAzr.js";import"./tag-C7LkoCGR.js";import"./grid-D9dEAlnk.js";import"./index-RYns6xqu.js";import"./arrow-drop-down-Fqyji-Tj.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./notification-NM2mg_B2.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const{useArgs:y}=__STORYBOOK_MODULE_PREVIEW_API__,r=[{title:"Step 1",desc:"Description",content:"Content for Step 1"},{title:"Step 2",desc:"Description",content:"Content for Step 2"},{title:"Step 3",desc:"Description",content:"Content for Step 3"}],J={title:"Component/Stepper",component:c,tags:["autodocs"],argTypes:{steps:{description:"步驟列表",table:{category:"PROPS"}},currentStep:{description:"當前步驟（從 0 開始）",control:{type:"number",min:0,max:r.length-1},table:{category:"PROPS"}},direction:{description:"方向",control:{type:"select",options:["horizontal","vertical"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{steps:r,currentStep:1,className:""},parameters:{docs:{title:"Stepper",description:{component:"步驟導航組件的呈現及說明。"}}}},i={name:"預設項目",args:{},render:function(e){return t.jsx(c,{...e,steps:e.steps||[],currentStep:e.currentStep??0})}},o={name:"橫向互動模式",args:{className:""},render:function(e){const[{currentStep:n},s]=y();return t.jsxs(t.Fragment,{children:[t.jsx(c,{...e,steps:e.steps||[],currentStep:e.currentStep??0,direction:"horizontal"}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",marginTop:"16px"},children:[t.jsx(a,{onClick:()=>{s({currentStep:Math.max(0,(n||0)-1)})},variant:"filled",isDisabled:n<=0,children:"Previous"}),t.jsx(a,{onClick:()=>{s({currentStep:Math.min(((r==null?void 0:r.length)||0)-1,(n||0)+1)})},variant:"filled",isDisabled:n>=r.length-1,children:"Next"})]})]})}},p={name:"直向互動模式",args:{},render:function(e){const[{currentStep:n},s]=y();return t.jsxs(t.Fragment,{children:[t.jsx(c,{...e,steps:e.steps||[],currentStep:e.currentStep??0,direction:"vertical"}),t.jsxs("div",{style:{display:"flex",justifyContent:"flex-start",gap:"8px",marginTop:"16px"},children:[t.jsx(a,{onClick:()=>{s({currentStep:Math.max(0,(n||0)-1)})},variant:"filled",isDisabled:n<=0,children:"Previous"}),t.jsx(a,{onClick:()=>{s({currentStep:Math.min(((r==null?void 0:r.length)||0)-1,(n||0)+1)})},variant:"filled",isDisabled:n>=r.length-1,children:"Next"})]})]})}};var u,d,m;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render: function Render(args) {
    return <Stepper {...args} steps={args.steps || []} currentStep={args.currentStep ?? 0} />;
  }
}`,...(m=(d=i.parameters)==null?void 0:d.docs)==null?void 0:m.source}}};var S,g,x;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(x=(g=o.parameters)==null?void 0:g.docs)==null?void 0:x.source}}};var f,h,v;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
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
}`,...(v=(h=p.parameters)==null?void 0:h.docs)==null?void 0:v.source}}};const Q=["Default","HorizontalDemo","VerticalDemo"];export{i as Default,o as HorizontalDemo,p as VerticalDemo,Q as __namedExportsOrder,J as default};
