import{j as e}from"./jsx-runtime-DEdD30eg.js";import"./auo-TMZ-BSoc.js";import"./index-RYns6xqu.js";import{S as l}from"./arrow_down-DA-sWbvp.js";const n=({isOpen:r,className:t})=>e.jsxs("details",{onToggle:d=>console.log(d),open:r,className:`accordion ${t}`,children:[e.jsxs("summary",{children:[e.jsx("span",{children:"Click me"}),e.jsx("div",{className:`${r?"accordion-icon-open":"accordion-icon-close"}`,children:e.jsx(l,{width:20,height:20})})]}),e.jsx("p",{children:"Here's some more info"})]}),i=n;try{n.displayName="Accordion",n.__docgenInfo={description:"",displayName:"Accordion",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{accordion.displayName="accordion",accordion.__docgenInfo={description:"",displayName:"accordion",props:{isOpen:{defaultValue:null,description:"",name:"isOpen",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const g={title:"Component/Accordion",component:i,tags:["autodocs"],argTypes:{className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"搜尋",description:{component:"Accordion 的呈現及說明。"}}}},o={name:"搜尋輸入框",args:{className:""},render(r){return e.jsx(i,{...r})}};var a,s,c;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '搜尋輸入框',
  args: {
    className: ''
  },
  render(args) {
    return <Accordion {...args} />;
  }
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const y=["Primary"];export{o as Primary,y as __namedExportsOrder,g as default};
