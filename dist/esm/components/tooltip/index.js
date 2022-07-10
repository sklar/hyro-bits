/** Components v5.3.1 */
var G=Object.defineProperty;var m=Object.getOwnPropertySymbols;var N=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var I=(t,o,e)=>o in t?G(t,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[o]=e,g=(t,o)=>{for(var e in o||(o={}))N.call(o,e)&&I(t,e,o[e]);if(m)for(var e of m(o))_.call(o,e)&&I(t,e,o[e]);return t};var S=(t,o)=>{var e={};for(var a in t)N.call(t,a)&&o.indexOf(a)<0&&(e[a]=t[a]);if(t!=null&&m)for(var a of m(t))o.indexOf(a)<0&&_.call(t,a)&&(e[a]=t[a]);return e};import{css as W,Global as F}from"@emotion/react";import b from"@emotion/styled";import J from"rc-tooltip";import r,{useMemo as Q}from"react";import{css as p}from"@emotion/react";var c={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},B=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(c),X=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(c),f=g(g({BLACK:c.black,CURRENT:c.current,TRANSPARENT:c.transparent,WHITE:c.white},B),X);import{css as D}from"@emotion/react";import{keyframes as H}from"@emotion/react";var w=H`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var wt=D`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,ut=D`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;import{css as i}from"@emotion/react";var l=i`
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
`,E=i`
  ${l};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,Rt=i`
  ${E};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,kt=i`
  ${E};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,Ct=i`
  ${E};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,V=i`
  ${E};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,zt=i`
  ${V};

  --font-weight: 600;
`,Nt=i`
  ${l};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,_t=i`
  ${l};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,It=i`
  ${l};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,St=i`
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

  &:not([data-active]) {
    pointer-events: none;
  }

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
`,T=p``,v=p`
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`,R=p`
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
`;var $="t00lt1p",j=.4,q=.1,Z="+",tt="super",et=navigator.platform.includes("Mac")?"\u2318":"Ctrl",ot=ct=>{var z=ct,{active:t,children:o,content:e,delayEnter:a=j,delayLeave:L=q,disabled:M,label:C,placement:K,shortcut:x="",size:O="192px"}=z,Y=S(z,["active","children","content","delayEnter","delayLeave","disabled","label","placement","shortcut","size"]);let P=Q(()=>x.split(Z).map((d,h)=>r.createElement(lt,{key:`key-${h}`},d.replace(tt,et))).reduce((d,h,U)=>d.length===0?[h]:[...d,r.createElement(pt,{key:`separator-${U}`}),h],[]),[x]);return M?r.createElement(r.Fragment,null,o):r.createElement(r.Fragment,null,r.createElement(F,{styles:rt}),r.createElement(J,g({arrowContent:r.createElement(it,null),mouseEnterDelay:a,mouseLeaveDelay:L,overlay:r.createElement(at,{"data-active":t||null,"data-content":e||null,style:{["--size"]:O}},e||r.createElement(r.Fragment,null,C&&r.createElement(nt,{"data-label":!0},C),x&&r.createElement(st,null,P))),placement:K,prefixCls:$},Y),o))},rt=W`
  .${$} {
    ${u};
  }
`,at=b.div`
  ${y};
`,it=b.div`
  ${A};
`,nt=b.span`
  ${T};
`,st=b.span`
  ${v};
`,lt=b.kbd`
  ${R};
`,pt=b.span`
  ${k};
`;export{ot as Tooltip,A as arrow,u as global,R as key,T as label,k as separator,v as shortcut,y as tooltip};
//# sourceMappingURL=index.js.map