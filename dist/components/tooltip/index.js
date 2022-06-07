/** Components v5.0.0 */
var F=Object.create;var g=Object.defineProperty;var J=Object.getOwnPropertyDescriptor;var Q=Object.getOwnPropertyNames,E=Object.getOwnPropertySymbols,j=Object.getPrototypeOf,z=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var L=(t,e,o)=>e in t?g(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,d=(t,e)=>{for(var o in e||(e={}))z.call(e,o)&&L(t,o,e[o]);if(E)for(var o of E(e))$.call(e,o)&&L(t,o,e[o]);return t};var M=t=>g(t,"__esModule",{value:!0});var K=(t,e)=>{var o={};for(var a in t)z.call(t,a)&&e.indexOf(a)<0&&(o[a]=t[a]);if(t!=null&&E)for(var a of E(t))e.indexOf(a)<0&&$.call(t,a)&&(o[a]=t[a]);return o};var q=(t,e)=>{for(var o in e)g(t,o,{get:e[o],enumerable:!0})},O=(t,e,o,a)=>{if(e&&typeof e=="object"||typeof e=="function")for(let l of Q(e))!z.call(t,l)&&(o||l!=="default")&&g(t,l,{get:()=>e[l],enumerable:!(a=J(e,l))||a.enumerable});return t},N=(t,e)=>O(M(g(t!=null?F(j(t)):{},"default",!e&&t&&t.__esModule?{get:()=>t.default,enumerable:!0}:{value:t,enumerable:!0})),t),Z=(t=>(e,o)=>t&&t.get(e)||(o=O(M({}),e,1),t&&t.set(e,o),o))(typeof WeakMap!="undefined"?new WeakMap:0);var ht={};q(ht,{Tooltip:()=>G,arrow:()=>y,global:()=>w,key:()=>R,label:()=>A,separator:()=>v,shortcut:()=>T,tooltip:()=>u});var k=require("@emotion/react"),c=N(require("@emotion/styled")),P=N(require("rc-tooltip")),r=N(require("react"));var s=require("@emotion/react");var f={black:"#000000",blue:{denim:"#184ece",dodger:"#3370ff",ebony:"#1f222f",haiti:"#0f152e",hawkes:"#ecf1fe",oxford:"#3f485e",ribbon:"#004bff",ribbon1:"#1d61ff",science:"#0041dd",vulcan:"#131620"},current:"currentColor",gray:{botticelli:"#dbe4ee",cadet:"#b4bac8",fiord:"#3b4463",geyser:"#ced4e2",porcelain:"#f6f7f8",trout:"#545864",waterloo:"#757c91"},green:{caribbean:"#07d094"},orange:{amber:"#ffbe0b"},red:{radical:"#ff3b58"},transparent:"transparent",white:"#ffffff"},tt=(t=>({DANGER:t.red.radical,NOTICE:t.blue.ribbon1,SUCCESS:t.green.caribbean,WARNING:t.orange.amber}))(f),et=(t=>({PRIMARY:t.blue.ribbon,SECONDARY:t.blue.hawkes,TERTIARY:t.gray.cadet,BACKGROUND_PRIMARY:t.white,BACKGROUND_SECONDARY:t.gray.porcelain,ELEMENT_PRIMARY:t.blue.ribbon,ELEMENT_SECONDARY:t.blue.hawkes,ELEMENT_TERTIARY:t.gray.cadet,ELEMENT_ACTIVE:t.blue.science,ELEMENT_DISABLED:t.gray.geyser,ELEMENT_FOCUS:t.blue.dodger,STROKE:t.gray.botticelli,TEXT_PRIMARY:t.blue.haiti,TEXT_SECONDARY:t.blue.hawkes,TEXT_TERTIARY:t.gray.cadet,DARK_TERTIARY:t.gray.waterloo,DARK_ELEMENT_TERTIARY:t.gray.waterloo,DARK_BACKGROUND_PRIMARY:t.blue.vulcan,DARK_BACKGROUND_SECONDARY:t.blue.ebony,DARK_ELEMENT_ACTIVE:t.blue.oxford,DARK_ELEMENT_DISABLED:t.gray.trout,DARK_ELEMENT_FOCUS:t.blue.denim,DARK_STROKE:t.gray.fiord}))(f),b=d(d({BLACK:f.black,CURRENT:f.current,TRANSPARENT:f.transparent,WHITE:f.white},tt),et);var I=require("@emotion/react");var Y=require("@emotion/react");var _=Y.keyframes`
  0%    { opacity: 0; }
  100%  { opacity: 1; }
`;var Tt=I.css`
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: var(--lines, 1);
`,Rt=I.css`
  display: inline-block;
  max-width: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: inherit;
`;var n=require("@emotion/react");var p=n.css`
  --color: ${b.TEXT_PRIMARY};
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
`,x=n.css`
  ${p};

  --font-weight: 700;
  --letter-spacing: -0.01em;

  margin: 0;
`,zt=n.css`
  ${x};

  --font-size: 18px;
  --line-height: calc(24 / 18);
`,Nt=n.css`
  ${x};

  --font-size: 16px;
  --line-height: calc(24 / 16);
`,_t=n.css`
  ${x};

  --font-size: 14px;
  --line-height: calc(16 / 14);
`,ot=n.css`
  ${x};

  --font-size: 13px;
  --line-height: calc(16 / 13);
`,It=n.css`
  ${ot};

  --font-weight: 600;
`,St=n.css`
  ${p};

  --font-size: 13px;
  --font-weight: 500;
  --line-height: calc(16 / 13);
`,Dt=n.css`
  ${p};

  --font-size: 14px;
  --font-weight: 600;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);

  text-decoration: none;
`,$t=n.css`
  ${p};

  --font-size: 14px;
  --font-weight: 700;
  --letter-spacing: -0.01em;
  --line-height: calc(16 / 14);
`,Lt=n.css`
  ${p};

  --font-size: 14px;
  --line-height: calc(16 / 14);
  --font-weight: 600;
`;var w=s.css`
  --background-color: #020511;

  --arrow-bottom: auto;
  --arrow-left: auto;
  --arrow-right: auto;
  --arrow-size: 16px;
  --arrow-top: auto;
  --arrow-translate-x: 0;
  --arrow-translate-y: 0;

  animation: ${_} 0.2s 0.1s both;
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
`,u=s.css`
  ${p};

  --color: ${b.WHITE};
  --font-size: 12px;
  --font-weight: 600;
  --line-height: calc(16 / 12);

  background-color: var(--background-color);
  border-radius: 6px;
  color: ${b.WHITE};
  isolation: isolate;
  max-width: var(--size);
  padding: 10px;

  &:not([data-content]) {
    display: inline-flex;
  }
`,y=s.css`
  background-color: var(--background-color);
  border-radius: 2px;
  inset: var(--arrow-top) var(--arrow-right) var(--arrow-bottom) var(--arrow-left);
  height: var(--arrow-size);
  position: absolute;
  transform: translate(var(--arrow-translate-x), var(--arrow-translate-y)) rotate(45deg);
  width: var(--arrow-size);
`,A=s.css``,T=s.css`
  align-items: center;
  display: inline-flex;
  gap: 4px;
  margin: -4px;

  [data-label] + & {
    margin-left: 10px;
  }
`,R=s.css`
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
`,v=s.css`
  --separator-size: 8px;

  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 8 8'%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M4 1v6'/%3E%3Cpath stroke='%23fff' stroke-linecap='round' stroke-width='1.5' d='M7 4H1'/%3E%3C/svg%3E");
  display: inline-block;
  height: var(--separator-size);
  width: var(--separator-size);
`;var U="t00lt1p",rt=.4,at=.1,nt="+",it="super",st=navigator.platform.includes("Mac")?"\u2318":"Ctrl",G=mt=>{var D=mt,{children:t,content:e,delayEnter:o=rt,delayLeave:a=at,disabled:l,label:S,placement:B,shortcut:C="",size:X="192px"}=D,H=K(D,["children","content","delayEnter","delayLeave","disabled","label","placement","shortcut","size"]);let V=(0,r.useMemo)(()=>C.split(nt).map((h,m)=>r.default.createElement(gt,{key:`key-${m}`},h.replace(it,st))).reduce((h,m,W)=>h.length===0?[m]:[...h,r.default.createElement(dt,{key:`separator-${W}`}),m],[]),[C]);return l?r.default.createElement(r.default.Fragment,null,t):r.default.createElement(r.default.Fragment,null,r.default.createElement(k.Global,{styles:lt}),r.default.createElement(P.default,d({arrowContent:r.default.createElement(ct,null),mouseEnterDelay:o,mouseLeaveDelay:a,overlay:r.default.createElement(pt,{"data-content":e||null,style:{["--size"]:X}},e||r.default.createElement(r.default.Fragment,null,S&&r.default.createElement(ft,{"data-label":!0},S),C&&r.default.createElement(bt,null,V))),placement:B,prefixCls:U},H),t))},lt=k.css`
  .${U} {
    ${w};
  }
`,pt=c.default.div`
  ${u};
`,ct=c.default.div`
  ${y};
`,ft=c.default.span`
  ${A};
`,bt=c.default.span`
  ${T};
`,gt=c.default.kbd`
  ${R};
`,dt=c.default.span`
  ${v};
`;module.exports=Z(ht);0&&(module.exports={Tooltip,arrow,global,key,label,separator,shortcut,tooltip});
//# sourceMappingURL=index.js.map