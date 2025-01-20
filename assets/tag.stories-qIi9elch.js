import{j as r}from"./jsx-runtime-DEdD30eg.js";import{a as T}from"./chunk-454WOBUV-CM0pFb8Z.js";import{T as a}from"./tag-Code_Ef5.js";import{b as x,c as S,d as v,e as P}from"./warning-tri-Y1-2BlEi.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";const w={title:"Component/Tag",component:a,tags:["autodocs"],argTypes:{themeColor:{description:"主題顏色",options:["primary","secondary","neutral","info","success","warning","error"],control:{type:"select"},table:{category:"PROPS"}},variable:{description:"變數",options:["filled","ghost"],control:{type:"select"},table:{category:"PROPS"}},label:{description:"標籤文字",table:{category:"PROPS"}},href:{description:"超連結",table:{category:"PROPS"}},prefix:{description:"圖示",options:["None","Account","Search","Visibility","VisibilityOff"],mapping:{None:null,Account:r.jsx(x,{}),Search:r.jsx(S,{}),Visibility:r.jsx(v,{}),VisibilityOff:r.jsx(P,{})},table:{category:"PROPS"}},closable:{description:"是否可關閉",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClose:{description:"關閉事件",action:"closed",table:{category:"EVENTS"}}},args:{themeColor:"primary",variable:"filled",label:"Tag",href:"",prefix:"None",closable:!0,isDisabled:!1,className:"",onClose:T("closed")},parameters:{docs:{title:"Tag",description:{component:"標籤組件的呈現及說明。"}}}},o={name:"預設項目",args:{},render(e){return r.jsx(a,{...e})}},s={name:"附加元素",args:{},parameters:{docs:{source:{transform(e,n){return`
<Tag {...args} prefix={<SvgAccount></SvgAccount>} />
          `}}}},render(e){return r.jsx(a,{...e,prefix:r.jsx(x,{})})}},t={name:"外觀樣式",args:{},parameters:{docs:{source:{transform(e,n){return`
<Tag {...args} variable="filled" />
<Tag {...args} variable="ghost" />
`}}}},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px"},children:[r.jsx(a,{...e,variable:"filled",themeColor:"primary",label:"Primary"}),r.jsx(a,{...e,variable:"ghost",themeColor:"primary",label:"Primary"})]})}},l={name:"主題色彩",args:{},parameters:{docs:{source:{transform(e,n){return`
<Tag {...args} themeColor="primary" />
<Tag {...args} themeColor="secondary" />
<Tag {...args} themeColor="neutral" />
<Tag {...args} themeColor="info" />
<Tag {...args} themeColor="success" />
<Tag {...args} themeColor="warning" />
<Tag {...args} themeColor="error" />
`}}}},render(e){return r.jsxs("div",{style:{display:"flex",gap:"8px",flexWrap:"wrap"},children:[r.jsx(a,{...e,themeColor:"primary",label:"Primary"}),r.jsx(a,{...e,themeColor:"secondary",label:"Secondary"}),r.jsx(a,{...e,themeColor:"neutral",label:"Neutral"}),r.jsx(a,{...e,themeColor:"info",label:"Info"}),r.jsx(a,{...e,themeColor:"success",label:"Success"}),r.jsx(a,{...e,themeColor:"warning",label:"Warning"}),r.jsx(a,{...e,themeColor:"error",label:"Error"})]})}};var i,c,g;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Tag {...args} />;
  }
}`,...(g=(c=o.parameters)==null?void 0:c.docs)==null?void 0:g.source}}};var m,p,d;s.parameters={...s.parameters,docs:{...(m=s.parameters)==null?void 0:m.docs,source:{originalSource:`{
  name: '附加元素',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Tag {...args} prefix={<SvgAccount></SvgAccount>} />
          \`;
        }
      }
    }
  },
  render(args) {
    return <Tag {...args} prefix={<SvgAccount />} />;
  }
}`,...(d=(p=s.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};var u,y,b;t.parameters={...t.parameters,docs:{...(u=t.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '外觀樣式',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Tag {...args} variable="filled" />
<Tag {...args} variable="ghost" />
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px'
    }}>
        <Tag {...args} variable="filled" themeColor="primary" label="Primary" />
        <Tag {...args} variable="ghost" themeColor="primary" label="Primary" />
      </div>;
  }
}`,...(b=(y=t.parameters)==null?void 0:y.docs)==null?void 0:b.source}}};var h,C,f;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  name: '主題色彩',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`
<Tag {...args} themeColor="primary" />
<Tag {...args} themeColor="secondary" />
<Tag {...args} themeColor="neutral" />
<Tag {...args} themeColor="info" />
<Tag {...args} themeColor="success" />
<Tag {...args} themeColor="warning" />
<Tag {...args} themeColor="error" />
\`;
        }
      }
    }
  },
  render(args) {
    return <div style={{
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap'
    }}>
        <Tag {...args} themeColor="primary" label="Primary" />
        <Tag {...args} themeColor="secondary" label="Secondary" />
        <Tag {...args} themeColor="neutral" label="Neutral" />
        <Tag {...args} themeColor="info" label="Info" />
        <Tag {...args} themeColor="success" label="Success" />
        <Tag {...args} themeColor="warning" label="Warning" />
        <Tag {...args} themeColor="error" label="Error" />
      </div>;
  }
}`,...(f=(C=l.parameters)==null?void 0:C.docs)==null?void 0:f.source}}};const E=["Default","Additional","Variable","ThemeColor"];export{s as Additional,o as Default,l as ThemeColor,t as Variable,E as __namedExportsOrder,w as default};
