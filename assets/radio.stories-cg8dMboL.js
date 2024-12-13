import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as y}from"./chunk-454WOBUV-CM0pFb8Z.js";import{R as r}from"./radio-BhGOQQ7m.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";const f=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],v={title:"Component/Radio",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},initValue:{description:"預設值",table:{category:"PROPS"}},direction:{description:"排列方向",control:{type:"select",options:["row","column"]},table:{category:"PROPS"}},onChange:{description:"選擇選項後的事件",action:"onChange",table:{category:"EVENTS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"primary",dataSource:f,direction:"row",initValue:"option1",className:"",onChange:y("onChange")},parameters:{docs:{title:"Radio Button",description:{component:"單選按鈕組件的呈現及說明。"}}}},h=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!0}],a={name:"預設項目",args:{dataSource:h},render(e){return o.jsx(r,{...e})}},t={name:"直向排列",args:{dataSource:h,direction:"column"},parameters:{docs:{source:{transform(e,n){const{args:R}=n;return`
<Radio {...args} direction=${R.direction}/>
`}}}},render(e){return o.jsx(r,{...e})}},x=[{label:"Option1",value:"option1",isDisabled:!1},{label:"Option2",value:"option2",isDisabled:!1},{label:"Option3",value:"option3",isDisabled:!1}],s={name:"主題色彩",args:{dataSource:x},parameters:{docs:{source:{transform(e,n){return`
<Radio {...args} themeColor="primary" />
<Radio {...args} themeColor="secondary" />
<Radio {...args} themeColor="neutral" />
<Radio {...args} themeColor="info" />
<Radio {...args} themeColor="success" />
<Radio {...args} themeColor="warning" />
<Radio {...args} themeColor="error" />
`}}}},render(e){return o.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"8px"},children:[o.jsx(r,{...e,themeColor:"primary"}),o.jsx(r,{...e,themeColor:"secondary"}),o.jsx(r,{...e,themeColor:"neutral"}),o.jsx(r,{...e,themeColor:"info"}),o.jsx(r,{...e,themeColor:"success"}),o.jsx(r,{...e,themeColor:"warning"}),o.jsx(r,{...e,themeColor:"error"})]})}};var i,l,c;a.parameters={...a.parameters,docs:{...(i=a.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    dataSource: defaultOptions
  },
  render(args) {
    return <Radio {...args} />;
  }
}`,...(c=(l=a.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};var d,m,p;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var u,g,C;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    dataSource: colorOptions
  },
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<Radio {...args} themeColor="primary" />
<Radio {...args} themeColor="secondary" />
<Radio {...args} themeColor="neutral" />
<Radio {...args} themeColor="info" />
<Radio {...args} themeColor="success" />
<Radio {...args} themeColor="warning" />
<Radio {...args} themeColor="error" />
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '8px'
    }}>
        <Radio {...args} themeColor="primary" />
        <Radio {...args} themeColor="secondary" />
        <Radio {...args} themeColor="neutral" />
        <Radio {...args} themeColor="info" />
        <Radio {...args} themeColor="success" />
        <Radio {...args} themeColor="warning" />
        <Radio {...args} themeColor="error" />
      </div>;
  }
}`,...(C=(g=s.parameters)==null?void 0:g.docs)==null?void 0:C.source}}};const P=["Default","Direction","Theme"];export{a as Default,t as Direction,s as Theme,P as __namedExportsOrder,v as default};
