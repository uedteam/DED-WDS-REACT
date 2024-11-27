import{j as l}from"./jsx-runtime-DEdD30eg.js";import{r as c}from"./index-RYns6xqu.js";import{a as i}from"./useDialog-Bg9wgsHg.js";import{R as $}from"./index-sbqOYYIm.js";const b=(t,e)=>{const r=a=>{t.current&&!t.current.contains(a.target)&&e()};c.useEffect(()=>(document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}),[])},w=(t,e,r,a,s)=>{if(r==="top")return{top:`${t.top}px`,left:`${t.left}px`,transform:`translate(calc(${e.width/2}px - 50%), calc(-100% - ${a}))`,width:`${s?e.width+"px":"fit-content"}`};if(r==="bottom")return{top:`${t.top+e.height}px`,left:`${t.left}px`,transform:`translate(calc(${e.width/2}px - 50%), ${a})`,width:`${s?e.width+"px":"fit-content"}`};if(r==="left")return{top:`${t.top}px`,left:`${t.left}px`,transform:`translate(calc(-100% - ${a}), calc(${e.height/2}px - 50%))`,width:`${s?e.width+"px":"fit-content"}`};if(r==="right")return{top:`${t.top}px`,left:`${t.left+e.width}px`,transform:`translate(${a}, calc(${e.height/2}px - 50%))`,width:`${s?e.width+"px":"fit-content"}`};if(r==="top-left")return{top:`${t.top}px`,left:`${t.left}px`,transform:`translate(0, calc(-100% - ${a}))`,width:`${s?e.width+"px":"fit-content"}`};if(r==="top-right")return{top:`${t.top}px`,left:`${t.left+e.width}px`,transform:`translate(calc(-100%), calc(-100% - ${a}))`,width:`${s?e.width+"px":"fit-content"}`};if(r==="bottom-left")return{top:`${t.top+e.height}px`,left:`${t.left}px`,transform:`translate(0, ${a})`,width:`${s?e.width+"px":"fit-content"}`};if(r==="bottom-right")return{top:`${t.top+e.height}px`,left:`${t.left+e.width}px`,transform:`translate(calc(-100%), ${a})`,width:`${s?e.width+"px":"fit-content"}`};if(r==="left-top")return{top:`${t.top}px`,left:`${t.left}px`,transform:`translate(calc(-100% - ${a}), 0)`,width:`${s?e.width+"px":"fit-content"}`};if(r==="left-bottom")return{top:`${t.top+e.height}px`,left:`${t.left}px`,transform:`translate(calc(-100% - ${a}), -100%)`,width:`${s?e.width+"px":"fit-content"}`};if(r==="right-top")return{top:`${t.top}px`,left:`${t.left+e.width}px`,transform:`translate(${a}, 0)`,width:`${s?e.width+"px":"fit-content"}`};if(r==="right-bottom")return{top:`${t.top+e.height}px`,left:`${t.left+e.width}px`,transform:`translate(${a}, -100%)`,width:`${s?e.width+"px":"fit-content"}`}},f=({children:t,customRootId:e})=>{let r;const a=e||"portal-root";if(document.getElementById(a))r=document.getElementById(a);else{const s=document.createElement("div");s.id=a,document.body.appendChild(s),r=s}return $.createPortal(t,r)};try{f.displayName="Portal",f.__docgenInfo={description:"",displayName:"Portal",props:{customRootId:{defaultValue:null,description:"",name:"customRootId",required:!1,type:{name:"string"}}}}}catch{}try{portal.displayName="portal",portal.__docgenInfo={description:"",displayName:"portal",props:{customRootId:{defaultValue:null,description:"",name:"customRootId",required:!1,type:{name:"string"}}}}}catch{}const _=({label:t="",href:e="#",isCurrentPage:r=!1})=>r?l.jsx("span",{className:"ded-breadcrumb-item-label",children:t}):l.jsx("a",{className:"ded-breadcrumb-item-link",href:e,children:t}),m=({dataSource:t,className:e=""})=>{const r=c.useRef(null),a=c.useRef(null),[s,n]=c.useState(!1),{childrenSize:p,position:x}=i(r);b(a,()=>n(!1));const h=()=>{n(d=>!d)},u=t.length>3?[t[0],{label:"...",href:"#"},...t.slice(-2)]:t;return l.jsxs(l.Fragment,{children:[l.jsx("nav",{className:`ded-breadcrumb-container ${e}`,children:l.jsx("ol",{className:"ded-breadcrumb",children:u.map((d,o)=>l.jsx("li",{className:"ded-breadcrumb-item",children:d.label==="..."?l.jsx("div",{ref:r,className:"ded-rest",children:l.jsx("span",{onClick:h,className:"ded-rest-label",children:d.label})}):l.jsx(_,{label:d.label,href:d.href==="#"?void 0:d.href,isCurrentPage:o===u.length-1})},o))})}),l.jsx(f,{children:s&&l.jsx("div",{ref:a,style:w(x,p,"bottom-left","6px",!1),className:`ded-dropdown-menu ${e}`,children:l.jsx("ul",{className:"ded-rest-dropdown-menu",children:t.slice(1,-2).map((d,o)=>l.jsx("li",{className:"ded-drop-item",children:l.jsx("a",{className:"ded-drop-item-link",href:d.href,children:d.label})},o))})})})]})};try{m.displayName="Breadcrumb",m.__docgenInfo={description:"`Breadcrumb` 元件用於顯示導航路徑。",displayName:"Breadcrumb",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{ label: string; href?: string | undefined; }[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{breadcrumb.displayName="breadcrumb",breadcrumb.__docgenInfo={description:"`Breadcrumb` 元件用於顯示導航路徑。",displayName:"breadcrumb",props:{dataSource:{defaultValue:null,description:"",name:"dataSource",required:!0,type:{name:"{ label: string; href?: string | undefined; }[]"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{m as B,f as P,w as g,b as u};
