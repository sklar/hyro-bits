/** Components v6.4.0 */
import{css as I}from"@emotion/react";import y from"@emotion/styled";import e,{forwardRef as w}from"react";import{css as d,keyframes as g}from"@emotion/react";import{css as m}from"@emotion/react";import{keyframes as b}from"@emotion/react";var s={easeInOut:"ease-in-out",easeInOutQuart:"cubic-bezier(0.770, 0.000, 0.175, 1.000)",easeOutCirc:"cubic-bezier(0.075, 0.820, 0.165, 1.000)",easeOutCubic:"cubic-bezier(0.215, 0.610, 0.355, 1.000)"},h=b`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var O=m`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,H=m`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var f=g`
  0%    { --offset: calc(-0.5 * var(--range)); }
  100%  { --offset: calc(0.5 * var(--range)); }
`,l=d`
  @property --offset {
    inherits: true;
    initial-value: 0;
    syntax: '<length>';
  }

  animation: ${f} var(--duration) ${s.easeInOut} var(--shift) infinite alternate;
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
`,p=d`
  display: inline-flex;
  gap: var(--gap);
`;var $=w(({color:t="currentColor",delay:r=100,duration:i=500,gap:o="4px",range:a="6px",size:n="5px",...u},v)=>{let x={color:t,delay:r,duration:i,gap:o,range:a,size:n,...u};return e.createElement(A,{ref:v,...{"data-qa":"idle"},...x},e.createElement(c,null),e.createElement(c,null),e.createElement(c,null))}),c=y.div`
  ${l};
`,A=y.div(({color:t,delay:r,duration:i,gap:o,range:a,size:n})=>I`
    --color: ${t};
    --delay: ${r}ms;
    --duration: ${i}ms;
    --gap: ${o};
    --range: ${a};
    --size: ${n};

    ${p};
  `);export{$ as Idle,l as element,p as idle,f as idleAnimation};
//# sourceMappingURL=index.js.map