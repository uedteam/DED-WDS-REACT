import{j as i}from"./jsx-runtime-DEdD30eg.js";import{a as o}from"./chunk-454WOBUV-CM0pFb8Z.js";import{H as c,a as l}from"./highcharts-react.min-Cx-Shxsw.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";const p={chart:{type:"line"},title:{text:"My chart"},series:[{data:[1,2,3]}]},r=({onClick:e,className:d})=>i.jsx(c,{highcharts:l,options:p});try{r.displayName="LineChart",r.__docgenInfo={description:"",displayName:"LineChart",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{linechart.displayName="linechart",linechart.__docgenInfo={description:"",displayName:"linechart",props:{onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(() => void)"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const f={title:"Chart/LineChart",component:r,tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}},onClick:{description:"點擊事件"}},parameters:{docs:{title:"Line Chart",description:{component:"長條圖表組件的呈現及說明。"}}}},a={name:"預設項目",args:{className:"",onClick:o("onClick")},render(e){return i.jsx(r,{...e})}};var t,n,s;a.parameters={...a.parameters,docs:{...(t=a.parameters)==null?void 0:t.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    className: '',
    onClick: action('onClick')
  },
  render(args) {
    return <LineChart {...args} />;
  }
}`,...(s=(n=a.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};const g=["Default"];export{a as Default,g as __namedExportsOrder,f as default};
