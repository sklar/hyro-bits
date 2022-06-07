/** Components v4.5.0 */
var E=Object.defineProperty;var o=Object.getOwnPropertySymbols;var v=Object.prototype.hasOwnProperty,x=Object.prototype.propertyIsEnumerable;var b=(e,r,t)=>r in e?E(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,a=(e,r)=>{for(var t in r||(r={}))v.call(r,t)&&b(e,t,r[t]);if(o)for(var t of o(r))x.call(r,t)&&b(e,t,r[t]);return e};var h=(e,r)=>{var t={};for(var i in e)v.call(e,i)&&r.indexOf(i)<0&&(t[i]=e[i]);if(e!=null&&o)for(var i of o(e))r.indexOf(i)<0&&x.call(e,i)&&(t[i]=e[i]);return t};import{css as L}from"@emotion/react";import $ from"@emotion/styled";import l,{forwardRef as M}from"react";import{css as I,keyframes as H}from"@emotion/react";import{css as g}from"@emotion/react";import{keyframes as C}from"@emotion/react";var m={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},O=C`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var J=g`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,Q=g`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var w=H`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,d=I`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${w} var(--duration) ${m.easeInOut} var(--shift) infinite alternate;
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
`,f=I`
  display: inline-flex;
  gap: var(--gap);
`;var P=M((T,k)=>{var u=T,{color:e="currentColor",delay:r=100,duration:t=500,gap:i="4px",range:p="6px",size:c="5px"}=u,A=h(u,["color","delay","duration","gap","range","size"]);let z=a({color:e,delay:r,duration:t,gap:i,range:p,size:c},A);return l.createElement(S,a(a({ref:k},{"data-qa":"idle"}),z),l.createElement(y,null),l.createElement(y,null),l.createElement(y,null))}),y=$.div`
  ${d};
`,S=$.div(({color:e,delay:r,duration:t,gap:i,range:p,size:c})=>L`
    --color: ${e};
    --delay: ${r}ms;
    --duration: ${t}ms;
    --gap: ${i};
    --range: ${p};
    --size: ${c};

    ${f};
  `);export{P as Idle,d as element,f as idle,w as idleAnimation};
//# sourceMappingURL=index.js.map