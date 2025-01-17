import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as i}from"./badge-vsbKzH_B.js";import"./arrow-drop-down-Fqyji-Tj.js";import"./index-RYns6xqu.js";import{S as o}from"./notification-NM2mg_B2.js";import"./string-BqrfsRv8.js";const P={title:"Component/Badge",component:i,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},isShowDot:{description:"是否顯示圓點",table:{category:"PROPS"}},value:{description:"徽章數值",table:{category:"PROPS"}},limit:{description:"限制數值",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},parameters:{docs:{title:"徽章",description:{component:"徽章組件的呈現及說明。"}}},args:{themeColor:"error",isShowDot:!1,value:100,limit:99,className:""}},a={name:"預設項目",args:{},render(t){return e.jsx(i,{...t,children:e.jsx(o,{width:26,height:26})})}},r={name:"類型選擇",args:{},parameters:{docs:{source:{transform(t,n){return`
<Badge {...args} isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args}>
  <SvgNotification width={26} height={26} />
</Badge>
`}}}},render(t){return e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(i,{...t,isShowDot:!0,children:e.jsx(o,{width:26,height:26})}),e.jsx(i,{...t,children:e.jsx(o,{width:26,height:26})})]})}},g={name:"最大值設定",args:{},parameters:{docs:{source:{transform(t,n){return`
<Badge {...args} value={99}>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} value={100}>
  <SvgNotification width={26} height={26} />
</Badge>
`}}}},render(t){return e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(i,{...t,value:99,children:e.jsx(o,{width:26,height:26})}),e.jsx(i,{...t,value:100,children:e.jsx(o,{width:26,height:26})})]})}},h={name:"主題色彩",args:{},parameters:{docs:{source:{transform(t,n){return`
<Badge {...args} isShowDot themeColor="primary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="secondary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="neutral">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="info">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="success">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="warning">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="error">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="primary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="secondary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="neutral">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="info">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="success">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="warning">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="error">
  <SvgNotification width={26} height={26} />
</Badge>
`}}}},render(t){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[e.jsx(i,{...t,themeColor:"primary",children:e.jsx(o,{width:26,height:26})}),e.jsx(i,{...t,themeColor:"secondary",children:e.jsx(o,{width:26,height:26})}),e.jsx(i,{...t,themeColor:"neutral",children:e.jsx(o,{width:26,height:26})}),e.jsx(i,{...t,themeColor:"info",children:e.jsx(o,{width:26,height:26})}),e.jsx(i,{...t,themeColor:"success",children:e.jsx(o,{width:26,height:26})}),e.jsx(i,{...t,themeColor:"warning",children:e.jsx(o,{width:26,height:26})}),e.jsx(i,{...t,themeColor:"error",children:e.jsx(o,{width:26,height:26})})]})}};var s,d,c;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Badge {...args}>
        <SvgNotification width={26} height={26} />
      </Badge>;
  }
}`,...(c=(d=a.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var l,m,B;r.parameters={...r.parameters,docs:{...(l=r.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '類型選擇',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Badge {...args} isShowDot>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args}>
  <SvgNotification width={26} height={26} />
</Badge>
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '32px'
    }}>
        <Badge {...args} isShowDot>
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args}>
          <SvgNotification width={26} height={26} />
        </Badge>
      </div>;
  }
}`,...(B=(m=r.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var w,S,f;g.parameters={...g.parameters,docs:{...(w=g.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '最大值設定',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Badge {...args} value={99}>
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} value={100}>
  <SvgNotification width={26} height={26} />
</Badge>
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '32px'
    }}>
        <Badge {...args} value={99}>
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args} value={100}>
          <SvgNotification width={26} height={26} />
        </Badge>
      </div>;
  }
}`,...(f=(S=g.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var p,v,u;h.parameters={...h.parameters,docs:{...(p=h.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Badge {...args} isShowDot themeColor="primary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="secondary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="neutral">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="info">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="success">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="warning">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="error">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="primary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="secondary">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="neutral">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="info">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="success">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="warning">
  <SvgNotification width={26} height={26} />
</Badge>
<Badge {...args} themeColor="error">
  <SvgNotification width={26} height={26} />
</Badge>
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '32px'
    }}>
        <Badge {...args} themeColor="primary">
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="secondary">
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="neutral">
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="info">
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="success">
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="warning">
          <SvgNotification width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="error">
          <SvgNotification width={26} height={26} />
        </Badge>
      </div>;
  }
}`,...(u=(v=h.parameters)==null?void 0:v.docs)==null?void 0:u.source}}};const b=["Default","Type","Max","Theme"];export{a as Default,g as Max,h as Theme,r as Type,b as __namedExportsOrder,P as default};
