import{j as n}from"./jsx-runtime-DEdD30eg.js";import{r}from"./index-RYns6xqu.js";import"./auo-TMZ-BSoc.js";import{S as g}from"./arrow_down-DA-sWbvp.js";import"./useDialog-Bg9wgsHg.js";const y=(e,t)=>{var c;const[a,s]=r.useState(!1),l=r.useRef(null),[i,o]=r.useState("0px"),u=!!((c=e.children)!=null&&c.length);return r.useEffect(()=>{const m=d=>d.reduce((f,h)=>h.children?f+42+m(h.children):f+42,0);if(l.current)if(a){const d=m(e.children||[]);o(`${d}px`)}else o("0px")},[a,e.children]),r.useEffect(()=>{t&&s(!1)},[t]),{isOpen:a,setIsOpen:s,contentRef:l,maxHeight:i,hasChildren:u}},x=({item:e={title:"",prefix:""},isCollapsed:t=!1,color:a="#000000"})=>{var c;const{isOpen:s,setIsOpen:l,contentRef:i,maxHeight:o,hasChildren:u}=y(e,t);return n.jsxs("li",{children:[n.jsxs("div",{className:"ded-nav-item",children:[n.jsxs("div",{style:{color:a},className:"ded-nav-item-content",onClick:()=>{e.path&&console.log("go to",e.path)},children:[n.jsx("div",{className:"ded-nav-item-content-icon",children:e.prefix}),n.jsx("span",{className:"ded-nav-item-content-title",style:{opacity:t?0:1},children:e.title})]}),!t&&u&&n.jsx(g,{width:24,height:24,fill:a,style:{transition:"transform 0.3s",transform:s?"rotate(180deg)":"rotate(0deg)"},onClick:()=>{l(!s)}})]}),n.jsx("ul",{ref:i,className:"ded-nav-subitem",style:{maxHeight:o},children:u&&((c=e.children)==null?void 0:c.map((m,d)=>n.jsx(x,{item:m,isCollapsed:t,color:a},d)))})]})},p=({dataSource:e,isCollapsed:t=!1,color:a="#000000"})=>{const s=r.useRef(null);return r.useEffect(()=>{s.current&&(s.current.style.width=t?"60px":"100%")},[t]),n.jsx("div",{className:"ded-nav-container",children:n.jsx("nav",{ref:s,className:"ded-nav",style:{width:t?"60px":"100%"},children:n.jsx("ul",{className:"ded-nav-list",children:e.map((l,i)=>n.jsx(x,{item:l,isCollapsed:t,color:a},i))})})})},H=p;try{p.displayName="Menu",p.__docgenInfo={description:"Menu 組件",displayName:"Menu",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"ItemProps[]"}},isCollapsed:{defaultValue:{value:"false"},description:"",name:"isCollapsed",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"#000000"},description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{menu.displayName="menu",menu.__docgenInfo={description:"Menu 組件",displayName:"menu",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"ItemProps[]"}},isCollapsed:{defaultValue:{value:"false"},description:"",name:"isCollapsed",required:!1,type:{name:"boolean"}},color:{defaultValue:{value:"#000000"},description:"",name:"color",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{H as M,p as a};
