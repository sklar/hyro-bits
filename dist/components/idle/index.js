/** Components v5.3.1 */
var P=Object.create;var n=Object.defineProperty;var S=Object.getOwnPropertyDescriptor;var T=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,q=Object.getPrototypeOf,y=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var w=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))y.call(t,r)&&w(e,r,t[r]);if(l)for(var r of l(t))I.call(t,r)&&w(e,r,t[r]);return e};var $=e=>n(e,"__esModule",{value:!0});var A=(e,t)=>{var r={};for(var i in e)y.call(e,i)&&t.indexOf(i)<0&&(r[i]=e[i]);if(e!=null&&l)for(var i of l(e))t.indexOf(i)<0&&I.call(e,i)&&(r[i]=e[i]);return r};var G=(e,t)=>{for(var r in t)n(e,r,{get:t[r],enumerable:!0})},k=(e,t,r,i)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of T(t))!y.call(e,o)&&(r||o!=="default")&&n(e,o,{get:()=>t[o],enumerable:!(i=S(t,o))||i.enumerable});return e},z=(e,t)=>k($(n(e!=null?P(q(e)):{},"default",!t&&e&&e.__esModule?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e),N=(e=>(t,r)=>e&&e.get(t)||(r=k($({}),t,1),e&&e.set(t,r),r))(typeof WeakMap!="undefined"?new WeakMap:0);var J={};G(J,{Idle:()=>O,element:()=>m,idle:()=>d,idleAnimation:()=>x});var C=require("@emotion/react"),b=z(require("@emotion/styled")),a=z(require("react"));var s=require("@emotion/react");var v=require("@emotion/react");var E=require("@emotion/react"),u={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},D=E.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var B=v.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,F=v.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var x=s.keyframes`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,m=s.css`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${x} var(--duration) ${u.easeInOut} var(--shift) infinite alternate;
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
`,d=s.css`
  display: inline-flex;
  gap: var(--gap);
`;var O=(0,a.forwardRef)((Q,L)=>{var g=Q,{color:e="currentColor",delay:t=100,duration:r=500,gap:i="4px",range:o="6px",size:f="5px"}=g,H=A(g,["color","delay","duration","gap","range","size"]);let M=p({color:e,delay:t,duration:r,gap:i,range:o,size:f},H);return a.default.createElement(K,p(p({ref:L},{"data-qa":"idle"}),M),a.default.createElement(h,null),a.default.createElement(h,null),a.default.createElement(h,null))}),h=b.default.div`
  ${m};
`,K=b.default.div(({color:e,delay:t,duration:r,gap:i,range:o,size:f})=>C.css`
    --color: ${e};
    --delay: ${t}ms;
    --duration: ${r}ms;
    --gap: ${i};
    --range: ${o};
    --size: ${f};

    ${d};
  `);module.exports=N(J);0&&(module.exports={Idle,element,idle,idleAnimation});
//# sourceMappingURL=index.js.map