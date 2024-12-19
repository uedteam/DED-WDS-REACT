const n=(t,e)=>{let a=0,r="";return t.split("").forEach(l=>{/^[A-Z]+$/.test(l)&&a<2&&(a++,r=r+l)}),a<2?t.slice(0,e).toUpperCase():r},s=(t,e)=>e.length<=0?"":`${t}-${e}`;export{n as a,s as g};
