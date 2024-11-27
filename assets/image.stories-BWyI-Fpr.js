import{j as s}from"./jsx-runtime-DEdD30eg.js";import{I as e}from"./image-B9ZkbhVX.js";import"./index-RYns6xqu.js";const f={title:"Component/Image",component:e,tags:["autodocs"],argTypes:{src:{description:"圖片來源",control:{type:"text"}},alt:{description:"圖片說明",control:{type:"text"}},ratio:{description:"圖片比例",control:{type:"select",options:[11,43,54,169]}},objectFit:{description:"圖片填滿方式",control:{type:"select",options:["cover","contain","fill","none"]}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"圖片",description:{component:"圖片的呈現及說明。"}}}},r={name:"預設項目",args:{src:"https://picsum.photos/300/300",alt:"placeholder",ratio:169,objectFit:"contain",className:""},render(t){return s.jsx(e,{...t})}},o={name:"比例項目",args:{alt:"placeholder",objectFit:"contain",className:""},render(t){return s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[s.jsx(e,{...t,src:"https://picsum.photos/300/300",ratio:11}),s.jsx(e,{...t,src:"https://picsum.photos/300/300",ratio:43}),s.jsx(e,{...t,src:"https://picsum.photos/300/300",ratio:54}),s.jsx(e,{...t,src:"https://picsum.photos/300/300",ratio:169})]})}},a={name:"比例項目",args:{alt:"placeholder",ratio:169,className:""},render(t){return s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[s.jsx(e,{...t,src:"https://picsum.photos/300/300",objectFit:"none"}),s.jsx(e,{...t,src:"https://picsum.photos/300/300",objectFit:"contain"}),s.jsx(e,{...t,src:"https://picsum.photos/300/300",objectFit:"fill"}),s.jsx(e,{...t,src:"https://picsum.photos/300/300",objectFit:"cover"})]})}};var p,c,i;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    src: 'https://picsum.photos/300/300',
    alt: 'placeholder',
    ratio: 169,
    objectFit: 'contain',
    className: ''
  },
  render(args) {
    return <Image {...args} />;
  }
}`,...(i=(c=r.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var n,m,l;o.parameters={...o.parameters,docs:{...(n=o.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '比例項目',
  args: {
    alt: 'placeholder',
    objectFit: 'contain',
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Image {...args} src="https://picsum.photos/300/300" ratio={11} />
        <Image {...args} src="https://picsum.photos/300/300" ratio={43} />
        <Image {...args} src="https://picsum.photos/300/300" ratio={54} />
        <Image {...args} src="https://picsum.photos/300/300" ratio={169} />
      </div>;
  }
}`,...(l=(m=o.parameters)==null?void 0:m.docs)==null?void 0:l.source}}};var d,h,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '比例項目',
  args: {
    alt: 'placeholder',
    ratio: 169,
    className: ''
  },
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '16px'
    }}>
        <Image {...args} src="https://picsum.photos/300/300" objectFit="none" />
        <Image {...args} src="https://picsum.photos/300/300" objectFit="contain" />
        <Image {...args} src="https://picsum.photos/300/300" objectFit="fill" />
        <Image {...args} src="https://picsum.photos/300/300" objectFit="cover" />
      </div>;
  }
}`,...(u=(h=a.parameters)==null?void 0:h.docs)==null?void 0:u.source}}};const F=["Default","Ratio","Fit"];export{r as Default,a as Fit,o as Ratio,F as __namedExportsOrder,f as default};
