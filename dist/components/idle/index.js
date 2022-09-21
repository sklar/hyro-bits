/** Components v6.2.0 */
"use strict";var A=Object.create;var s=Object.defineProperty;var k=Object.getOwnPropertyDescriptor;var z=Object.getOwnPropertyNames;var E=Object.getPrototypeOf,C=Object.prototype.hasOwnProperty;var O=(e,t)=>{for(var r in t)s(e,r,{get:t[r],enumerable:!0})},v=(e,t,r,a)=>{if(t&&typeof t=="object"||typeof t=="function")for(let i of z(t))!C.call(e,i)&&i!==r&&s(e,i,{get:()=>t[i],enumerable:!(a=k(t,i))||a.enumerable});return e};var x=(e,t,r)=>(r=e!=null?A(E(e)):{},v(t||!e||!e.__esModule?s(r,"default",{value:e,enumerable:!0}):r,e)),H=e=>v(s({},"__esModule",{value:!0}),e);var P={};O(P,{Idle:()=>g,element:()=>l,idle:()=>p,idleAnimation:()=>f});module.exports=H(P);var h=require("@emotion/react"),u=x(require("@emotion/styled")),o=x(require("react"));var n=require("@emotion/react");var d=require("@emotion/react");var b=require("@emotion/react"),m={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},L=b.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var G=d.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,N=d.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var f=n.keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,l=n.css`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${f} var(--duration) ${m.easeInOut} var(--shift) infinite alternate;
  background: var(--color);
  border-radius: 50%;
  display: block;
  height: var(--size);
  opacity: var(--opacity);
  transform: translateY(var(--offset));
  width: var(--size);
  will-change: transform;

  &:nth-of-type(1) {
    --shift: calc(0 * var(--delay));
    --opacity: 1;
  }
  &:nth-of-type(2) {
    --shift: calc(1 * var(--delay));
    --opacity: 0.75;
  }
  &:nth-of-type(3) {
    --shift: calc(2 * var(--delay));
    --opacity: 0.5;
  }
`,p=n.css`
  display: inline-flex;
  gap: var(--gap);
`;var g=(0,o.forwardRef)(({color:e="currentColor",delay:t=100,duration:r=500,gap:a="4px",range:i="6px",size:c="5px",...I},w)=>{let $={color:e,delay:t,duration:r,gap:a,range:i,size:c,...I};return o.default.createElement(M,{ref:w,...{"data-qa":"idle"},...$},o.default.createElement(y,null),o.default.createElement(y,null),o.default.createElement(y,null))}),y=u.default.div`
  ${l};
`,M=u.default.div(({color:e,delay:t,duration:r,gap:a,range:i,size:c})=>h.css`
    --color: ${e};
    --delay: ${t}ms;
    --duration: ${r}ms;
    --gap: ${a};
    --range: ${i};
    --size: ${c};

    ${p};
  `);0&&(module.exports={Idle,element,idle,idleAnimation});
//# sourceMappingURL=index.js.map