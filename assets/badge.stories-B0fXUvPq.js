import{j as e}from"./jsx-runtime-DEdD30eg.js";import{R as b,r as _}from"./index-RYns6xqu.js";import{g as q}from"./string-BqrfsRv8.js";import"./disable-circle-Qt9C8lli.js";import{S as o}from"./notification-NM2mg_B2.js";const c=({themeColor:t="error",children:n,isShowDot:l=!1,value:r=0,limit:i=0,className:j=""})=>{const[D,m]=b.useState(r||0);return _.useEffect(()=>{if(r&&i&&r>i){m(i);return}return m(r||0)},[r,i]),e.jsxs("div",{className:`ded-badge-container ${j}`,children:[n,e.jsx("div",{className:`ded-badge 
          ${q("ded-badge-color",t)}
          ${l?"ded-badge-dot":""}`,children:!l&&r>0&&e.jsxs("div",{className:"ded-badge-content",children:[e.jsx("span",{className:"ded-badge-content-text",children:D}),r>i&&e.jsx("span",{className:"ded-badge-content-text",children:"+"})]})})]})},a=c;try{c.displayName="Badge",c.__docgenInfo={description:"",displayName:"Badge",props:{themeColor:{defaultValue:{value:"error"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},isShowDot:{defaultValue:{value:"false"},description:"",name:"isShowDot",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},limit:{defaultValue:{value:"0"},description:"",name:"limit",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{badge.displayName="badge",badge.__docgenInfo={description:"",displayName:"badge",props:{themeColor:{defaultValue:{value:"error"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},isShowDot:{defaultValue:{value:"false"},description:"",name:"isShowDot",required:!1,type:{name:"boolean"}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},limit:{defaultValue:{value:"0"},description:"",name:"limit",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const E={title:"Component/Badge",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","neutral","info","success","warning","error"]},table:{category:"PROPS"}},isShowDot:{description:"是否顯示圓點",table:{category:"PROPS"}},value:{description:"徽章數值",table:{category:"PROPS"}},limit:{description:"限制數值",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},parameters:{docs:{title:"徽章",description:{component:"徽章組件的呈現及說明。"}}},args:{themeColor:"error",isShowDot:!1,value:100,limit:99,className:""}},s={name:"預設項目",args:{},render(t){return e.jsx(a,{...t,children:e.jsx(o,{width:26,height:26})})}},d={name:"類型選擇",args:{},parameters:{docs:{source:{transform(t,n){return`
<Badge {...args} isShowDot>
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args}>
  <NotificationIcon width={26} height={26} />
</Badge>
`}}}},render(t){return e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(a,{...t,isShowDot:!0,children:e.jsx(o,{width:26,height:26})}),e.jsx(a,{...t,children:e.jsx(o,{width:26,height:26})})]})}},h={name:"最大值設定",args:{},parameters:{docs:{source:{transform(t,n){return`
<Badge {...args} value={99}>
  <NotificationIcon width={26} height={26} />
</Badge>
<Badge {...args} value={100}>
  <NotificationIcon width={26} height={26} />
</Badge>
`}}}},render(t){return e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(a,{...t,value:99,children:e.jsx(o,{width:26,height:26})}),e.jsx(a,{...t,value:100,children:e.jsx(o,{width:26,height:26})})]})}},g={name:"主題色彩",args:{},parameters:{docs:{source:{transform(t,n){return`
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
`}}}},render(t){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[e.jsx(a,{...t,themeColor:"primary",children:e.jsx(o,{width:26,height:26})}),e.jsx(a,{...t,themeColor:"secondary",children:e.jsx(o,{width:26,height:26})}),e.jsx(a,{...t,themeColor:"neutral",children:e.jsx(o,{width:26,height:26})}),e.jsx(a,{...t,themeColor:"info",children:e.jsx(o,{width:26,height:26})}),e.jsx(a,{...t,themeColor:"success",children:e.jsx(o,{width:26,height:26})}),e.jsx(a,{...t,themeColor:"warning",children:e.jsx(o,{width:26,height:26})}),e.jsx(a,{...t,themeColor:"error",children:e.jsx(o,{width:26,height:26})})]})}};var u,p,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Badge {...args}>
        <NotificationIcon width={26} height={26} />
      </Badge>;
  }
}`,...(f=(p=s.parameters)==null?void 0:p.docs)==null?void 0:f.source}}};var B,w,y;d.parameters={...d.parameters,docs:{...(B=d.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(y=(w=d.parameters)==null?void 0:w.docs)==null?void 0:y.source}}};var N,x,C;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(C=(x=h.parameters)==null?void 0:x.docs)==null?void 0:C.source}}};var I,v,S;g.parameters={...g.parameters,docs:{...(I=g.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(S=(v=g.parameters)==null?void 0:v.docs)==null?void 0:S.source}}};const $=["Default","Type","Max","Theme"];export{s as Default,h as Max,g as Theme,d as Type,$ as __namedExportsOrder,E as default};
