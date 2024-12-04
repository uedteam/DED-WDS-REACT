import{j as e}from"./jsx-runtime-DEdD30eg.js";import{R as S,r as q}from"./index-RYns6xqu.js";import"./warning-CMZEnU_O.js";import{S as a}from"./notification-NM2mg_B2.js";const c=({themeColor:t="error",children:b,type:h,value:i=0,limit:o=0,className:_=""})=>{const[I,m]=S.useState(i||0);return q.useEffect(()=>{if(i&&o&&i>o){m(o);return}return m(i||0)},[i,o]),e.jsxs("div",{className:`ded-badge__container ${_}`,children:[b,e.jsx("div",{className:`ded-badge__content ded-badge__position-top-right ded-badge-color-${t} ${h==="dot"?"ded-badge__content-isDot":""}`,children:h==="number"&&i>0&&e.jsxs(e.Fragment,{children:[e.jsx("span",{className:"ded-badge-text",children:I}),i>o&&e.jsx("span",{className:"ded-badge-text",children:"+"})]})})]})},r=c;try{c.displayName="Badge",c.__docgenInfo={description:"",displayName:"Badge",props:{themeColor:{defaultValue:{value:"error"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"dot"'}]}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},limit:{defaultValue:{value:"0"},description:"",name:"limit",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{badge.displayName="badge",badge.__docgenInfo={description:"",displayName:"badge",props:{themeColor:{defaultValue:{value:"error"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'},{value:'"info"'}]}},type:{defaultValue:null,description:"",name:"type",required:!0,type:{name:"enum",value:[{value:'"number"'},{value:'"dot"'}]}},value:{defaultValue:{value:"0"},description:"",name:"value",required:!1,type:{name:"number"}},limit:{defaultValue:{value:"0"},description:"",name:"limit",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const D={title:"Component/Badge",component:r,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",control:{type:"select",options:["primary","secondary","tertiary","success","warning","error","info"]},table:{category:"PROPS"}},type:{description:"是否顯示圓點",control:{type:"select",options:["dot","number"]},table:{category:"PROPS"}},value:{description:"徽章數值",table:{category:"PROPS"}},limit:{description:"限制數值",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},parameters:{docs:{title:"徽章",description:{component:"徽章的呈現及說明。"}}}},n={name:"預設項目",args:{themeColor:"error",type:"number",value:100,limit:99,className:""},render(t){return e.jsx(r,{...t,children:e.jsx(a,{width:26,height:26})})}},d={name:"類型選擇",args:{themeColor:"error",value:100,limit:99,className:""},render(t){return e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(r,{...t,type:"dot",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,type:"number",children:e.jsx(a,{width:26,height:26})})]})}},s={name:"最大值設定",args:{themeColor:"error",type:"number",limit:99,className:""},render(t){return e.jsxs("div",{style:{display:"flex",gap:"32px"},children:[e.jsx(r,{...t,value:99,children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,value:100,children:e.jsx(a,{width:26,height:26})})]})}},l={name:"主題色彩",args:{themeColor:"error",type:"number",value:100,limit:99,className:""},render(t){return e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"16px"},children:[e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[e.jsx(r,{...t,type:"dot",themeColor:"primary",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,type:"dot",themeColor:"secondary",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,type:"dot",themeColor:"tertiary",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,type:"dot",themeColor:"info",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,type:"dot",themeColor:"success",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,type:"dot",themeColor:"warning",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,type:"dot",themeColor:"error",children:e.jsx(a,{width:26,height:26})})]}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"32px"},children:[e.jsx(r,{...t,themeColor:"primary",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,themeColor:"secondary",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,themeColor:"tertiary",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,themeColor:"info",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,themeColor:"success",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,themeColor:"warning",children:e.jsx(a,{width:26,height:26})}),e.jsx(r,{...t,themeColor:"error",children:e.jsx(a,{width:26,height:26})})]})]})}};var p,g,u;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    themeColor: 'error',
    type: 'number',
    value: 100,
    limit: 99,
    className: ''
  },
  render(args) {
    return <Badge {...args}>
        <NotificationIcon width={26} height={26} />
      </Badge>;
  }
}`,...(u=(g=n.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var y,x,f;d.parameters={...d.parameters,docs:{...(y=d.parameters)==null?void 0:y.docs,source:{originalSource:`{
  name: '類型選擇',
  args: {
    themeColor: 'error',
    value: 100,
    limit: 99,
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '32px'
    }}>
        <Badge {...args} type="dot">
          <NotificationIcon width={26} height={26} />
        </Badge>
        <Badge {...args} type="number">
          <NotificationIcon width={26} height={26} />
        </Badge>
      </div>;
  }
}`,...(f=(x=d.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var v,j,w;s.parameters={...s.parameters,docs:{...(v=s.parameters)==null?void 0:v.docs,source:{originalSource:`{
  name: '最大值設定',
  args: {
    themeColor: 'error',
    type: 'number',
    limit: 99,
    className: ''
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
}`,...(w=(j=s.parameters)==null?void 0:j.docs)==null?void 0:w.source}}};var C,B,N;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {
    themeColor: 'error',
    type: 'number',
    value: 100,
    limit: 99,
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexDirection: 'column',
      gap: '16px'
    }}>
        <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '32px'
      }}>
          <Badge {...args} type="dot" themeColor="primary">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="secondary">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="tertiary">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="info">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="success">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="warning">
            <NotificationIcon width={26} height={26} />
          </Badge>
          <Badge {...args} type="dot" themeColor="error">
            <NotificationIcon width={26} height={26} />
          </Badge>
        </div>
        <div style={{
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
          <Badge {...args} themeColor="tertiary">
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
        </div>
      </div>;
  }
}`,...(N=(B=l.parameters)==null?void 0:B.docs)==null?void 0:N.source}}};const T=["Default","Type","Max","Theme"];export{n as Default,s as Max,l as Theme,d as Type,T as __namedExportsOrder,D as default};
