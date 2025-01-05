import{j as e}from"./jsx-runtime-DEdD30eg.js";import{L as v}from"./layout-ZjbFUAzr.js";import{G as t,R as s,C as l}from"./grid-D9dEAlnk.js";import{T}from"./title-BdHUK5iL.js";import{D as Q}from"./divider-ChKDBDeF.js";import{B as a}from"./toast-NVykQKlx.js";import{I as i}from"./input-B8g9yR0n.js";import{C as O}from"./checkbox-CzjkG4_c.js";import{g as o,b as S}from"./warning-tri-DTbCof3x.js";import"./index-RYns6xqu.js";import{S as h,a as E,b as M}from"./mail-B2WfOqXZ.js";import"./string-BqrfsRv8.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";const n=({bgColorSrc:r="",bgImgSrc:W="",title:Y="",description:y="",form:C=null,externalLinks:j=null,signUp:w=null,className:z=""})=>{const{Content:J}=v,{Row:b,Column:m}=t;return e.jsx(v,{className:z,children:e.jsx(J,{children:e.jsx(t,{fluid:!1,children:e.jsxs(b,{hasGap:!1,children:[e.jsx(m,{md:12,lg:5,children:e.jsx("div",{style:{backgroundImage:`url(${W})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"},className:"ded-login-bg"})}),e.jsx(m,{md:12,lg:7,children:e.jsxs("div",{className:"ded-login-content",children:[e.jsxs(t,{fluid:!0,children:[e.jsx(b,{children:e.jsx(m,{md:12,children:e.jsx(T,{level:3,children:Y})})}),y&&e.jsx(b,{children:e.jsx(m,{md:12,children:e.jsx("p",{children:y})})})]}),C&&C,j&&e.jsx(Q,{children:"Or"}),j&&j,w&&w]})})]})})})})};try{n.displayName="AuthFLow",n.__docgenInfo={description:"",displayName:"AuthFLow",props:{bgColorSrc:{defaultValue:{value:""},description:"",name:"bgColorSrc",required:!1,type:{name:"string"}},bgImgSrc:{defaultValue:{value:""},description:"",name:"bgImgSrc",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},form:{defaultValue:{value:"null"},description:"",name:"form",required:!1,type:{name:"ReactNode"}},externalLinks:{defaultValue:{value:"null"},description:"",name:"externalLinks",required:!1,type:{name:"ReactNode"}},signUp:{defaultValue:{value:"null"},description:"",name:"signUp",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{authflow.displayName="authflow",authflow.__docgenInfo={description:"",displayName:"authflow",props:{bgColorSrc:{defaultValue:{value:""},description:"",name:"bgColorSrc",required:!1,type:{name:"string"}},bgImgSrc:{defaultValue:{value:""},description:"",name:"bgImgSrc",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"string"}},form:{defaultValue:{value:"null"},description:"",name:"form",required:!1,type:{name:"ReactNode"}},externalLinks:{defaultValue:{value:"null"},description:"",name:"externalLinks",required:!1,type:{name:"ReactNode"}},signUp:{defaultValue:{value:"null"},description:"",name:"signUp",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const d=""+new URL("login-bg-color-DyeTUDCt.png",import.meta.url).href,c=""+new URL("auth-bg-CfQJDDOf.png",import.meta.url).href,de={title:"Template/AuthFlow",component:n,tags:["autodocs"],argTypes:{form:{description:"表單",table:{category:"SLOTS"}},externalLinks:{description:"外部連結",table:{category:"SLOTS"}},signUp:{description:"註冊",table:{category:"SLOTS"}},bgColorSrc:{description:"背景顏色",control:{type:"text"},table:{category:"PROPS"}},bgImgSrc:{description:"背景圖片",control:{type:"text"},table:{category:"PROPS"}},title:{description:"標題",control:{type:"text"},table:{category:"PROPS"}},description:{description:"描述",control:{type:"text"},table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}}},parameters:{docs:{title:"驗證流程",description:{component:"驗證流程的呈現及說明。"}}}},u={name:"登入",args:{bgColorSrc:d,bgImgSrc:c,title:"Welcome Back",description:"Today is a new day. It's your day. You shape it. Sign in to start managing your projects.",form:e.jsx("div",{children:e.jsx(t,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(l,{md:12,children:e.jsx(i,{type:"text",prefix:e.jsx(h,{}),initValue:"",label:"Email",placeholder:"Email",className:"mb-3"})}),e.jsx(l,{md:12,children:e.jsx(i,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password",placeholder:"Password",className:"mb-3"})}),e.jsx(l,{md:6,children:e.jsx(a,{onClick:()=>({}),className:"link-button",variant:"text",children:"Forgot Password?"})}),e.jsx(l,{md:6,align:"end",children:e.jsx(O,{initValue:[],dataSource:[{label:"Remember me",value:"1",isDisabled:!1}]})}),e.jsx(l,{md:12,children:e.jsx(a,{onClick:()=>({}),variant:"filled",width:"fluid",children:"Login"})})]})})}),externalLinks:e.jsx(t,{fluid:!0,children:e.jsxs(s,{justify:"center",children:[e.jsx(l,{md:10,children:e.jsx(a,{onClick:()=>({}),className:"social-button",variant:"filled",width:"fluid",prefix:e.jsx(E,{}),children:"Sign in with Google"})}),e.jsx(l,{md:10,children:e.jsx(a,{onClick:()=>({}),className:"social-button",variant:"filled",width:"fluid",prefix:e.jsx(M,{}),children:"Sign in with Facebook"})})]})}),signUp:e.jsx(t,{fluid:!0,children:e.jsx(s,{children:e.jsxs(l,{md:12,align:"center",children:[e.jsx("span",{children:"Don't have an account?"}),e.jsx(a,{onClick:()=>({}),className:"link-button",variant:"text",children:"Sign up"})]})})})},render(r){return e.jsx(n,{...r})}},p={name:"註冊",args:{bgColorSrc:d,bgImgSrc:c,title:"Sign Up",form:e.jsxs(e.Fragment,{children:[e.jsx(t,{fluid:!0,children:e.jsxs(s,{children:[e.jsx(l,{md:6,children:e.jsx(i,{type:"text",prefix:e.jsx(S,{}),initValue:"",label:"First Name",placeholder:"type first name",className:"mb-3"})}),e.jsx(l,{md:6,children:e.jsx(i,{type:"text",prefix:e.jsx(S,{}),initValue:"",label:"Last Name",placeholder:"type last name",className:"mb-3"})}),e.jsx(l,{md:12,children:e.jsx(i,{type:"text",prefix:e.jsx(h,{}),initValue:"",label:"Email",placeholder:"type email",className:"mb-3"})}),e.jsx(l,{md:12,children:e.jsx(i,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password",placeholder:"type password",className:"mb-3"})}),e.jsx(l,{md:12,children:e.jsx(i,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password Confirm",placeholder:"type password",className:"mb-3"})}),e.jsx(l,{md:12,children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(O,{initValue:[],dataSource:[{label:"",value:"1",isDisabled:!1}]}),e.jsx("span",{style:{marginRight:"8px"},children:"I agree to all the"}),e.jsx(a,{onClick:()=>({}),className:"link-button",variant:"text",children:"Terms"}),e.jsx("span",{style:{marginInline:"8px"},children:"and"}),e.jsx(a,{onClick:()=>({}),className:"link-button",variant:"text",children:"Privacy Policies"})]})})]})}),e.jsx(t,{fluid:!0,children:e.jsxs(s,{justify:"flex-end",children:[e.jsx(l,{md:6,children:e.jsx(a,{onClick:()=>({}),variant:"soft",width:"fluid",children:"Back"})}),e.jsx(l,{md:6,children:e.jsx(a,{onClick:()=>({}),variant:"filled",width:"fluid",children:"Sign Up"})})]})})]}),externalLinks:e.jsx(t,{fluid:!0,children:e.jsxs(s,{justify:"center",children:[e.jsx(l,{md:10,children:e.jsx(a,{onClick:()=>({}),className:"social-button",variant:"filled",width:"fluid",prefix:e.jsx(E,{}),children:"Sign in with Google"})}),e.jsx(l,{md:10,children:e.jsx(a,{onClick:()=>({}),className:"social-button",variant:"filled",width:"fluid",prefix:e.jsx(M,{}),children:"Sign in with Facebook"})})]})}),signUp:e.jsx(t,{fluid:!0,children:e.jsx(s,{children:e.jsxs(l,{md:12,align:"center",children:[e.jsx("span",{children:"Don't have an account?"}),e.jsx(a,{onClick:()=>({}),variant:"text",children:"Sign up"})]})})})},render(r){return e.jsx(n,{...r})}},g={name:"忘記密碼",args:{bgColorSrc:d,bgImgSrc:c,title:"Forgot Your Password?",description:"Type in your registered email address to reset password",form:e.jsx("div",{className:"ded-login-content-form",children:e.jsx(t,{fluid:!0,children:e.jsxs(s,{justify:"flex-end",children:[e.jsx(l,{md:12,children:e.jsx(i,{type:"text",prefix:e.jsx(h,{}),initValue:"",label:"Email Address",placeholder:"type email",hint:{description:"Description",error:""},className:"mb-3"})}),e.jsx(l,{sm:12,children:e.jsx(a,{onClick:()=>({}),width:"fluid",variant:"filled",prefix:e.jsx(h,{}),children:"Submit"})})]})})})},render(r){return e.jsx(n,{...r})}},f={name:"驗證代碼",args:{bgColorSrc:d,bgImgSrc:c,title:"Verify Code",description:"An authentication code has been sent to your email.",form:e.jsx("div",{className:"ded-login-content-form",children:e.jsx(t,{fluid:!0,children:e.jsxs(s,{justify:"flex-end",children:[e.jsx(l,{md:12,children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},children:[e.jsx(T,{level:3,children:"A-"}),e.jsx(i,{type:"text",initValue:"",className:"mb-3",placeholder:""}),e.jsx(i,{type:"password",initValue:"",className:"mb-3",placeholder:""}),e.jsx(i,{type:"password",initValue:"",className:"mb-3",placeholder:""}),e.jsx(i,{type:"password",initValue:"",className:"mb-3",placeholder:""}),e.jsx(i,{type:"password",initValue:"",className:"mb-3",placeholder:""}),e.jsx(i,{type:"password",initValue:"",className:"mb-3",placeholder:""})]})}),e.jsx(l,{sm:6,children:e.jsx(a,{onClick:()=>({}),variant:"soft",width:"fluid",children:"Resend"})}),e.jsx(l,{sm:6,children:e.jsx(a,{onClick:()=>({}),variant:"filled",width:"fluid",children:"Verify"})})]})})})},render(r){return e.jsx(n,{...r})}},x={name:"設定密碼",args:{bgColorSrc:d,bgImgSrc:c,title:"Set a Password",description:"Please set a new password for your account.",form:e.jsx("div",{className:"ded-login-content-form",children:e.jsx(t,{fluid:!0,children:e.jsxs(s,{justify:"flex-end",children:[e.jsx(l,{md:12,children:e.jsx(i,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password",placeholder:"type password",className:"mb-3"})}),e.jsx(l,{md:12,children:e.jsx(i,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password Confirm",placeholder:"type password",className:"mb-3"})}),e.jsx(l,{sm:6,children:e.jsx(a,{onClick:()=>({}),variant:"soft",width:"fluid",children:"Reset"})}),e.jsx(l,{sm:6,children:e.jsx(a,{onClick:()=>({}),variant:"filled",width:"fluid",children:"Confirm"})})]})})})},render(r){return e.jsx(n,{...r})}};var N,k,V;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: '登入',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Welcome Back',
    description: \`Today is a new day. It's your day. You shape it. Sign in to start managing your projects.\`,
    form: <div>
        <Grid fluid>
          <Row>
            <Column md={12}>
              <Input type="text" prefix={<SvgMail />} initValue="" label="Email" placeholder="Email" className="mb-3" />
            </Column>

            <Column md={12}>
              <Input type="password" prefix={<SvgLock />} initValue="" label="Password" placeholder="Password" className="mb-3" />
            </Column>

            <Column md={6}>
              <Button onClick={() => ({})} className="link-button" variant="text">
                Forgot Password?
              </Button>
            </Column>

            <Column md={6} align="end">
              <Checkbox initValue={[]} dataSource={[{
              label: 'Remember me',
              value: '1',
              isDisabled: false
            }]}></Checkbox>
            </Column>

            <Column md={12}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Login
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>,
    externalLinks: <Grid fluid>
        <Row justify="center">
          <Column md={10}>
            <Button onClick={() => ({})} className="social-button" variant="filled" width="fluid" prefix={<SvgGoogle />}>
              Sign in with Google
            </Button>
          </Column>

          <Column md={10}>
            <Button onClick={() => ({})} className="social-button" variant="filled" width="fluid" prefix={<SvgFacebook />}>
              Sign in with Facebook
            </Button>
          </Column>
        </Row>
      </Grid>,
    signUp: <Grid fluid>
        <Row>
          <Column md={12} align="center">
            <span>Don't have an account?</span>
            <Button onClick={() => ({})} className="link-button" variant="text">
              Sign up
            </Button>
          </Column>
        </Row>
      </Grid>
  },
  render(args) {
    return <AuthFLow {...args} />;
  }
}`,...(V=(k=u.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var B,I,R;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`{
  name: '註冊',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Sign Up',
    form: <>
        <Grid fluid>
          <Row>
            <Column md={6}>
              <Input type="text" prefix={<SvgAccount />} initValue="" label="First Name" placeholder="type first name" className="mb-3" />
            </Column>

            <Column md={6}>
              <Input type="text" prefix={<SvgAccount />} initValue="" label="Last Name" placeholder="type last name" className="mb-3" />
            </Column>

            <Column md={12}>
              <Input type="text" prefix={<SvgMail />} initValue="" label="Email" placeholder="type email" className="mb-3" />
            </Column>

            <Column md={12}>
              <Input type="password" prefix={<SvgLock />} initValue="" label="Password" placeholder="type password" className="mb-3" />
            </Column>

            <Column md={12}>
              <Input type="password" prefix={<SvgLock />} initValue="" label="Password Confirm" placeholder="type password" className="mb-3" />
            </Column>

            <Column md={12}>
              <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center'
            }}>
                <Checkbox initValue={[]} dataSource={[{
                label: '',
                value: '1',
                isDisabled: false
              }]}></Checkbox>
                <span style={{
                marginRight: '8px'
              }}>I agree to all the</span>
                <Button onClick={() => ({})} className="link-button" variant="text">
                  Terms
                </Button>
                <span style={{
                marginInline: '8px'
              }}>and</span>
                <Button onClick={() => ({})} className="link-button" variant="text">
                  Privacy Policies
                </Button>
              </div>
            </Column>
          </Row>
        </Grid>

        <Grid fluid>
          <Row justify="flex-end">
            <Column md={6}>
              <Button onClick={() => ({})} variant="soft" width="fluid">
                Back
              </Button>
            </Column>

            <Column md={6}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Sign Up
              </Button>
            </Column>
          </Row>
        </Grid>
      </>,
    externalLinks: <Grid fluid>
        <Row justify="center">
          <Column md={10}>
            <Button onClick={() => ({})} className="social-button" variant="filled" width="fluid" prefix={<SvgGoogle />}>
              Sign in with Google
            </Button>
          </Column>

          <Column md={10}>
            <Button onClick={() => ({})} className="social-button" variant="filled" width="fluid" prefix={<SvgFacebook />}>
              Sign in with Facebook
            </Button>
          </Column>
        </Row>
      </Grid>,
    signUp: <Grid fluid>
        <Row>
          <Column md={12} align="center">
            <span>Don't have an account?</span>
            <Button onClick={() => ({})} variant="text">
              Sign up
            </Button>
          </Column>
        </Row>
      </Grid>
  },
  render(args) {
    return <AuthFLow {...args} />;
  }
}`,...(R=(I=p.parameters)==null?void 0:I.docs)==null?void 0:R.source}}};var P,L,G;g.parameters={...g.parameters,docs:{...(P=g.parameters)==null?void 0:P.docs,source:{originalSource:`{
  name: '忘記密碼',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Forgot Your Password?',
    description: 'Type in your registered email address to reset password',
    form: <div className="ded-login-content-form">
        <Grid fluid>
          <Row justify="flex-end">
            <Column md={12}>
              <Input type="text" prefix={<SvgMail />} initValue="" label="Email Address" placeholder="type email" hint={{
              description: 'Description',
              error: ''
            }} className="mb-3" />
            </Column>

            <Column sm={12}>
              <Button onClick={() => ({})} width="fluid" variant="filled" prefix={<SvgMail />}>
                Submit
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
  },
  render(args) {
    return <AuthFLow {...args} />;
  }
}`,...(G=(L=g.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var F,_,A;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: '驗證代碼',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Verify Code',
    description: 'An authentication code has been sent to your email.',
    form: <div className="ded-login-content-form">
        <Grid fluid>
          <Row justify="flex-end">
            <Column md={12}>
              <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              gap: '8px'
            }}>
                <Title level={3}>A-</Title>
                <Input type="text" initValue="" className="mb-3" placeholder="" />
                <Input type="password" initValue="" className="mb-3" placeholder="" />
                <Input type="password" initValue="" className="mb-3" placeholder="" />
                <Input type="password" initValue="" className="mb-3" placeholder="" />
                <Input type="password" initValue="" className="mb-3" placeholder="" />

                <Input type="password" initValue="" className="mb-3" placeholder="" />
              </div>
            </Column>

            <Column sm={6}>
              <Button onClick={() => ({})} variant="soft" width="fluid">
                Resend
              </Button>
            </Column>
            <Column sm={6}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Verify
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
  },
  render(args) {
    return <AuthFLow {...args} />;
  }
}`,...(A=(_=f.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var D,U,q;x.parameters={...x.parameters,docs:{...(D=x.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: '設定密碼',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Set a Password',
    description: 'Please set a new password for your account.',
    form: <div className="ded-login-content-form">
        <Grid fluid>
          <Row justify="flex-end">
            <Column md={12}>
              <Input type="password" prefix={<SvgLock />} initValue="" label="Password" placeholder="type password" className="mb-3" />
            </Column>

            <Column md={12}>
              <Input type="password" prefix={<SvgLock />} initValue="" label="Password Confirm" placeholder="type password" className="mb-3" />
            </Column>

            <Column sm={6}>
              <Button onClick={() => ({})} variant="soft" width="fluid">
                Reset
              </Button>
            </Column>

            <Column sm={6}>
              <Button onClick={() => ({})} variant="filled" width="fluid">
                Confirm
              </Button>
            </Column>
          </Row>
        </Grid>
      </div>
  },
  render(args) {
    return <AuthFLow {...args} />;
  }
}`,...(q=(U=x.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};const ce=["Default","SignUp","Forgot","Verify","Password"];export{u as Default,g as Forgot,x as Password,p as SignUp,f as Verify,ce as __namedExportsOrder,de as default};
