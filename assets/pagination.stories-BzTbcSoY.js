import{j as g}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-454WOBUV-CM0pFb8Z.js";import{P as o}from"./side-nav-BER4sqiL.js";import"./index-RYns6xqu.js";import"./v4-CQkTLCs1.js";import"./disable-circle-Qt9C8lli.js";import"./logout-Cs4pFqLv.js";import"./title-XgJpp5nn.js";import"./toast-BkSTyVEZ.js";import"./string-BqrfsRv8.js";import"./checkbox-Dx9j1Oee.js";import"./check-BnJBHFpS.js";import"./input-AB5Lo_Ry.js";import"./index-sbqOYYIm.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Co0kfaDY.js";import"./radio-CMOPLxLt.js";import"./breadcrumb-DGvy8D7H.js";import"./progress-circle-CpJn-_7V.js";import"./progress-line-DLnfYMP9.js";import"./menu-qEb0O7XO.js";import"./image-CZs88QCg.js";import"./status-indicator-BREqtsMD.js";import"./badge-Clodc7lG.js";import"./layout-DbUmifqy.js";import"./notification-NM2mg_B2.js";const B={title:"Component/Pagination",component:o,tags:["autodocs"],argTypes:{totalItems:{description:"總筆數",table:{category:"PROPS"}},currentPage:{description:"目前頁數",control:{type:"number",min:1,max:100,step:1},table:{category:"PROPS"}},itemsPerPageOptions:{description:"每頁顯示筆數選項",table:{category:"PROPS"}},defaultItemsPerPage:{description:"預設每頁顯示筆數",table:{category:"PROPS"}},isShowPageInfo:{description:"是否顯示頁數資訊",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onPageChange:{description:"頁碼變更事件",table:{category:"EVENTS"}}},args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:5,isShowPageInfo:!1,className:"",onPageChange:c("onPageChange")},parameters:{docs:{title:"頁碼",description:{component:"頁碼組件的呈現及說明。"}}}},e={name:"預設項目",args:{},render(r){return g.jsx(o,{...r})}},t={name:"顯示資訊",args:{},parameters:{docs:{source:{transform(r,P){return"<Pagination {...args} isShowPageInfo />"}}}},render(r){return g.jsx(o,{...r,isShowPageInfo:!0})}};var a,n,s;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Pagination {...args} />;
  }
}`,...(s=(n=e.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,m,p;t.parameters={...t.parameters,docs:{...(i=t.parameters)==null?void 0:i.docs,source:{originalSource:`{
  name: '顯示資訊',
  args: {},
  parameters: {
    docs: {
      source: {
        transform(code: string, storyContext: StoryContext) {
          return \`<Pagination {...args} isShowPageInfo />\`;
        }
      }
    }
  },
  render(args) {
    return <Pagination {...args} isShowPageInfo />;
  }
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const F=["Default","Info"];export{e as Default,t as Info,F as __namedExportsOrder,B as default};
