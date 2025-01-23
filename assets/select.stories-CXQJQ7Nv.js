import{j as n}from"./jsx-runtime-DEdD30eg.js";import{a as m}from"./chunk-454WOBUV-ChHd1ABr.js";import{S as i}from"./tooltip-wWz33IrI.js";import"./badge-vsbKzH_B.js";import"./breadcrumb-BwpksUBq.js";import"./toast-hfGqEkE6.js";import"./checkbox-wrczPlMV.js";import"./progress-circle-5ZOi_8dX.js";import"./progress-line-BURSIgt3.js";import"./divider-ChKDBDeF.js";import"./grid-D9dEAlnk.js";import"./image-DG0n6Q3C.js";import"./input-DCnn0I_9.js";import"./layout-ZjbFUAzr.js";import"./menu-DgFwVb6m.js";import"./radio-CMOPLxLt.js";import"./status-indicator-BDww4a8h.js";import"./tag-Code_Ef5.js";import"./textarea-CO8Z8fZG.js";import"./title-BdHUK5iL.js";import"./toggle-Ck5Sa1oo.js";import{h as u}from"./warning-tri-Y1-2BlEi.js";import{r as d}from"./index-RYns6xqu.js";import"./string-BqrfsRv8.js";import"./online-EmbACc0H.js";import"./notification-NM2mg_B2.js";import"./index-sbqOYYIm.js";import"./check-BnJBHFpS.js";import"./useCounter-DpfJ3ATo.js";const g=[{value:"1",label:"Option 1"},{value:"2",label:"Option 2"},{value:"3",label:"Option 3"}],K={title:"Component/Select",component:i,tags:["autodocs"],argTypes:{dataSource:{description:"選項",control:{type:"object"},table:{category:"PROPS",type:{detail:`
            interface Option {
              label: string;
              value: string | number;
            }
          `}}},suffix:{description:"後綴圖示",table:{category:"PROPS"}},placeholder:{description:"預設文字",table:{category:"PROPS"}},value:{description:"值",table:{category:"PROPS"}},isDisabled:{description:"是否禁用",table:{category:"PROPS"}},className:{description:"客製化樣式",table:{category:"PROPS"}},onChange:{description:"選擇變更事件",table:{category:"EVENTS"}}},args:{dataSource:g,placeholder:"Select",value:"",suffix:n.jsx(u,{width:18,height:18}),isDisabled:!1,className:""},parameters:{docs:{title:"Select",description:{component:"選擇組件的呈現及說明。"}}}},e={name:"預設項目",args:{},render:function(s){const[l,p]=d.useState(""),c=t=>{m("onChange")(t),p(t)};return n.jsx(i,{...s,value:l,onChange:c})}};var o,r,a;e.parameters={...e.parameters,docs:{...(o=e.parameters)==null?void 0:o.docs,source:{originalSource:`{
  name: '預設項目',
  args: {},
  render: function (args) {
    const [selectedValue, setSelectedValue] = useState<string | number>('');
    const handleChange = (value: string | number) => {
      action('onChange')(value);
      setSelectedValue(value);
    };
    return <Select {...args} value={selectedValue} onChange={handleChange} />;
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const L=["Default"];export{e as Default,L as __namedExportsOrder,K as default};
