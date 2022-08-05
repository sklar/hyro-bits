/** Components v6.0.0 */
var U=Object.defineProperty;var h=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var S=(t,o,e)=>o in t?U(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,d=(t,o)=>{for(var e in o||(o={}))N.call(o,e)&&S(t,e,o[e]);if(h)for(var e of h(o))_.call(o,e)&&S(t,e,o[e]);return t};var z=(t,o)=>{var e={};for(var a in t)N.call(t,a)&&o.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&h)for(var a of h(t))o.indexOf(a)<0&&_.call(t,a)&&(e[a]=t[a]);return e};import b from"@emotion/styled";import W from"rc-tooltip";import r,{useMemo as F}from"react";import{css as p}from"@emotion/react";var c={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},B=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(c),G=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(c),f=d(d({BLACK:c.black,CURRENT:c.current,TRANSPARENT:c.transparent,WHITE:c.white},B),G);import{css as I}from"@emotion/react";import{keyframes as X}from"@emotion/react";var u=X`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var ht=I`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,Et=I`
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
`,At=n`
  ${E};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Tt=n`
  ${E};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Rt=n`
  ${E};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,H=n`
  ${E};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,vt=n`
  ${H};

  --font-weight: 600;
`,kt=n`
  ${l};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Ct=n`
  ${l};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,Nt=n`
  ${l};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,_t=n`
  ${l};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var V=p`
  ${l};

  --background-color: #020511;
  --color: ${f.WHITE};
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

  animation: ${u} 0.2s 0.1s both;
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
`,w=p`
  background-color: var(--background-color);
  border-radius: 6px;
  color: ${f.WHITE};
  isolation: isolate;
  max-width: var(--size);
  padding: 10px;

  &:not([data-active]) {
    pointer-events: none;
  }

  &:not([data-content]) {
    display: inline-flex;
  }
`,y=p`
  aspect-ratio: 1;
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`,A=p``,T=p`
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`,R=p`
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
`,v=p`
  aspect-ratio: 1;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 8'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4 1v6'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M7 4H1'/%3E%3C/svg%3E");
  display: inline-block;
  width: var(--separator-size);
`;var D="t00lt1p",J=.4,Q=.1,j="+",q="super",Z=navigator.platform.includes("Mac")?"\u2318":"Ctrl",tt=st=>{var C=st,{active:t,children:o,content:e,delayEnter:a=J,delayLeave:L=Q,disabled:$,label:k,placement:M,shortcut:x="",size:K="192px"}=C,O=z(C,["active","children","content","delayEnter","delayLeave","disabled","label","placement","shortcut","size"]);let Y=F(()=>x.split(j).map((g,m)=>r.createElement(nt,{key:`key-${m}`},g.replace(q,Z))).reduce((g,m,P)=>g.length===0?[m]:[...g,r.createElement(it,{key:`separator-${P}`}),m],[]),[x]);return $?r.createElement(r.Fragment,null,o):r.createElement(r.Fragment,null,r.createElement(W,d({arrowContent:r.createElement(ot,null),mouseEnterDelay:a,mouseLeaveDelay:L,overlay:r.createElement(et,{"data-active":t||null,"data-content":e||null,style:{["--size"]:K}},e||r.createElement(r.Fragment,null,k&&r.createElement(rt,{"data-label":!0},k),x&&r.createElement(at,null,Y))),placement:M,prefixCls:D},O),o))},et=b.div`
  ${w};
`,ot=b.div`
  ${y};
`,rt=b.span`
  ${A};
`,at=b.span`
  ${T};
`,nt=b.kbd`
  ${R};
`,it=b.span`
  ${v};
`;export{D as CLASSNAME,tt as Tooltip,y as arrow,V as global,R as key,A as label,v as separator,T as shortcut,w as tooltip};
//# sourceMappingURL=index.js.map