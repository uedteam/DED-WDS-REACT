import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as l}from"./chunk-454WOBUV-CM0pFb8Z.js";import"./title-BPnjcUZo.js";import{B as C}from"./toast-BEzfIbOE.js";import"./checkbox-gHzG2Us7.js";import"./input-Cqvs4Uxt.js";import"./textarea-CO8Z8fZG.js";import"./toggle-B_GFje5b.js";import"./radio-BhGOQQ7m.js";import{T as t,b as o}from"./styled-Rb-jBBh0.js";import"./breadcrumb-b1HMjbI-.js";import"./progress-circle-ReGt0b-K.js";import"./progress-line-DHphvmbz.js";import"./styled-7_Fd9YFd.js";import"./menu-DboPxrNc.js";import"./image-BUf_2wZ-.js";import"./status-indicator-C0euK5S5.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./lodash-CcdATr5u.js";import"./disable-circle-Qt9C8lli.js";import"./string-ECkTvc_B.js";import"./check-BnJBHFpS.js";import"./index-sbqOYYIm.js";import"./offline-Ddz6ifNG.js";const S=[{key:"head",title:"TH",width:"50px"},{key:"column1",title:"TH",width:"100px"},{key:"column2",title:"TH",width:"100px"},{key:"column3",title:"TH",width:"100px"},{key:"column4",title:"TH",width:"50px"},{key:"column5",title:"TH",width:"50px",align:"center"}],H=[{key:"head",title:"TH",width:"50px"},{key:"column1",title:"TH",width:"100px",render:e=>r.jsx(o,{content:e.column1,placement:"top",children:e.column1})},{key:"column2",title:"TH",width:"100px",render:e=>r.jsx(o,{content:e.column2,placement:"top",children:e.column2})},{key:"column3",title:"TH",width:"100px",render:e=>r.jsx(o,{content:e.column3,placement:"top",children:e.column3})},{key:"column4",title:"TH",width:"50px",render:e=>r.jsx(o,{content:e.column4,placement:"top",children:e.column4})},{key:"column5",title:"TH",width:"50px",align:"center",render:e=>r.jsx(C,{themeColor:"primary",variant:"filled",size:"small",onClick:()=>alert(e.column5),children:"View"})}],j=Array(7).fill(null).map((e,y)=>({head:`Head-${y+1}`,column1:"td1",column2:"td2",column3:"td3",column4:"td4",column5:"td5"})),X={title:"Component/Table",component:t,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},columns:{description:"欄位",table:{category:"PROPS"}},showCheckbox:{description:"是否顯示 checkbox",table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}},onRowClick:{description:"點擊事件",table:{category:"EVENTS"}},onSelect:{description:"選取事件",table:{category:"EVENTS"}}},args:{dataSource:j,columns:S,showCheckbox:!1,className:"",onRowClick:l("onRowClick"),onSelect:l("onSelect")},parameters:{docs:{title:"Table",description:{component:"Table 組件的呈現及說明。"}}}},n={name:"預設項目",args:{},render(e){return r.jsx(t,{...e})}},a={name:"框線表格",args:{},render(e){return r.jsx(t,{...e,showVerticalBorders:!0,showCheckbox:!0})}},s={name:"客製化欄位",args:{columns:H},render(e){return r.jsx(t,{...e})}},c={name:"可勾選資料列",args:{},render(e){return r.jsx(t,{...e,showCheckbox:!0})}};var m,i,p;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Table {...args} />;
  }
}`,...(p=(i=n.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var d,u,h;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '框線表格',
  args: {},
  render(args) {
    return <Table {...args} showVerticalBorders showCheckbox />;
  }
}`,...(h=(u=a.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var x,g,b;s.parameters={...s.parameters,docs:{...(x=s.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: '客製化欄位',
  args: {
    columns: customColumns
  },
  render(args) {
    return <Table {...args} />;
  }
}`,...(b=(g=s.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var k,T,w;c.parameters={...c.parameters,docs:{...(k=c.parameters)==null?void 0:k.docs,source:{originalSource:`{
  name: '可勾選資料列',
  args: {},
  render(args) {
    return <Table {...args} showCheckbox />;
  }
}`,...(w=(T=c.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};const Y=["Default","Border","Custom","Checkbox"];export{a as Border,c as Checkbox,s as Custom,n as Default,Y as __namedExportsOrder,X as default};
