import{j as g}from"./jsx-runtime-DEdD30eg.js";import{a as c}from"./chunk-D5ZWXAHU-CGd0bvzi.js";import{P as o}from"./tooltip-CbgcAIJ-.js";import"./index-RYns6xqu.js";import"./warning-tri-Y1-2BlEi.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-BwpksUBq.js";import"./toast-hfGqEkE6.js";import"./title-BdHUK5iL.js";import"./index-sbqOYYIm.js";import"./checkbox-wrczPlMV.js";import"./check-BnJBHFpS.js";import"./progress-circle-5ZOi_8dX.js";import"./useCounter-DpfJ3ATo.js";import"./progress-line-BURSIgt3.js";import"./divider-ChKDBDeF.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./input-DCnn0I_9.js";import"./layout-ZjbFUAzr.js";import"./menu-DgFwVb6m.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-Code_Ef5.js";import"./textarea-CO8Z8fZG.js";import"./toggle-Ck5Sa1oo.js";import"./notification-NM2mg_B2.js";const H={title:"Component/Pagination",component:o,tags:["autodocs"],argTypes:{totalItems:{description:"總筆數",table:{category:"PROPS"}},currentPage:{description:"目前頁數",control:{type:"number",min:1,max:100,step:1},table:{category:"PROPS"}},itemsPerPageOptions:{description:"每頁顯示筆數選項",table:{category:"PROPS"}},defaultItemsPerPage:{description:"預設每頁顯示筆數",table:{category:"PROPS"}},isShowPageInfo:{description:"是否顯示頁數資訊",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onPageChange:{description:"頁碼變更事件",table:{category:"EVENTS"}}},args:{totalItems:100,currentPage:1,itemsPerPageOptions:[10,20,50],defaultItemsPerPage:5,isShowPageInfo:!1,className:"",onPageChange:c("onPageChange")},parameters:{docs:{title:"頁碼",description:{component:"頁碼組件的呈現及說明。"}}}},t={name:"預設項目",args:{},render(r){return g.jsx(o,{...r})}},e={name:"顯示資訊",args:{},parameters:{docs:{source:{transform(r,P){return"<Pagination {...args} isShowPageInfo />"}}}},render(r){return g.jsx(o,{...r,isShowPageInfo:!0})}};var a,n,s;t.parameters={...t.parameters,docs:{...(a=t.parameters)==null?void 0:a.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render(args) {
    return <Pagination {...args} />;
  }
}`,...(s=(n=t.parameters)==null?void 0:n.docs)==null?void 0:s.source}}};var i,m,p;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(p=(m=e.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};const J=["Default","Info"];export{t as Default,e as Info,J as __namedExportsOrder,H as default};
