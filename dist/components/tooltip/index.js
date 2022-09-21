/** Components v6.2.0 */
"use strict";var Y=Object.create;var g=Object.defineProperty;var P=Object.getOwnPropertyDescriptor;var U=Object.getOwnPropertyNames;var B=Object.getPrototypeOf,G=Object.prototype.hasOwnProperty;var X=(t,o)=>{for(var r in o)g(t,r,{get:o[r],enumerable:!0})},N=(t,o,r,f)=>{if(o&&typeof o=="object"||typeof o=="function")for(let i of U(o))!G.call(t,i)&&i!==r&&g(t,i,{get:()=>o[i],enumerable:!(f=P(o,i))||f.enumerable});return t};var T=(t,o,r)=>(r=t!=null?Y(B(t)):{},N(o||!t||!t.__esModule?g(r,"default",{value:t,enumerable:!0}):r,t)),H=t=>N(g({},"__esModule",{value:!0}),t);var it={};X(it,{CLASSNAME:()=>k,Tooltip:()=>I,arrow:()=>E,global:()=>S,key:()=>w,label:()=>x,separator:()=>y,shortcut:()=>u,tooltip:()=>h});module.exports=H(it);var l=T(require("@emotion/styled")),z=T(require("rc-tooltip")),e=T(require("react"));var n=require("@emotion/react");var p={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},V=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(p),W=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(p),c={BLACK:p.black,CURRENT:p.current,TRANSPARENT:p.transparent,WHITE:p.white,...V,...W};var v=require("@emotion/react");var _=require("@emotion/react");var R=_.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var dt=v.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,gt=v.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var a=require("@emotion/react");var s=a.css`
  --color: ${c.TEXT_PRIMARY};
  --font-family: 'Inter', sans-serif;
  --font-size: ;
  --font-weight: 400;
  --letter-spacing: ;
  --line-height: ;

  box-sizing: border-box;
  color: var(--color);
  font-family: var(--font-family);
  font-size: var(--font-size);
  font-weight: var(--font-weight);
  letter-spacing: var(--letter-spacing);
  line-height: var(--line-height);
`,m=a.css`
  ${s};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,xt=a.css`
  ${m};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,ut=a.css`
  ${m};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,wt=a.css`
  ${m};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,F=a.css`
  ${m};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,yt=a.css`
  ${F};

  --font-weight: 600;
`,At=a.css`
  ${s};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Tt=a.css`
  ${s};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Rt=a.css`
  ${s};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,vt=a.css`
  ${s};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var S=n.css`
  ${s};

  --background-color: #020511;
  --color: ${c.WHITE};
  --font-size: 12px;
  --font-weight: 600;
  --index: 1;
  --line-height: calc(16 / 12);

  --arrow-bottom: auto;
  --arrow-left: auto;
  --arrow-right: auto;
  --arrow-size: 16px;
  --arrow-top: auto;
  --arrow-translate-x: 0;
  --arrow-translate-y: 0;

  --key-size: 24px;

  --separator-size: 8px;

  animation: ${R} 0.2s 0.1s both;
  display: block;
  position: absolute;
  z-index: var(--index);

  &[class*='hidden'] {
    display: none;
  }

  &[class*='bottom'] {
    --arrow-top: 0;
    --arrow-translate-y: -2px;
  }
  &[class*='bottom'],
  &[class*='top'] {
    --arrow-left: 50%;
    --arrow-translate-x: -50%;
  }
  &[class*='top'] {
    --arrow-bottom: 0;
    --arrow-translate-y: 2px;
  }
  &[class*='left'] {
    --arrow-right: 0;
    --arrow-translate-x: 2px;
  }
  &[class*='left'],
  &[class*='right'] {
    --arrow-top: 50%;
    --arrow-translate-y: -50%;
  }
  &[class*='right'] {
    --arrow-left: 0;
    --arrow-translate-x: -2px;
  }
`,h=n.css`
  background-color: var(--background-color);
  border-radius: 6px;
  color: ${c.WHITE};
  isolation: isolate;
  max-width: var(--size);
  padding: 10px;

  &:not([data-active]) {
    pointer-events: none;
  }

  &:not([data-content]) {
    display: inline-flex;
  }
`,E=n.css`
  aspect-ratio: 1;
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`,x=n.css``,u=n.css`
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`,w=n.css`
  background-color: #50525a;
  border-radius: 4px;
  display: inline-grid;
  font-family: inherit;
  font-weight: 700;
  height: var(--key-size);
  min-width: var(--key-size);
  padding-inline: 6px;
  place-items: center;
  text-transform: capitalize;
`,y=n.css`
  aspect-ratio: 1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 8'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4 1v6'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M7 4H1'/%3E%3C/svg%3E");
  display: inline-block;
  width: var(--separator-size);
`;var k="t00lt1p",J=.4,Q=.1,j="+",q="super",Z=navigator.platform.includes("Mac")?"\u2318":"Ctrl",I=({active:t,children:o,content:r,delayEnter:f=J,delayLeave:i=Q,disabled:D,label:C,placement:L,shortcut:A="",size:$="192px",...M})=>{let K=(0,e.useMemo)(()=>A.split(j).map((b,d)=>e.default.createElement(at,{key:`key-${d}`},b.replace(q,Z))).reduce((b,d,O)=>b.length===0?[d]:[...b,e.default.createElement(nt,{key:`separator-${O}`}),d],[]),[A]);return D?e.default.createElement(e.default.Fragment,null,o):e.default.createElement(e.default.Fragment,null,e.default.createElement(z.default,{arrowContent:e.default.createElement(et,null),mouseEnterDelay:f,mouseLeaveDelay:i,overlay:e.default.createElement(tt,{"data-active":t||null,"data-content":r||null,style:{["--size"]:$}},r||e.default.createElement(e.default.Fragment,null,C&&e.default.createElement(ot,{"data-label":!0},C),A&&e.default.createElement(rt,null,K))),placement:L,prefixCls:k,...M},o))},tt=l.default.div`
  ${h};
`,et=l.default.div`
  ${E};
`,ot=l.default.span`
  ${x};
`,rt=l.default.span`
  ${u};
`,at=l.default.kbd`
  ${w};
`,nt=l.default.span`
  ${y};
`;0&&(module.exports={CLASSNAME,Tooltip,arrow,global,key,label,separator,shortcut,tooltip});
//# sourceMappingURL=index.js.map