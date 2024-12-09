import{j as o}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-CM0pFb8Z.js";import{H as i,a as l}from"./highcharts-react.min-Cx-Shxsw.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";const p={chart:{type:"bar"},title:{text:"My chart"},series:[{data:[1,2,3]}]},e=({onClick:a,className:d})=>o.jsx(i,{highcharts:l,options:p});try{e.displayName="BarChart",e.__docgenInfo={description:"",displayName:"BarChart",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{barchart.displayName="barchart",barchart.__docgenInfo={description:"",displayName:"barchart",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Chart/BarChart",component:e,tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"Bar Chart",description:{component:"長條圖表組件的呈現及說明。"}}}},r={name:"預設項目",args:{className:"",onClick:c("onClick")},render(a){return o.jsx(e,{...a})}};var t,s,n;r.parameters={...r.parameters,docs:{...(t=r.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    className: '',
    onClick: action('onClick')
  },
  render(args) {
    return <BarChart {...args} />;
  }
}`,...(n=(s=r.parameters)==null?void 0:s.docs)==null?void 0:n.source}}};const g=["Default"];export{r as Default,g as __namedExportsOrder,f as default};
