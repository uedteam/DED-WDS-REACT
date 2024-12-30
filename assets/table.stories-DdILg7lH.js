import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as l}from"./chunk-454WOBUV-CM0pFb8Z.js";import{T as t,c as o}from"./pagination-BcWBc1p5.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-BeC0CIbY.js";import{B as S}from"./toast-DIhnouBr.js";import"./checkbox-BBF5yrDs.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./divider-ChKDBDeF.js";import"./image-CZs88QCg.js";import"./input-DoUPnDdK.js";import"./radio-CMOPLxLt.js";import"./textarea-CO8Z8fZG.js";import"./title-JGunjryD.js";import"./toggle-Ck5Sa1oo.js";import"./menu-Burl5-s8.js";import"./status-indicator-BDww4a8h.js";import"./layout-DbUmifqy.js";import"./tag-zODciKoh.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./disable-circle-np6-bHDN.js";import"./string-BqrfsRv8.js";import"./logout-Cs4pFqLv.js";import"./notification-NM2mg_B2.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";const C=[{key:"head",title:"TH",width:"50px"},{key:"column1",title:"TH",width:"100px"},{key:"column2",title:"TH",width:"100px"},{key:"column3",title:"TH",width:"100px"},{key:"column4",title:"TH",width:"50px"},{key:"column5",title:"TH",width:"50px",align:"center"}],H=[{key:"head",title:"TH",width:"50px"},{key:"column1",title:"TH",width:"100px",render:e=>r.jsx(o,{content:e.column1,placement:"top",children:e.column1})},{key:"column2",title:"TH",width:"100px",render:e=>r.jsx(o,{content:e.column2,placement:"top",children:e.column2})},{key:"column3",title:"TH",width:"100px",render:e=>r.jsx(o,{content:e.column3,placement:"top",children:e.column3})},{key:"column4",title:"TH",width:"50px",render:e=>r.jsx(o,{content:e.column4,placement:"top",children:e.column4})},{key:"column5",title:"TH",width:"50px",align:"center",render:e=>r.jsx(S,{themeColor:"primary",variant:"filled",size:"small",onClick:()=>alert(e.column5),children:"View"})}],P=Array(7).fill(null).map((e,y)=>({head:`Head-${y+1}`,column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"})),ee={title:"Component/Table",component:t,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},columns:{description:"欄位",table:{category:"PROPS"}},showCheckbox:{description:"是否顯示 checkbox",table:{category:"PROPS"}},showVerticalBorders:{description:"是否顯示垂直邊框",table:{category:"PROPS"}},isSprite:{description:"是否為 Sprite",table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onRowClick:{description:"點擊事件",table:{category:"EVENTS"}},onSelect:{description:"選取事件",table:{category:"EVENTS"}}},args:{dataSource:P,columns:C,showCheckbox:!1,className:"",onRowClick:l("onRowClick"),onSelect:l("onSelect")},parameters:{docs:{title:"Table",description:{component:"Table 組件的呈現及說明。"}}}},n={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},a={name:"框線表格",args:{},render(e){return r.jsx(t,{...e,showVerticalBorders:!0,showCheckbox:!0})}},c={name:"客製化欄位",args:{columns:H},render(e){return r.jsx(t,{...e})}},s={name:"可勾選資料列",args:{},render(e){return r.jsx(t,{...e,showCheckbox:!0})}};var i,m,p;n.parameters={...n.parameters,docs:{...(i=n.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Table {...args} />;
  }
}`,...(p=(m=n.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '框線表格',
  args: {},
  render(args) {
    return <Table {...args} showVerticalBorders showCheckbox />;
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,g,b;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '客製化欄位',
  args: {
    columns: customColumns
  },
  render(args) {
    return <Table {...args} />;
  }
}`,...(b=(g=c.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,w,T;s.parameters={...s.parameters,docs:{...(k=s.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '可勾選資料列',
  args: {},
  render(args) {
    return <Table {...args} showCheckbox />;
  }
}`,...(T=(w=s.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};const re=["Default","Border","Custom","Checkbox"];export{a as Border,s as Checkbox,c as Custom,n as Default,re as __namedExportsOrder,ee as default};
