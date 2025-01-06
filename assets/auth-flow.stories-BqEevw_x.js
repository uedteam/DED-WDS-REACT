import{j as e}from"./jsx-runtime-DEdD30eg.js";import{L as v}from"./layout-ZjbFUAzr.js";import{G as r,R as i,C as a}from"./grid-D9dEAlnk.js";import{T}from"./title-CZRmBG9s.js";import{D as Q}from"./divider-ChKDBDeF.js";import{B as t}from"./toast-D2u1qP3Z.js";import{I as l}from"./input-Qpe02S1s.js";import{C as O}from"./checkbox-CzjkG4_c.js";import{g as o,b as N}from"./warning-tri-DTbCof3x.js";import"./index-RYns6xqu.js";import{S as f,a as E,b as M,c as W}from"./line-DPFOwLyD.js";import"./string-BqrfsRv8.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";const n=({bgColorSrc:s="",bgImgSrc:Y="",title:$="",description:b="",form:C=null,externalLinks:j=null,signUp:w=null,className:z=""})=>{const{Content:J}=v,{Row:y,Column:m}=r;return e.jsx(v,{className:`h-screen ${z}`,children:e.jsx(J,{children:e.jsx(r,{fluid:!1,children:e.jsxs(y,{hasGap:!1,children:[e.jsx(m,{md:12,lg:5,children:e.jsx("div",{style:{backgroundImage:`url(${Y})`,backgroundRepeat:"no-repeat",backgroundSize:"cover"},className:"ded-login-bg"})}),e.jsx(m,{md:12,lg:7,children:e.jsxs("div",{className:"ded-login-content",children:[e.jsxs(r,{fluid:!0,children:[e.jsx(y,{children:e.jsx(m,{md:12,children:e.jsx(T,{level:1,children:$})})}),b&&e.jsx(y,{children:e.jsx(m,{md:12,children:e.jsx("p",{className:"text-neutral-700",children:b})})})]}),C&&C,j&&e.jsx(Q,{children:"Or"}),j&&j,w&&w]})})]})})})})};try{n.displayName="AuthFLow",n.__docgenInfo={description:"",displayName:"AuthFLow",props:{bgColorSrc:{defaultValue:{value:""},description:"",name:"bgColorSrc",required:!1,type:{name:"string"}},bgImgSrc:{defaultValue:{value:""},description:"",name:"bgImgSrc",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"ReactNode"}},form:{defaultValue:{value:"null"},description:"",name:"form",required:!1,type:{name:"ReactNode"}},externalLinks:{defaultValue:{value:"null"},description:"",name:"externalLinks",required:!1,type:{name:"ReactNode"}},signUp:{defaultValue:{value:"null"},description:"",name:"signUp",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}try{authflow.displayName="authflow",authflow.__docgenInfo={description:"",displayName:"authflow",props:{bgColorSrc:{defaultValue:{value:""},description:"",name:"bgColorSrc",required:!1,type:{name:"string"}},bgImgSrc:{defaultValue:{value:""},description:"",name:"bgImgSrc",required:!1,type:{name:"string"}},title:{defaultValue:{value:""},description:"",name:"title",required:!1,type:{name:"string"}},description:{defaultValue:{value:""},description:"",name:"description",required:!1,type:{name:"ReactNode"}},form:{defaultValue:{value:"null"},description:"",name:"form",required:!1,type:{name:"ReactNode"}},externalLinks:{defaultValue:{value:"null"},description:"",name:"externalLinks",required:!1,type:{name:"ReactNode"}},signUp:{defaultValue:{value:"null"},description:"",name:"signUp",required:!1,type:{name:"ReactNode"}},className:{defaultValue:{value:""},description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}const d=""+new URL("login-bg-color-DyeTUDCt.png",import.meta.url).href,c=""+new URL("auth-bg-CfQJDDOf.png",import.meta.url).href,ce={title:"Template/AuthFlow",component:n,tags:["autodocs"],argTypes:{form:{description:"表單",table:{category:"SLOTS"}},externalLinks:{description:"外部連結",table:{category:"SLOTS"}},signUp:{description:"註冊",table:{category:"SLOTS"}},bgColorSrc:{description:"背景顏色",control:{type:"text"},table:{category:"PROPS"}},bgImgSrc:{description:"背景圖片",control:{type:"text"},table:{category:"PROPS"}},title:{description:"標題",control:{type:"text"},table:{category:"PROPS"}},description:{description:"描述",control:{type:"text"},table:{category:"PROPS"}},className:{description:"客製化樣式",control:{type:"text"},table:{category:"PROPS"}}},parameters:{docs:{title:"驗證流程",description:{component:"驗證流程的呈現及說明。"}}}},u={name:"登入",args:{bgColorSrc:d,bgImgSrc:c,title:"Welcome Back",description:e.jsxs(e.Fragment,{children:[e.jsx("p",{className:"text-neutral-700",children:"Today is a new day. It's your day. You shape it."}),e.jsx("p",{className:"text-neutral-700",children:"Sign in to start managing your projects."})]}),form:e.jsx("div",{children:e.jsx(r,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{md:12,children:e.jsx(l,{type:"text",prefix:e.jsx(f,{}),initValue:"",label:"Email",placeholder:"Email",className:"mb-3"})}),e.jsx(a,{md:12,children:e.jsx(l,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password",placeholder:"Password",className:"mb-3"})}),e.jsxs(a,{md:12,className:"flex justify-between items-center",children:[e.jsx(t,{onClick:()=>({}),className:"text-neutral-700",variant:"text",children:"Forgot Password?"}),e.jsx(O,{initValue:[],dataSource:[{label:"Remember me",value:"1",isDisabled:!1}]})]}),e.jsx(a,{md:12,children:e.jsx(t,{onClick:()=>({}),variant:"filled",width:"fluid",children:"Login"})})]})})}),externalLinks:e.jsx(r,{fluid:!0,children:e.jsx(i,{justify:"center",children:e.jsxs(a,{md:12,className:"flex gap-4 justify-center",children:[e.jsx(t,{className:"border-neutral-200",onClick:()=>({}),variant:"ghost",prefix:e.jsx(E,{width:30,height:30})}),e.jsx(t,{className:"border-neutral-200",onClick:()=>({}),variant:"ghost",prefix:e.jsx(M,{width:30,height:30})}),e.jsx(t,{className:"border-neutral-200",onClick:()=>({}),variant:"ghost",prefix:e.jsx(W,{width:30,height:30})})]})})}),signUp:e.jsx(r,{fluid:!0,children:e.jsx(i,{children:e.jsxs(a,{md:12,align:"center",children:[e.jsx("span",{className:"text-neutral-300",children:"Don't have an account?"}),e.jsx(t,{className:"text-link",onClick:()=>({}),variant:"text",children:"Sign up"})]})})})},render(s){return e.jsx(n,{...s})}},p={name:"註冊",args:{bgColorSrc:d,bgImgSrc:c,title:"Sign Up",form:e.jsxs(e.Fragment,{children:[e.jsx(r,{fluid:!0,children:e.jsxs(i,{children:[e.jsx(a,{md:6,children:e.jsx(l,{type:"text",prefix:e.jsx(N,{}),initValue:"",label:"First Name",placeholder:"type first name",className:"mb-3"})}),e.jsx(a,{md:6,children:e.jsx(l,{type:"text",prefix:e.jsx(N,{}),initValue:"",label:"Last Name",placeholder:"type last name",className:"mb-3"})}),e.jsx(a,{md:12,children:e.jsx(l,{type:"text",prefix:e.jsx(f,{}),initValue:"",label:"Email",placeholder:"type email",className:"mb-3"})}),e.jsx(a,{md:12,children:e.jsx(l,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password",placeholder:"type password",className:"mb-3"})}),e.jsx(a,{md:12,children:e.jsx(l,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password Confirm",placeholder:"type password",className:"mb-3"})}),e.jsx(a,{md:12,children:e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"center"},children:[e.jsx(O,{initValue:[],dataSource:[{label:"",value:"1",isDisabled:!1}]}),e.jsx("span",{style:{marginRight:"8px"},children:"I agree to all the"}),e.jsx(t,{onClick:()=>({}),className:"link-button",variant:"text",children:"Terms"}),e.jsx("span",{style:{marginInline:"8px"},children:"and"}),e.jsx(t,{onClick:()=>({}),className:"link-button",variant:"text",children:"Privacy Policies"})]})})]})}),e.jsx(r,{fluid:!0,children:e.jsxs(i,{justify:"flex-end",children:[e.jsx(a,{md:6,children:e.jsx(t,{onClick:()=>({}),variant:"soft",width:"fluid",children:"Back"})}),e.jsx(a,{md:6,children:e.jsx(t,{onClick:()=>({}),variant:"filled",width:"fluid",children:"Sign Up"})})]})})]}),externalLinks:e.jsx(r,{fluid:!0,children:e.jsx(i,{justify:"center",children:e.jsxs(a,{md:12,className:"flex gap-4 justify-center",children:[e.jsx(t,{className:"border-neutral-200",onClick:()=>({}),variant:"ghost",prefix:e.jsx(E,{width:30,height:30})}),e.jsx(t,{className:"border-neutral-200",onClick:()=>({}),variant:"ghost",prefix:e.jsx(M,{width:30,height:30})}),e.jsx(t,{className:"border-neutral-200",onClick:()=>({}),variant:"ghost",prefix:e.jsx(W,{width:30,height:30})})]})})}),signUp:e.jsx(r,{fluid:!0,children:e.jsx(i,{children:e.jsxs(a,{md:12,align:"center",children:[e.jsx("span",{className:"text-neutral-300",children:"Don't have an account?"}),e.jsx(t,{className:"text-link",onClick:()=>({}),variant:"text",children:"Sign up"})]})})})},render(s){return e.jsx(n,{...s})}},x={name:"忘記密碼",args:{bgColorSrc:d,bgImgSrc:c,title:"Forgot Your Password?",description:"Type in your registered email address to reset password",form:e.jsx("div",{className:"ded-login-content-form",children:e.jsx(r,{fluid:!0,children:e.jsxs(i,{justify:"flex-end",children:[e.jsx(a,{md:12,children:e.jsx(l,{type:"text",prefix:e.jsx(f,{}),initValue:"",label:"Email Address",placeholder:"type email",hint:{description:"Description",error:""},className:"mb-3"})}),e.jsx(a,{sm:12,children:e.jsx(t,{onClick:()=>({}),width:"fluid",variant:"filled",prefix:e.jsx(f,{}),children:"Submit"})})]})})})},render(s){return e.jsx(n,{...s})}},g={name:"驗證代碼",args:{bgColorSrc:d,bgImgSrc:c,title:"Verify Code",description:"An authentication code has been sent to your email.",form:e.jsx("div",{className:"ded-login-content-form",children:e.jsx(r,{fluid:!0,children:e.jsxs(i,{justify:"flex-end",children:[e.jsx(a,{md:12,children:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",gap:"8px"},children:[e.jsx(T,{level:3,children:"A-"}),e.jsx(l,{type:"text",initValue:"",className:"mb-3",placeholder:""}),e.jsx(l,{type:"password",initValue:"",className:"mb-3",placeholder:""}),e.jsx(l,{type:"password",initValue:"",className:"mb-3",placeholder:""}),e.jsx(l,{type:"password",initValue:"",className:"mb-3",placeholder:""}),e.jsx(l,{type:"password",initValue:"",className:"mb-3",placeholder:""}),e.jsx(l,{type:"password",initValue:"",className:"mb-3",placeholder:""})]})}),e.jsx(a,{sm:6,children:e.jsx(t,{onClick:()=>({}),variant:"soft",width:"fluid",children:"Resend"})}),e.jsx(a,{sm:6,children:e.jsx(t,{onClick:()=>({}),variant:"filled",width:"fluid",children:"Verify"})})]})})})},render(s){return e.jsx(n,{...s})}},h={name:"設定密碼",args:{bgColorSrc:d,bgImgSrc:c,title:"Set a Password",description:"Please set a new password for your account.",form:e.jsx("div",{className:"ded-login-content-form",children:e.jsx(r,{fluid:!0,children:e.jsxs(i,{justify:"flex-end",children:[e.jsx(a,{md:12,children:e.jsx(l,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password",placeholder:"type password",className:"mb-3"})}),e.jsx(a,{md:12,children:e.jsx(l,{type:"password",prefix:e.jsx(o,{}),initValue:"",label:"Password Confirm",placeholder:"type password",className:"mb-3"})}),e.jsx(a,{sm:6,children:e.jsx(t,{onClick:()=>({}),variant:"soft",width:"fluid",children:"Reset"})}),e.jsx(a,{sm:6,children:e.jsx(t,{onClick:()=>({}),variant:"filled",width:"fluid",children:"Confirm"})})]})})})},render(s){return e.jsx(n,{...s})}};var S,k,V;u.parameters={...u.parameters,docs:{...(S=u.parameters)==null?void 0:S.docs,source:{originalSource:`{
  name: '登入',
  args: {
    bgColorSrc: loginBgColor,
    bgImgSrc: authBgImg,
    title: 'Welcome Back',
    description: <>
        <p className="text-neutral-700">
          Today is a new day. It's your day. You shape it.
        </p>
        <p className="text-neutral-700">
          Sign in to start managing your projects.
        </p>
      </>,
    form: <div>
        <Grid fluid>
          <Row>
            <Column md={12}>
              <Input type="text" prefix={<SvgMail />} initValue="" label="Email" placeholder="Email" className="mb-3" />
            </Column>

            <Column md={12}>
              <Input type="password" prefix={<SvgLock />} initValue="" label="Password" placeholder="Password" className="mb-3" />
            </Column>

            <Column md={12} className="flex justify-between items-center">
              <Button onClick={() => ({})} className="text-neutral-700" variant="text">
                Forgot Password?
              </Button>

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
          <Column md={12} className="flex gap-4 justify-center">
            <Button className="border-neutral-200" onClick={() => ({})} variant="ghost" prefix={<SvgGoogle width={30} height={30} />} />
            <Button className="border-neutral-200" onClick={() => ({})} variant="ghost" prefix={<SvgFacebook width={30} height={30} />} />
            <Button className="border-neutral-200" onClick={() => ({})} variant="ghost" prefix={<SvgLine width={30} height={30} />} />
          </Column>
        </Row>
      </Grid>,
    signUp: <Grid fluid>
        <Row>
          <Column md={12} align="center">
            <span className="text-neutral-300">Don't have an account?</span>
            <Button className="text-link" onClick={() => ({})} variant="text">
              Sign up
            </Button>
          </Column>
        </Row>
      </Grid>
  },
  render(args) {
    return <AuthFLow {...args} />;
  }
}`,...(V=(k=u.parameters)==null?void 0:k.docs)==null?void 0:V.source}}};var I,B,R;p.parameters={...p.parameters,docs:{...(I=p.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
          <Column md={12} className="flex gap-4 justify-center">
            <Button className="border-neutral-200" onClick={() => ({})} variant="ghost" prefix={<SvgGoogle width={30} height={30} />} />
            <Button className="border-neutral-200" onClick={() => ({})} variant="ghost" prefix={<SvgFacebook width={30} height={30} />} />
            <Button className="border-neutral-200" onClick={() => ({})} variant="ghost" prefix={<SvgLine width={30} height={30} />} />
          </Column>
        </Row>
      </Grid>,
    signUp: <Grid fluid>
        <Row>
          <Column md={12} align="center">
            <span className="text-neutral-300">Don't have an account?</span>
            <Button className="text-link" onClick={() => ({})} variant="text">
              Sign up
            </Button>
          </Column>
        </Row>
      </Grid>
  },
  render(args) {
    return <AuthFLow {...args} />;
  }
}`,...(R=(B=p.parameters)==null?void 0:B.docs)==null?void 0:R.source}}};var P,L,G;x.parameters={...x.parameters,docs:{...(P=x.parameters)==null?void 0:P.docs,source:{originalSource:`{
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
}`,...(G=(L=x.parameters)==null?void 0:L.docs)==null?void 0:G.source}}};var F,_,A;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...(A=(_=g.parameters)==null?void 0:_.docs)==null?void 0:A.source}}};var D,U,q;h.parameters={...h.parameters,docs:{...(D=h.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(q=(U=h.parameters)==null?void 0:U.docs)==null?void 0:q.source}}};const me=["Default","SignUp","Forgot","Verify","Password"];export{u as Default,x as Forgot,h as Password,p as SignUp,g as Verify,me as __namedExportsOrder,ce as default};
