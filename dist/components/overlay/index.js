/** Components v6.11.0 */
"use strict";var n=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var c=Object.getOwnPropertyNames;var m=Object.prototype.hasOwnProperty;var d=(r,e)=>{for(var a in e)n(r,a,{get:e[a],enumerable:!0})},x=(r,e,a,t)=>{if(e&&typeof e=="object"||typeof e=="function")for(let o of c(e))!m.call(r,o)&&o!==a&&n(r,o,{get:()=>e[o],enumerable:!(t=p(e,o))||t.enumerable});return r};var f=r=>x(n({},"__esModule",{value:!0}),r);var b={};d(b,{Overlay:()=>s,overlay:()=>i,overlayAnimation:()=>v});module.exports=f(b);var y=require("@emotion/react");var l=require("@emotion/react"),v=l.keyframes`
  0% {
    --overlay-alpha: 0%;
  }
  100% {
    --overlay-alpha: 50%;
  }
`,i=l.css`
  @property --overlay-alpha {
    inherits: true;
    initial-value: 0%;
    syntax: '<percentage>';
  }

  --overlay-color: 0deg 0% 0%;
  --overlay-duration: 0.6s;
  --overlay-easing: linear;
  --overlay-index: ;

  background-color: hsl(var(--overlay-color) / var(--overlay-alpha));
  display: none;
  inset: 0;
  position: fixed;
  z-index: var(--overlay-index);

  &[data-active] {
    animation: ${v} var(--overlay-duration) var(--overlay-easing) both;
    display: block;
  }
`;var u=1,s=({active:r=!1,index:e=u,onClick:a,...t})=>(0,y.jsx)("div",{...t,css:i,"data-active":r||null,style:{["--overlay-index"]:e},onClick:a});0&&(module.exports={Overlay,overlay,overlayAnimation});
//# sourceMappingURL=index.js.map