/** Components v5.4.0 */
var A=Object.defineProperty;var n=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable;var y=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))g.call(t,r)&&y(e,r,t[r]);if(n)for(var r of n(t))f.call(t,r)&&y(e,r,t[r]);return e};var c=(e,t)=>{var r={};for(var i in e)g.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&n)for(var i of n(e))t.indexOf(i)<0&&f.call(e,i)&&(r[i]=e[i]);return r};import{css as E}from"@emotion/react";import $ from"@emotion/styled";import b,{forwardRef as H}from"react";var L=H((v,x)=>{var p=v,{align:e,as:t="div",block:r,columns:i,flow:a,gap:o,justify:m,max:s="1fr",min:d="0px",sizing:u="auto-fit"}=p,T=c(p,["align","as","block","columns","flow","gap","justify","max","min","sizing"]);let w=l({align:e,block:r,columns:i,gap:o,justify:m,max:s,min:d,sizing:u},T);return b.createElement(M,l({as:t,ref:x},w))}),M=$.div(E`
    & > * {
      min-width: 0;
    }
  `,({align:e,block:t,columns:r,flow:i,gap:a,justify:o,max:m,min:s,sizing:d})=>({alignItems:e,display:`${t?"grid":"inline-grid"}`,gap:a,gridAutoFlow:i,gridTemplateColumns:`${r||`repeat(${d}, minmax(min(100%, ${s}), ${m}))`}`,justifyItems:o}));export{L as Grid};
//# sourceMappingURL=index.js.map