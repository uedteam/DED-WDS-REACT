import{j as l}from"./jsx-runtime-DEdD30eg.js";import{a as g}from"./chunk-454WOBUV-ChHd1ABr.js";import{R as a}from"./radio-CMOPLxLt.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";const b=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],D={title:"Component/Radio",component:a,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},initValue:{description:"預設值",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},size:{description:"尺寸",control:{type:"select",options:["small","medium","large"]},table:{category:"PROPS"}},onChange:{description:"選擇選項後的事件",action:"onChange",table:{category:"EVENTS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{dataSource:b,direction:"row",initValue:"option1",size:"medium",className:"",onChange:g("onChange")},parameters:{docs:{title:"Radio Button",description:{component:"單選按鈕組件的呈現及說明。"}}}},p=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],o={name:"預設項目",args:{dataSource:p},render(e){return l.jsx(a,{...e})}},t={name:"直向排列",args:{dataSource:p,direction:"column"},parameters:{docs:{source:{transform(e,u){const{args:m}=u;return`
<Radio {...args} direction=${m.direction}/>
`}}}},render(e){return l.jsx(a,{...e})}};var r,n,s;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: defaultOptions
  },
  render(args) {
    return <Radio {...args} />;
  }
}`,...(s=(n=o.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,c,d;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '直向排列',
  args: {
    dataSource: defaultOptions,
    direction: 'column'
  },
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
    return <Radio {...args} />;
  }
}`,...(d=(c=t.parameters)==null?void 0:c.docs)==null?void 0:d.source}}};const P=["Default","Direction"];export{o as Default,t as Direction,P as __namedExportsOrder,D as default};
