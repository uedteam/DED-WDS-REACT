import{j as r}from"./jsx-runtime-DEdD30eg.js";import{C as t}from"./pagination-BQQ8FtnC.js";import{G as l,R as m,C as n}from"./grid-D9dEAlnk.js";import"./index-RYns6xqu.js";import"./warning-tri-DTbCof3x.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-Bof03Q4V.js";import"./toast-BRluRfD6.js";import"./title-Cw6Qriwq.js";import"./index-sbqOYYIm.js";import"./checkbox-CzjkG4_c.js";import"./check-BnJBHFpS.js";import"./progress-circle-xnhIhzfk.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DsOpskWp.js";import"./divider-ChKDBDeF.js";import"./image-CZs88QCg.js";import"./input-DSrn-cuk.js";import"./radio-CMOPLxLt.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./menu-Cn846N6x.js";import"./status-indicator-BDww4a8h.js";import"./layout-ZjbFUAzr.js";import"./tag-C0k5YPMD.js";import"./notification-NM2mg_B2.js";const X={title:"Component/Card-Simple",component:t,tags:["autodocs"],argTypes:{layout:{description:"佈局",control:{type:"select",options:["vertical","horizontal"]},table:{category:"PROPS"}},hasBorder:{description:"是否有邊框",table:{category:"PROPS"}},imgSrc:{description:"圖片來源",table:{category:"PROPS"}},buttonName:{description:"按鈕名稱",table:{category:"PROPS"}},align:{description:"對齊方式",control:{type:"select",options:["center","left","right"]},table:{category:"PROPS"}},title:{description:"卡片標題",table:{category:"PROPS"}},subtitle:{description:"副標題",table:{category:"PROPS"}},description:{description:"描述",table:{category:"PROPS"}}},parameters:{docs:{title:"Card",description:{component:"卡片組件的呈現及說明。"}}},args:{layout:"vertical",hasBorder:!0,imgSrc:"https://storage.googleapis.com/ded-wds-bucket/card_bg.png",buttonName:"Button",align:"left",title:"Card Title",subtitle:"Subtitle",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s..."}},o={name:"預設項目",args:{},render:function(e){return r.jsx(l,{fluid:!0,children:r.jsx(m,{hasGap:!0,children:r.jsx(n,{xs:12,sm:6,md:4,children:r.jsx(t,{...e})})})})}},i={name:"按鈕對齊方式",args:{},render:function(e){return r.jsx(l,{fluid:!0,children:r.jsxs(m,{children:[r.jsx(n,{xs:12,sm:6,md:4,children:r.jsx(t,{...e,align:"left"})}),r.jsx(n,{xs:12,sm:6,md:4,children:r.jsx(t,{...e,align:"center"})}),r.jsx(n,{xs:12,sm:6,md:4,children:r.jsx(t,{...e,align:"right"})})]})})}},s={name:"水平佈局",args:{},render:function(e){return r.jsx(l,{fluid:!0,children:r.jsxs(m,{hasGap:!0,children:[r.jsx(n,{xs:12,md:6,lg:3,children:r.jsx(t,{...e})}),r.jsx(n,{xs:12,md:6,lg:3,children:r.jsx(t,{...e})}),r.jsx(n,{xs:12,md:6,lg:3,children:r.jsx(t,{...e})}),r.jsx(n,{xs:12,md:6,lg:3,children:r.jsx(t,{...e})})]})})}},a={name:"垂直佈局",args:{},render:function(e){return r.jsx(l,{fluid:!0,children:r.jsxs(m,{children:[r.jsx(n,{xs:6,children:r.jsx(t,{...e,layout:"horizontal"})}),r.jsx(n,{xs:6,children:r.jsx(t,{...e,layout:"horizontal"})}),r.jsx(n,{xs:6,children:r.jsx(t,{...e,layout:"horizontal"})}),r.jsx(n,{xs:6,children:r.jsx(t,{...e,layout:"horizontal"})})]})})}};var d,p,c;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(c=(p=o.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};var u,x,g;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
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
}`,...(g=(x=i.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var C,h,S;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(S=(h=s.parameters)==null?void 0:h.docs)==null?void 0:S.source}}};var j,f,y;a.parameters={...a.parameters,docs:{...(j=a.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(y=(f=a.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};const Y=["Default","Align","Horizontal","Vertical"];export{i as Align,o as Default,s as Horizontal,a as Vertical,Y as __namedExportsOrder,X as default};
