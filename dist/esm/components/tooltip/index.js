/** Components v5.0.1 */
var U=Object.defineProperty;var m=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var I=(t,e,o)=>e in t?U(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,g=(t,e)=>{for(var o in e||(e={}))N.call(e,o)&&I(t,o,e[o]);if(m)for(var o of m(e))_.call(e,o)&&I(t,o,e[o]);return t};var S=(t,e)=>{var o={};for(var a in t)N.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&m)for(var a of m(t))e.indexOf(a)<0&&_.call(t,a)&&(o[a]=t[a]);return o};import{css as V,Global as W}from"@emotion/react";import b from"@emotion/styled";import F from"rc-tooltip";import r,{useMemo as J}from"react";import{css as p}from"@emotion/react";var c={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},G=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(c),B=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(c),f=g(g({BLACK:c.black,CURRENT:c.current,TRANSPARENT:c.transparent,WHITE:c.white},G),B);import{css as D}from"@emotion/react";import{keyframes as X}from"@emotion/react";var w=X`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var xt=D`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,wt=D`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;import{css as n}from"@emotion/react";var l=n`
  --color: ${f.TEXT_PRIMARY};
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
`,E=n`
  ${l};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Rt=n`
  ${E};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,vt=n`
  ${E};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,kt=n`
  ${E};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,H=n`
  ${E};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,Ct=n`
  ${H};

  --font-weight: 600;
`,zt=n`
  ${l};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Nt=n`
  ${l};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,_t=n`
  ${l};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,It=n`
  ${l};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var u=p`
  --background-color: #020511;

  --arrow-bottom: auto;
  --arrow-left: auto;
  --arrow-right: auto;
  --arrow-size: 16px;
  --arrow-top: auto;
  --arrow-translate-x: 0;
  --arrow-translate-y: 0;

  animation: ${w} 0.2s 0.1s both;
  display: block;
  position: absolute;
  pointer-events: none;
  z-index: 1;

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
`,y=p`
  ${l};

  --color: ${f.WHITE};
  --font-size: 12px;
  --font-weight: 600;
  --line-height: calc(16 / 12);

  background-color: var(--background-color);
  border-radius: 6px;
  color: ${f.WHITE};
  isolation: isolate;
  max-width: var(--size);
  padding: 10px;

  &:not([data-content]) {
    display: inline-flex;
  }
`,A=p`
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  height: var(--arrow-size);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`,T=p``,R=p`
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`,v=p`
  --arrow-size: 24px;

  background-color: #50525a;
  border-radius: 4px;
  display: inline-grid;
  font-family: inherit;
  font-weight: 700;
  height: var(--arrow-size);
  min-width: var(--arrow-size);
  padding-inline: 6px;
  place-items: center;
  text-transform: capitalize;
`,k=p`
  --separator-size: 8px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 8'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4 1v6'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M7 4H1'/%3E%3C/svg%3E");
  display: inline-block;
  height: var(--separator-size);
  width: var(--separator-size);
`;var $="t00lt1p",Q=.4,j=.1,q="+",Z="super",tt=navigator.platform.includes("Mac")?"\u2318":"Ctrl",et=pt=>{var z=pt,{children:t,content:e,delayEnter:o=Q,delayLeave:a=j,disabled:L,label:C,placement:M,shortcut:x="",size:K="192px"}=z,O=S(z,["children","content","delayEnter","delayLeave","disabled","label","placement","shortcut","size"]);let Y=J(()=>x.split(q).map((d,h)=>r.createElement(st,{key:`key-${h}`},d.replace(Z,tt))).reduce((d,h,P)=>d.length===0?[h]:[...d,r.createElement(lt,{key:`separator-${P}`}),h],[]),[x]);return L?r.createElement(r.Fragment,null,t):r.createElement(r.Fragment,null,r.createElement(W,{styles:ot}),r.createElement(F,g({arrowContent:r.createElement(at,null),mouseEnterDelay:o,mouseLeaveDelay:a,overlay:r.createElement(rt,{"data-content":e||null,style:{["--size"]:K}},e||r.createElement(r.Fragment,null,C&&r.createElement(nt,{"data-label":!0},C),x&&r.createElement(it,null,Y))),placement:M,prefixCls:$},O),t))},ot=V`
  .${$} {
    ${u};
  }
`,rt=b.div`
  ${y};
`,at=b.div`
  ${A};
`,nt=b.span`
  ${T};
`,it=b.span`
  ${R};
`,st=b.kbd`
  ${v};
`,lt=b.span`
  ${k};
`;export{et as Tooltip,A as arrow,u as global,v as key,T as label,k as separator,R as shortcut,y as tooltip};
//# sourceMappingURL=index.js.map