/** Components v5.3.0 */
var g=Object.defineProperty;var l=Object.getOwnPropertySymbols;var a=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable;var y=(e,t,r)=>t in e?g(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(e,t)=>{for(var r in t||(t={}))a.call(t,r)&&y(e,r,t[r]);if(l)for(var r of l(t))m.call(t,r)&&y(e,r,t[r]);return e};var s=(e,t)=>{var r={};for(var n in e)a.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(e!=null&&l)for(var n of l(e))t.indexOf(n)<0&&m.call(e,n)&&(r[n]=e[n]);return r};import{css as b}from"@emotion/react";import u from"@emotion/styled";import w,{forwardRef as P}from"react";var v=P((H,d)=>{var p=H,{align:e,as:t="div",block:r,direction:n,gap:o,justify:x,wrap:f}=p,T=s(p,["align","as","block","direction","gap","justify","wrap"]);let c=i({align:e,block:r,direction:n,gap:o,justify:x},T);return w.createElement(E,i({as:t,"data-wrap":f||null,ref:d},c))}),E=u.div(({align:e,block:t,direction:r,gap:n,justify:o})=>({alignItems:e,display:`${t?"flex":"inline-flex"}`,flexDirection:r,gap:n,justifyContent:o}),b`
    &[data-wrap] {
      flex-wrap: wrap;
    }
  `);export{v as Flex};
//# sourceMappingURL=index.js.map