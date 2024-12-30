import{j as e}from"./jsx-runtime-DEdD30eg.js";import{A as o}from"./pagination-BcWBc1p5.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-BeC0CIbY.js";import{B as g}from"./toast-DIhnouBr.js";import"./checkbox-BBF5yrDs.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./divider-ChKDBDeF.js";import"./image-CZs88QCg.js";import"./input-DoUPnDdK.js";import"./radio-CMOPLxLt.js";import"./textarea-CO8Z8fZG.js";import{T as r}from"./title-JGunjryD.js";import"./toggle-Ck5Sa1oo.js";import"./menu-Burl5-s8.js";import"./status-indicator-BDww4a8h.js";import"./layout-DbUmifqy.js";import"./tag-zODciKoh.js";import{S as x,a as S}from"./disable-circle-np6-bHDN.js";import"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";import"./logout-Cs4pFqLv.js";import"./notification-NM2mg_B2.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";const y=[{id:"1",label:e.jsx(r,{level:3,themeColor:"primary",children:"What is React?"}),detail:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"React is a JavaScript library for building user interfaces."}),e.jsx(g,{themeColor:"primary",variant:"soft",onClick:()=>({}),size:"small",suffix:e.jsx(S,{width:20,height:20}),children:"Button"})]})},{id:"2",label:e.jsx(r,{level:3,themeColor:"primary",children:"What are the features of React ?"}),detail:e.jsx("p",{children:"The features of React include component-based architecture, unidirectional data flow, and virtual DOM."})},{id:"3",label:e.jsx(r,{level:3,themeColor:"primary",children:"What is included in the React ecosystem ?"}),detail:e.jsx("p",{children:"The React ecosystem includes React Router, Redux, and Axios."})},{id:"4",label:e.jsx(r,{level:3,themeColor:"primary",children:"What are the advantages of React ?"}),detail:e.jsx("p",{children:"The advantages of React include component-based architecture, unidirectional data flow, and virtual DThese features provide efficiency, reusability, and better performance."})}],K={title:"Component/Accordion",component:o,tags:["autodocs"],argTypes:{dataSource:{description:"資料來源",table:{category:"PROPS"}},prefix:{description:"前置元素",table:{category:"PROPS"}},borderStyle:{description:"邊框樣式",control:{type:"select",options:["solid","highlight"]},table:{category:"PROPS"}},isSmallSize:{description:"是否為小尺寸",table:{category:"PROPS"}},isOpenAll:{description:"是否全部展開",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{dataSource:y,prefix:e.jsx(x,{width:20,height:20}),borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1,className:""},parameters:{docs:{title:"Accordion",description:{component:"折疊選單組件的呈現及說明。"}}}},t={name:"預設項目",args:{borderStyle:"highlight",isSmallSize:!1,isOpenAll:!1},render(a){return e.jsx(o,{...a})}},i={name:"邊框樣式",args:{borderStyle:"solid",isOpenAll:!1},render(a){return e.jsx(o,{...a})}},b=[{id:"1",label:e.jsx(r,{level:4,themeColor:"primary",children:"What is React?"}),detail:e.jsxs(e.Fragment,{children:[e.jsx("p",{children:"React is a JavaScript library for building user interfaces."}),e.jsx(g,{themeColor:"primary",variant:"soft",onClick:()=>({}),size:"small",suffix:e.jsx(S,{width:20,height:20}),children:"Button"})]})},{id:"2",label:e.jsx(r,{level:4,themeColor:"primary",children:"What are the features of React ?"}),detail:e.jsx("p",{children:"The features of React include component-based architecture, unidirectional data flow, and virtual DOM."})},{id:"3",label:e.jsx(r,{level:4,themeColor:"primary",children:"What is included in the React ecosystem ?"}),detail:e.jsx("p",{children:"The React ecosystem includes React Router, Redux, and Axios."})},{id:"4",label:e.jsx(r,{level:4,themeColor:"primary",children:"What are the advantages of React ?"}),detail:e.jsx("p",{children:"The advantages of React include component-based architecture, unidirectional data flow, and virtual DThese features provide efficiency, reusability, and better performance."})}],s={name:"小尺寸",args:{dataSource:b,borderStyle:"solid",isSmallSize:!0,isOpenAll:!1,className:""},render(a){return e.jsx(o,{...a})}};var l,n,c;t.parameters={...t.parameters,docs:{...(l=t.parameters)==null?void 0:l.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    borderStyle: 'highlight',
    isSmallSize: false,
    isOpenAll: false
  },
  render(args) {
    return <Accordion {...args} />;
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var d,m,p;i.parameters={...i.parameters,docs:{...(d=i.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '邊框樣式',
  args: {
    borderStyle: 'solid',
    isOpenAll: false
  },
  render(args) {
    return <Accordion {...args} />;
  }
}`,...(p=(m=i.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var h,u,f;s.parameters={...s.parameters,docs:{...(h=s.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '小尺寸',
  args: {
    dataSource: smallQaList,
    borderStyle: 'solid',
    isSmallSize: true,
    isOpenAll: false,
    className: ''
  },
  render(args) {
    return <Accordion {...args} />;
  }
}`,...(f=(u=s.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};const U=["Default","Border","Small"];export{i as Border,t as Default,s as Small,U as __namedExportsOrder,K as default};
