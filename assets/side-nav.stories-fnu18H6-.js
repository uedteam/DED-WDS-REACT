import{j as t}from"./jsx-runtime-DEdD30eg.js";import{p as a}from"./warning-tri-DTbCof3x.js";import"./index-RYns6xqu.js";import{S as p,a as n,b as g,c,d as l}from"./user-CenQ4Y4F.js";import{S as d}from"./calendar-BCgxDPts.js";import{S as m}from"./home-49bMB0eq.js";import{S as u}from"./notification-NM2mg_B2.js";import{i as s}from"./pagination-BOfb819i.js";import{G as f,R as S,C as x}from"./grid-D9dEAlnk.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-DUAWG7Rk.js";import"./toast-GeQvYgvj.js";import"./title-Cw6Qriwq.js";import"./index-sbqOYYIm.js";import"./checkbox-CzjkG4_c.js";import"./check-BnJBHFpS.js";import"./progress-circle-xnhIhzfk.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-DsOpskWp.js";import"./divider-ChKDBDeF.js";import"./image-CZs88QCg.js";import"./input-CkvQeRXj.js";import"./radio-CMOPLxLt.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./menu-0cp7HoY7.js";import"./status-indicator-BDww4a8h.js";import"./layout-ZjbFUAzr.js";import"./tag-C0k5YPMD.js";const v=[{title:"Home",prefix:t.jsx(m,{width:24,height:24}),path:"/Home"},{title:"User",prefix:t.jsx(p,{width:24,height:24}),path:"/User",children:[{title:"Profile",path:"/settings/profile"},{title:"Account",path:"/settings/account"}]},{title:"Chart",prefix:t.jsx(n,{width:24,height:24}),path:"/Chart",children:[{title:"Profile",path:"/settings/profile"},{title:"Account",path:"/settings/account"},{title:"Account",path:"/settings/account"},{title:"Account",path:"/settings/account"}]},{title:"Database",prefix:t.jsx(g,{width:24,height:24}),path:"/dashboard"},{title:"Favorite",prefix:t.jsx(c,{width:24,height:24}),path:"/Favorite"},{title:"Calendar",prefix:t.jsx(d,{width:24,height:24}),path:"/Calendar"},{title:"Notification",prefix:t.jsx(u,{width:24,height:24}),path:"/Notification"},{title:"Language",prefix:t.jsx(l,{width:24,height:24}),path:"/Language"}],Z={title:"Component/SideNav",component:s,tags:["autodocs"],argTypes:{themeColor:{description:"背景顏色",mapping:{Blue:"#00467C",Yellow:"#F4E069",Grape:"#AB86D1",Black:"#000000"},options:["Blue","Yellow","Grape","Black"],control:{type:"select"},table:{category:"PROPS"}},logo:{description:"Logo 圖示",mapping:{SvgAuo:t.jsx(a,{width:90,height:30})},options:["SvgAuo"],control:{type:"select"},table:{category:"PROPS"}},logoLink:{description:"Logo 連結",table:{category:"PROPS"}},hasLogo:{description:"是否有 Logo",table:{category:"PROPS"}},hasSearch:{description:"是否有搜尋欄",table:{category:"PROPS"}},dataSource:{description:"資料來源",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}}},args:{themeColor:"Blue",logo:t.jsx(a,{width:90,height:30}),logoLink:"https://www.auo.com",hasLogo:!1,hasSearch:!0,dataSource:v,className:""},parameters:{docs:{title:"Side Nav",description:{component:"側邊導覽組件的呈現及說明。"}}}},e={name:"預設項目",args:{},parameters:{docs:{source:{transform(i,w){return`
<SideNav className="" 
dataSource={[
    {
      path: '/Home',
      prefix: <SvgHome height={24} width={24}/>,
      title: 'Home'
    },
    {
      children: [
        {
          path: '/settings/profile',
          title: 'Profile'
        },
        {
          path: '/settings/account',
          title: 'Account'
        }
      ],
      path: '/User',
      prefix: <SvgUser height={24} width={24}/>,
      title: 'User'
    },
    {
      children: [
        {
          path: '/settings/profile',
          title: 'Profile'
        },
        {
          path: '/settings/account',
          title: 'Account'
        },
        {
          path: '/settings/account',
          title: 'Account'
        },
        {
          path: '/settings/account',
          title: 'Account'
        }
      ],
      path: '/Chart',
      prefix: <SvgBarChart height={24} width={24}/>,
      title: 'Chart'
    },
    {
      path: '/dashboard',
      prefix: <SvgDatabase height={24} width={24}/>,
      title: 'Database'
    },
    {
      path: '/Favorite',
      prefix: <SvgFavorite height={24} width={24}/>,
      title: 'Favorite'
    },
    {
      path: '/Calendar',
      prefix: <SvgCalendar height={24} width={24}/>,
      title: 'Calendar'
    },
    {
      path: '/Notification',
      prefix: <SvgNotification height={24} width={24}/>,
      title: 'Notification'
    },
    {
      path: '/Language',
      prefix: <SvgLanguage height={24} width={24}/>,
      title: 'Language'
    }
  ]}
  hasSearch
  logo={<SvgAuo height={30} width={90}/>}
  logoLink="https://www.auo.com"
  themeColor="#00467C"/>
`}}}},render(i){return t.jsx(f,{fluid:!0,children:t.jsx(S,{children:t.jsx(x,{xs:12,sm:4,md:4,children:t.jsx(s,{...i})})})})}};var o,r,h;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          const {
            args
          } = storyContext;
          return \`
<SideNav className="" 
dataSource={[
    {
      path: '/Home',
      prefix: <SvgHome height={24} width={24}/>,
      title: 'Home'
    },
    {
      children: [
        {
          path: '/settings/profile',
          title: 'Profile'
        },
        {
          path: '/settings/account',
          title: 'Account'
        }
      ],
      path: '/User',
      prefix: <SvgUser height={24} width={24}/>,
      title: 'User'
    },
    {
      children: [
        {
          path: '/settings/profile',
          title: 'Profile'
        },
        {
          path: '/settings/account',
          title: 'Account'
        },
        {
          path: '/settings/account',
          title: 'Account'
        },
        {
          path: '/settings/account',
          title: 'Account'
        }
      ],
      path: '/Chart',
      prefix: <SvgBarChart height={24} width={24}/>,
      title: 'Chart'
    },
    {
      path: '/dashboard',
      prefix: <SvgDatabase height={24} width={24}/>,
      title: 'Database'
    },
    {
      path: '/Favorite',
      prefix: <SvgFavorite height={24} width={24}/>,
      title: 'Favorite'
    },
    {
      path: '/Calendar',
      prefix: <SvgCalendar height={24} width={24}/>,
      title: 'Calendar'
    },
    {
      path: '/Notification',
      prefix: <SvgNotification height={24} width={24}/>,
      title: 'Notification'
    },
    {
      path: '/Language',
      prefix: <SvgLanguage height={24} width={24}/>,
      title: 'Language'
    }
  ]}
  hasSearch
  logo={<SvgAuo height={30} width={90}/>}
  logoLink="https://www.auo.com"
  themeColor="#00467C"/>
\`;
        }
      }
    }
  },
  render(args) {
    return <Grid fluid>
        <Row>
          <Column xs={12} sm={4} md={4}>
            <SideNav {...args} />
          </Column>
        </Row>
      </Grid>;
  }
}`,...(h=(r=e.parameters)==null?void 0:r.docs)==null?void 0:h.source}}};const $=["Default"];export{e as Default,$ as __namedExportsOrder,Z as default};
