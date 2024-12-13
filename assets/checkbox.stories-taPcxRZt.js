import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import{C as r}from"./checkbox-B_3nDFKe.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./warning-DPjiZ-Sx.js";const g=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],P={title:"Component/Checkbox",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"},required:!0},initValue:{description:"選中的項目",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選中選項改變時的回調函數",action:"onChange",table:{category:"EVENTS"}}},args:{themeColor:"primary",dataSource:g,initValue:["option1","option3"],direction:"row",className:"",onChange:e=>u("onChange")(e)},parameters:{docs:{title:"Checkbox",description:{component:"複選框組件的呈現及說明。"}}}},k=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],a={name:"預設項目",args:{dataSource:k},render(e){return o.jsx(r,{...e})}},t={name:"排列方向",args:{},parameters:{docs:{source:{transform(e,x){const{args:b}=x;return`
<Radio {...args} direction=${b.direction}/>
`}}}},render(e){return o.jsx(r,{...e})}},s={name:"主題色彩",args:{dataSource:g,initValue:["option1"],className:"",onChange:e=>u("onChange")(e)},parameters:{docs:{source:{code:`
<Checkbox {...args} themeColor="neutral" />
<Checkbox {...args} themeColor="primary" />
<Checkbox {...args} themeColor="secondary" />
<Checkbox {...args} themeColor="info" />
<Checkbox {...args} themeColor="success" />
<Checkbox {...args} themeColor="warning" />
<Checkbox {...args} themeColor="error" />
        `}}},render(e){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[o.jsx(r,{...e,themeColor:"primary"}),o.jsx(r,{...e,themeColor:"secondary"}),o.jsx(r,{...e,themeColor:"neutral"}),o.jsx(r,{...e,themeColor:"info"}),o.jsx(r,{...e,themeColor:"success"}),o.jsx(r,{...e,themeColor:"warning"}),o.jsx(r,{...e,themeColor:"error"})]})}};var n,c,i;a.parameters={...a.parameters,docs:{...(n=a.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: defaultOptions
  },
  render(args) {
    return <Checkbox {...args} />;
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var l,m,p;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '排列方向',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Radio {...args} direction=\${args.direction}/>
\`;
        }
      }
    }
  },
  render(args) {
    return <Checkbox {...args} />;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,C,h;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
        <Checkbox {...args} themeColor="primary" />
        <Checkbox {...args} themeColor="secondary" />
        <Checkbox {...args} themeColor="neutral" />
        <Checkbox {...args} themeColor="info" />
        <Checkbox {...args} themeColor="success" />
        <Checkbox {...args} themeColor="warning" />
        <Checkbox {...args} themeColor="error" />
      </div>;
  }
}`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const v=["Default","Direction","Theme"];export{a as Default,t as Direction,s as Theme,v as __namedExportsOrder,P as default};
