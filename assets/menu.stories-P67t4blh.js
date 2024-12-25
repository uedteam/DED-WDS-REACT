import{j as e}from"./jsx-runtime-DEdD30eg.js";import{a as i}from"./disable-circle-Qt9C8lli.js";import"./index-RYns6xqu.js";import{S as o}from"./home-49bMB0eq.js";import{M as s}from"./menu-LnftMpru.js";import"./toast-DVPkjaw7.js";import"./string-BqrfsRv8.js";import"./title-JGunjryD.js";import"./index-sbqOYYIm.js";const u=[{title:"Dashboard",prefix:e.jsx(o,{width:24,height:24}),path:"/dashboard"},{title:"Settings",prefix:e.jsx(o,{width:24,height:24}),path:"/settings",children:[{title:"Profile",prefix:e.jsx(i,{width:24,height:24}),path:"/settings/profile"},{title:"Account",prefix:e.jsx(i,{width:24,height:24}),path:"/settings/account"}]},{title:"Help",prefix:e.jsx(o,{width:24,height:24}),path:"/help"}],D={title:"Component/Menu",component:s,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},isCollapsed:{description:"是否收合",table:{category:"PROPS"}},color:{description:"顏色",control:{type:"color"},table:{category:"PROPS"}},isSideNavLink:{description:"是否為側邊導航",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{dataSource:u,isCollapsed:!1,color:"#000000",className:""},parameters:{docs:{title:"Menu",description:{component:"選單組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(a){return e.jsx(s,{...a})}},h=[{title:"Dashboard",path:"/dashboard"},{title:"Settings",path:"/settings"},{title:"Help",path:"/help"}],r={name:"導航選單",args:{dataSource:h},render(a){return e.jsx(s,{...a,direction:"horizontal"})}};var n,c,p;t.parameters={...t.parameters,docs:{...(n=t.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Menu {...args} />;
  }
}`,...(p=(c=t.parameters)==null?void 0:c.docs)==null?void 0:p.source}}};var d,l,m;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '導航選單',
  args: {
    dataSource: navMenuData
  },
  render(args) {
    return <Menu {...args} direction="horizontal" />;
  }
}`,...(m=(l=r.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};const v=["Default","NavMenu"];export{t as Default,r as NavMenu,v as __namedExportsOrder,D as default};
