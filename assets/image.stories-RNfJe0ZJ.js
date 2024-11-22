import{j as s}from"./jsx-runtime-DEdD30eg.js";import{r as d}from"./index-RYns6xqu.js";function A(e){var a,t,r="";if(typeof e=="string"||typeof e=="number")r+=e;else if(typeof e=="object")if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=A(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function $(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=A(e))&&(r&&(r+=" "),r+=a);return r}const b=e=>typeof e=="boolean"?"".concat(e):e===0?"0":e,F=$,_=(e,a)=>t=>{var r;if((a==null?void 0:a.variants)==null)return F(e,t==null?void 0:t.class,t==null?void 0:t.className);const{variants:p,defaultVariants:i}=a,h=Object.keys(p).map(o=>{const l=t==null?void 0:t[o],u=i==null?void 0:i[o];if(l===null)return null;const c=b(l)||b(u);return p[o][c]}),m=t&&Object.entries(t).reduce((o,l)=>{let[u,c]=l;return c===void 0||(o[u]=c),o},{}),y=a==null||(r=a.compoundVariants)===null||r===void 0?void 0:r.reduce((o,l)=>{let{class:u,className:c,...k}=l;return Object.entries(k).every(R=>{let[N,x]=R;return Array.isArray(x)?x.includes({...i,...m}[N]):{...i,...m}[N]===x})?[...o,u,c]:o},[]);return F(e,h,y,t==null?void 0:t.class,t==null?void 0:t.className)},j=({src:e,alt:a,ratio:t,objectFit:r,className:p})=>{const[i,h]=d.useState(""),[m,y]=d.useState("");return d.useEffect(()=>{h(_("ded-image-container",{variants:{ratio:{11:"ratio-1x1",43:"ratio-4x3",54:"ratio-5x4",169:"ratio-16x9"}}})({ratio:t}))},[t]),d.useEffect(()=>{y(_("ded-image",{variants:{objectFit:{cover:"cover",contain:"contain",fill:"fill",none:"none"}}})({objectFit:r}))},[r]),s.jsx("div",{className:`${i} ${p}`,children:s.jsx("img",{className:m,src:e,alt:a})})},n=j;try{j.displayName="Image",j.__docgenInfo={description:"",displayName:"Image",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},ratio:{defaultValue:null,description:"",name:"ratio",required:!0,type:{name:"enum",value:[{value:"11"},{value:"43"},{value:"54"},{value:"169"}]}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!0,type:{name:"enum",value:[{value:'"cover"'},{value:'"contain"'},{value:'"fill"'},{value:'"none"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{image.displayName="image",image.__docgenInfo={description:"",displayName:"image",props:{src:{defaultValue:null,description:"",name:"src",required:!0,type:{name:"string"}},alt:{defaultValue:null,description:"",name:"alt",required:!0,type:{name:"string"}},ratio:{defaultValue:null,description:"",name:"ratio",required:!0,type:{name:"enum",value:[{value:"11"},{value:"43"},{value:"54"},{value:"169"}]}},objectFit:{defaultValue:null,description:"",name:"objectFit",required:!0,type:{name:"enum",value:[{value:'"cover"'},{value:'"contain"'},{value:'"fill"'},{value:'"none"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const T={title:"Component/Image",component:n,tags:["autodocs"],argTypes:{src:{description:"圖片來源",control:{type:"text"}},alt:{description:"圖片說明",control:{type:"text"}},ratio:{description:"圖片比例",control:{type:"select",options:[11,43,54,169]}},objectFit:{description:"圖片填滿方式",control:{type:"select",options:["cover","contain","fill","none"]}},className:{description:"客製化樣式",control:{type:"text"}}},parameters:{docs:{title:"圖片",description:{component:"圖片的呈現及說明。"}}}},v={name:"預設項目",args:{src:"https://picsum.photos/300/300",alt:"placeholder",ratio:169,objectFit:"contain",className:""},render(e){return s.jsx(n,{...e})}},g={name:"比例項目",args:{alt:"placeholder",objectFit:"contain",className:""},render(e){return s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[s.jsx(n,{...e,src:"https://picsum.photos/300/300",ratio:11}),s.jsx(n,{...e,src:"https://picsum.photos/300/300",ratio:43}),s.jsx(n,{...e,src:"https://picsum.photos/300/300",ratio:54}),s.jsx(n,{...e,src:"https://picsum.photos/300/300",ratio:169})]})}},f={name:"比例項目",args:{alt:"placeholder",ratio:169,className:""},render(e){return s.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:"16px"},children:[s.jsx(n,{...e,src:"https://picsum.photos/300/300",objectFit:"none"}),s.jsx(n,{...e,src:"https://picsum.photos/300/300",objectFit:"contain"}),s.jsx(n,{...e,src:"https://picsum.photos/300/300",objectFit:"fill"}),s.jsx(n,{...e,src:"https://picsum.photos/300/300",objectFit:"cover"})]})}};var I,V,C;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(C=(V=v.parameters)==null?void 0:V.docs)==null?void 0:C.source}}};var q,S,E;g.parameters={...g.parameters,docs:{...(q=g.parameters)==null?void 0:q.docs,source:{originalSource:`{
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
}`,...(E=(S=g.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var O,W,w;f.parameters={...f.parameters,docs:{...(O=f.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(w=(W=f.parameters)==null?void 0:W.docs)==null?void 0:w.source}}};const K=["Default","Ratio","Fit"];export{v as Default,f as Fit,g as Ratio,K as __namedExportsOrder,T as default};
