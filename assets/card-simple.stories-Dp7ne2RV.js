import{j as r}from"./jsx-runtime-DEdD30eg.js";import{C as n}from"./side-nav-CaRlQwm_.js";import{G as l,R as m,C as t}from"./grid-C0v7SZy_.js";import"./index-RYns6xqu.js";import"./disable-circle-Qt9C8lli.js";import"./logout-Cs4pFqLv.js";import"./title-JGunjryD.js";import"./toast-CS910pHv.js";import"./string-BqrfsRv8.js";import"./checkbox-Dx9j1Oee.js";import"./check-BnJBHFpS.js";import"./input-DzdR_7R-.js";import"./index-sbqOYYIm.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./radio-CMOPLxLt.js";import"./breadcrumb-HNZsAoLy.js";import"./progress-circle-wFm81-mr.js";import"./progress-line-DG1O7uhi.js";import"./menu-BQI-_cKM.js";import"./image-CZs88QCg.js";import"./status-indicator-BDww4a8h.js";import"./badge-vsbKzH_B.js";import"./layout-DbUmifqy.js";import"./notification-NM2mg_B2.js";const Q={title:"Component/Card-Simple",component:n,tags:["autodocs"],argTypes:{layout:{description:"佈局",control:{type:"select",options:["vertical","horizontal"]},table:{category:"PROPS"}},imgSrc:{description:"圖片來源",table:{category:"PROPS"}},buttonName:{description:"按鈕名稱",table:{category:"PROPS"}},align:{description:"對齊方式",control:{type:"select",options:["center","left","right"]},table:{category:"PROPS"}},title:{description:"卡片標題",table:{category:"PROPS"}},subtitle:{description:"副標題",table:{category:"PROPS"}},description:{description:"描述",table:{category:"PROPS"}}},parameters:{docs:{title:"Card",description:{component:"卡片組件的呈現及說明。"}}},args:{layout:"vertical",imgSrc:"libs/src/assets/card_bg.png",buttonName:"Button",align:"left",title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."}},o={name:"預設項目",args:{},render:function(e){return r.jsx(l,{fluid:!0,children:r.jsx(m,{hasGap:!0,children:r.jsx(t,{xs:12,sm:6,md:4,children:r.jsx(n,{...e})})})})}},s={name:"按鈕對齊方式",args:{},render:function(e){return r.jsx(l,{fluid:!0,children:r.jsxs(m,{children:[r.jsx(t,{xs:12,sm:6,md:4,children:r.jsx(n,{...e,align:"left"})}),r.jsx(t,{xs:12,sm:6,md:4,children:r.jsx(n,{...e,align:"center"})}),r.jsx(t,{xs:12,sm:6,md:4,children:r.jsx(n,{...e,align:"right"})})]})})}},i={name:"水平佈局",args:{},render:function(e){return r.jsx(l,{fluid:!0,children:r.jsxs(m,{hasGap:!0,children:[r.jsx(t,{xs:12,md:6,lg:3,children:r.jsx(n,{...e})}),r.jsx(t,{xs:12,md:6,lg:3,children:r.jsx(n,{...e})}),r.jsx(t,{xs:12,md:6,lg:3,children:r.jsx(n,{...e})}),r.jsx(t,{xs:12,md:6,lg:3,children:r.jsx(n,{...e})})]})})}},a={name:"垂直佈局",args:{},render:function(e){return r.jsx(l,{fluid:!0,children:r.jsxs(m,{children:[r.jsx(t,{xs:6,children:r.jsx(n,{...e,layout:"horizontal"})}),r.jsx(t,{xs:6,children:r.jsx(n,{...e,layout:"horizontal"})}),r.jsx(t,{xs:6,children:r.jsx(n,{...e,layout:"horizontal"})}),r.jsx(t,{xs:6,children:r.jsx(n,{...e,layout:"horizontal"})})]})})}};var d,p,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render: function (args) {
    return <Grid fluid>
        <Row hasGap>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args}></CardSimple>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,x,g;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '按鈕對齊方式',
  args: {},
  render: function (args) {
    return <Grid fluid>
        <Row>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args} align="left"></CardSimple>
          </Column>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args} align="center"></CardSimple>
          </Column>
          <Column xs={12} sm={6} md={4}>
            <CardSimple {...args} align="right"></CardSimple>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(g=(x=s.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var C,S,h;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
  name: '水平佈局',
  args: {},
  render: function (args) {
    return <Grid fluid>
        <Row hasGap>
          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>

          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>

          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>

          <Column xs={12} md={6} lg={3}>
            <CardSimple {...args}></CardSimple>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(h=(S=i.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var j,f,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
  name: '垂直佈局',
  args: {},
  render: function (args) {
    return <Grid fluid>
        <Row>
          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>

          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>

          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>

          <Column xs={6}>
            <CardSimple {...args} layout="horizontal"></CardSimple>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const U=["Default","Align","Horizontal","Vertical"];export{s as Align,o as Default,i as Horizontal,a as Vertical,U as __namedExportsOrder,Q as default};
