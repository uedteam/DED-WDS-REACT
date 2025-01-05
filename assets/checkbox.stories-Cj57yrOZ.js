import{j as p}from"./jsx-runtime-DEdD30eg.js";import{a as u}from"./chunk-454WOBUV-CM0pFb8Z.js";import{C as t}from"./checkbox-CzjkG4_c.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./warning-tri-DTbCof3x.js";import"./check-BnJBHFpS.js";import"./string-BqrfsRv8.js";const g=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],P={title:"Component/Checkbox",component:t,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"},required:!0},initValue:{description:"選中的項目",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選中選項改變時的回調函數",action:"onChange",table:{category:"EVENTS"}}},args:{dataSource:g,initValue:["option1","option3"],direction:"row",size:"medium",className:"",onChange:e=>u("onChange")(e)},parameters:{docs:{title:"Checkbox",description:{component:"複選框組件的呈現及說明。"}}}},b=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],o={name:"預設項目",args:{dataSource:b},render(e){return p.jsx(t,{...e})}},r={name:"排列方向",args:{},parameters:{docs:{source:{transform(e,d){const{args:m}=d;return`
<Radio {...args} direction=${m.direction}/>
`}}}},render(e){return p.jsx(t,{...e})}};var a,n,s;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: defaultOptions
  },
  render(args) {
    return <Checkbox {...args} />;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,c,l;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const R=["Default","Direction"];export{o as Default,r as Direction,R as __namedExportsOrder,P as default};
