import{j as r}from"./jsx-runtime-DEdD30eg.js";import{R as g,r as u}from"./index-RYns6xqu.js";import{u as _}from"./useCounter-DpfJ3ATo.js";import{g as d}from"./string-BqrfsRv8.js";const y=({themeColor:a="primary",label:s="",percent:l=0,size:e=100,strokeWidth:t=10,className:v=""})=>{const[m,x]=g.useState(0);_({initialValue:0,step:1,delay:0,limit:l});const n=u.useRef(null),[p,h]=g.useState(0);u.useEffect(()=>{n.current&&h(n.current.getComputedTextLength())},[s]);const c=(e-t)/2,i=2*Math.PI*c,N=i-m/100*i,f=Math.min(Math.max(m,0),100),o=()=>p?p+t+30:64;return u.useEffect(()=>{x(l)},[l]),r.jsxs("div",{className:`ded-progress-circle-container ${v}`,children:[r.jsxs("svg",{className:"ded-progress",width:e,height:e,children:[r.jsx("circle",{className:"ded-progress-circle-track",fill:"transparent",strokeWidth:t,r:c,cx:e/2,cy:e/2}),r.jsx("circle",{className:`ded-progress-circle-percent-form 
            ${d("ded-progress-circle-percent-form",a)}
          `,fill:"transparent",strokeWidth:t,strokeDasharray:i,strokeDashoffset:N,strokeLinecap:"round",r:c,cx:e/2,cy:e/2,transform:`rotate(-90 ${e/2} ${e/2})`,style:{transition:"stroke-dashoffset 0.35s"}}),e>=o()&&r.jsx("text",{className:"ded-progress-label",ref:n,x:"50%",y:"45%",textAnchor:"middle",fontSize:"1em",children:s??""}),e>=o()&&r.jsx("text",{className:`ded-progress-percent-text 
              ${d("ded-progress-percent-text",a)}
            `,x:"50%",y:s?"60%":"50%",textAnchor:"middle",dy:".3em",fontSize:"1.5em",children:`${f}%`})]}),e<o()&&r.jsxs("div",{className:"ded-progress-circle-label",children:[r.jsx("span",{className:"ded-progress-label",children:s}),r.jsx("span",{className:`ded-progress-percent ${d("ded-progress-percent-text",a)}
            `,children:`${f}%`})]})]})};try{y.displayName="CircleProgress",y.__docgenInfo={description:"CircleProgress 元件",displayName:"CircleProgress",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},percent:{defaultValue:{value:"0"},description:"",name:"percent",required:!1,type:{name:"number"}},size:{defaultValue:{value:"100"},description:"",name:"size",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"10"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{progresscircle.displayName="progresscircle",progresscircle.__docgenInfo={description:"CircleProgress 元件",displayName:"progresscircle",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},percent:{defaultValue:{value:"0"},description:"",name:"percent",required:!1,type:{name:"number"}},size:{defaultValue:{value:"100"},description:"",name:"size",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"10"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{y as C};