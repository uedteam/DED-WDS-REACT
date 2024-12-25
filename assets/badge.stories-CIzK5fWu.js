import{j as e}from"./jsx-runtime-DEdD30eg.js";import{B as o}from"./badge-vsbKzH_B.js";import"./disable-circle-Qt9C8lli.js";import"./index-RYns6xqu.js";import{S as i}from"./notification-NM2mg_B2.js";import"./string-BqrfsRv8.js";const v={title:"Component/Badge",component:o,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},isShowDot:{description:"是否顯示圓點",table:{category:"PROPS"}},value:{description:"徽章數值",table:{category:"PROPS"}},limit:{description:"限制數值",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},parameters:{docs:{title:"徽章",description:{component:"徽章組件的呈現及說明。"}}},args:{themeColor:"error",isShowDot:!1,value:100,limit:99,className:""}},a={name:"預設項目",args:{},render(t){return e.jsx(o,{...t,children:e.jsx(i,{width:26,height:26})})}},r={name:"類型選擇",args:{},parameters:{docs:{source:{transform(t,s){return`
<Badge {...args} isShowDot>
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args}>
  <NotificationIcon width={26} height={26} />
</Badge>
`}}}},render(t){return e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(o,{...t,isShowDot:!0,children:e.jsx(i,{width:26,height:26})}),e.jsx(o,{...t,children:e.jsx(i,{width:26,height:26})})]})}},n={name:"最大值設定",args:{},parameters:{docs:{source:{transform(t,s){return`
<Badge {...args} value={99}>
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} value={100}>
  <NotificationIcon width={26} height={26} />
</Badge>
`}}}},render(t){return e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(o,{...t,value:99,children:e.jsx(i,{width:26,height:26})}),e.jsx(o,{...t,value:100,children:e.jsx(i,{width:26,height:26})})]})}},h={name:"主題色彩",args:{},parameters:{docs:{source:{transform(t,s){return`
<Badge {...args} isShowDot themeColor="primary">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="secondary">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="neutral">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="info">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="success">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="warning">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="error">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="primary">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="secondary">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="neutral">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="info">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="success">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="warning">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="error">
  <NotificationIcon width={26} height={26} />
</Badge>
`}}}},render(t){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[e.jsx(o,{...t,themeColor:"primary",children:e.jsx(i,{width:26,height:26})}),e.jsx(o,{...t,themeColor:"secondary",children:e.jsx(i,{width:26,height:26})}),e.jsx(o,{...t,themeColor:"neutral",children:e.jsx(i,{width:26,height:26})}),e.jsx(o,{...t,themeColor:"info",children:e.jsx(i,{width:26,height:26})}),e.jsx(o,{...t,themeColor:"success",children:e.jsx(i,{width:26,height:26})}),e.jsx(o,{...t,themeColor:"warning",children:e.jsx(i,{width:26,height:26})}),e.jsx(o,{...t,themeColor:"error",children:e.jsx(i,{width:26,height:26})})]})}};var g,d,c;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Badge {...args}>
        <NotificationIcon width={26} height={26} />
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
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args}>
  <NotificationIcon width={26} height={26} />
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
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args}>
          <NotificationIcon width={26} height={26} />
        </Badge>
      </div>;
  }
}`,...(B=(m=r.parameters)==null?void 0:m.docs)==null?void 0:B.source}}};var w,f,p;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  name: '最大值設定',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Badge {...args} value={99}>
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} value={100}>
  <NotificationIcon width={26} height={26} />
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
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} value={100}>
          <NotificationIcon width={26} height={26} />
        </Badge>
      </div>;
  }
}`,...(p=(f=n.parameters)==null?void 0:f.docs)==null?void 0:p.source}}};var u,x,C;h.parameters={...h.parameters,docs:{...(u=h.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Badge {...args} isShowDot themeColor="primary">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="secondary">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="neutral">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="info">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="success">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="warning">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} isShowDot themeColor="error">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="primary">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="secondary">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="neutral">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="info">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="success">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="warning">
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} themeColor="error">
  <NotificationIcon width={26} height={26} />
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
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="secondary">
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="neutral">
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="info">
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="success">
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="warning">
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} themeColor="error">
          <NotificationIcon width={26} height={26} />
        </Badge>
      </div>;
  }
}`,...(C=(x=h.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};const P=["Default","Type","Max","Theme"];export{a as Default,n as Max,h as Theme,r as Type,P as __namedExportsOrder,v as default};
