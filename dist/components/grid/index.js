/** Components v5.4.0 */
var M=Object.create;var o=Object.defineProperty;var v=Object.getOwnPropertyDescriptor;var R=Object.getOwnPropertyNames,m=Object.getOwnPropertySymbols,S=Object.getPrototypeOf,g=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))g.call(r,t)&&u(e,t,r[t]);if(m)for(var t of m(r))c.call(r,t)&&u(e,t,r[t]);return e};var T=e=>o(e,"__esModule",{value:!0});var x=(e,r)=>{var t={};for(var i in e)g.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&m)for(var i of m(e))r.indexOf(i)<0&&c.call(e,i)&&(t[i]=e[i]);return t};var h=(e,r)=>{for(var t in r)o(e,t,{get:r[t],enumerable:!0})},w=(e,r,t,i)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of R(r))!g.call(e,n)&&(t||n!=="default")&&o(e,n,{get:()=>r[n],enumerable:!(i=v(r,n))||i.enumerable});return e},A=(e,r)=>w(T(o(e!=null?M(S(e)):{},"default",!r&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),j=(e=>(r,t)=>e&&e.get(r)||(t=w(T({}),r,1),e&&e.set(r,t),t))(typeof WeakMap!="undefined"?new WeakMap:0);var N={};h(N,{Grid:()=>E});var G=require("@emotion/react"),P=A(require("@emotion/styled")),s=A(require("react")),E=(0,s.forwardRef)((k,H)=>{var y=k,{align:e,as:r="div",block:t,columns:i,flow:n,gap:d,justify:l,max:a="1fr",min:p="0px",sizing:$="auto-fit"}=y,b=x(y,["align","as","block","columns","flow","gap","justify","max","min","sizing"]);let L=f({align:e,block:t,columns:i,gap:d,justify:l,max:a,min:p,sizing:$},b);return s.default.createElement(I,f({as:r,ref:H},L))}),I=P.default.div(G.css`
    & > * {
      min-width: 0;
    }
  `,({align:e,block:r,columns:t,flow:i,gap:n,justify:d,max:l,min:a,sizing:p})=>({alignItems:e,display:`${r?"grid":"inline-grid"}`,gap:n,gridAutoFlow:i,gridTemplateColumns:`${t||`repeat(${p}, minmax(min(100%, ${a}), ${l}))`}`,justifyItems:d}));module.exports=j(N);0&&(module.exports={Grid});
//# sourceMappingURL=index.js.map