/** Components v6.9.0 */
"use strict";var g=Object.create;var o=Object.defineProperty;var A=Object.getOwnPropertyDescriptor;var F=Object.getOwnPropertyNames;var b=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty;var w=(e,r)=>{for(var t in r)o(e,t,{get:r[t],enumerable:!0})},p=(e,r,t,l)=>{if(r&&typeof r=="object"||typeof r=="function")for(let n of F(r))!u.call(e,n)&&n!==t&&o(e,n,{get:()=>r[n],enumerable:!(l=A(r,n))||l.enumerable});return e};var a=(e,r,t)=>(t=e!=null?g(b(e)):{},p(r||!e||!e.__esModule?o(t,"default",{value:e,enumerable:!0}):t,e)),P=e=>p(o({},"__esModule",{value:!0}),e);var E={};w(E,{Flex:()=>s});module.exports=P(E);var m=require("@emotion/react"),y=a(require("@emotion/styled")),i=a(require("react")),s=(0,i.forwardRef)(({align:e,as:r="div",block:t,direction:l,gap:n,justify:x,wrap:f,...T},d)=>{let c={align:e,block:t,direction:l,gap:n,justify:x,...T};return i.default.createElement(v,{as:r,"data-wrap":f||null,ref:d,...c})}),v=y.default.div(({align:e,block:r,direction:t,gap:l,justify:n})=>({alignItems:e,display:`${r?"flex":"inline-flex"}`,flexDirection:t,gap:l,justifyContent:n}),m.css`
    &[data-wrap] {
      flex-wrap: wrap;
    }
  `);0&&(module.exports={Flex});
//# sourceMappingURL=index.js.map