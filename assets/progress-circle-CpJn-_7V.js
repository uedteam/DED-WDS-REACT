import{j as r}from"./jsx-runtime-DEdD30eg.js";import{r as m,R as v}from"./index-RYns6xqu.js";const p=({themeColor:i="primary",label:s="",percent:u=0,size:e=100,strokeWidth:a=10,className:f=""})=>{const t=m.useRef(null),[l,g]=v.useState(0);m.useEffect(()=>{t.current&&g(t.current.getComputedTextLength())},[s]);const n=(e-a)/2,c=2*Math.PI*n,y=c-u/100*c,d=Math.min(Math.max(u,0),100),o=()=>l?(console.log(l+a+30),l+a+30):64;return r.jsxs("div",{className:`ded-progress-circle-container ${f}`,children:[r.jsxs("svg",{className:"ded-progress",width:e,height:e,children:[r.jsx("circle",{className:"ded-progress-circle-track",fill:"transparent",strokeWidth:a,r:n,cx:e/2,cy:e/2}),r.jsx("circle",{className:"ded-progress-circle-percent-form",fill:"transparent",strokeWidth:a,strokeDasharray:c,strokeDashoffset:y,strokeLinecap:"round",r:n,cx:e/2,cy:e/2,transform:`rotate(-90 ${e/2} ${e/2})`,style:{transition:"stroke-dashoffset 0.35s"}}),e>=o()&&r.jsx("text",{className:"ded-progress-label",ref:t,x:"50%",y:"45%",textAnchor:"middle",fontSize:"1em",children:s??""}),e>=o()&&r.jsx("text",{className:"ded-progress-percent-text",x:"50%",y:s?"60%":"50%",textAnchor:"middle",dy:".3em",fontSize:"1.5em",children:`${d}%`})]}),e<o()&&r.jsxs("div",{className:"ded-progress-circle-label",children:[r.jsx("span",{className:"ded-progress-label",children:s}),r.jsx("span",{className:"ded-progress-percent",children:`${d}%`})]})]})};try{p.displayName="CircleProgress",p.__docgenInfo={description:"CircleProgress 元件",displayName:"CircleProgress",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},percent:{defaultValue:{value:"0"},description:"",name:"percent",required:!1,type:{name:"number"}},size:{defaultValue:{value:"100"},description:"",name:"size",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"10"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{progresscircle.displayName="progresscircle",progresscircle.__docgenInfo={description:"CircleProgress 元件",displayName:"progresscircle",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"error"'},{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},percent:{defaultValue:{value:"0"},description:"",name:"percent",required:!1,type:{name:"number"}},size:{defaultValue:{value:"100"},description:"",name:"size",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"10"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{p as C};