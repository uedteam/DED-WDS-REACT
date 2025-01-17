import{j as s}from"./jsx-runtime-DEdD30eg.js";import{I as r}from"./image-CZs88QCg.js";import{G as a,R as m,C as e}from"./grid-D9dEAlnk.js";import"./index-RYns6xqu.js";const f={title:"Component/Image",component:r,tags:["autodocs"],argTypes:{src:{description:"圖片來源",table:{category:"PROPS"}},alt:{description:"圖片替代文字",table:{category:"PROPS"}},ratio:{description:"圖片比例",control:{type:"select",options:[11,43,54,169]},table:{category:"PROPS"}},objectFit:{description:"圖片填滿方式",control:{type:"select",options:["cover","contain","fill","none"]},table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},parameters:{docs:{title:"Image",description:{component:"圖片組件的呈現及說明。"}}}},o={name:"預設項目",args:{src:"https://picsum.photos/300/300?random=1",alt:"placeholder",ratio:"1x1",objectFit:"cover",className:""},render(t){return s.jsx(a,{fluid:!0,children:s.jsx(m,{hasGap:!0,children:s.jsx(e,{xs:12,sm:6,md:3,children:s.jsx(r,{...t})})})})}},i={name:"比例項目",args:{alt:"placeholder",objectFit:"none",className:""},render(t){return s.jsx(a,{fluid:!0,children:s.jsxs(m,{hasGap:!0,children:[s.jsxs(e,{xs:12,sm:6,md:3,children:[s.jsx(r,{...t,src:"https://picsum.photos/300/300?random=2",ratio:"1x1"}),s.jsx("div",{style:{textAlign:"right"},children:"1x1"})]}),s.jsxs(e,{xs:12,sm:6,md:3,children:[s.jsx(r,{...t,src:"https://picsum.photos/300/300?random=2",ratio:"4x3"}),s.jsx("div",{style:{textAlign:"right"},children:"4x3"})]}),s.jsxs(e,{xs:12,sm:6,md:3,children:[s.jsx(r,{...t,src:"https://picsum.photos/300/300?random=2",ratio:"5x4"}),s.jsx("div",{style:{textAlign:"right"},children:"5x4"})]}),s.jsxs(e,{xs:12,sm:6,md:3,children:[s.jsx(r,{...t,src:"https://picsum.photos/300/300?random=2",ratio:"16x9"}),s.jsx("div",{style:{textAlign:"right"},children:"16x9"})]})]})})}},n={name:"比例項目",args:{alt:"placeholder",ratio:"16x9",className:""},render(t){return s.jsx(a,{fluid:!0,children:s.jsxs(m,{hasGap:!0,children:[s.jsxs(e,{xs:12,sm:6,md:3,children:[s.jsx(r,{...t,src:"https://picsum.photos/300/300?random=3",objectFit:"none"}),s.jsx("div",{style:{textAlign:"right"},children:"none"})]}),s.jsxs(e,{xs:12,sm:6,md:3,children:[s.jsx(r,{...t,src:"https://picsum.photos/300/300?random=3",objectFit:"contain"}),s.jsx("div",{style:{textAlign:"right"},children:"contain"})]}),s.jsxs(e,{xs:12,sm:6,md:3,children:[s.jsx(r,{...t,src:"https://picsum.photos/300/300?random=3",objectFit:"fill"}),s.jsx("div",{style:{textAlign:"right"},children:"fill"})]}),s.jsxs(e,{xs:12,sm:6,md:3,children:[s.jsx(r,{...t,src:"https://picsum.photos/300/300?random=3",objectFit:"cover"}),s.jsx("div",{style:{textAlign:"right"},children:"cover"})]})]})})}};var c,l,d;o.parameters={...o.parameters,docs:{...(c=o.parameters)==null?void 0:c.docs,source:{originalSource:`{
  name: '預設項目',
  args: {
    src: 'https://picsum.photos/300/300?random=1',
    alt: 'placeholder',
    ratio: '1x1',
    objectFit: 'cover',
    className: ''
  },
  render(args) {
    return <Grid fluid>
        <Row hasGap>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} />
          </Column>
        </Row>
      </Grid>;
  }
}`,...(d=(l=o.parameters)==null?void 0:l.docs)==null?void 0:d.source}}};var p,x,h;i.parameters={...i.parameters,docs:{...(p=i.parameters)==null?void 0:p.docs,source:{originalSource:`{
  name: '比例項目',
  args: {
    alt: 'placeholder',
    objectFit: 'none',
    className: ''
  },
  render(args) {
    return <Grid fluid>
        <Row hasGap>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} src="https://picsum.photos/300/300?random=2" ratio="1x1" />
            <div style={{
            textAlign: 'right'
          }}>1x1</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} src="https://picsum.photos/300/300?random=2" ratio="4x3" />
            <div style={{
            textAlign: 'right'
          }}>4x3</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} src="https://picsum.photos/300/300?random=2" ratio="5x4" />
            <div style={{
            textAlign: 'right'
          }}>5x4</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} src="https://picsum.photos/300/300?random=2" ratio="16x9" />
            <div style={{
            textAlign: 'right'
          }}>16x9</div>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(h=(x=i.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};var u,g,j;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  name: '比例項目',
  args: {
    alt: 'placeholder',
    ratio: '16x9',
    className: ''
  },
  render(args) {
    return <Grid fluid>
        <Row hasGap>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} src="https://picsum.photos/300/300?random=3" objectFit="none" />
            <div style={{
            textAlign: 'right'
          }}>none</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} src="https://picsum.photos/300/300?random=3" objectFit="contain" />
            <div style={{
            textAlign: 'right'
          }}>contain</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} src="https://picsum.photos/300/300?random=3" objectFit="fill" />
            <div style={{
            textAlign: 'right'
          }}>fill</div>
          </Column>
          <Column xs={12} sm={6} md={3}>
            <Image {...args} src="https://picsum.photos/300/300?random=3" objectFit="cover" />
            <div style={{
            textAlign: 'right'
          }}>cover</div>
          </Column>
        </Row>
      </Grid>;
  }
}`,...(j=(g=n.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};const A=["Default","Ratio","Fit"];export{o as Default,n as Fit,i as Ratio,A as __namedExportsOrder,f as default};
