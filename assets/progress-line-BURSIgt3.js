import{j as e}from"./jsx-runtime-DEdD30eg.js";import{u}from"./useCounter-DpfJ3ATo.js";import{g as l}from"./string-BqrfsRv8.js";const n=({themeColor:r="primary",label:a="",percent:i=0,strokeWidth:t=10,className:d=""})=>{const o=u({initialValue:0,step:1,delay:0,limit:i}),s=Math.min(Math.max(o,0),100);return e.jsxs("div",{className:`ded-progress-line-container ${d}`,children:[a&&e.jsx("div",{className:"ded-progress-line-label ded-progress-label",children:a}),e.jsxs("div",{className:"ded-progress-line",children:[e.jsx("div",{className:"ded-progress-line-track",style:{height:t},children:e.jsx("div",{className:`ded-progress-line-percent-form 
              ${l("ded-progress-line-percent-form",r)}`,style:{width:`${s}%`}})}),e.jsx("div",{className:`ded-progress-line-label ded-progress-percent-text ${l("ded-progress-percent-text",r)}
        `,children:`${s}%`})]})]})};try{n.displayName="LineProgress",n.__docgenInfo={description:"LineProgress 組件",displayName:"LineProgress",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},percent:{defaultValue:{value:"0"},description:"",name:"percent",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"10"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{progressline.displayName="progressline",progressline.__docgenInfo={description:"LineProgress 組件",displayName:"progressline",props:{themeColor:{defaultValue:{value:"primary"},description:"",name:"themeColor",required:!1,type:{name:"enum",value:[{value:'"none"'},{value:'"primary"'},{value:'"secondary"'},{value:'"neutral"'},{value:'"info"'},{value:'"success"'},{value:'"warning"'},{value:'"error"'}]}},label:{defaultValue:{value:""},description:"",name:"label",required:!1,type:{name:"string"}},percent:{defaultValue:{value:"0"},description:"",name:"percent",required:!1,type:{name:"number"}},strokeWidth:{defaultValue:{value:"10"},description:"",name:"strokeWidth",required:!1,type:{name:"number"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{n as L};