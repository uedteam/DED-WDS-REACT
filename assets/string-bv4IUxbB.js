const o=(t,e)=>{let a=0,s="";return t.split("").forEach(l=>{/^[A-Z]+$/.test(l)&&a<2&&(a++,s=s+l)}),a<2?t.slice(0,e).toUpperCase():s},r=(t,e)=>`${t}-${e}`;export{o as a,r as g};
