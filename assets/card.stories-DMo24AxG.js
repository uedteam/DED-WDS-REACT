import{j as e}from"./jsx-runtime-CkxqCPlQ.js";import{a as f}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{C as a,a as p}from"./card-CHQIDuBO.js";import{T as t}from"./title-ExmiU3Le.js";import{B as i}from"./button-mxF14Ue2.js";import"./checkbox-C5iBvt2s.js";import"./input-CTcMjmgF.js";import"./textarea-Cm7apI7i.js";import"./toggle-DMe-1TR9.js";import"./radio-DTBF53n7.js";import"./breadcrumb-B-3FAsN7.js";import"./avatar-CUlbHiRI.js";import"./progress-circle-D0LDKTfe.js";import"./progress-line-BVFq94bo.js";import"./styled-7_Fd9YFd.js";import"./menu-BeueVbLB.js";import"./index-DJO9vBfz.js";import{S as x}from"./lock-b-y_be0k.js";import{a as h,S as m}from"./plus-BECr7-9E.js";import{S as o,a as g,b as u}from"./fan-OMyJayPZ.js";import{S as v,a as y,b,c as j}from"./door-DflTf7kp.js";import"./usePosition-CCkH-I2k.js";import"./account_circle-w7SSgQwb.js";import"./lodash-BawsgTSI.js";import"./check-CIei_J1J.js";import"./visibility_off-DecKjkF2.js";import"./index-URyNLXnw.js";import"./offline-BimsrpRK.js";import"./arrow_down-DXGyryNM.js";const Y={title:"Component/Card",component:a,tags:["autodocs"],argTypes:{width:{description:"卡片寬度",table:{category:"PROPS"}},height:{description:"卡片高度",table:{category:"PROPS"}},cardHeader:{description:"卡片標題",table:{category:"SLOTS"}},children:{description:"卡片內容",table:{category:"SLOTS"}},cardFooter:{description:"卡片底部",table:{category:"SLOTS"}},hasHeaderDivider:{description:"是否有標題分隔線",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onClick:{action:"clicked",description:"點擊事件",table:{category:"EVENTS"}}},parameters:{docs:{title:"卡片",description:{component:"卡片的呈現及說明。"}}},args:{width:"",height:"",cardHeader:"",hasHeaderDivider:!1,children:"",cardFooter:"",className:"",onClick:f("onClick")}},l={name:"預設項目",args:{},render(d){return e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",alignItems:"flex-end",gap:"16px",backgroundColor:"#E9E9E9",padding:"16px"},children:[e.jsx(a,{...d,cardHeader:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(t,{className:"ded-card-title",themeColor:"primary",children:"空調"}),e.jsx(i,{variant:"text",children:e.jsx("div",{style:{display:"flex",padding:"8px",borderRadius:"18px",backgroundColor:"#4D4D4D",color:"#ffffff",width:"32px",height:"32px"},children:e.jsx(o,{})})})]}),cardFooter:e.jsxs("div",{style:{display:"flex",gap:"8px"},children:[e.jsx(i,{className:"ded-card-button ded-card-button-active",variant:"contained",themeColor:"warning",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(g,{fill:"#ffffff",width:42,height:42}),e.jsx("div",{children:"冷氣"})]})}),e.jsx(i,{className:"ded-card-button",variant:"contained",themeColor:"warning",children:e.jsxs("div",{style:{display:"flex",flexDirection:"column"},children:[e.jsx(u,{fill:"#ffffff",width:42,height:42}),e.jsx("div",{children:"送風"})]})}),e.jsx("div",{className:"ded-card-button ded-card-button-empty"}),e.jsx(i,{className:"ded-card-button ded-card-button-active",variant:"contained",themeColor:"warning",children:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:"自動"})}),e.jsx(i,{className:"ded-card-button",variant:"contained",themeColor:"warning",children:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:"強"})}),e.jsx(i,{className:"ded-card-button",variant:"contained",themeColor:"warning",children:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:"中"})}),e.jsx(i,{className:"ded-card-button",variant:"contained",themeColor:"warning",children:e.jsx("div",{style:{display:"flex",flexDirection:"column"},children:"弱"})})]}),children:e.jsx("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",color:"#533bd4",gap:"8px"},children:e.jsx(p,{initValue:0,themeColor:"warning",unit:"℃",prefix:e.jsx(h,{fill:"#fff",width:24,height:24}),suffix:e.jsx(m,{fill:"#fff",width:24,height:24})})})}),e.jsx(a,{...d,width:"242px",height:"auto",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(v,{fill:"#ffffff",width:80,height:80}),e.jsx(t,{className:"ded-card-title",children:"溫度 25 ℃"})]})}),e.jsx(a,{...d,width:"242px",height:"auto",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"16px"},children:[e.jsx(y,{fill:"#ffffff",width:66,height:66}),e.jsx(t,{className:"ded-card-title",children:"濕度 75 ℃"})]})}),[{label:"電控玻璃",status:"霧面",prefix:e.jsx(b,{fill:"#ffffff",width:80,height:80})},{label:"門鎖",status:"已上鎖",prefix:e.jsx(x,{fill:"#ffffff",width:80,height:80})},{label:"照明群組",status:"0個開, 3個關",prefix:e.jsx(j,{fill:"#ffffff",width:80,height:80})}].map(r=>e.jsx(a,{...d,width:"242px",height:"244px",cardHeader:e.jsxs("div",{style:{display:"flex",justifyContent:"space-between"},children:[e.jsx(t,{className:"ded-card-title",themeColor:"primary",children:r.label}),e.jsx(i,{variant:"text",themeColor:"primary",children:e.jsx("div",{style:{display:"flex",padding:"8px",borderRadius:"18px",backgroundColor:"#ffffff",color:"#4d4d4d",width:"32px",height:"32px"},children:e.jsx(o,{})})})]}),children:e.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",color:"#533bd4",gap:"8px"},children:[r.prefix,e.jsx(t,{className:"ded-card-feature",children:r.status})]})}))]})}};var n,s,c;l.parameters={...l.parameters,docs:{...(n=l.parameters)==null?void 0:n.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      alignItems: 'flex-end',
      gap: '16px',
      backgroundColor: '#E9E9E9',
      padding: '16px'
    }}>
        <Card {...args} cardHeader={<div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
              <Title className="ded-card-title" themeColor="primary">
                空調
              </Title>
              <Button variant="text">
                <div style={{
            display: 'flex',
            padding: '8px',
            borderRadius: '18px',
            backgroundColor: '#4D4D4D',
            color: '#ffffff',
            width: '32px',
            height: '32px'
          }}>
                  {<PowerIcon />}
                </div>
              </Button>
            </div>} cardFooter={<div style={{
        display: 'flex',
        gap: '8px'
      }}>
              <Button className="ded-card-button ded-card-button-active" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  <AirIcon fill="#ffffff" width={42} height={42} />
                  <div>冷氣</div>
                </div>
              </Button>
              <Button className="ded-card-button" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  <FanIcon fill="#ffffff" width={42} height={42} />
                  <div>送風</div>
                </div>
              </Button>

              <div className="ded-card-button ded-card-button-empty"></div>

              <Button className="ded-card-button ded-card-button-active" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  自動
                </div>
              </Button>
              <Button className="ded-card-button" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  強
                </div>
              </Button>
              <Button className="ded-card-button" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  中
                </div>
              </Button>
              <Button className="ded-card-button" variant="contained" themeColor="warning">
                <div style={{
            display: 'flex',
            flexDirection: 'column'
          }}>
                  弱
                </div>
              </Button>
            </div>}>
          <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#533bd4',
          gap: '8px'
        }}>
            <SliderControl initValue={0} themeColor="warning" unit="℃" prefix={<MinusIcon fill="#fff" width={24} height={24} />} suffix={<PlusIcon fill="#fff" width={24} height={24} />} />
          </div>
        </Card>

        <Card {...args} width="242px" height="auto">
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
            <TemperatureIcon fill="#ffffff" width={80} height={80} />
            <Title className="ded-card-title">溫度 25 ℃</Title>
          </div>
        </Card>

        <Card {...args} width="242px" height="auto">
          <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px'
        }}>
            <HumidityIcon fill="#ffffff" width={66} height={66} />
            <Title className="ded-card-title">濕度 75 ℃</Title>
          </div>
        </Card>

        {[{
        label: '電控玻璃',
        status: '霧面',
        prefix: <DoorIcon fill="#ffffff" width={80} height={80} />
      }, {
        label: '門鎖',
        status: '已上鎖',
        prefix: <LockIcon fill="#ffffff" width={80} height={80} />
      }, {
        label: '照明群組',
        status: '0個開, 3個關',
        prefix: <LightIcon fill="#ffffff" width={80} height={80} />
      }].map(device => <Card {...args} width="242px" height="244px" cardHeader={<div style={{
        display: 'flex',
        justifyContent: 'space-between'
      }}>
                <Title className="ded-card-title" themeColor="primary">
                  {device.label}
                </Title>
                <Button variant="text" themeColor="primary">
                  <div style={{
            display: 'flex',
            padding: '8px',
            borderRadius: '18px',
            backgroundColor: '#ffffff',
            color: '#4d4d4d',
            width: '32px',
            height: '32px'
          }}>
                    {<PowerIcon />}
                  </div>
                </Button>
              </div>}>
            <div style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          color: '#533bd4',
          gap: '8px'
        }}>
              {device.prefix}
              <Title className="ded-card-feature">{device.status}</Title>
            </div>
          </Card>)}
      </div>;
  }
}`,...(c=(s=l.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const Z=["Default"];export{l as Default,Z as __namedExportsOrder,Y as default};
