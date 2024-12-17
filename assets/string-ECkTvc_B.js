const l=(t,e)=>{let a=0,r="";return t.split("").forEach(s=>{/^[A-Z]+$/.test(s)&&a<2&&(a++,r=r+s)}),a<2?t.slice(0,e).toUpperCase():r},n=(t,e)=>{if(e)return`${t}-${e}`};export{l as a,n as g};
